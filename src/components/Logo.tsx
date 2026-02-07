import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className = "", size = "md" }: LogoProps) => {
  const sizes = {
    sm: { icon: 24, text: "text-lg" },
    md: { icon: 32, text: "text-xl" },
    lg: { icon: 48, text: "text-2xl" },
  };

  const { icon, text } = sizes[size];

  return (
    <motion.div
      className={`flex items-center gap-2.5 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo Mark - Pixel Grid with Logic Circuit */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Outer frame - representing structure/logic */}
        <rect
          x="2"
          y="2"
          width="28"
          height="28"
          rx="4"
          className="stroke-foreground"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Grid pixels - 3x3 grid representing "Pixel" */}
        <rect x="6" y="6" width="6" height="6" rx="1" className="fill-primary" />
        <rect x="13" y="6" width="6" height="6" rx="1" className="fill-foreground/20" />
        <rect x="20" y="6" width="6" height="6" rx="1" className="fill-primary/60" />

        <rect x="6" y="13" width="6" height="6" rx="1" className="fill-foreground/20" />
        <rect x="13" y="13" width="6" height="6" rx="1" className="fill-primary/80" />
        <rect x="20" y="13" width="6" height="6" rx="1" className="fill-foreground/20" />

        <rect x="6" y="20" width="6" height="6" rx="1" className="fill-primary/60" />
        <rect x="13" y="20" width="6" height="6" rx="1" className="fill-foreground/20" />
        <rect x="20" y="20" width="6" height="6" rx="1" className="fill-primary" />
      </svg>

      {/* Logo Text */}
      <span className={`font-semibold tracking-tight text-foreground ${text}`}>
        Webzy
      </span>
    </motion.div>
  );
};

export default Logo;
