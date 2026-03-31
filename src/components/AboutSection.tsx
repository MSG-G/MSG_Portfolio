import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import developImage from "@/assets/profil.jpeg";
import { OptimizedImage } from "@/components/ui/optimized-image";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="a-propos" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              À propos
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-8">
              Développeur junior passionné par le web
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Je suis développeur et designer en formation, motivé par la création 
                de solutions web modernes et fonctionnelles. J'aime apprendre, 
                expérimenter et transformer des idées en produits concrets.
              </p>
              <p>
                Je m'efforce 
                de créer des interfaces intuitives et esthétiques tout en respectant 
                les bonnes pratiques de code et la performance.
              </p>
              <p>
                Enthousiaste et en constante évolution, je recherche des défis 
                stimulants pour progresser et apporter de la valeur à chaque projet 
                sur lequel je travaille.
              </p>
            </div>
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
                  alt="Développeur" 
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
              <p className="text-3xl font-display font-bold text-gradient">100%</p>
              <p className="text-sm text-muted-foreground">Engagement & Passion</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
