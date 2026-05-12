import { ScrollArea } from "../../components/ui/scroll-area";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs";
import { motion } from "motion/react";
import { Flag, Check, X, Eye, Clock, AlertTriangle } from "lucide-react";

const reports = [
  {
    id: 1,
    type: "Harassment",
    reportedUser: "Anon#9821",
    reportedBy: "Anon#4521",
    content: "Offensive language directed at another user in thread discussion",
    threadId: "#4521",
    time: "5 minutes ago",
    status: "pending",
    severity: "high",
  },
  {
    id: 2,
    type: "Spam",
    reportedUser: "Anon#1234",
    reportedBy: "Anon#5678",
    content: "Repeated promotional messages for external service",
    threadId: "#8921",
    time: "12 minutes ago",
    status: "pending",
    severity: "medium",
  },
  {
    id: 3,
    type: "Off-topic",
    reportedUser: "Anon#3456",
    reportedBy: "Anon#7890",
    content: "Posting unrelated content in #art channel consistently",
    threadId: "#3245",
    time: "25 minutes ago",
    status: "pending",
    severity: "low",
  },
  {
    id: 4,
    type: "Impersonation",
    reportedUser: "Anon#2345",
    reportedBy: "Anon#6789",
    content: "User claiming to be a moderator and issuing fake warnings",
    threadId: "#5678",
    time: "1 hour ago",
    status: "resolved",
    severity: "high",
  },
  {
    id: 5,
    type: "Misinformation",
    reportedUser: "Anon#8765",
    reportedBy: "Anon#4321",
    content: "Spreading false information in technology discussions",
    threadId: "#9012",
    time: "2 hours ago",
    status: "dismissed",
    severity: "medium",
  },
];

function ReportCard({ report }: { report: typeof reports[0] }) {
  const severityColors = {
    high: { bg: "bg-red-100", text: "text-red-700", border: "border-red-200" },
    medium: { bg: "bg-amber-100", text: "text-amber-700", border: "border-amber-200" },
    low: { bg: "bg-green-100", text: "text-green-700", border: "border-green-200" },
  };

  const colors = severityColors[report.severity as keyof typeof severityColors];

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
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl ${colors.bg}`}
          >
            <Flag className={`h-5 w-5 ${colors.text}`} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">{report.type}</h3>
              <Badge className={`${colors.bg} ${colors.text} ${colors.border}`}>
                {report.severity}
              </Badge>
              {report.status === "pending" && (
                <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                  Pending
                </Badge>
              )}
              {report.status === "resolved" && (
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  Resolved
                </Badge>
              )}
              {report.status === "dismissed" && (
                <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                  Dismissed
                </Badge>
              )}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Reported: <span className="font-medium text-foreground">{report.reportedUser}</span>
              {" "}in Thread {report.threadId}
            </p>
            <p className="mt-2 text-sm">{report.content}</p>
            <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
              <span>Reported by {report.reportedBy}</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {report.time}
              </span>
            </div>
          </div>
        </div>
      </div>

      {report.status === "pending" && (
        <div className="mt-4 flex items-center gap-2 border-t pt-4" style={{ borderColor: "rgba(167, 139, 250, 0.15)" }}>
          <Button
            size="sm"
            className="gap-2 rounded-xl text-white"
            style={{ background: "linear-gradient(135deg, #10b981 0%, #34d399 100%)" }}
          >
            <Check className="h-4 w-4" />
            Take Action
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="gap-2 rounded-xl"
          >
            <Eye className="h-4 w-4" />
            View Thread
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="gap-2 rounded-xl text-muted-foreground"
          >
            <X className="h-4 w-4" />
            Dismiss
          </Button>
        </div>
      )}
    </motion.div>
  );
}

export function AdminReports() {
  const pendingReports = reports.filter(r => r.status === "pending");
  const resolvedReports = reports.filter(r => r.status === "resolved");
  const dismissedReports = reports.filter(r => r.status === "dismissed");

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
              style={{ background: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)" }}
            >
              <AlertTriangle className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Reports</h1>
              <p className="text-muted-foreground">Review and manage user reports</p>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <Tabs defaultValue="pending" className="w-full">
          <TabsList
            className="mb-6 w-full justify-start rounded-xl p-1"
            style={{
              background: "rgba(255, 255, 255, 0.7)",
              border: "1px solid rgba(167, 139, 250, 0.2)",
              backdropFilter: "blur(12px)",
            }}
          >
            <TabsTrigger
              value="pending"
              className="gap-2 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/15 data-[state=active]:to-purple-400/10 data-[state=active]:text-purple-700"
            >
              Pending
              <Badge variant="secondary" className="ml-1 bg-amber-100 text-amber-700">
                {pendingReports.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger
              value="resolved"
              className="gap-2 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/15 data-[state=active]:to-purple-400/10 data-[state=active]:text-purple-700"
            >
              Resolved
            </TabsTrigger>
            <TabsTrigger
              value="dismissed"
              className="gap-2 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500/15 data-[state=active]:to-purple-400/10 data-[state=active]:text-purple-700"
            >
              Dismissed
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="space-y-4">
            {pendingReports.map((report, index) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ReportCard report={report} />
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="resolved" className="space-y-4">
            {resolvedReports.map((report, index) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ReportCard report={report} />
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="dismissed" className="space-y-4">
            {dismissedReports.map((report, index) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ReportCard report={report} />
              </motion.div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  );
}
