import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "gradient" | "line" | "dots";
}

export default function SectionDivider({ variant = "gradient" }: SectionDividerProps) {
  if (variant === "line") {
    return (
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent my-12" />
    );
  }

  if (variant === "dots") {
    return (
      <div className="flex justify-center gap-4 my-12">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-primary"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="relative my-12 h-12 flex items-center justify-center">
      <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-30 blur" />
    </div>
  );
}
