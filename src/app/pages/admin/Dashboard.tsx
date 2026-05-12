import { Link } from "react-router";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { motion } from "motion/react";
import {
  Users,
  MessageSquare,
  Flag,
  TrendingUp,
  AlertTriangle,
  Shield,
  Activity,
  Eye,
} from "lucide-react";

const stats = [
  { label: "Total Users", value: "12,847", change: "+12%", icon: Users, color: "#8b5cf6" },
  { label: "Active Threads", value: "3,421", change: "+8%", icon: MessageSquare, color: "#06b6d4" },
  { label: "Pending Reports", value: "23", change: "-5%", icon: Flag, color: "#f59e0b" },
  { label: "Daily Active", value: "4,892", change: "+15%", icon: Activity, color: "#10b981" },
];

const recentReports = [
  { id: 1, type: "Spam", content: "Promotional content in #general", time: "5 min ago", severity: "low" },
  { id: 2, type: "Harassment", content: "Offensive reply in thread #4521", time: "12 min ago", severity: "high" },
  { id: 3, type: "Spam", content: "Repeated posting in #technology", time: "25 min ago", severity: "medium" },
  { id: 4, type: "Off-topic", content: "Unrelated content in #art", time: "1 hour ago", severity: "low" },
];

const activityFeed = [
  { action: "User banned", target: "Anon#9821", admin: "Admin#001", time: "10 min ago" },
  { action: "Thread removed", target: "Thread #8921", admin: "Admin#002", time: "25 min ago" },
  { action: "Warning issued", target: "Anon#4521", admin: "Admin#001", time: "45 min ago" },
  { action: "Report resolved", target: "Report #112", admin: "Admin#003", time: "1 hour ago" },
];

export function AdminDashboard() {
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
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-muted-foreground">Monitor and manage WhisperNet</p>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.05 }}
            >
              <Card
                className="rounded-2xl border-0"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 248, 255, 0.9) 100%)",
                  boxShadow: "0 2px 12px rgba(167, 139, 250, 0.1)",
                }}
              >
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="mt-1 text-2xl font-bold">{stat.value}</p>
                      <p className={`mt-1 text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {stat.change} from last week
                      </p>
                    </div>
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ background: `${stat.color}20` }}
                    >
                      <stat.icon className="h-5 w-5" style={{ color: stat.color }} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Recent Reports */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card
              className="rounded-2xl border-0"
              style={{
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 248, 255, 0.9) 100%)",
                boxShadow: "0 2px 12px rgba(167, 139, 250, 0.1)",
              }}
            >
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  Recent Reports
                </CardTitle>
                <Link to="/admin/reports" className="text-sm text-purple-600 hover:underline">
                  View all
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentReports.map((report) => (
                    <div
                      key={report.id}
                      className="flex items-center justify-between rounded-xl p-3 transition-colors hover:bg-purple-50/50"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`h-2 w-2 rounded-full ${
                            report.severity === 'high'
                              ? 'bg-red-500'
                              : report.severity === 'medium'
                              ? 'bg-amber-500'
                              : 'bg-green-500'
                          }`}
                        />
                        <div>
                          <p className="font-medium text-sm">{report.type}</p>
                          <p className="text-xs text-muted-foreground">{report.content}</p>
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">{report.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Activity Feed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card
              className="rounded-2xl border-0"
              style={{
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 248, 255, 0.9) 100%)",
                boxShadow: "0 2px 12px rgba(167, 139, 250, 0.1)",
              }}
            >
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Eye className="h-5 w-5 text-purple-500" />
                  Moderation Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {activityFeed.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-xl p-3 transition-colors hover:bg-purple-50/50"
                    >
                      <div>
                        <p className="font-medium text-sm">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">
                          {activity.target} by {activity.admin}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { label: "View Reports", href: "/admin/reports", icon: Flag, color: "#f59e0b" },
            { label: "Manage Users", href: "/admin/users", icon: Users, color: "#8b5cf6" },
            { label: "Content Moderation", href: "/admin/moderation", icon: Shield, color: "#10b981" },
            { label: "View Analytics", href: "/admin", icon: TrendingUp, color: "#06b6d4" },
          ].map((action, index) => (
            <Link key={action.label} to={action.href}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 rounded-xl p-4 transition-all cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(250, 248, 255, 0.85) 100%)",
                  border: "1px solid rgba(167, 139, 250, 0.2)",
                }}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: `${action.color}20` }}
                >
                  <action.icon className="h-5 w-5" style={{ color: action.color }} />
                </div>
                <span className="font-medium">{action.label}</span>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </ScrollArea>
  );
}
