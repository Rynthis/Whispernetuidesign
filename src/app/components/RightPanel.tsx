import { motion } from "motion/react";
import { TrendingUp, Users, Flame, Sparkles } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";

interface TrendingItem {
  category: string;
  title: string;
  threads: number;
  trend: "up" | "hot";
}

const trendingTopics: TrendingItem[] = [
  { category: "Technology", title: "New AI Developments", threads: 234, trend: "up" },
  { category: "Art", title: "Digital Renaissance", threads: 189, trend: "hot" },
  { category: "Music", title: "Ambient Experiments", threads: 156, trend: "up" },
  { category: "Philosophy", title: "The Nature of Consciousness", threads: 142, trend: "hot" },
];

const activeUsers = [
  { name: "Anon#3847", color: "#ec4899", status: "Creating art..." },
  { name: "Anon#9201", color: "#8b5cf6", status: "Listening to music" },
  { name: "Anon#5632", color: "#06b6d4", status: "Deep in thought" },
  { name: "Anon#7128", color: "#f59e0b", status: "Exploring ideas" },
  { name: "Anon#4509", color: "#10b981", status: "Writing poetry" },
];

export function RightPanel() {
  return (
    <div
      className="flex h-full w-80 flex-col border-l p-4"
      style={{
        background:
          "linear-gradient(180deg, rgba(250, 248, 255, 0.95) 0%, rgba(255, 252, 251, 0.9) 100%)",
        borderColor: "rgba(167, 139, 250, 0.15)",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Trending Topics */}
      <div className="mb-6">
        <div className="mb-3 flex items-center gap-2 px-2">
          <TrendingUp className="h-4 w-4 text-purple-500" />
          <h2 className="font-semibold text-[15px]">Trending Now</h2>
        </div>
        <div className="space-y-2">
          {trendingTopics.map((topic, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ x: -4 }}
              className="cursor-pointer rounded-xl p-3 transition-all"
              style={{
                background: "rgba(255, 255, 255, 0.6)",
                border: "1px solid rgba(167, 139, 250, 0.15)",
              }}
            >
              <div className="mb-1 flex items-center justify-between">
                <span className="text-xs font-medium text-purple-600">
                  {topic.category}
                </span>
                {topic.trend === "hot" ? (
                  <Flame className="h-3.5 w-3.5 text-orange-500" />
                ) : (
                  <TrendingUp className="h-3.5 w-3.5 text-green-500" />
                )}
              </div>
              <p className="mb-1 font-medium text-sm leading-snug">{topic.title}</p>
              <p className="text-xs text-muted-foreground">{topic.threads} threads</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mb-6 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />

      {/* Active Users */}
      <div>
        <div className="mb-3 flex items-center gap-2 px-2">
          <Users className="h-4 w-4 text-purple-500" />
          <h2 className="font-semibold text-[15px]">Active Now</h2>
          <span className="ml-auto text-xs text-muted-foreground">
            {activeUsers.length} online
          </span>
        </div>
        <div className="space-y-2">
          {activeUsers.map((user, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.05 }}
              whileHover={{ x: -4 }}
              className="flex cursor-pointer items-center gap-3 rounded-xl p-2 transition-all hover:bg-accent/30"
            >
              <div className="relative">
                <Avatar className="h-9 w-9 ring-2 ring-white/50">
                  <AvatarFallback
                    style={{
                      background: user.color,
                      color: "white",
                    }}
                  >
                    {user.name.slice(5, 7)}
                  </AvatarFallback>
                </Avatar>
                <div
                  className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white"
                  style={{ background: "#10b981" }}
                />
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="truncate font-medium text-sm">{user.name}</p>
                <p className="truncate text-xs text-muted-foreground">{user.status}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating sparkle decoration */}
      <motion.div
        className="mt-auto flex items-center justify-center py-6"
        animate={{
          y: [0, -8, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="h-6 w-6 text-purple-300" />
      </motion.div>
    </div>
  );
}
