import { motion } from "framer-motion";
import { Palette, Code, Zap, Share2, TrendingUp, Image } from "lucide-react";
import FloatingShape from "../FloatingShape";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design focusing on research, wireframing, and clean interfaces that are accessible and mobile-first.",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Responsive web applications built with modern frameworks. Clean code, good performance, and maintainable structure.",
  },
  {
    icon: Zap,
    title: "Automation & Tools",
    description:
      "Custom internal tools and automation to reduce repetitive tasks, save time, and minimize manual errors.",
  },
  {
    icon: Share2,
    title: "Social Media Handling",
    description:
      "Basic content planning and visual consistency for your social channels. Helping you maintain a cohesive presence.",
  },
  {

    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Foundational digital marketing support. We help set up the basics to get your business noticed online.",
  },
  {
    icon: Image,
    title: "Posters & Banners",
    description:
      "Creative design for digital and print media. We create eye-catching posters, banners, and social media graphics.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Floating Shapes Background */}
      <FloatingShape
        shape="cube"
        size={100}
        color=""
        className="hidden md:block absolute top-20 left-[5%] opacity-40 z-0"
        delay={0.2}
      />
      <FloatingShape
        shape="torus"
        size={140}
        color=""
        className="hidden md:block absolute bottom-20 right-[5%] opacity-30 z-0"
        delay={0.5}
      />

      <div className="container-main relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">What We Offer</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A focused set of services to help you build and improve your digital products.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 md:p-8 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-elevated hover:-translate-y-2 transition-all duration-300">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
