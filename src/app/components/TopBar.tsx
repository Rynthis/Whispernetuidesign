import { Search, Plus, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { motion } from "motion/react";

interface TopBarProps {
  onCreateClick?: () => void;
}

export function TopBar({ onCreateClick }: TopBarProps) {
  return (
    <div
      className="flex h-16 items-center justify-between border-b px-6"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 252, 251, 0.98) 0%, rgba(250, 248, 255, 0.95) 100%)",
        borderColor: "rgba(167, 139, 250, 0.15)",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Search */}
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search threads, channels, users..."
            className="h-10 rounded-xl border-purple-200/50 bg-white/60 pl-10 pr-4 backdrop-blur-sm transition-all focus:bg-white focus:ring-2 focus:ring-purple-300/30"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={onCreateClick}
            className="gap-2 rounded-xl font-semibold shadow-lg transition-all hover:shadow-xl"
            style={{
              background: "linear-gradient(135deg, #a78bfa 0%, #c4b5fd 100%)",
              color: "white",
            }}
          >
            <Plus className="h-4 w-4" />
            Create Thread
          </Button>
        </motion.div>

        <motion.div
          whileHover={{ rotate: 180, scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-xl hover:bg-accent/50"
          >
            <Sparkles className="h-5 w-5 text-purple-500" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
