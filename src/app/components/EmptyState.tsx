import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center py-16 px-4 text-center"
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl"
        style={{
          background: "linear-gradient(135deg, #a78bfa 0%, #c4b5fd 100%)",
          boxShadow: "0 8px 24px rgba(167, 139, 250, 0.3)",
        }}
      >
        <Sparkles className="h-10 w-10 text-white" />
      </motion.div>

      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="mb-6 max-w-md text-muted-foreground">{description}</p>

      {actionLabel && onAction && (
        <Button
          onClick={onAction}
          className="gap-2 rounded-xl font-semibold shadow-lg"
          style={{
            background: "linear-gradient(135deg, #a78bfa 0%, #c4b5fd 100%)",
            color: "white",
          }}
        >
          {actionLabel}
        </Button>
      )}
    </motion.div>
  );
}
