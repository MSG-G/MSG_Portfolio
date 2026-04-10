import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Database, Palette, Smartphone, Zap, GitBranch, Monitor } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Langages de Programmation",
    color: "from-blue-500/20 to-blue-500/5",
    skills: ["PHP", "Python", "Java", "JavaScript", "HTML/CSS"],
  },
  {
    icon: Palette,
    title: "Frameworks & Technologies",
    color: "from-purple-500/20 to-purple-500/5",
    skills: ["Laravel", "React", "Vue.js", "TypeScript", "JPA", "Hibernate"],
  },
  {
    icon: Database,
    title: "Bases de Données",
    color: "from-green-500/20 to-green-500/5",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    icon: Monitor,
    title: "Outils & Environnements",
    color: "from-orange-500/20 to-orange-500/5",
    skills: ["Git", "Visual Studio Code", "IntelliJ IDEA", "PhpStorm", "Android Studio"],
  },
  {
    icon: Smartphone,
    title: "Design & Responsive",
    color: "from-pink-500/20 to-pink-500/5",
    skills: ["UI/UX Design", "Responsive Design", "TailwindCSS", "ShadCN", "Figma"],
  },
  {
    icon: Zap,
    title: "Méthodologies & Gestion",
    color: "from-red-500/20 to-red-500/5",
    skills: ["Méthodes Agile", "Gestion de Projet", "Bilan Compte de Résultat"],
  },
  {
    icon: Server,
    title: "Backend & API",
    color: "from-cyan-500/20 to-cyan-500/5",
    skills: ["Node.js", "Express", "REST API", "Authentication", "Security"],
  },
  {
    icon: GitBranch,
    title: "Outils Modernes",
    color: "from-indigo-500/20 to-indigo-500/5",
    skills: ["Vite", "Webpack", "Docker", "CI/CD", "Postman"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="competences" className="py- px-6 bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Compétences Techniques
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">
            Tech Stack & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une palette diversifiée de technologies et de méthodologies pour créer des solutions modernes et performantes.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
                }}
                className="group"
              >
                <div
                  className={`relative h-full bg-gradient-to-br ${category.color} border border-border rounded-2xl p-6 overflow-hidden`}
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.5 }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className="mb-4 inline-block p-2.5 bg-primary/10 rounded-lg"
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className="w-5 h-5 text-primary" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold mb-4">{category.title}</h3>

                    {/* Skills */}
                    <div className="space-y-2">
                      {category.skills.map((skill, idx) => (
                        <motion.div
                          key={skill}
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.4,
                            delay: 0.3 + idx * 0.05,
                          }}
                        >
                          <motion.span
                            className="w-1.5 h-1.5 bg-primary rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              delay: idx * 0.1,
                            }}
                          />
                          <span className="text-sm text-muted-foreground">
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
