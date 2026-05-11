import { motion } from "motion/react";
import { Sparkles, Heart, MessageCircle, Share2, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function UIKitShowcase() {
  return (
    <div className="min-h-screen p-8">
      <div className="mx-auto max-w-6xl space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <motion.div
            className="mb-4 inline-flex"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="h-12 w-12 text-purple-500" />
          </motion.div>
          <h1 className="mb-2 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent">
            WhisperNet UI Kit
          </h1>
          <p className="text-muted-foreground">
            Soft futuristic design system showcase
          </p>
        </motion.div>

        {/* Color Palette */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Color Palette</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { name: "Purple", color: "linear-gradient(135deg, #a78bfa 0%, #c4b5fd 100%)" },
              { name: "Pink", color: "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)" },
              { name: "Blue", color: "linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)" },
              { name: "Amber", color: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)" },
              { name: "Green", color: "linear-gradient(135deg, #10b981 0%, #34d399 100%)" },
              { name: "Rose", color: "linear-gradient(135deg, #f43f5e 0%, #fb7185 100%)" },
              { name: "Violet", color: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)" },
              { name: "Indigo", color: "linear-gradient(135deg, #6366f1 0%, #818cf8 100%)" },
            ].map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05, y: -4 }}
                className="overflow-hidden rounded-xl"
                style={{
                  background: "rgba(255, 255, 255, 0.6)",
                  border: "1px solid rgba(167, 139, 250, 0.2)",
                }}
              >
                <div
                  className="h-24"
                  style={{
                    background: item.color,
                    boxShadow: "inset 0 -1px 0 rgba(255, 255, 255, 0.3)",
                  }}
                />
                <div className="p-3 text-center">
                  <p className="font-medium text-sm">{item.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Buttons */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Buttons</h2>
          <div className="flex flex-wrap gap-3">
            <Button
              className="gap-2 rounded-xl font-semibold shadow-lg"
              style={{
                background: "linear-gradient(135deg, #a78bfa 0%, #c4b5fd 100%)",
                color: "white",
              }}
            >
              <Sparkles className="h-4 w-4" />
              Primary Button
            </Button>
            <Button variant="outline" className="gap-2 rounded-xl">
              <Heart className="h-4 w-4" />
              Outline Button
            </Button>
            <Button variant="ghost" className="gap-2 rounded-xl">
              <MessageCircle className="h-4 w-4" />
              Ghost Button
            </Button>
            <Button variant="destructive" className="rounded-xl">
              Destructive
            </Button>
          </div>
        </section>

        {/* Glass Cards */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Glassmorphic Cards</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group overflow-hidden rounded-2xl p-6"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(250, 248, 255, 0.85) 100%)",
                  border: "1px solid rgba(167, 139, 250, 0.2)",
                  boxShadow:
                    "0 1px 3px rgba(167, 139, 250, 0.1), 0 8px 24px rgba(167, 139, 250, 0.08)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{
                      background:
                        "linear-gradient(135deg, #a78bfa 0%, #c4b5fd 100%)",
                      boxShadow: "0 4px 12px rgba(167, 139, 250, 0.3)",
                    }}
                  >
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Card Title {i}</h3>
                    <p className="text-xs text-muted-foreground">Subtitle</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  This is a glassmorphic card with backdrop blur, soft shadows,
                  and hover effects.
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Avatars */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Avatars</h2>
          <div className="flex flex-wrap gap-4">
            {[
              "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)",
              "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",
              "linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)",
              "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
              "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
            ].map((color, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.4 }}
              >
                <Avatar className="h-14 w-14 ring-2 ring-white/50 shadow-lg">
                  <AvatarFallback
                    style={{
                      background: color,
                      color: "white",
                    }}
                  >
                    A{i + 1}
                  </AvatarFallback>
                </Avatar>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Badges */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Badges & Tags</h2>
          <div className="flex flex-wrap gap-2">
            {["Art", "Music", "Technology", "Philosophy", "Community"].map(
              (tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-full px-3 py-1 text-sm font-medium backdrop-blur-sm"
                  style={{
                    background: "rgba(167, 139, 250, 0.15)",
                    color: "#7c3aed",
                    border: "1px solid rgba(167, 139, 250, 0.3)",
                  }}
                >
                  {tag}
                </motion.span>
              )
            )}
          </div>
        </section>

        {/* Inputs */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Form Elements</h2>
          <div className="max-w-md space-y-3">
            <Input
              placeholder="Search..."
              className="rounded-xl border-purple-200/50 bg-white/60 backdrop-blur-sm"
            />
            <Input
              placeholder="Email address"
              type="email"
              className="rounded-xl border-purple-200/50 bg-white/60 backdrop-blur-sm"
            />
          </div>
        </section>

        {/* Animation Examples */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Animations</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Floating */}
            <div className="text-center">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mb-2 inline-flex h-16 w-16 items-center justify-center rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, #a78bfa 0%, #c4b5fd 100%)",
                  boxShadow: "0 8px 24px rgba(167, 139, 250, 0.3)",
                }}
              >
                <Sparkles className="h-8 w-8 text-white" />
              </motion.div>
              <p className="text-sm font-medium">Float</p>
            </div>

            {/* Rotating */}
            <div className="text-center">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="mb-2 inline-flex h-16 w-16 items-center justify-center rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)",
                  boxShadow: "0 8px 24px rgba(236, 72, 153, 0.3)",
                }}
              >
                <Sparkles className="h-8 w-8 text-white" />
              </motion.div>
              <p className="text-sm font-medium">Rotate</p>
            </div>

            {/* Pulsing */}
            <div className="text-center">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [1, 0.8, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mb-2 inline-flex h-16 w-16 items-center justify-center rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)",
                  boxShadow: "0 8px 24px rgba(6, 182, 212, 0.3)",
                }}
              >
                <Sparkles className="h-8 w-8 text-white" />
              </motion.div>
              <p className="text-sm font-medium">Pulse</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
