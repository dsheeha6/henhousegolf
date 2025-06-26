'use client'

import { motion } from 'framer-motion'
import { Target, Heart, Zap } from 'lucide-react'

const KeyPrinciplesSection = () => {
  const principles = [
    {
      icon: Target,
      title: 'Learn the Fundamentals',
      description: 'Master the basics to build a solid foundation for your golf game.'
    },
    {
      icon: Heart,
      title: 'Relax & Enjoy the Game',
      description: 'Golf is meant to be fun. Learn to play with joy and appreciation.'
    },
    {
      icon: Zap,
      title: 'Play with Confidence',
      description: 'Develop the mental game and trust in your abilities on the course.'
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Three Key Principles
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our approach to golf coaching is built on these fundamental principles
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <principle.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {principle.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KeyPrinciplesSection 