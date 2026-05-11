import { motion } from "motion/react";
import { Plus, Sparkles } from "lucide-react";

interface FloatingCreateButtonProps {
  onClick?: () => void;
}

export function FloatingCreateButton({ onClick }: FloatingCreateButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1, rotate: 90 }}
      whileTap={{ scale: 0.9 }}
      className="group fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full shadow-2xl transition-all"
      style={{
        background: "linear-gradient(135deg, #a78bfa 0%, #c4b5fd 50%, #ddd6fe 100%)",
        boxShadow:
          "0 8px 32px rgba(167, 139, 250, 0.4), 0 2px 8px rgba(167, 139, 250, 0.3)",
      }}
    >
      <Plus className="h-7 w-7 text-white transition-transform group-hover:rotate-90" />

      {/* Pulsing glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "rgba(167, 139, 250, 0.4)",
          filter: "blur(8px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Sparkle particles */}
      <motion.div
        className="pointer-events-none absolute -right-1 -top-1"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Sparkles className="h-4 w-4 text-yellow-300" />
      </motion.div>
    </motion.button>
  );
}
