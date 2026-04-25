"use client";

import { Share2, Twitter, MessageCircle } from "lucide-react";

interface ShareButtonProps {
    title: string;
    url: string;
}

export default function ShareButton({ title, url }: ShareButtonProps) {
    const shareData = {
        title: "DeliberateChain Aspiration",
        text: `Lihat aspirasi: "${title}" di DeliberateChain - Transparansi Blockchain + AI`,
        url: url
    };

    const handleWebShare = async () => {
        try {
            await navigator.share(shareData);
        } catch (err) {
            // Fallback: Open Twitter
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text)}&url=${encodeURIComponent(url)}`, "_blank");
        }
    };

    const handleWhatsApp = () => {
        window.open(`https://wa.me/?text=${encodeURIComponent(shareData.text + " " + url)}`, "_blank");
    };

    return (
        <div className="flex gap-2">
            <button 
                onClick={handleWebShare}
                className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-vault-amber/10 hover:border-vault-amber/30 text-muted-foreground hover:text-vault-amber transition-all group"
                title="Share to Twitter/X"
            >
                <Twitter size={18} />
            </button>
            <button 
                onClick={handleWhatsApp}
                className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-green-500/10 hover:border-green-500/30 text-muted-foreground hover:text-green-500 transition-all"
                title="Share to WhatsApp"
            >
                <MessageCircle size={18} />
            </button>
        </div>
    );
}
