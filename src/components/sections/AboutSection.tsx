import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import designerImage from "@/assets/team-designer.png";
import developerImage from "@/assets/team-developer.png";

const team = [
  {
    name: "UI/UX Designer",
    image: designerImage,
    description:
      "Background in Computer Science with experience in user research, personas, user flows, wireframing, UI design, and prototyping. Focused on clean, accessible, mobile-first interfaces.",
    tools: ["Figma", "Miro", "Framer", "Photoshop"],
    links: [
      { label: "Behance", href: "https://www.behance.net/sibigss" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/sibisezhiyan-gopinath-21a79823b/" },
    ],
  },
  {
    name: "Full-Stack Developer",
    image: developerImage,
    description:
      "Professional experience building web applications with modern technologies. Skilled in React.js, Node.js, Python, REST APIs, and databases. Experience in automation and building internal tools.",
    tools: ["React", "Node.js", "Python", "PostgreSQL"],
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/sruthi-priya-542217256/" },
      { label: "GitHub", href: "https://github.com/Sruthipriyaa" },

    ],
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">About Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Webzy is a small, newly started freelance studio. We're two
            people focused on delivering quality work and building honest relationships
            with our clients. We're here to help, not to oversell.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="bg-card rounded-2xl border border-border p-6 md:p-8 hover:border-primary/50 hover:shadow-elevated hover:-translate-y-2 transition-all duration-300">
                {/* Avatar */}
                <div className="w-28 h-28 mx-auto mb-6 rounded-2xl overflow-hidden bg-primary-light">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center mix-blend-multiply"
                  />
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3">{member.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {member.description}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {member.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-center gap-4">
                    {member.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                        <ExternalLink size={14} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
