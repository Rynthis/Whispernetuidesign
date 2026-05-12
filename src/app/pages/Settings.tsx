import { ScrollArea } from "../components/ui/scroll-area";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";
import { Separator } from "../components/ui/separator";
import { motion } from "motion/react";
import { User, Bell, Shield, Palette, LogOut, Trash2 } from "lucide-react";

export function Settings() {
  return (
    <ScrollArea className="h-full">
      <div className="px-4 py-4 md:px-6 md:py-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="mb-2 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-2xl font-bold text-transparent">
            Settings
          </h1>
          <p className="text-muted-foreground">Manage your account preferences</p>
        </motion.div>

        <div className="space-y-6">
          {/* Profile Settings */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl p-6"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 248, 255, 0.9) 100%)",
              border: "1px solid rgba(167, 139, 250, 0.2)",
            }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: "linear-gradient(135deg, #a78bfa 0%, #c4b5fd 100%)" }}
              >
                <User className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-lg font-semibold">Profile</h2>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="displayName">Display Name</Label>
                <Input
                  id="displayName"
                  defaultValue="Anon#7384"
                  className="rounded-xl"
                  style={{ background: "rgba(255, 255, 255, 0.8)" }}
                />
                <p className="text-xs text-muted-foreground">This is your anonymous identifier</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Input
                  id="bio"
                  defaultValue="Exploring ideas freely"
                  className="rounded-xl"
                  style={{ background: "rgba(255, 255, 255, 0.8)" }}
                />
              </div>
            </div>
          </motion.section>

          {/* Notification Settings */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl p-6"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 248, 255, 0.9) 100%)",
              border: "1px solid rgba(167, 139, 250, 0.2)",
            }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)" }}
              >
                <Bell className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-lg font-semibold">Notifications</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Push Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive notifications on your device</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator style={{ background: "rgba(167, 139, 250, 0.15)" }} />

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Reply Notifications</p>
                  <p className="text-sm text-muted-foreground">Get notified when someone replies</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator style={{ background: "rgba(167, 139, 250, 0.15)" }} />

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Like Notifications</p>
                  <p className="text-sm text-muted-foreground">Get notified when someone likes your content</p>
                </div>
                <Switch />
              </div>
            </div>
          </motion.section>

          {/* Privacy Settings */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl p-6"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 248, 255, 0.9) 100%)",
              border: "1px solid rgba(167, 139, 250, 0.2)",
            }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: "linear-gradient(135deg, #10b981 0%, #34d399 100%)" }}
              >
                <Shield className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-lg font-semibold">Privacy</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Show Online Status</p>
                  <p className="text-sm text-muted-foreground">Let others see when you are online</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator style={{ background: "rgba(167, 139, 250, 0.15)" }} />

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Show Activity</p>
                  <p className="text-sm text-muted-foreground">Display your recent activity on profile</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </motion.section>

          {/* Appearance Settings */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-2xl p-6"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 248, 255, 0.9) 100%)",
              border: "1px solid rgba(167, 139, 250, 0.2)",
            }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)" }}
              >
                <Palette className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-lg font-semibold">Appearance</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Particle Effects</p>
                  <p className="text-sm text-muted-foreground">Show ambient particle background</p>
                </div>
                <Switch defaultChecked />
              </div>

              <Separator style={{ background: "rgba(167, 139, 250, 0.15)" }} />

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Cursor Glow</p>
                  <p className="text-sm text-muted-foreground">Enable cursor glow effect</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </motion.section>

          {/* Danger Zone */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="rounded-2xl p-6"
            style={{
              background: "linear-gradient(135deg, rgba(255, 245, 245, 0.95) 0%, rgba(255, 250, 250, 0.9) 100%)",
              border: "1px solid rgba(239, 68, 68, 0.2)",
            }}
          >
            <h2 className="mb-4 text-lg font-semibold text-red-600">Danger Zone</h2>

            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start gap-2 rounded-xl border-red-200 text-red-600 hover:bg-red-50"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start gap-2 rounded-xl border-red-200 text-red-600 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4" />
                Delete Account
              </Button>
            </div>
          </motion.section>
        </div>
      </div>
    </ScrollArea>
  );
}
