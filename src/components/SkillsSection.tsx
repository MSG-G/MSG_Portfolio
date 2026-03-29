import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Smartphone, Zap, Database, Server } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Développement Web",
    description: "React, TypeScript, TailwindCss et les technologies modernes pour créer des applications performantes.",
  },
  {
    icon: Server,
    title: "Laravel / PHP",
    description: "Framework PHP puissant pour développer des applications web robustes et évolutives.",
  },
  {
    icon: Database,
    title: "Java",
    description: "Langage orienté objet pour créer des applications structurées et maintenables.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Interfaces utilisateur intuitives et esthétiques qui offrent une expérience mémorable.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Sites et applications qui fonctionnent parfaitement sur tous les appareils.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimisation pour des temps de chargement rapides et une expérience fluide.",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Compétences
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium">
            Ce que je fais de mieux
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.2 }
              }}
              className="bg-card p-8 rounded-2xl border border-border"
            >
              <motion.div 
                className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <skill.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="font-display text-xl font-medium mb-3">{skill.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
