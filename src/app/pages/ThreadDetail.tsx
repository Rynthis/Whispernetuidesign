import { useParams, Link } from "react-router";
import { ScrollArea } from "../components/ui/scroll-area";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Textarea } from "../components/ui/textarea";
import { motion } from "motion/react";
import { Heart, MessageCircle, Share2, ArrowLeft, MoreHorizontal, Send } from "lucide-react";

const mockThread = {
  id: "1",
  author: "Anon#3847",
  authorColor: "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)",
  timestamp: "2 hours ago",
  content:
    "Sometimes I wonder if we're living in the most interesting timeline. The convergence of AI, quantum computing, and human creativity feels like we're on the edge of something profound. What do you think the next decade will bring?",
  replies: 42,
  likes: 187,
  category: "Philosophy",
};

const mockReplies = [
  {
    id: "r1",
    author: "Anon#8821",
    authorColor: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",
    timestamp: "1 hour ago",
    content: "I think we'll see a massive shift in how we interact with information. The boundaries between human and machine creativity are already blurring.",
    likes: 45,
  },
  {
    id: "r2",
    author: "Anon#4567",
    authorColor: "linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)",
    timestamp: "45 minutes ago",
    content: "Honestly, I'm both excited and terrified. The potential is incredible, but we need to think carefully about the implications.",
    likes: 32,
  },
  {
    id: "r3",
    author: "Anon#9012",
    authorColor: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
    timestamp: "30 minutes ago",
    content: "The next decade will be defined by how we choose to use these tools. Technology is neutral; it's our values that shape the outcome.",
    likes: 67,
  },
  {
    id: "r4",
    author: "Anon#2341",
    authorColor: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
    timestamp: "15 minutes ago",
    content: "I keep thinking about how different my grandparents' world was from mine. My grandchildren will probably feel the same way about us.",
    likes: 28,
  },
];

export function ThreadDetail() {
  const { id } = useParams();

  return (
    <ScrollArea className="h-full">
      <div className="px-4 py-4 md:px-6 md:py-6">
        {/* Back Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Link to="/">
            <Button variant="ghost" className="gap-2 rounded-xl hover:bg-purple-50/50">
              <ArrowLeft className="h-4 w-4" />
              Back to Feed
            </Button>
          </Link>
        </motion.div>

        {/* Main Thread */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 rounded-2xl p-6"
          style={{
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 248, 255, 0.9) 100%)",
            border: "1px solid rgba(167, 139, 250, 0.25)",
            boxShadow: "0 4px 24px rgba(167, 139, 250, 0.12)",
          }}
        >
          {/* Header */}
          <div className="mb-4 flex items-start justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 ring-2 ring-white/50 shadow-sm">
                <AvatarFallback
                  className="font-medium"
                  style={{
                    background: mockThread.authorColor,
                    color: "white",
                  }}
                >
                  {mockThread.author.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-lg">{mockThread.author}</span>
                  {mockThread.category && (
                    <span
                      className="rounded-full px-3 py-1 text-xs font-medium"
                      style={{
                        background: "rgba(167, 139, 250, 0.15)",
                        color: "#7c3aed",
                      }}
                    >
                      {mockThread.category}
                    </span>
                  )}
                </div>
                <span className="text-sm text-muted-foreground">{mockThread.timestamp}</span>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent/50">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </div>

          {/* Content */}
          <p className="mb-6 text-lg leading-relaxed">{mockThread.content}</p>

          {/* Actions */}
          <div className="flex items-center gap-2 border-t pt-4" style={{ borderColor: "rgba(167, 139, 250, 0.15)" }}>
            <Button variant="ghost" className="gap-2 rounded-full hover:bg-pink-50 hover:text-pink-600">
              <Heart className="h-5 w-5" />
              <span>{mockThread.likes}</span>
            </Button>
            <Button variant="ghost" className="gap-2 rounded-full hover:bg-blue-50 hover:text-blue-600">
              <MessageCircle className="h-5 w-5" />
              <span>{mockThread.replies}</span>
            </Button>
            <Button variant="ghost" className="gap-2 rounded-full hover:bg-green-50 hover:text-green-600">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>

        {/* Reply Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 rounded-2xl p-4"
          style={{
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(250, 248, 255, 0.85) 100%)",
            border: "1px solid rgba(167, 139, 250, 0.2)",
          }}
        >
          <div className="flex gap-3">
            <Avatar className="h-10 w-10 ring-2 ring-white/50">
              <AvatarFallback
                style={{
                  background: "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)",
                  color: "white",
                }}
              >
                AN
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Textarea
                placeholder="Share your thoughts..."
                className="min-h-[80px] resize-none rounded-xl border-purple-200/50 focus:border-purple-400"
                style={{ background: "rgba(255, 255, 255, 0.8)" }}
              />
              <div className="mt-3 flex justify-end">
                <Button
                  className="gap-2 rounded-xl text-white"
                  style={{
                    background: "linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)",
                  }}
                >
                  <Send className="h-4 w-4" />
                  Reply
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Replies */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-muted-foreground">
            Replies ({mockReplies.length})
          </h3>
          {mockReplies.map((reply, index) => (
            <motion.div
              key={reply.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              className="rounded-xl p-4"
              style={{
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(250, 248, 255, 0.8) 100%)",
                border: "1px solid rgba(167, 139, 250, 0.15)",
              }}
            >
              <div className="mb-3 flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback
                    className="text-xs font-medium"
                    style={{
                      background: reply.authorColor,
                      color: "white",
                    }}
                  >
                    {reply.author.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <span className="font-medium text-sm">{reply.author}</span>
                  <span className="mx-2 text-muted-foreground">·</span>
                  <span className="text-sm text-muted-foreground">{reply.timestamp}</span>
                </div>
              </div>
              <p className="mb-3 leading-relaxed text-[15px]">{reply.content}</p>
              <Button variant="ghost" size="sm" className="gap-1.5 rounded-full text-muted-foreground hover:text-pink-600">
                <Heart className="h-4 w-4" />
                <span className="text-sm">{reply.likes}</span>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}
