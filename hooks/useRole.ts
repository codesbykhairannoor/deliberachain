"use client";

import { useActiveAccount } from "thirdweb/react";
import { getUserEmail } from "thirdweb/wallets/in-app";
import { getAuthByEmail, getAuthByWallet, UserRole } from "@/lib/access";
import { thirdwebClient } from "@/lib/thirdwebClient";
import { useEffect, useState } from "react";

export function useRole() {
  const account = useActiveAccount();
  const [role, setRole] = useState<UserRole>("CITIZEN");
  const [jurisdiction, setJurisdiction] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!account) {
      setRole("CITIZEN");
      setJurisdiction(undefined);
      setIsLoading(false);
      return;
    }

    async function resolveRole() {
      setIsLoading(true);

      // 1. Check wallet address first
      let auth = getAuthByWallet(account!.address);

      // 2. If wallet is a regular citizen, try to detect email (for social/in-app wallets)
      if (auth.role === "CITIZEN") {
        try {
          // This is the correct Thirdweb v5 API to get email from in-app/social wallets
          const email = await getUserEmail({ client: thirdwebClient });
          if (email) {
            auth = getAuthByEmail(email);
          }
        } catch {
          // Wallet is not an in-app wallet (e.g. MetaMask), no email available — remain CITIZEN
        }
      }

      setRole(auth.role);
      setJurisdiction(auth.jurisdiction);
      setIsLoading(false);
    }

    resolveRole();
  }, [account]);

  return { role, jurisdiction, isLoading, address: account?.address };
}
