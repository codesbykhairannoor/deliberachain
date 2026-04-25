export type UserRole = "ADMIN" | "GOVERNMENT" | "CITIZEN";

export const PUBLIC_ARCHIVE_ADDRESS = "0x801F15748D3a6dFc5A8D3a7Bc36821Cdb51d59bC"; // Centralizing the mock global feed

export interface UserAuth {
  role: UserRole;
  jurisdiction?: string;
}

export const ADMIN_EMAILS = [
  "admin@deliberatechain.com",
  "founder@gmail.com",
];

export const GOV_EMAILS: Record<string, string> = {
  "gov@deliberatechain.id": "GLOBAL",
  "dinas_kesehatan@gmail.com": "KESEHATAN-KOTA",
  "admin@unpad.ac.id": "UNPAD",
  "gov@jakarta.go.id": "JAKARTA",
  "khairking6@gmail.com": "UNIVERSITAS-KHAIRAN",
};

export const ADMIN_WALLETS = [
  "0x801F15748D3a6dFc5A8D3a7Bc36821Cdb51d59bC", 
];

export const GOV_WALLETS: Record<string, string> = {
  // Mapping wallet address -> Jurisdiction Tag
  "0x1234...": "BANDUNG",
};

export function getAuthByEmail(email?: string | null): UserAuth {
  if (!email) return { role: "CITIZEN" };
  if (ADMIN_EMAILS.includes(email)) return { role: "ADMIN", jurisdiction: "GLOBAL" };
  
  const jurisdiction = GOV_EMAILS[email];
  if (jurisdiction) return { role: "GOVERNMENT", jurisdiction };
  
  return { role: "CITIZEN" };
}

export function getAuthByWallet(address?: string | null): UserAuth {
  if (!address) return { role: "CITIZEN" };
  if (ADMIN_WALLETS.includes(address)) return { role: "ADMIN", jurisdiction: "GLOBAL" };
  
  const jurisdiction = GOV_WALLETS[address];
  if (jurisdiction) return { role: "GOVERNMENT", jurisdiction };
  
  return { role: "CITIZEN" };
}
