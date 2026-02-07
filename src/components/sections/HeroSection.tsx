import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import FloatingShape from "../FloatingShape";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />

      {/* Floating 3D Shapes */}
      <FloatingShape
        shape="cube"
        className="top-20 right-[5%] md:right-[10%] opacity-80"
        size={140}
        delay={0}
      />
      <FloatingShape
        shape="sphere"
        className="bottom-32 left-[5%] md:left-[10%] opacity-60"
        size={100}
        delay={0.3}
      />
      <FloatingShape
        shape="torus"
        className="top-40 left-[15%] opacity-40 hidden md:block"
        size={120}
        delay={0.6}
      />
      <FloatingShape
        shape="cube"
        className="bottom-20 right-[20%] opacity-30 hidden lg:block"
        size={80}
        delay={0.9}
      />

      <div className="container-main relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light border border-primary/20 text-primary-dark text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Freelance Studio
            </motion.div>

            {/* Headline */}
            <h1 className="mb-6 text-balance">
              Design & Development
              <br />
              <span className="text-primary">for Digital Products</span>
            </h1>

            {/* Subheading */}
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 text-balance">
              We help businesses build and improve their digital presence through
              thoughtful design, clean code, and practical automation.
            </p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="mailto:pixelandlogics@gmail.com"
                className="btn-primary gap-2.5"
              >
                <Mail size={18} />
                Contact via Email
              </a>
              <a
                href="#services"
                className="btn-ghost text-foreground"
              >
                View Services →
              </a>
            </motion.div>
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default HeroSection;
