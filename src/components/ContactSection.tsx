import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Linkedin, Github, Twitter, Send, CheckCircle, Loader2, Instagram } from "lucide-react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(100, "Le nom est trop long"),
  email: z.string().trim().email("Email invalide").max(255, "Email trop long"),
  message: z.string().trim().min(1, "Le message est requis").max(1000, "Message trop long (1000 caractères max)")
});

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mdapeyww", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Échec de l'envoi du message");
      }

      setIsSubmitted(true);
      toast({
        title: "Message envoyé !",
        description: "Votre message a bien été transmis. Je reviens vers vous rapidement.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      toast({
        title: "Erreur lors de l'envoi",
        description: "Impossible d'envoyer le message. Veuillez réessayer plus tard.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const inputClasses = (fieldName: string) => `
    w-full rounded-xl px-4 py-3.5 transition-all duration-300
    bg-card dark:bg-card/50 
    border-2 
    ${errors[fieldName] 
      ? "border-destructive" 
      : focusedField === fieldName 
        ? "border-primary shadow-lg shadow-primary/20" 
        : "border-border hover:border-primary/50"
    }
    text-foreground placeholder:text-muted-foreground
    focus:outline-none focus:border-primary focus:shadow-lg focus:shadow-primary/20
  `;

  return (
    <section id="contact" className="py-32 px-6 bg-secondary dark:bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Contact
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-8 text-foreground">
              Travaillons ensemble
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Vous avez un projet en tête ? Je serais ravi d'en discuter avec vous. 
              N'hésitez pas à me contacter pour échanger sur vos besoins.
            </p>

            <div className="space-y-6">
              {[
                { Icon: Mail, label: "Email", value: "mouha7522@gmail.com" },
                { Icon: MapPin, label: "Localisation", value: "Dakar, Parcelles Assainies" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center text-primary"
                    whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary))" }}
                    transition={{ duration: 0.2 }}
                  >
                    <item.Icon className="w-5 h-5" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4 mt-12">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/in/mouhadji-samba-gueye-6a3997318?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
                { Icon: Github, href: "https://github.com/MSG-G" },
                { Icon: Instagram, href: "https://www.instagram.com/mouhadji_s_g?igsh=MTYxMHFlejFxY2Rmbg%3D%3D&utm_source=qr" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="bg-card dark:bg-card/80 p-8 rounded-2xl shadow-xl border border-border backdrop-blur-sm"
              whileHover={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    >
                      <CheckCircle className="w-20 h-20 text-primary mb-6" />
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="font-display text-2xl font-medium mb-2"
                    >
                      Message envoyé !
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-muted-foreground"
                    >
                      Je vous répondrai dans les plus brefs délais.
                    </motion.p>
                    <motion.div
                      className="mt-6 flex gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-primary rounded-full"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                        />
                      ))}
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-sm font-medium text-foreground mb-2">Nom</label>
                      <motion.input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        className={inputClasses("name")}
                        placeholder="Votre nom"
                        whileFocus={{ scale: 1.01 }}
                      />
                      <AnimatePresence>
                        {errors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-destructive text-sm mt-1"
                          >
                            {errors.name}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 }}
                    >
                      <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <motion.input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        className={inputClasses("email")}
                        placeholder="votre@email.com"
                        whileFocus={{ scale: 1.01 }}
                      />
                      <AnimatePresence>
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-destructive text-sm mt-1"
                          >
                            {errors.email}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 }}
                    >
                      <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                      <motion.textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        className={`${inputClasses("message")} resize-none`}
                        placeholder="Décrivez votre projet..."
                        whileFocus={{ scale: 1.01 }}
                      />
                      <AnimatePresence>
                        {errors.message && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-destructive text-sm mt-1"
                          >
                            {errors.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-medium hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 }}
                      whileHover={{ scale: 1.02, boxShadow: "0 15px 30px -10px hsl(var(--primary) / 0.4)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <AnimatePresence mode="wait">
                        {isSubmitting ? (
                          <motion.div
                            key="loading"
                            initial={{ opacity: 0, rotate: 0 }}
                            animate={{ opacity: 1, rotate: 360 }}
                            exit={{ opacity: 0 }}
                            transition={{ rotate: { repeat: Infinity, duration: 1, ease: "linear" } }}
                          >
                            <Loader2 className="w-5 h-5" />
                          </motion.div>
                        ) : (
                          <motion.span
                            key="text"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                          >
                            Envoyer le message
                            <Send className="w-4 h-4" />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
