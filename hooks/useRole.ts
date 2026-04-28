"use client";

import { useActiveAccount } from "thirdweb/react";
import { getAuthByEmail, getAuthByWallet, UserRole } from "@/lib/access";
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

    let auth = getAuthByWallet(account.address);

    // More robust email detection for Thirdweb In-App/Social wallets
    // @ts-ignore
    const email = account.details?.email || account.email;
    
    if (auth.role === "CITIZEN" && email) {
        auth = getAuthByEmail(email);
    }

    setRole(auth.role);
    setJurisdiction(auth.jurisdiction);
    setIsLoading(false);
  }, [account]);

  return { role, jurisdiction, isLoading, address: account?.address };
}
