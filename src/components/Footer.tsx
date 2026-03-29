import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      className="py-8 px-6 border-t border-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.p 
          className="text-sm text-muted-foreground"
          whileHover={{ scale: 1.02 }}
        >
          © 2025 Mouhadji.S.Gueye. Tous droits réservés.
        </motion.p>
        <motion.p 
          className="text-sm text-muted-foreground"
          whileHover={{ scale: 1.02 }}
        >
          Fait avec <motion.span 
            className="text-primary inline-block"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >♥</motion.span> à Dakar
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
