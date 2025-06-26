'use client'

import { motion } from 'framer-motion'
import { Flag, Circle, Target } from 'lucide-react'

const GolfDivider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-8 flex items-center justify-center"
    >
      <div className="flex items-center space-x-4">
        <div className="w-12 h-px bg-gradient-to-r from-transparent to-green-400"></div>
        <div className="flex items-center space-x-2">
          <Flag className="h-4 w-4 text-green-600" />
          <Circle className="h-4 w-4 text-green-500" />
          <Target className="h-4 w-4 text-green-600" />
        </div>
        <div className="w-12 h-px bg-gradient-to-l from-transparent to-green-400"></div>
      </div>
    </motion.div>
  )
}

export default GolfDivider 