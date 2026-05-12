import { ScrollArea } from "../../components/ui/scroll-area";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { motion } from "motion/react";
import { Users, Search, MoreVertical, Shield, Ban, AlertTriangle, Eye, MessageSquare } from "lucide-react";

const users = [
  {
    id: "Anon#3847",
    color: "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)",
    status: "active",
    role: "user",
    threads: 47,
    reports: 0,
    joined: "Mar 2024",
    lastActive: "2 min ago",
  },
  {
    id: "Anon#9201",
    color: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",
    status: "active",
    role: "moderator",
    threads: 156,
    reports: 0,
    joined: "Jan 2024",
    lastActive: "5 min ago",
  },
  {
    id: "Anon#5632",
    color: "linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)",
    status: "warned",
    role: "user",
    threads: 89,
    reports: 2,
    joined: "Feb 2024",
    lastActive: "1 hour ago",
  },
  {
    id: "Anon#7128",
    color: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
    status: "active",
    role: "user",
    threads: 234,
    reports: 0,
    joined: "Dec 2023",
    lastActive: "15 min ago",
  },
  {
    id: "Anon#4509",
    color: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
    status: "banned",
    role: "user",
    threads: 12,
    reports: 5,
    joined: "Apr 2024",
    lastActive: "3 days ago",
  },
  {
    id: "Anon#2947",
    color: "linear-gradient(135deg, #f43f5e 0%, #fb7185 100%)",
    status: "active",
    role: "admin",
    threads: 312,
    reports: 0,
    joined: "Nov 2023",
    lastActive: "Just now",
  },
];

function UserRow({ user }: { user: typeof users[0] }) {
  const statusStyles = {
    active: { bg: "bg-green-100", text: "text-green-700" },
    warned: { bg: "bg-amber-100", text: "text-amber-700" },
    banned: { bg: "bg-red-100", text: "text-red-700" },
  };

  const roleStyles = {
    user: { bg: "bg-gray-100", text: "text-gray-700" },
    moderator: { bg: "bg-purple-100", text: "text-purple-700" },
    admin: { bg: "bg-blue-100", text: "text-blue-700" },
  };

  const status = statusStyles[user.status as keyof typeof statusStyles];
  const role = roleStyles[user.role as keyof typeof roleStyles];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-purple-50/30"
      style={{
        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 248, 255, 0.9) 100%)",
        border: "1px solid rgba(167, 139, 250, 0.15)",
      }}
    >
      <div className="flex items-center gap-4">
        <Avatar className="h-12 w-12 ring-2 ring-white shadow-sm">
          <AvatarFallback
            className="font-medium"
            style={{ background: user.color, color: "white" }}
          >
            {user.id.slice(5, 7)}
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">{user.id}</span>
            <Badge className={`${role.bg} ${role.text} capitalize`}>
              {user.role}
            </Badge>
            <Badge className={`${status.bg} ${status.text} capitalize`}>
              {user.status}
            </Badge>
          </div>
          <div className="mt-1 flex items-center gap-4 text-sm text-muted-foreground">
            <span>{user.threads} threads</span>
            <span>{user.reports} reports</span>
            <span>Joined {user.joined}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground">{user.lastActive}</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-lg">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem className="gap-2">
              <Eye className="h-4 w-4" />
              View Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2">
              <MessageSquare className="h-4 w-4" />
              View Threads
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2">
              <Shield className="h-4 w-4" />
              Change Role
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2 text-amber-600">
              <AlertTriangle className="h-4 w-4" />
              Issue Warning
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2 text-red-600">
              <Ban className="h-4 w-4" />
              Ban User
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </motion.div>
  );
}

export function AdminUsers() {
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
              style={{ background: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)" }}
            >
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">User Management</h1>
              <p className="text-muted-foreground">Manage users and permissions</p>
            </div>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 flex flex-col gap-4 sm:flex-row"
        >
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search users..."
              className="h-11 rounded-xl pl-11"
              style={{
                background: "rgba(255, 255, 255, 0.8)",
                border: "1px solid rgba(167, 139, 250, 0.2)",
              }}
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="rounded-xl"
              style={{ borderColor: "rgba(167, 139, 250, 0.3)" }}
            >
              All Status
            </Button>
            <Button
              variant="outline"
              className="rounded-xl"
              style={{ borderColor: "rgba(167, 139, 250, 0.3)" }}
            >
              All Roles
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {[
            { label: "Total Users", value: "12,847", color: "#8b5cf6" },
            { label: "Active Today", value: "4,892", color: "#10b981" },
            { label: "Warned", value: "156", color: "#f59e0b" },
            { label: "Banned", value: "89", color: "#ef4444" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl p-4"
              style={{
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(250, 248, 255, 0.85) 100%)",
                border: "1px solid rgba(167, 139, 250, 0.15)",
              }}
            >
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-2xl font-bold" style={{ color: stat.color }}>
                {stat.value}
              </p>
            </div>
          ))}
        </motion.div>

        {/* User List */}
        <div className="space-y-3">
          {users.map((user, index) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
            >
              <UserRow user={user} />
            </motion.div>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}
