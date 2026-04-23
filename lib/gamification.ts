export interface CivicRank {
  name: string;
  minScore: number;
  color: string;
  icon: string;
}

export const CIVIC_RANKS: CivicRank[] = [
  { name: "Pioneer", minScore: 0, color: "slate-400", icon: "🌱" },
  { name: "Digital Patriot", minScore: 50, color: "blue-400", icon: "🇮🇩" },
  { name: "Deliberator", minScore: 150, color: "vault-amber", icon: "🏛️" },
  { name: "Democracy Keeper", minScore: 500, color: "purple-400", icon: "👑" },
];

export function calculateCivicScore(aspirationCount: number, voteCount: number, commentCount: number): number {
  // Simple algorithm: 10 per aspiration, 2 per vote, 5 per comment
  return (aspirationCount * 10) + (voteCount * 2) + (commentCount * 5);
}

export function getRank(score: number): CivicRank {
  return [...CIVIC_RANKS].reverse().find(r => score >= r.minScore) || CIVIC_RANKS[0];
}
