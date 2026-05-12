import { ScrollArea } from "../components/ui/scroll-area";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { motion } from "motion/react";
import { Search, TrendingUp, Hash, Users } from "lucide-react";

const trendingTopics = [
  { name: "AI Art", posts: 2345, trend: "+12%" },
  { name: "Late Night Thoughts", posts: 1892, trend: "+8%" },
  { name: "Tech Philosophy", posts: 1567, trend: "+15%" },
  { name: "Creative Flow", posts: 1234, trend: "+5%" },
  { name: "Digital Wellness", posts: 987, trend: "+22%" },
];

const popularChannels = [
  { name: "general", members: 12500, description: "A space for everything" },
  { name: "art", members: 8340, description: "Share your creative work" },
  { name: "music", members: 6780, description: "Discover and discuss sounds" },
  { name: "technology", members: 9120, description: "Tech talk and innovation" },
  { name: "philosophy", members: 4560, description: "Deep thoughts and debates" },
];

const suggestedUsers = [
  { id: "anon#1234", color: "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)", threads: 156 },
  { id: "anon#5678", color: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)", threads: 234 },
  { id: "anon#9012", color: "linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)", threads: 189 },
  { id: "anon#3456", color: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)", threads: 312 },
];

export function Explore() {
  return (
    <ScrollArea className="h-full">
      <div className="px-4 py-4 md:px-6 md:py-6">
        {/* Search Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="mb-4 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-2xl font-bold text-transparent">
            Explore
          </h1>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search threads, channels, or users..."
              className="h-12 rounded-xl pl-12"
              style={{
                background: "rgba(255, 255, 255, 0.8)",
                border: "1px solid rgba(167, 139, 250, 0.2)",
                backdropFilter: "blur(12px)",
              }}
            />
          </div>
        </motion.div>

        {/* Trending Topics */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-purple-500" />
            <h2 className="text-lg font-semibold">Trending Topics</h2>
          </div>
          <div
            className="rounded-2xl p-4"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(250, 248, 255, 0.85) 100%)",
              border: "1px solid rgba(167, 139, 250, 0.2)",
            }}
          >
            <div className="space-y-3">
              {trendingTopics.map((topic, index) => (
                <motion.div
                  key={topic.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between rounded-xl p-3 transition-colors hover:bg-purple-50/50 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-sm font-bold text-purple-600">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-medium">{topic.name}</p>
                      <p className="text-sm text-muted-foreground">{topic.posts.toLocaleString()} posts</p>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-700"
                  >
                    {topic.trend}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Popular Channels */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="mb-4 flex items-center gap-2">
            <Hash className="h-5 w-5 text-purple-500" />
            <h2 className="text-lg font-semibold">Popular Channels</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {popularChannels.map((channel, index) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                className="rounded-xl p-4 transition-all hover:shadow-md cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(250, 248, 255, 0.85) 100%)",
                  border: "1px solid rgba(167, 139, 250, 0.2)",
                }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-purple-700">#{channel.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{channel.description}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-1 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{channel.members.toLocaleString()} members</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Suggested Users */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="mb-4 flex items-center gap-2">
            <Users className="h-5 w-5 text-purple-500" />
            <h2 className="text-lg font-semibold">Suggested Voices</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {suggestedUsers.map((user, index) => (
              <motion.div
                key={user.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="flex items-center gap-3 rounded-xl px-4 py-3 transition-all hover:shadow-md cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(250, 248, 255, 0.85) 100%)",
                  border: "1px solid rgba(167, 139, 250, 0.2)",
                }}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium text-white"
                  style={{ background: user.color }}
                >
                  {user.id.slice(5, 7)}
                </div>
                <div>
                  <p className="font-medium">{user.id}</p>
                  <p className="text-sm text-muted-foreground">{user.threads} threads</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </ScrollArea>
  );
}
