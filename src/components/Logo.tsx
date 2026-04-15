import { motion } from "framer-motion";
import webzyLogo from "@/assets/webzy-logo.png";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className = "", size = "md" }: LogoProps) => {
  const sizes = {
    sm: { icon: 28, text: "text-lg" },
    md: { icon: 36, text: "text-xl" },
    lg: { icon: 52, text: "text-2xl" },
  };

  const { icon, text } = sizes[size];

  return (
    <motion.div
      className={`flex items-center gap-2.5 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="relative flex-shrink-0 overflow-hidden"
        style={{ width: icon, height: icon }}
      >
        <img
          src={webzyLogo}
          alt="Webzymate logo"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ transform: "scale(2.35)", transformOrigin: "center" }}
        />
      </div>

      {/* Logo Text */}
      <span className={`font-semibold tracking-tight text-foreground ${text}`}>
        Webzymate
      </span>
    </motion.div>
  );
};

export default Logo;
