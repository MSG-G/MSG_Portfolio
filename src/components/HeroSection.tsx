import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useMemo } from "react";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const arrowOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const arrowY = useTransform(scrollY, [0, 200], [0, 50]);

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  };

  const nameArray = useMemo(() => "Mouhadji S. Gueye".split(""), []);
  const fullName = "Mouhadji S. Gueye";
  
  // Déterminer quelles lettres auront le gradient (après "Mouhadji ")
  const gradientStartIndex = "Mouhadji ".length;

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-4 sm:px-6 py-16 sm:py-20 overflow-hidden">
      {/* Background animated shapes */}
      <motion.div
        className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", repeatType: "loop" }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", repeatType: "loop" }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-muted-foreground text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 sm:mb-6"
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Développeur & Designer
          </motion.span>
        </motion.p>

        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-4 sm:mb-6 break-words">
          {nameArray.map((letter, i) => (
            <motion.span
              key={`${i}-${letter}`}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className={letter === " " ? "inline" : i >= gradientStartIndex ? "text-gradient inline-block" : "inline-block"}
              whileHover={{ scale: 1.2, transition: { type: "spring", stiffness: 300 } }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-2"
        >
          Je transforme des idées en expériences web captivantes, combinant design sophistiqué 
          et développement précis pour créer des solutions qui inspirent et convertissent.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2"
        >
          <motion.a
            href="#projets"
            className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-primary transition-colors duration-300 whitespace-nowrap"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Voir mes projets
          </motion.a>
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 border border-border px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-secondary transition-colors duration-300 whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Me contacter
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        style={{ opacity: arrowOpacity, y: arrowY }}
        className="absolute bottom-8 sm:bottom-12"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", repeatType: "loop" }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
