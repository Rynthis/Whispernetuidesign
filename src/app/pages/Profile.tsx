import { useParams } from "react-router";
import { ScrollArea } from "../components/ui/scroll-area";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { ThreadCard } from "../components/ThreadCard";
import { motion } from "motion/react";
import { Calendar, MessageSquare, Heart, Settings, Edit2 } from "lucide-react";

const mockUser = {
  id: "Anon#7384",
  color: "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)",
  bio: "Exploring the intersection of technology, art, and human connection. Here to share thoughts without filters.",
  joinedDate: "March 2024",
  stats: {
    threads: 47,
    replies: 312,
    likes: 2847,
  },
};

const mockUserThreads = [
  {
    id: "u1",
    author: "Anon#7384",
    authorColor: "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)",
    timestamp: "1 day ago",
    content: "The beauty of anonymity is that ideas can be evaluated on their merit alone, free from the biases of identity.",
    replies: 23,
    likes: 156,
    category: "Philosophy",
  },
  {
    id: "u2",
    author: "Anon#7384",
    authorColor: "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)",
    timestamp: "3 days ago",
    content: "Just discovered the most amazing ambient playlist. Music has this incredible power to transform our mental state in seconds.",
    replies: 45,
    likes: 234,
    category: "Music",
  },
];

const mockLikedThreads = [
  {
    id: "l1",
    author: "Anon#9201",
    authorColor: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",
    timestamp: "2 days ago",
    content: "The future of social media might be in ephemeral, authentic moments rather than curated permanent feeds.",
    replies: 67,
    likes: 445,
    category: "Technology",
  },
];

export function Profile() {
  const { id } = useParams();
  const isOwnProfile = !id || id === "7384";

  return (
    <ScrollArea className="h-full">
      <div className="px-4 py-4 md:px-6 md:py-6">
        {/* Profile Header */}
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
          <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
            {/* Avatar */}
            <Avatar className="h-24 w-24 ring-4 ring-white shadow-lg">
              <AvatarFallback
                className="text-2xl font-bold"
                style={{
                  background: mockUser.color,
                  color: "white",
                }}
              >
                AN
              </AvatarFallback>
            </Avatar>

            <div className="mt-4 flex-1 sm:ml-6 sm:mt-0">
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
                <div>
                  <h1 className="text-2xl font-bold">{mockUser.id}</h1>
                  <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Joined {mockUser.joinedDate}</span>
                  </div>
                </div>
                {isOwnProfile && (
                  <Button
                    variant="outline"
                    className="gap-2 rounded-xl"
                    style={{ borderColor: "rgba(167, 139, 250, 0.3)" }}
                  >
                    <Edit2 className="h-4 w-4" />
                    Edit Profile
                  </Button>
                )}
              </div>

              <p className="mt-4 leading-relaxed text-muted-foreground">{mockUser.bio}</p>

              {/* Stats */}
              <div className="mt-6 flex justify-center gap-8 sm:justify-start">
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-600">{mockUser.stats.threads}</p>
                  <p className="text-sm text-muted-foreground">Threads</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-600">{mockUser.stats.replies}</p>
                  <p className="text-sm text-muted-foreground">Replies</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-600">{mockUser.stats.likes.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Likes</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Tabs defaultValue="threads" className="w-full">
            <TabsList
              className="mb-6 w-full justify-start rounded-xl p-1"
              style={{
                background: "rgba(255, 255, 255, 0.7)",
                border: "1px solid rgba(167, 139, 250, 0.2)",
                backdropFilter: "blur(12px)",
              }}
            >
              <TabsTrigger
                value="threads"
                className="gap-2 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/15 data-[state=active]:to-purple-400/10 data-[state=active]:text-purple-700"
              >
                <MessageSquare className="h-4 w-4" />
                Threads
              </TabsTrigger>
              <TabsTrigger
                value="likes"
                className="gap-2 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/15 data-[state=active]:to-purple-400/10 data-[state=active]:text-purple-700"
              >
                <Heart className="h-4 w-4" />
                Likes
              </TabsTrigger>
            </TabsList>

            <TabsContent value="threads" className="space-y-4">
              {mockUserThreads.map((thread, index) => (
                <motion.div
                  key={thread.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <ThreadCard {...thread} />
                </motion.div>
              ))}
            </TabsContent>

            <TabsContent value="likes" className="space-y-4">
              {mockLikedThreads.map((thread, index) => (
                <motion.div
                  key={thread.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <ThreadCard {...thread} />
                </motion.div>
              ))}
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </ScrollArea>
  );
}
