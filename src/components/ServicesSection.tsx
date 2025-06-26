'use client'

import { motion } from 'framer-motion'
import { User, Users, GraduationCap, Clock, Video, ShoppingCart, Users2 } from 'lucide-react'
import Link from 'next/link'

const ServicesSection = () => {
  const services = [
    {
      icon: GraduationCap,
      title: 'Education for Beginners',
      description: 'Virtual education session to understand basics from what to wear, what to bring, and what to expect before your first time on the course.',
      price: '$50/hr',
      duration: '30-60 min',
      features: ['Virtual session', 'Course etiquette', 'Equipment guidance', 'What to expect']
    },
    {
      icon: User,
      title: 'Swing Coaching',
      description: 'In-person session focusing on your golf swing from driver to pitching wedge and putter. Customized based on your skill level and goals.',
      price: '$80/hr',
      duration: '60 min',
      features: ['Driver to putter', 'Customized approach', 'Home or local facility', 'Personal goals focus']
    },
    {
      icon: Users,
      title: 'Playing Lessons',
      description: 'For beginners: comfortable environment to learn fundamentals and etiquette. For experienced golfers: extended coaching on areas you need most.',
      price: '$150-250',
      duration: '3-5 hours',
      features: ['Course management', 'Club selection', 'Scoring techniques', 'Extended coaching time']
    },
    {
      icon: Video,
      title: 'Virtual Swing Lesson',
      description: 'Send a video of your swing for analysis and receive feedback and suggestions for improvement.',
      price: '$50/hr',
      duration: '30-60 min',
      features: ['Video analysis', 'Written feedback', 'Improvement suggestions', 'Between lesson support']
    },
    {
      icon: ShoppingCart,
      title: 'General Consulting',
      description: 'Help navigating the process of investing in new clubs to ensure you feel confident in your purchase.',
      price: '$50/hr',
      duration: '30-60 min',
      features: ['Club selection guidance', 'Purchase confidence', 'Equipment advice', 'Investment planning']
    },
    {
      icon: Users2,
      title: 'Fill Your Foursome',
      description: 'Need an experienced player for your upcoming golf tournament? We may be able to help!',
      price: 'Contact for pricing',
      duration: 'Tournament length',
      features: ['Tournament experience', 'Competitive play', 'Team support', 'Flexible scheduling']
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Golf Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our range of coaching services designed to help you improve your golf game at every level.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>

              {/* Price and Duration */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-green-600">
                  {service.price}
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{service.duration}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link href="/book">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Book Now
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Golf Game?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Book your first lesson today and start your journey to better golf.
            </p>
            <Link href="/book">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Schedule Your Lesson
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection 