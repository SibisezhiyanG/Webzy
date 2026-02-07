import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";

interface FloatingShapeProps {
    className?: string;
    size?: number;
    delay?: number;
    shape?: "sphere" | "cube" | "torus";
    color?: string;
}

const FloatingShape = ({
    className = "",
    size = 200,
    delay = 0,
    shape = "sphere",
}: FloatingShapeProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();

    // Mouse parallax effect
    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth out the mouse movement
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    // Transform mouse position to movement (inverse direction for parallax)
    const x = useTransform(smoothX, [-1, 1], [20, -20]);
    const yParallax = useTransform(smoothY, [-1, 1], [20, -20]);

    // Combine scroll and mouse effects for Y axis
    const yScroll = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const y = useTransform([yScroll, yParallax], ([latestScroll, latestParallax]) => (latestScroll as number) + (latestParallax as number));

    const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Normalize coordinates to -1 to 1
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth) * 2 - 1;
            const y = (e.clientY / innerHeight) * 2 - 1;

            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            ref={ref}
            className={`absolute pointer-events-none ${className}`}
            style={{ x, y, rotate }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay }}
        >
            <motion.div
                className="relative"
                animate={{
                    y: [0, -15, 0],
                    rotate: shape === "cube" ? [0, 5, 0] : 0,
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay,
                }}
            >
                <svg
                    width={size}
                    height={size}
                    viewBox="0 0 200 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        {/* Professional Blue/Slate Gradients */}
                        <linearGradient id={`shapeGradient-${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="hsl(215, 25%, 60%)" />
                            <stop offset="100%" stopColor="hsl(215, 30%, 40%)" />
                        </linearGradient>

                        <linearGradient id={`shapeGradientLight-${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="hsl(215, 25%, 70%)" />
                            <stop offset="100%" stopColor="hsl(215, 30%, 50%)" />
                        </linearGradient>

                        <filter id={`softShadow-${delay}`} x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow dx="0" dy="10" stdDeviation="20" floodOpacity="0.15" />
                        </filter>
                    </defs>

                    {shape === "sphere" && (
                        <>
                            <circle
                                cx="100"
                                cy="100"
                                r="90"
                                fill={`url(#shapeGradient-${delay})`}
                                filter={`url(#softShadow-${delay})`}
                            />
                            <ellipse
                                cx="70"
                                cy="70"
                                rx="25"
                                ry="20"
                                fill="white"
                                opacity="0.2"
                            />
                        </>
                    )}

                    {shape === "cube" && (
                        <g filter={`url(#softShadow-${delay})`}>
                            {/* Front face */}
                            <path
                                d="M40 60 L160 60 L160 180 L40 180 Z"
                                fill={`url(#shapeGradient-${delay})`}
                            />
                            {/* Top face */}
                            <path
                                d="M40 60 L100 20 L220 20 L160 60 Z"
                                fill={`url(#shapeGradientLight-${delay})`}
                                opacity="0.9"
                            />
                            {/* Side face */}
                            <path
                                d="M160 60 L220 20 L220 140 L160 180 Z"
                                fill={`url(#shapeGradient-${delay})`}
                                opacity="0.8"
                            />
                        </g>
                    )}

                    {shape === "torus" && (
                        <g filter={`url(#softShadow-${delay})`}>
                            <path
                                d="M100,20 A80,80 0 1,1 100,180 A80,80 0 1,1 100,20 M100,60 A40,40 0 1,0 100,140 A40,40 0 1,0 100,60"
                                fillRule="evenodd"
                                fill={`url(#shapeGradient-${delay})`}
                            />
                            {/* Highlight */}
                            <path
                                d="M60,45 A70,70 0 0,1 140,45"
                                stroke="white"
                                strokeWidth="3"
                                strokeLinecap="round"
                                opacity="0.2"
                                fill="none"
                            />
                        </g>
                    )}
                </svg>
            </motion.div>
        </motion.div>
    );
};

export default FloatingShape;
