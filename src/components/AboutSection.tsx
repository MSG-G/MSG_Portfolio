import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Heart, Zap, Users } from "lucide-react";
import developImage from "@/assets/profil.jpeg";
import { OptimizedImage } from "@/components/ui/optimized-image";

const traits = [
  { icon: Zap, label: "Déterminé", color: "from-amber-900/20 to-amber-900/5" },
  { icon: Users, label: "Sérieux", color: "from-amber-700/20 to-amber-700/5" },
  { icon: Heart, label: "Autonome", color: "from-amber-800/20 to-amber-800/5" },
  { icon: Globe, label: "Bilingue", color: "from-amber-700/20 to-amber-700/5" },
];

const interests = [
  { icon: "💻", label: "Coder" },
  { icon: "🏊", label: "Natation" },
  { icon: "📺", label: "Anime/Manga" },
  { icon: "🎮", label: "Jeu vidéo" },
  { icon: "♟️", label: "Échecs" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="a-propos" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              À propos
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-8">
              Développeur Full-Stack & Community Manager
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Déterminé, sérieux et autonome, avec une solide formation en informatique de gestion 
                et des expériences pratiques en développement d'applications et en gestion de projets numériques.
              </p>
              <p>
                Je combine expertise technique et engagement communautaire pour créer 
                des solutions web modernes et fonctionnelles tout en construisant des 
                communautés engagées autour des produits et marques.
              </p>
              <p>
                Enthousiaste et en constante évolution, je recherche des défis 
                stimulants pour progresser et apporter de la valeur à chaque projet 
                sur lequel je travaille.
              </p>
            </div>

            {/* Traits */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {traits.map((trait, index) => {
                const IconComponent = trait.icon;
                return (
                  <motion.div
                    key={trait.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`relative bg-gradient-to-br ${trait.color} border border-border rounded-lg p-4 flex items-center gap-3`}
                  >
                    <IconComponent className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{trait.label}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                Langues
              </p>
              <div className="flex gap-4">
                {["Français", "Anglais"].map((lang, idx) => (
                  <motion.span
                    key={lang}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + idx * 0.1 }}
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div 
              className="aspect-[4/5] bg-secondary rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ scale: 1.1 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 1.2, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
              >
                <OptimizedImage 
                  src={developImage} 
                  alt="Mouhadji Samba GUEYE" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <p className="text-3xl font-display font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground">Engagement & Passion</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-muted/50 border border-border rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            <Heart className="w-6 h-6 text-primary" />
            Centres d'intérêts
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.label}
                className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary transition-colors cursor-pointer group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <motion.span
                  className="text-3xl mb-2 block"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.1 }}
                >
                  {interest.icon}
                </motion.span>
                <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {interest.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
