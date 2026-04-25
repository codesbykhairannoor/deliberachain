export interface Bulletin {
  id: string;
  title: string;
  content: string;
  author: string;
  jurisdiction: string;
  timestamp: number;
  category: "KEBIJAKAN" | "UPDATE" | "PENGUMUMAN" | "HOT-TOPIC";
}

// Mock initial data
export const initialBulletins: Bulletin[] = [];

// Simple in-memory storage for the session (since we don't have a DB yet)
let bulletins: Bulletin[] = [...initialBulletins];

export function getBulletins() {
  return bulletins;
}

export function addBulletin(bulletin: Omit<Bulletin, "id" | "timestamp">) {
  const newBulletin: Bulletin = {
    ...bulletin,
    id: Math.random().toString(36).substr(2, 9),
    timestamp: Date.now()
  };
  bulletins = [newBulletin, ...bulletins];
  return newBulletin;
}
