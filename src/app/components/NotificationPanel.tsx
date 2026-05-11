import { motion } from "motion/react";
import { Bell, Heart, MessageCircle, UserPlus, Sparkles, X } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

interface Notification {
  id: string;
  type: "like" | "reply" | "follow" | "mention";
  user: string;
  userColor: string;
  content: string;
  timestamp: string;
  read: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "like",
    user: "Anon#9201",
    userColor: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",
    content: "liked your thread about consciousness",
    timestamp: "5 min ago",
    read: false,
  },
  {
    id: "2",
    type: "reply",
    user: "Anon#3847",
    userColor: "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)",
    content: "replied to your thread: \"This is fascinating...\"",
    timestamp: "1 hour ago",
    read: false,
  },
  {
    id: "3",
    type: "follow",
    user: "Anon#5632",
    userColor: "linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)",
    content: "started following you",
    timestamp: "2 hours ago",
    read: true,
  },
  {
    id: "4",
    type: "mention",
    user: "Anon#7128",
    userColor: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
    content: "mentioned you in a thread",
    timestamp: "3 hours ago",
    read: true,
  },
];

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NotificationPanel({ isOpen, onClose }: NotificationPanelProps) {
  if (!isOpen) return null;

  const getIcon = (type: Notification["type"]) => {
    switch (type) {
      case "like":
        return <Heart className="h-4 w-4 text-pink-500" />;
      case "reply":
        return <MessageCircle className="h-4 w-4 text-blue-500" />;
      case "follow":
        return <UserPlus className="h-4 w-4 text-green-500" />;
      case "mention":
        return <Bell className="h-4 w-4 text-purple-500" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 300 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className="fixed right-4 top-20 z-40 w-96 overflow-hidden rounded-2xl shadow-2xl"
      style={{
        background:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 248, 255, 0.9) 100%)",
        border: "1px solid rgba(167, 139, 250, 0.3)",
        backdropFilter: "blur(20px)",
        boxShadow:
          "0 20px 60px rgba(167, 139, 250, 0.3), 0 8px 16px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-purple-200/50 p-4">
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-purple-500" />
          <h3 className="font-semibold">Notifications</h3>
          <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-purple-500 px-1.5 text-xs font-semibold text-white">
            2
          </span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="h-8 w-8 rounded-lg hover:bg-accent/50"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Notifications List */}
      <ScrollArea className="h-[400px]">
        <div className="p-2">
          {mockNotifications.map((notification, index) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="mb-2 cursor-pointer rounded-xl p-3 transition-all hover:bg-accent/30"
              style={{
                background: notification.read
                  ? "transparent"
                  : "rgba(167, 139, 250, 0.05)",
              }}
            >
              <div className="flex gap-3">
                <div className="relative">
                  <Avatar className="h-10 w-10 ring-2 ring-white/50">
                    <AvatarFallback
                      style={{
                        background: notification.userColor,
                        color: "white",
                      }}
                    >
                      {notification.user.slice(5, 7)}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-sm"
                  >
                    {getIcon(notification.type)}
                  </div>
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-sm">
                    <span className="font-medium">{notification.user}</span>{" "}
                    {notification.content}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {notification.timestamp}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="border-t border-purple-200/50 p-3">
        <Button
          variant="ghost"
          className="w-full rounded-xl hover:bg-accent/50"
        >
          Mark all as read
        </Button>
      </div>
    </motion.div>
  );
}
