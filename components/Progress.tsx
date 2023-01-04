import { motion, useScroll } from "framer-motion";

export default function Progress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-2 bg-gray-300"
      style={{ transformOrigin: '0%', scaleX: scrollYProgress }}
    />
  )
}