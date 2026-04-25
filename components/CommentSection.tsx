"use client";

import { useState } from "react";
import { MessageSquare, Send, ShieldAlert, User, Loader2 } from "lucide-react";
import { moderateCommentAction } from "@/app/actions/moderation";
import { motion, AnimatePresence } from "framer-motion";

interface Comment {
    id: number;
    user: string;
    text: string;
    timestamp: string;
    isModerated?: boolean;
}

export default function CommentSection({ aspirationId }: { aspirationId: string }) {
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState("");
    const [isPosting, setIsPosting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // PERSISTENCE (Temporary fallback without DB)
    useState(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem(`comments-${aspirationId}`);
            if (saved) {
                try {
                    setComments(JSON.parse(saved));
                } catch (e) {
                    console.error("Failed to load comments");
                }
            }
        }
    });

    const handlePost = async () => {
        if (!newComment.trim()) return;
        
        setIsPosting(true);
        setError(null);
        
        try {
            const moderation = await moderateCommentAction(newComment);
            
            if (!moderation.isSafe) {
                setError(`Ditolak AI: ${moderation.reason}`);
                setIsPosting(false);
                return;
            }

            const comment: Comment = {
                id: Date.now(),
                user: "Anda",
                text: newComment,
                timestamp: "Baru saja"
            };
            
            const updatedComments = [...comments, comment];
            setComments(updatedComments);
            localStorage.setItem(`comments-${aspirationId}`, JSON.stringify(updatedComments));
            setNewComment("");
        } catch (e) {
            setError("Gagal memproses komentar.");
        } finally {
            setIsPosting(false);
        }
    };

    return (
        <div className="mt-12 border-t border-border pt-10">
            <h4 className="text-xs font-black text-muted-foreground mb-8 flex items-center gap-3 uppercase tracking-[0.2em]">
                <MessageSquare size={16} className="text-vault-amber" /> 
                Discussion Hub ({comments.length})
            </h4>

            <div className="space-y-8 mb-10">
                {comments.map((c) => (
                    <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        key={c.id} 
                        className="flex gap-5 group"
                    >
                        <div className="w-10 h-10 rounded-2xl bg-muted border border-border flex items-center justify-center shrink-0 shadow-inner">
                            <User size={18} className="text-muted-foreground" />
                        </div>
                        <div className="space-y-2 flex-1">
                            <div className="flex items-center gap-3">
                                <span className="text-sm font-black text-foreground">{c.user}</span>
                                <span className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">{c.timestamp}</span>
                            </div>
                            <p className="text-sm text-foreground/80 leading-relaxed bg-muted/50 px-5 py-4 rounded-3xl rounded-tl-none border border-border shadow-sm">
                                {c.text}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="relative">
                <textarea 
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Tulis opini deliberasi Anda..."
                    className="w-full bg-muted border border-border rounded-[2rem] p-6 text-sm text-foreground focus:ring-2 focus:ring-vault-amber/30 outline-none min-h-[120px] transition-all shadow-inner placeholder:text-muted-foreground/40"
                />
                
                <AnimatePresence>
                    {error && (
                        <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4 flex items-center gap-3 text-red-500 text-xs font-bold bg-red-500/10 p-4 rounded-2xl border border-red-500/20"
                        >
                            <ShieldAlert size={16} className="shrink-0" /> {error}
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="mt-6 flex justify-end">
                    <button 
                        onClick={handlePost}
                        disabled={isPosting || !newComment}
                        className="bg-vault-amber hover:bg-yellow-500 text-black px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 transition-all disabled:opacity-30 active:scale-95 shadow-lg shadow-vault-amber/10"
                    >
                        {isPosting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />} 
                        Kirim Opini
                    </button>
                </div>
            </div>
        </div>
    );
}
