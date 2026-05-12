import { Routes, Route } from "react-router";
import { MainLayout } from "./components/MainLayout";
import { Home } from "./pages/Home";
import { Explore } from "./pages/Explore";
import { ThreadDetail } from "./pages/ThreadDetail";
import { Profile } from "./pages/Profile";
import { Settings } from "./pages/Settings";
import { AdminDashboard } from "./pages/admin/Dashboard";
import { AdminReports } from "./pages/admin/Reports";
import { AdminUsers } from "./pages/admin/Users";
import { AdminModeration } from "./pages/admin/Moderation";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Core Social Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/thread/:id" element={<ThreadDetail />} />
        <Route path="/profile/:id?" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />

        {/* Admin/Moderation Pages */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/reports" element={<AdminReports />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/moderation" element={<AdminModeration />} />
      </Route>
    </Routes>
  );
}
