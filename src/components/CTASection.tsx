'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Phone, Mail } from 'lucide-react'

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-green-600 to-green-700 text-white">
      {/* Content */}
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Golf Game?
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Don&apos;t let another season pass by without improving your game. Let&apos;s work together to take your golf 
            skills to the next level and make every round more enjoyable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              href="/contact" 
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform inline" />
            </Link>
            
            <Link 
              href="/about" 
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Learn More About Me
            </Link>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Phone className="h-6 w-6 text-green-200" />
              <div className="text-left">
                <div className="text-sm text-green-200">Call or Text</div>
                <div className="font-semibold text-white">(404) 561-3043</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <Mail className="h-6 w-6 text-green-200" />
              <div className="text-left">
                <div className="text-sm text-green-200">Email</div>
                <div className="font-semibold text-white">jason@henhousegolf.com</div>
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
          >
            <h3 className="text-xl font-semibold mb-2 text-white">Why Choose HenHouse Golf?</h3>
            <p className="text-green-100">
              We customize our coaching to meet your needs and believe that focusing on the fundamentals 
              simplifies the process of learning without having to spend &ldquo;Country Club&rdquo; money.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection 