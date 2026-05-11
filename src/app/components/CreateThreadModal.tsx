import { motion, AnimatePresence } from "motion/react";
import { X, Image, Smile, Hash, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { useState } from "react";

interface CreateThreadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateThreadModal({ isOpen, onClose }: CreateThreadModalProps) {
  const [content, setContent] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { name: "General", color: "#8b5cf6" },
    { name: "Art", color: "#ec4899" },
    { name: "Music", color: "#06b6d4" },
    { name: "Technology", color: "#f59e0b" },
    { name: "Philosophy", color: "#10b981" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/30 backdrop-blur-md"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 248, 255, 0.9) 100%)",
                border: "1px solid rgba(167, 139, 250, 0.3)",
                boxShadow:
                  "0 20px 60px rgba(167, 139, 250, 0.3), 0 8px 16px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(20px)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glow effect */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(600px circle at 50% 0%, rgba(167, 139, 250, 0.15), transparent 40%)",
                }}
              />

              <div className="relative">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-purple-200/50 p-6">
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Sparkles className="h-6 w-6 text-purple-500" />
                    </motion.div>
                    <h2 className="text-xl font-semibold">Create New Thread</h2>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    className="h-9 w-9 rounded-xl hover:bg-accent/50"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* User Info */}
                  <div className="mb-4 flex items-center gap-3">
                    <Avatar className="h-12 w-12 ring-2 ring-white/50">
                      <AvatarFallback
                        style={{
                          background:
                            "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)",
                          color: "white",
                        }}
                      >
                        AN
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Anon#7384</p>
                      <p className="text-sm text-muted-foreground">
                        Posting anonymously
                      </p>
                    </div>
                  </div>

                  {/* Category Selection */}
                  <div className="mb-4">
                    <p className="mb-2 text-sm font-medium text-muted-foreground">
                      Select a category (optional)
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <motion.button
                          key={category.name}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedCategory(category.name)}
                          className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-all"
                          style={{
                            background:
                              selectedCategory === category.name
                                ? `${category.color}20`
                                : "rgba(167, 139, 250, 0.08)",
                            border: `1px solid ${
                              selectedCategory === category.name
                                ? category.color
                                : "rgba(167, 139, 250, 0.2)"
                            }`,
                            color:
                              selectedCategory === category.name
                                ? category.color
                                : "#2a2838",
                          }}
                        >
                          <Hash className="h-3 w-3" />
                          {category.name}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Text Area */}
                  <Textarea
                    placeholder="What's on your mind? Share your thoughts anonymously..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="mb-4 min-h-[160px] resize-none rounded-xl border-purple-200/50 bg-white/60 backdrop-blur-sm transition-all focus:bg-white focus:ring-2 focus:ring-purple-300/30"
                  />

                  {/* Toolbar */}
                  <div className="mb-4 flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2 rounded-xl hover:bg-accent/50"
                    >
                      <Image className="h-4 w-4" />
                      Image
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2 rounded-xl hover:bg-accent/50"
                    >
                      <Smile className="h-4 w-4" />
                      Emoji
                    </Button>
                  </div>

                  {/* Character Count */}
                  <div className="mb-4 text-right text-sm text-muted-foreground">
                    {content.length} / 1000
                  </div>

                  {/* Actions */}
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      onClick={onClose}
                      className="rounded-xl"
                    >
                      Cancel
                    </Button>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        disabled={!content.trim()}
                        className="gap-2 rounded-xl font-semibold shadow-lg transition-all"
                        style={{
                          background:
                            "linear-gradient(135deg, #a78bfa 0%, #c4b5fd 100%)",
                          color: "white",
                        }}
                      >
                        <Sparkles className="h-4 w-4" />
                        Post Thread
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
