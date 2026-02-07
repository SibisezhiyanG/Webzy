import { motion } from "framer-motion";
import { Smartphone, Layout, Settings } from "lucide-react";

const projects = [
  {
    icon: Smartphone,
    title: "Utensio",
    subtitle: "Food Delivery App UX Case Study",
    description:
      "Research-driven mobile UX focused on ordering flow and usability. Emphasis on reducing friction in the user journey.",
    tags: ["UX Research", "Mobile App", "Prototyping"],
  },
  {
    icon: Layout,
    title: "Internal Web Application",
    subtitle: "Workflow Management Tool",
    description:
      "Responsive internal tool built to improve workflows and efficiency. Clean interface designed for daily use by teams.",
    tags: ["Web App", "React", "Dashboard"],
  },
  {
    icon: Settings,
    title: "Business Automation",
    subtitle: "Process Automation System",
    description:
      "Automated repetitive tasks to reduce manual work and errors. Integrated with existing tools for seamless operation.",
    tags: ["Automation", "Python", "Integration"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Selected Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A few examples of projects we've worked on.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full flex flex-col p-6 md:p-8 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-elevated hover:-translate-y-2 transition-all duration-300">
                {/* Icon Header */}
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                  <project.icon className="w-7 h-7 text-foreground/70" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-primary text-sm font-medium mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
