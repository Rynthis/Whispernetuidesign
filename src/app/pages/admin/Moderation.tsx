import { ScrollArea } from "../../components/ui/scroll-area";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { motion } from "motion/react";
import { Shield, Eye, Trash2, Check, MessageSquare, Hash, Clock } from "lucide-react";

const flaggedContent = [
  {
    id: "c1",
    type: "thread",
    author: "Anon#9821",
    authorColor: "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)",
    content: "This thread contains potentially sensitive content that was auto-flagged by our moderation system.",
    channel: "general",
    flags: ["auto-flagged", "sensitive"],
    time: "5 min ago",
  },
  {
    id: "c2",
    type: "reply",
    author: "Anon#4521",
    authorColor: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",
    content: "Reply flagged for containing external links that may be promotional.",
    channel: "technology",
    flags: ["links", "promotional"],
    time: "15 min ago",
  },
  {
    id: "c3",
    type: "thread",
    author: "Anon#7890",
    authorColor: "linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)",
    content: "Content flagged for potential spam patterns detected in posting behavior.",
    channel: "music",
    flags: ["spam-pattern"],
    time: "30 min ago",
  },
];

const moderationQueue = [
  {
    id: "q1",
    action: "Review new user",
    target: "Anon#1234",
    reason: "Unusual registration pattern",
    priority: "medium",
    time: "2 min ago",
  },
  {
    id: "q2",
    action: "Verify appeal",
    target: "Anon#5678",
    reason: "User appealing warning",
    priority: "low",
    time: "10 min ago",
  },
  {
    id: "q3",
    action: "Review ban",
    target: "Anon#9012",
    reason: "Ban expiring in 24 hours",
    priority: "high",
    time: "1 hour ago",
  },
];

const moderationRules = [
  { name: "Auto-flag external links", status: "active", triggers: 234 },
  { name: "Spam pattern detection", status: "active", triggers: 89 },
  { name: "Sensitive content filter", status: "active", triggers: 156 },
  { name: "Repetitive posting limit", status: "active", triggers: 45 },
  { name: "New user restrictions", status: "paused", triggers: 0 },
];

function ContentCard({ content }: { content: typeof flaggedContent[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl p-5"
      style={{
        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 248, 255, 0.9) 100%)",
        border: "1px solid rgba(167, 139, 250, 0.2)",
      }}
    >
      <div className="flex items-start gap-4">
        <Avatar className="h-10 w-10 ring-2 ring-white shadow-sm">
          <AvatarFallback
            className="font-medium text-sm"
            style={{ background: content.authorColor, color: "white" }}
          >
            {content.author.slice(5, 7)}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold">{content.author}</span>
            <Badge variant="secondary" className="bg-purple-100 text-purple-700 capitalize">
              {content.type}
            </Badge>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Hash className="h-3 w-3" />
              {content.channel}
            </span>
          </div>
          <p className="mt-2 text-sm">{content.content}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {content.flags.map((flag) => (
              <Badge key={flag} variant="outline" className="text-xs">
                {flag}
              </Badge>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {content.time}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 border-t pt-4" style={{ borderColor: "rgba(167, 139, 250, 0.15)" }}>
        <Button
          size="sm"
          className="gap-2 rounded-xl text-white"
          style={{ background: "linear-gradient(135deg, #10b981 0%, #34d399 100%)" }}
        >
          <Check className="h-4 w-4" />
          Approve
        </Button>
        <Button size="sm" variant="outline" className="gap-2 rounded-xl">
          <Eye className="h-4 w-4" />
          Review
        </Button>
        <Button size="sm" variant="ghost" className="gap-2 rounded-xl text-red-600 hover:bg-red-50">
          <Trash2 className="h-4 w-4" />
          Remove
        </Button>
      </div>
    </motion.div>
  );
}

export function AdminModeration() {
  return (
    <ScrollArea className="h-full">
      <div className="px-4 py-4 md:px-6 md:py-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl"
              style={{ background: "linear-gradient(135deg, #10b981 0%, #34d399 100%)" }}
            >
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Content Moderation</h1>
              <p className="text-muted-foreground">Review flagged content and manage rules</p>
            </div>
          </div>
        </motion.div>

        <Tabs defaultValue="flagged" className="w-full">
          <TabsList
            className="mb-6 w-full justify-start rounded-xl p-1"
            style={{
              background: "rgba(255, 255, 255, 0.7)",
              border: "1px solid rgba(167, 139, 250, 0.2)",
              backdropFilter: "blur(12px)",
            }}
          >
            <TabsTrigger
              value="flagged"
              className="gap-2 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/15 data-[state=active]:to-purple-400/10 data-[state=active]:text-purple-700"
            >
              <MessageSquare className="h-4 w-4" />
              Flagged Content
              <Badge variant="secondary" className="ml-1 bg-amber-100 text-amber-700">
                {flaggedContent.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger
              value="queue"
              className="gap-2 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/15 data-[state=active]:to-purple-400/10 data-[state=active]:text-purple-700"
            >
              Queue
            </TabsTrigger>
            <TabsTrigger
              value="rules"
              className="gap-2 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/15 data-[state=active]:to-purple-400/10 data-[state=active]:text-purple-700"
            >
              Rules
            </TabsTrigger>
          </TabsList>

          <TabsContent value="flagged" className="space-y-4">
            {flaggedContent.map((content, index) => (
              <motion.div
                key={content.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ContentCard content={content} />
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="queue" className="space-y-4">
            {moderationQueue.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between rounded-2xl p-5"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 248, 255, 0.9) 100%)",
                  border: "1px solid rgba(167, 139, 250, 0.2)",
                }}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{item.action}</span>
                    <Badge
                      className={
                        item.priority === "high"
                          ? "bg-red-100 text-red-700"
                          : item.priority === "medium"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-green-100 text-green-700"
                      }
                    >
                      {item.priority}
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Target: <span className="font-medium text-foreground">{item.target}</span>
                  </p>
                  <p className="text-sm text-muted-foreground">{item.reason}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">{item.time}</span>
                  <Button
                    size="sm"
                    className="rounded-xl text-white"
                    style={{ background: "linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)" }}
                  >
                    Review
                  </Button>
                </div>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="rules" className="space-y-4">
            {moderationRules.map((rule, index) => (
              <motion.div
                key={rule.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between rounded-2xl p-5"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 248, 255, 0.9) 100%)",
                  border: "1px solid rgba(167, 139, 250, 0.2)",
                }}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{rule.name}</span>
                    <Badge
                      className={
                        rule.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }
                    >
                      {rule.status}
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Triggered {rule.triggers} times this week
                  </p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-xl"
                  style={{ borderColor: "rgba(167, 139, 250, 0.3)" }}
                >
                  Configure
                </Button>
              </motion.div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  );
}
