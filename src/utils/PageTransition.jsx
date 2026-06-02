import { motion } from "framer-motion";

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ x: "100%" }}      // Start from right side
      animate={{ x: 0 }}           // Move to center
      exit={{ x: "-100%" }}        // Leave to left side
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;