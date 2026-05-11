import { motion, AnimatePresence } from "motion/react";
import {
  Home,
  Compass,
  TrendingUp,
  Bell,
  User,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { useState } from "react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
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
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-y-0 left-0 z-50 w-72 p-4 md:hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(250, 248, 255, 0.98) 0%, rgba(255, 252, 251, 0.95) 100%)",
              backdropFilter: "blur(20px)",
              boxShadow: "8px 0 24px rgba(167, 139, 250, 0.2)",
            }}
          >
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute right-4 top-4 rounded-xl"
            >
              <X className="h-5 w-5" />
            </Button>

            {/* Logo */}
            <div className="mb-8 flex items-center gap-3 px-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{
                  background: "linear-gradient(135deg, #a78bfa 0%, #c4b5fd 100%)",
                  boxShadow: "0 4px 12px rgba(167, 139, 250, 0.3)",
                }}
              >
                <Sparkles className="h-5 w-5 text-white" />
              </motion.div>
              <div>
                <h1 className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-xl font-bold tracking-tight text-transparent">
                  WhisperNet
                </h1>
                <p className="text-xs text-muted-foreground">Speak freely</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="mb-8 space-y-1">
              <NavButton icon={<Home className="h-5 w-5" />} label="Home" active />
              <NavButton icon={<Compass className="h-5 w-5" />} label="Explore" />
              <NavButton
                icon={<TrendingUp className="h-5 w-5" />}
                label="Trending"
                badge={3}
              />
              <NavButton
                icon={<Bell className="h-5 w-5" />}
                label="Notifications"
                badge={12}
              />
              <NavButton icon={<User className="h-5 w-5" />} label="Profile" />
            </nav>

            {/* User Profile */}
            <div
              className="rounded-xl p-3"
              style={{
                background: "rgba(167, 139, 250, 0.08)",
                border: "1px solid rgba(167, 139, 250, 0.2)",
              }}
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 ring-2 ring-white/50">
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
                <div className="flex-1">
                  <p className="font-medium text-[15px]">Anon#7384</p>
                  <p className="text-xs text-muted-foreground">Online</p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function NavButton({
  icon,
  label,
  active,
  badge,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: number;
}) {
  return (
    <Button
      variant="ghost"
      className={`w-full justify-start gap-3 rounded-xl px-3 py-2.5 text-[15px] font-medium transition-all ${
        active
          ? "bg-gradient-to-r from-purple-500/15 to-purple-400/10 text-purple-700"
          : ""
      }`}
    >
      {icon}
      <span className="flex-1 text-left">{label}</span>
      {badge && (
        <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-purple-500 px-1.5 text-xs font-semibold text-white">
          {badge}
        </span>
      )}
    </Button>
  );
}

export function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div
        className="flex h-16 items-center justify-between border-b px-4 md:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 252, 251, 0.98) 0%, rgba(250, 248, 255, 0.95) 100%)",
          borderColor: "rgba(167, 139, 250, 0.15)",
          backdropFilter: "blur(20px)",
        }}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(true)}
          className="h-10 w-10 rounded-xl"
        >
          <Menu className="h-5 w-5" />
        </Button>

        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-purple-500" />
          <h1 className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text font-bold tracking-tight text-transparent">
            WhisperNet
          </h1>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-xl"
        >
          <Bell className="h-5 w-5" />
        </Button>
      </div>

      <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
