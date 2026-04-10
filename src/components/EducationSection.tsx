import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Award, Calendar, MapPin } from "lucide-react";

const educations = [
  {
    degree: "LICENCE 3",
    institution: "Université Cheikh Hamidou Kane (ex : UVS)",
    period: "2024 - 2025",
    location: "Dakar, Sénégal",
    description: "Formation complète en Informatique avec focus sur le développement d'applications web & mobile et la gestion de projets.",
    icon: "🎓",
    color: "from-amber-900/20 to-amber-900/5",
  },
  {
    degree: "ATTESTATION - 2 ans d'études",
    institution: "Institut Supérieur d'Informatique (ISI) – Dakar",
    period: "2023 - 2024",
    location: "Dakar, Sénégal",
    description: "Certification en Informatique applique à la gestion des entreprises avec formation pratique en développement multi-plateforme.",
    icon: "📜",
    color: "from-amber-700/20 to-amber-700/5",
  },
];

const projects = [
  {
    title: "Application de Gestion d'Agence Immobilière",
    institution: "Université Cheikh Hamidou Kane",
    type: "Projet de Soutenance – Licence",
    icon: "🏢",
    color: "from-amber-900/20 to-amber-900/5",
    language: "Laravel & Vue.js",
    achievements: [
      "Conception et développement d'une application complète",
      "Gestion des biens, agents et clients",
      "Implémentation des fonctionnalités CRUD",
      "Authentification et gestion des rôles",
      "Base de données relationnelle avec logique métier complète"
    ]
  },
  {
    title: "Application de Gestion Bancaire",
    institution: "Institut Supérieur d'Informatique – Dakar",
    type: "Projet Académique",
    icon: "🏦",
    language: "Javafx",
    color: "from-amber-800/20 to-amber-800/5",
    achievements: [
      "Développement avec technologie Java",
      "Gestion de comptes et transactions",
      "Interface utilisateur intuitive"
    ]
  },
  {
    title: "Application de Gestion Bancaire",
    institution: "Institut Supérieur d'Informatique – Dakar",
    type: "Projet Académique",
    icon: "🏦",
    language: "C#",
    color: "from-amber-700/20 to-amber-700/5",
    achievements: [
      "Développement avec C# .NET",
      "Architecture modulaire",
      "Gestion des opérations financières"
    ]
  },
  {
    title: "Application de Gestion des Émargements",
    institution: "Institut Supérieur d'Informatique – Dakar",
    type: "Projet Académique",
    icon: "📋",
    language: "Laravel",
    color: "from-amber-900/20 to-amber-900/5",
    achievements: [
      "Développement avec Laravel",
      "Gestion des présences et du temps",
      "Interface web moderne et responsive"
    ]
  },
  {
    title: "Application de Gestion des Stocks",
    institution: "Institut Supérieur d'Informatique – Dakar",
    type: "Projet Académique",
    icon: "📦",
    language: "Laravel & blade",
    color: "from-amber-800/20 to-amber-800/5",
    achievements: [
      "Système de gestion d'inventaire",
      "Suivi des mouvements de stock",
      "Rapports et statistiques"
    ]
  },
];

const hackathons = [
  {
    title: "Hackathon - Institut Polytechnique Panafricain (IPP)",
    date: "Événement 48h",
    location: "Dakar, Sénégal",
    icon: "⚡",
    color: "from-amber-800/20 to-amber-800/5",
    achievements: [
      "Participation à un hackathon de 48h sur une plateforme e-commerce BTP",
      "Développement rapide d'une solution fonctionnelle",
      "Travail en équipe et gestion du temps sous contrainte",
      "Innovation et résolution de problèmes en environnement agile"
    ]
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Formations Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-primary" />
            <p className="text-primary text-sm tracking-[0.3em] uppercase font-semibold">
              Formations
            </p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">
            Parcours Éducatif
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Formation complète en informatique applique à la gestion des entreprises avec pratique intensive en développement d'applications.
          </p>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {educations.map((education, index) => (
            <motion.div
              key={education.degree}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div
                className={`relative h-full bg-gradient-to-br ${education.color} border border-border rounded-2xl p-8 overflow-hidden`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.5 }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <motion.span
                      className="text-4xl"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {education.icon}
                    </motion.span>
                    <Award className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h3 className="text-2xl font-semibold mb-2">
                    {education.degree}
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    {education.institution}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{education.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{education.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground">
                    {education.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-8 h-8 text-primary" />
            <p className="text-primary text-sm tracking-[0.3em] uppercase font-semibold">
              Projets Académiques
            </p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium">
            Réalisations Académiques
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div
                className={`relative h-full bg-gradient-to-br ${project.color} border border-border rounded-2xl p-6 overflow-hidden`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.5 }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <motion.span
                      className="text-3xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      {project.icon}
                    </motion.span>
                  </div>

                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-primary font-medium mb-2">
                    {project.type}
                  </p>
                  <p className="text-xs text-muted-foreground mb-4">
                    {project.institution}
                  </p>

                  {project.language && (
                    <motion.span
                      className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full mb-4 font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.language}
                    </motion.span>
                  )}

                  <ul className="space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-muted-foreground flex gap-2"
                      >
                        <motion.span
                          className="text-primary mt-0.5 flex-shrink-0"
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          transition={{ delay: 0.3 + idx * 0.05 }}
                        >
                          ✓
                        </motion.span>
                        <motion.span
                          initial={{ opacity: 0, x: -5 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: 0.3 + idx * 0.05 }}
                        >
                          {achievement}
                        </motion.span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Hackathons Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">⚡</span>
            <p className="text-primary text-sm tracking-[0.3em] uppercase font-semibold">
              Événements
            </p>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-medium">
            Hackathons & Événements
          </h2>
        </motion.div>

        {/* Hackathons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
          className="space-y-6"
        >
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ x: 8 }}
              className="group"
            >
              <div
                className={`relative bg-gradient-to-br ${hackathon.color} border border-border rounded-2xl p-8 overflow-hidden`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.5 }}
                />

                <div className="relative z-10">
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <motion.span
                        className="text-4xl block mb-3"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {hackathon.icon}
                      </motion.span>
                      <h3 className="text-2xl font-semibold">{hackathon.title}</h3>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {hackathon.date}
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2 mt-2">
                        <MapPin className="w-4 h-4" />
                        {hackathon.location}
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <motion.div
                        className="px-6 py-2 bg-primary/10 text-primary rounded-full font-medium text-sm"
                        whileHover={{ scale: 1.05 }}
                      >
                        48 heures
                      </motion.div>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <p className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Points clés
                    </p>
                    <ul className="space-y-2">
                      {hackathon.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex gap-3"
                        >
                          <motion.span
                            className="text-primary flex-shrink-0"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.4 + idx * 0.1 }}
                          >
                            →
                          </motion.span>
                          <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                          >
                            {achievement}
                          </motion.span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
