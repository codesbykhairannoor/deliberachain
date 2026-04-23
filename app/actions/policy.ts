"use server";

import { generatePolicyBrief } from "@/lib/ai";

export async function generatePolicyBriefAction(aspirations: any[]) {
    try {
        const brief = await generatePolicyBrief(aspirations);
        return { success: true, brief };
    } catch (error) {
        console.error(error);
        return { success: false, error: "Gagal menghasilkan policy brief." };
    }
}
