"use client";

import { useState } from "react";
import { MessageSquare, Send, ShieldAlert, User, Loader2 } from "lucide-react";
import { moderateCommentAction } from "@/app/actions/moderation";

interface Comment {
    id: number;
    user: string;
    text: string;
    timestamp: string;
    isModerated?: boolean;
}

export default function CommentSection({ aspirationId }: { aspirationId: string }) {
    const [comments, setComments] = useState<Comment[]>([
        { id: 1, user: "Citizen_A", text: "Sangat setuju, perbaikan jalan di area ini memang mendesak.", timestamp: "2h ago" },
    ]);
    const [newComment, setNewComment] = useState("");
    const [isPosting, setIsPosting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handlePost = async () => {
        if (!newComment.trim()) return;
        
        setIsPosting(true);
        setError(null);
        
        try {
            // AI MODERATION
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
                timestamp: "Just now"
            };
            
            setComments([...comments, comment]);
            setNewComment("");
        } catch (e) {
            setError("Gagal memproses komentar.");
        } finally {
            setIsPosting(false);
        }
    };

    return (
        <div className="mt-8 border-t border-white/5 pt-8">
            <h4 className="text-sm font-bold text-white mb-6 flex items-center gap-2">
                <MessageSquare size={16} className="text-vault-amber" /> 
                Diskusi Deliberasi ({comments.length})
            </h4>

            <div className="space-y-6 mb-8">
                {comments.map((c) => (
                    <div key={c.id} className="flex gap-4 group">
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                            <User size={14} className="text-slate-500" />
                        </div>
                        <div className="space-y-1">
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-bold text-white">{c.user}</span>
                                <span className="text-[10px] text-slate-600 uppercase font-mono">{c.timestamp}</span>
                            </div>
                            <p className="text-sm text-slate-400 leading-relaxed bg-white/5 px-4 py-3 rounded-2xl rounded-tl-none border border-white/5">
                                {c.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="relative">
                <textarea 
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Tulis opini deliberasi Anda..."
                    className="w-full bg-black/60 border border-white/10 rounded-2xl p-4 text-sm text-white focus:ring-1 focus:ring-vault-amber outline-none min-h-[100px] transition-all"
                />
                
                {error && (
                    <div className="mt-2 flex items-center gap-2 text-red-500 text-xs bg-red-950/20 p-2 rounded-lg border border-red-900/30">
                        <ShieldAlert size={14} /> {error}
                    </div>
                )}

                <div className="mt-4 flex justify-end">
                    <button 
                        onClick={handlePost}
                        disabled={isPosting || !newComment}
                        className="bg-vault-amber hover:bg-yellow-400 text-black px-6 py-2 rounded-xl font-bold text-sm flex items-center gap-2 transition-all disabled:opacity-30"
                    >
                        {isPosting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />} 
                        Kirim Opini
                    </button>
                </div>
            </div>
        </div>
    );
}
