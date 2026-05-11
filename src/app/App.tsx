import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";
import { RightPanel } from "./components/RightPanel";
import { ThreadCard } from "./components/ThreadCard";
import { FloatingCreateButton } from "./components/FloatingCreateButton";
import { MobileHeader } from "./components/MobileNav";
import { ParticleBackground } from "./components/ParticleBackground";
import { CreateThreadModal } from "./components/CreateThreadModal";
import { CursorGlow } from "./components/CursorGlow";
import { ScrollArea } from "./components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "./components/ui/tabs";
import { motion } from "motion/react";

const mockThreads = [
  {
    id: "1",
    author: "Anon#3847",
    authorColor: "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)",
    timestamp: "2 hours ago",
    content:
      "Sometimes I wonder if we're living in the most interesting timeline. The convergence of AI, quantum computing, and human creativity feels like we're on the edge of something profound. What do you think the next decade will bring?",
    replies: 42,
    likes: 187,
    category: "Philosophy",
  },
  {
    id: "2",
    author: "Anon#9201",
    authorColor: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",
    timestamp: "4 hours ago",
    content:
      "Just finished my latest generative art piece using neural style transfer. The way machines interpret human aesthetics is genuinely beautiful. Art and technology are merging in ways I never imagined.",
    replies: 28,
    likes: 234,
    category: "Art",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  },
  {
    id: "3",
    author: "Anon#5632",
    authorColor: "linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)",
    timestamp: "6 hours ago",
    content:
      "Hot take: The best music is created in the liminal space between 2am and 5am when the world is quiet and your inhibitions are gone. There's something magical about late-night creative flow.",
    replies: 56,
    likes: 312,
    category: "Music",
  },
  {
    id: "4",
    author: "Anon#7128",
    authorColor: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
    timestamp: "8 hours ago",
    content:
      "The internet promised us connection, but gave us isolation. Social media promised us community, but gave us performance. Maybe it's time we reimagine what digital spaces can be—places for genuine human connection without the noise.",
    replies: 89,
    likes: 421,
    category: "Technology",
  },
  {
    id: "5",
    author: "Anon#4509",
    authorColor: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
    timestamp: "12 hours ago",
    content:
      "Spent the whole day exploring ambient soundscapes. There's something therapeutic about losing yourself in sound textures. If you haven't tried it, I highly recommend sitting in darkness with good headphones and just... listening.",
    replies: 34,
    likes: 156,
  },
  {
    id: "6",
    author: "Anon#2947",
    authorColor: "linear-gradient(135deg, #f43f5e 0%, #fb7185 100%)",
    timestamp: "16 hours ago",
    content:
      "The concept of 'anonymous but not alone' is what draws me here. We can be our truest selves without the weight of identity. It's liberating to share thoughts without social baggage.",
    replies: 67,
    likes: 289,
    category: "Community",
  },
];

export default function App() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Cursor Glow Effect */}
      <CursorGlow />

      {/* Ambient Particle Background */}
      <ParticleBackground />

      {/* Create Thread Modal */}
      <CreateThreadModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />

      {/* Left Sidebar - Desktop Only */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Mobile Header */}
        <MobileHeader />

        {/* Top Bar - Desktop Only */}
        <div className="hidden md:block">
          <TopBar onCreateClick={() => setIsCreateModalOpen(true)} />
        </div>

        {/* Feed Area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Center Feed */}
          <div className="flex-1 overflow-hidden">
            <ScrollArea className="h-full">
              <div className="px-4 py-4 md:px-6 md:py-6">
                {/* Filter Tabs */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6"
                >
                  <Tabs defaultValue="latest" className="w-full">
                    <TabsList
                      className="w-full justify-start rounded-xl p-1"
                      style={{
                        background: "rgba(255, 255, 255, 0.7)",
                        border: "1px solid rgba(167, 139, 250, 0.2)",
                        backdropFilter: "blur(12px)",
                      }}
                    >
                      <TabsTrigger
                        value="latest"
                        className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/15 data-[state=active]:to-purple-400/10 data-[state=active]:text-purple-700 data-[state=active]:shadow-sm"
                      >
                        Latest
                      </TabsTrigger>
                      <TabsTrigger
                        value="trending"
                        className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/15 data-[state=active]:to-purple-400/10 data-[state=active]:text-purple-700 data-[state=active]:shadow-sm"
                      >
                        Trending
                      </TabsTrigger>
                      <TabsTrigger
                        value="following"
                        className="rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/15 data-[state=active]:to-purple-400/10 data-[state=active]:text-purple-700 data-[state=active]:shadow-sm"
                      >
                        Following
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </motion.div>

                {/* Thread Feed */}
                <div className="space-y-4">
                  {mockThreads.map((thread, index) => (
                    <motion.div
                      key={thread.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <ThreadCard {...thread} />
                    </motion.div>
                  ))}
                </div>

                {/* Load More */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 flex justify-center"
                >
                  <button
                    className="rounded-xl px-6 py-3 font-medium transition-all hover:shadow-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(167, 139, 250, 0.1) 0%, rgba(196, 181, 253, 0.15) 100%)",
                      border: "1px solid rgba(167, 139, 250, 0.3)",
                      color: "#7c3aed",
                    }}
                  >
                    Load More Threads
                  </button>
                </motion.div>
              </div>
            </ScrollArea>
          </div>

          {/* Right Panel - Desktop Only */}
          <div className="hidden lg:block">
            <RightPanel />
          </div>
        </div>
      </div>

      {/* Floating Create Button */}
      <FloatingCreateButton onClick={() => setIsCreateModalOpen(true)} />
    </div>
  );
}