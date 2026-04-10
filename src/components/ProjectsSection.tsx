import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import  DB_kaayScanner from "@/assets/screen-kaayScanner.png";
import DB_gestion_scolarite from "@/assets/Db_gestion_scolaire.png";
import DB_gestion_banque from "@/assets/DB_gestion_banque.png";
import { OptimizedImage } from "@/components/ui/optimized-image";

const projects = [
  {
    title: "Kaay Scanner",
    category: "Web App",
    description: "Plateforme de numérisation des menus des restaurants, accès via qr code.",
    fullDescription: "Kaay Scanner est une plateforme web innovante dédiée à la digitalisation et à la gestion des entreprises locales, notamment les restaurants, pâtisseries et autres commerces au Sénégal",
    tags: ["React + TypeScript", "Node.js avec Express", "ShadCN + Tailwind CSS","Resend.com pour les emails transactionnels"],
    color: "from-amber-900/20 to-amber-900/5",
    image: DB_kaayScanner,
    isImage: true,
    liveUrl: "https://kaayscanner.com",
    githubUrl: "https://github.com/MSG-G/projet-kaay-scanne",
  },
  {
    title: "Gestion Scolarite",
    category: "SaaS",
    description: "Application est une plateforme web développée avec Laravel, permettant de gérer efficacement un établissement scolaire.",
    fullDescription: "Elle intègre des fonctionnalités modernes grâce à Livewire pour une interface dynamique sans rechargement et Jetstream pour une authentification sécurisée.",
    tags: ["Laravel", "Livewire + Blade + Tailwind CSS", "Jetstream", "PostgreSQL"],
    color: "from-amber-800/20 to-amber-800/5",
    image: DB_gestion_scolarite,
    isImage: true,
    liveUrl: "https://github.com/MSG-G/Projet_Gestion_scolarite",
    githubUrl: "https://github.com/MSG-G/Projet_Gestion_scolarite",
  },
  {
    title: "Gestion banque",
    category: "desktop App",
    description: "Application de gestion bancaire développée en Java, offrant des fonctionnalités de gestion de comptes, de transactions et de rapports financiers.",
    fullDescription: "Une application de gestion bancaire moderne développée avec JavaFX (JDK 17), permettant la gestion des clients, des comptes et des opérations bancaires.",
    tags: ["javafx", "JDK17", "postgres"],
    color: "from-amber-700/20 to-amber-700/5",
    image: DB_gestion_banque,
    isImage: true,
    liveUrl: "https://github.com/MSG-G/gestion_banque_javafx",
    githubUrl: "https://github.com/MSG-G/gestion_banque_javafx",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <section id="projets" className="py-32 px-6" ref={ref}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Portfolio
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium">
              Projets sélectionnés
            </h2>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="bg-card border border-border rounded-2xl overflow-hidden cursor-pointer"
                  whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="grid lg:grid-cols-2">
                    <motion.div 
                      className={`aspect-video lg:aspect-auto bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}
                      whileHover={{ scale: 1.02 }}
                    >
                      {project.isImage ? (
                        <motion.div whileHover={{ scale: 1.05 }}>
                          <OptimizedImage 
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      ) : (
                        <motion.div 
                          className="text-6xl "
                          animate={{ rotate: [0, 5, -5, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                          {project.image}
                        </motion.div>
                      )}
                    </motion.div>
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <motion.p 
                        className="text-primary text-sm tracking-wider uppercase mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.15 + 0.3 }}
                      >
                        {project.category}
                      </motion.p>
                      <motion.h3 
                        className="font-display text-2xl md:text-3xl font-medium mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.15 + 0.4 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p 
                        className="text-muted-foreground mb-6 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: index * 0.15 + 0.5 }}
                      >
                        {project.description}
                      </motion.p>
                      <motion.div 
                        className="flex flex-wrap gap-2 mb-8"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: index * 0.15 + 0.6 }}
                      >
                        {project.tags.map((tag, tagIndex) => (
                          <motion.span
                            key={tag}
                            className="text-xs bg-secondary px-3 py-1.5 rounded-full"
                            whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: index * 0.15 + 0.6 + tagIndex * 0.1 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </motion.div>
                      <motion.div 
                        className="flex gap-4"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: index * 0.15 + 0.7 }}
                      >
                        <motion.button 
                          className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                          whileHover={{ x: 5 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProject(project);
                          }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Voir le projet
                        </motion.button>
                        <motion.a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                          whileHover={{ x: 5 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-4 h-4" />
                          Code source
                        </motion.a>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-card rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-border shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`aspect-video bg-gradient-to-br ${selectedProject.color} flex items-center justify-center relative`}>
                {selectedProject.isImage ? (
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <OptimizedImage 
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ) : (
                  <motion.div 
                    className="text-8xl"
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {selectedProject.image}
                  </motion.div>
                )}
                <motion.button
                  className="absolute top-4 right-4 w-10 h-10 bg-background/90 rounded-full flex items-center justify-center hover:bg-background transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
              
              <div className="p-8">
                <motion.p 
                  className="text-primary text-sm tracking-wider uppercase mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {selectedProject.category}
                </motion.p>
                <motion.h3 
                  className="font-display text-3xl md:text-4xl font-medium mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {selectedProject.title}
                </motion.h3>
                <motion.p 
                  className="text-muted-foreground mb-6 leading-relaxed text-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {selectedProject.fullDescription}
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap gap-2 mb-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm bg-secondary px-4 py-2 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
                
                <motion.div 
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Voir le site
                  </motion.a>
                  <motion.a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full font-medium hover:bg-secondary transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    Code source
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectsSection;
