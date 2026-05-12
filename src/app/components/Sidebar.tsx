import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import {
  Home,
  Compass,
  TrendingUp,
  Bell,
  Settings,
  Sparkles,
  MessageSquare,
  Hash,
  Shield,
  Users,
  Flag,
  FileText,
} from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { cn } from "./ui/utils";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  badge?: number;
}

function NavItem({ icon, label, href, badge }: NavItemProps) {
  const location = useLocation();
  const isActive = location.pathname === href || (href !== "/" && location.pathname.startsWith(href));

  return (
    <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
      <Link to={href}>
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start gap-3 rounded-xl px-3 py-2.5 text-[15px] font-medium transition-all duration-200",
            isActive
              ? "bg-gradient-to-r from-purple-500/15 to-purple-400/10 text-purple-700 shadow-sm"
              : "hover:bg-accent/50"
          )}
        >
          <div
            className={cn(
              "transition-colors",
              isActive ? "text-purple-600" : "text-muted-foreground"
            )}
          >
            {icon}
          </div>
          <span className="flex-1 text-left">{label}</span>
          {badge && (
            <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-purple-500 px-1.5 text-xs font-semibold text-white">
              {badge}
            </span>
          )}
        </Button>
      </Link>
    </motion.div>
  );
}

function ChannelItem({ name }: { name: string }) {
  return (
    <motion.div whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
      <Button
        variant="ghost"
        className="w-full justify-start gap-3 rounded-xl px-3 py-2.5 text-[15px] font-medium transition-all duration-200 hover:bg-accent/50"
      >
        <Hash className="h-4 w-4 text-muted-foreground" />
        <span className="flex-1 text-left">{name}</span>
      </Button>
    </motion.div>
  );
}

export function Sidebar() {
  const location = useLocation();
  const isAdminSection = location.pathname.startsWith("/admin");

  return (
    <div
      className="flex h-full w-64 flex-col border-r p-4"
      style={{
        background:
          "linear-gradient(180deg, rgba(250, 248, 255, 0.95) 0%, rgba(255, 252, 251, 0.9) 100%)",
        borderColor: "rgba(167, 139, 250, 0.15)",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Logo */}
      <Link to="/" className="mb-8 flex items-center gap-3 px-2">
        <motion.div
          whileHover={{ rotate: 180, scale: 1.1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
      </Link>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        <NavItem icon={<Home className="h-5 w-5" />} label="Home" href="/" />
        <NavItem icon={<Compass className="h-5 w-5" />} label="Explore" href="/explore" />
        <NavItem
          icon={<TrendingUp className="h-5 w-5" />}
          label="Trending"
          href="/trending"
          badge={3}
        />
        <NavItem
          icon={<Bell className="h-5 w-5" />}
          label="Notifications"
          href="/notifications"
          badge={12}
        />
        <NavItem icon={<MessageSquare className="h-5 w-5" />} label="Whispers" href="/whispers" />

        <div className="py-3">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
        </div>

        <div className="px-2 pb-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Channels
          </p>
        </div>

        <ChannelItem name="general" />
        <ChannelItem name="art" />
        <ChannelItem name="music" />
        <ChannelItem name="technology" />

        {/* Admin Section */}
        <div className="py-3">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
        </div>

        <div className="px-2 pb-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Admin
          </p>
        </div>

        <NavItem icon={<Shield className="h-5 w-5" />} label="Dashboard" href="/admin" />
        <NavItem icon={<Flag className="h-5 w-5" />} label="Reports" href="/admin/reports" />
        <NavItem icon={<Users className="h-5 w-5" />} label="Users" href="/admin/users" />
        <NavItem icon={<FileText className="h-5 w-5" />} label="Moderation" href="/admin/moderation" />
      </nav>

      {/* User profile */}
      <div
        className="mt-4 rounded-xl p-3"
        style={{
          background: "rgba(167, 139, 250, 0.08)",
          border: "1px solid rgba(167, 139, 250, 0.2)",
        }}
      >
        <div className="flex items-center gap-3">
          <Link to="/profile">
            <Avatar className="h-10 w-10 ring-2 ring-white/50 cursor-pointer hover:ring-purple-300 transition-all">
              <AvatarFallback
                style={{
                  background: "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)",
                  color: "white",
                }}
              >
                AN
              </AvatarFallback>
            </Avatar>
          </Link>
          <div className="flex-1 overflow-hidden">
            <Link to="/profile" className="hover:text-purple-600 transition-colors">
              <p className="truncate font-medium text-[15px]">Anon#7384</p>
            </Link>
            <p className="text-xs text-muted-foreground">Online</p>
          </div>
          <Link to="/settings">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-lg hover:bg-accent/50"
            >
              <Settings className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
