import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, ExternalLink, CheckCircle } from "lucide-react";
import { z } from "zod";
import emailjs from "@emailjs/browser";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

type FormData = z.infer<typeof contactSchema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof FormData;
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      return;
    }

    // EmailJS Integration
    // EmailJS Integration
    const serviceID = "service_xlvxi9j";
    const templateID = "template_x3pmptq";
    const publicKey = "psKPGr2WzPcUPwJa5";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      reply_to: formData.email,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(
        () => {
          setIsSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-main">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Get in Touch</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Have a project in mind? We'd love to hear about it. Send us a message
              and we'll get back to you as soon as possible.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
                    <p className="text-muted-foreground">
                      Your message has been sent successfully. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${errors.name ? "border-destructive" : "border-border"
                          }`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${errors.email ? "border-destructive" : "border-border"
                          }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none ${errors.message ? "border-destructive" : "border-border"
                          }`}
                        placeholder="Tell us about your project..."
                      />
                      {errors.message && (
                        <p className="text-destructive text-sm mt-1">{errors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full gap-2"
                    >
                      <Send size={18} />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="space-y-6">
                {/* Email Card */}
                <div className="bg-primary-light rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <a
                    href="mailto:webzymate@gmail.com"
                    className="text-primary hover:underline underline-offset-2"
                  >
                    webzymate@gmail.com
                  </a>
                </div>

                {/* Team Links */}
                <div className="bg-card rounded-2xl border border-border p-6">
                  <h3 className="font-semibold mb-4">Connect With Us</h3>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">UI/UX Designer</p>
                      <div className="flex gap-3">
                        <a
                          href="https://www.behance.net/sibigss"
                          className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Behance
                          <ExternalLink size={14} />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/sibisezhiyan-gopinath-21a79823b/"
                          className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          LinkedIn
                          <ExternalLink size={14} />
                        </a>
                        <a
                          href="https://portfolio-eight-green-85.vercel.app/"
                          className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Portfolio
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>

                    <div className="border-t border-border pt-4">
                      <p className="text-sm text-muted-foreground mb-2">Developer</p>
                      <div className="flex gap-3">
                        <a
                          href="https://www.linkedin.com/in/sruthi-priya-542217256/"
                          className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          LinkedIn
                          <ExternalLink size={14} />
                        </a>
                        <a
                          href="https://github.com/Sruthipriyaa"
                          className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                          <ExternalLink size={14} />
                        </a>
                        <a
                          href="https://sruthipriya.netlify.app/"
                          className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Portfolio
                          <ExternalLink size={14} />
                        </a>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
