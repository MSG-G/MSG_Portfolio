import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Users, Calendar, Award } from "lucide-react";

const experiences = [
  
  {
    title: "Community Manager",
    company: "Yasira Beauty",
    period: "Juillet 2025 - Janvier 2026",
    description: "Animation et engagement communautaire",
    color: "from-amber-700/20 to-amber-700/5",
    icon: Users,
    achievements: [
      "Création de contenus visuels et rédactionnels pour Instagram et Facebook",
      "Élaboration et planification du calendrier éditorial",
      "Animation et modération de la communauté en ligne",
      "Analyse des performances (portée, engagement, statistiques)",
      "Stratégie de croissance et fidélisation de l'audience"
    ]
  }
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experiences" className="py-32 px-6 bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Expériences
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium">
            Parcours professionnel
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Développeur Full-Stack et Community Manager chez Yasira Beauty,
            combinant expertise technique et engagement communautaire.
          </p>
        </motion.div>

        {/* Experiences Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {experiences.map((experience, index) => {
            const IconComponent = experience.icon;
            return (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div
                  className={`relative h-full bg-gradient-to-br ${experience.color} border border-border rounded-2xl p-8 overflow-hidden`}
                >
                  {/* Background gradient animation */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.5 }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className="mb-6 inline-block p-3 bg-primary/10 rounded-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className="w-6 h-6 text-primary" />
                    </motion.div>

                    {/* Title and Company */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-semibold mb-2">
                        {experience.title}
                      </h3>
                      <p className="text-primary font-medium text-lg">
                        {experience.company}
                      </p>
                    </div>

                    {/* Period */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.period}</span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 italic">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary" />
                        Points clés
                      </p>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-muted-foreground flex gap-3"
                          >
                            <motion.span
                              className="text-primary mt-1"
                              initial={{ opacity: 0 }}
                              animate={isInView ? { opacity: 1 } : {}}
                              transition={{ delay: 0.3 + idx * 0.1 }}
                            >
                              •
                            </motion.span>
                            <motion.span
                              initial={{ opacity: 0, x: -10 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                            >
                              {achievement}
                            </motion.span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Timeline connector */}
                    <motion.div
                      className="mt-8 pt-6 border-t border-border"
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <motion.div
                        className="h-1 bg-gradient-to-r from-primary to-transparent rounded-full"
                        animate={{
                          width: ["0%", "30%"]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "loop"
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Timeline section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20"
        >
          <div className="relative">
            {/* Vertical line */}
            <motion.div
              className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/50 to-transparent"
              initial={{ scaleY: 0, originY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.8 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
