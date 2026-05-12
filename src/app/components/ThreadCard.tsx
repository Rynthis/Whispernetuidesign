import { Link } from "react-router";
import { motion } from "motion/react";
import { Heart, MessageCircle, Share2, MoreHorizontal, Sparkles } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";

interface ThreadCardProps {
  id: string;
  author: string;
  authorColor: string;
  timestamp: string;
  content: string;
  replies: number;
  likes: number;
  category?: string;
  image?: string;
}

export function ThreadCard({
  id,
  author,
  authorColor,
  timestamp,
  content,
  replies,
  likes,
  category,
  image,
}: ThreadCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2, scale: 1.005 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl backdrop-blur-xl"
      style={{
        background:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(250, 248, 255, 0.85) 100%)",
        border: "1px solid rgba(167, 139, 250, 0.2)",
        boxShadow:
          "0 1px 3px rgba(167, 139, 250, 0.1), 0 8px 24px rgba(167, 139, 250, 0.08)",
      }}
    >
      {/* Hover glow effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(167, 139, 250, 0.15), transparent 40%)",
        }}
      />

      <div className="relative p-5">
        {/* Header */}
        <div className="mb-3 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 ring-2 ring-white/50 shadow-sm">
              <AvatarFallback
                className="font-medium"
                style={{
                  background: authorColor,
                  color: "white",
                }}
              >
                {author.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-[15px]">{author}</span>
                {category && (
                  <span
                    className="rounded-full px-2.5 py-0.5 text-xs font-medium backdrop-blur-sm"
                    style={{
                      background: "rgba(167, 139, 250, 0.15)",
                      color: "#7c3aed",
                    }}
                  >
                    {category}
                  </span>
                )}
              </div>
              <span className="text-sm text-muted-foreground">{timestamp}</span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full hover:bg-accent/50"
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <Link to={`/thread/${id}`} className="block">
          <p className="mb-4 leading-relaxed text-[15px] hover:text-purple-700 transition-colors cursor-pointer">{content}</p>
        </Link>

        {/* Image if present */}
        {image && (
          <div className="mb-4 overflow-hidden rounded-xl">
            <img
              src={image}
              alt="Thread attachment"
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 rounded-full hover:bg-accent/50 transition-all"
          >
            <Heart className="h-4 w-4" />
            <span className="text-sm">{likes}</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 rounded-full hover:bg-accent/50 transition-all"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="text-sm">{replies}</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 rounded-full hover:bg-accent/50 transition-all"
          >
            <Share2 className="h-4 w-4" />
          </Button>

          <div className="ml-auto">
            <motion.div
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.4 }}
            >
              <Sparkles className="h-4 w-4 text-purple-400" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Shimmer effect on hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.6) 50%, transparent 100%)",
          transform: "translateX(-100%)",
          animation: "shimmer 2s infinite",
        }}
      />
    </motion.div>
  );
}
