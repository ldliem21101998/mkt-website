"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function FadeInWhenVisible({
  children,
  delay = 0,
  duration = 0.6,
  y = 30,
}: {
  children: React.ReactNode
  delay?: number
  duration?: number
  y?: number
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  )
}