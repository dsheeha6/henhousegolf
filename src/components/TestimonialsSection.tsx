'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Nicholas Pierce',
      role: 'High School Golfer',
      content: 'Mr. Henley started teaching me the fundamentals of golf in middle school. Through a combination of playing lessons, virtual swing lessons, and various putting and chipping challenges, he made it fun and prepared me for High School Golf.',
      rating: 5
    },
    {
      name: 'Robert Powell',
      role: 'Adult Student',
      content: 'Jason\'s ability to transfer information in a way that is easy to comprehend is what stands him apart from others that I have taken lessons from. His successful background as a competitive collegiate and pro golfer help validate and drive home his advice. Being able to "dumb it down" for me was crucial to improving my game in every facet. From putting to irons and woods, I have seen a noticeable difference in my game over the years I have had lessons with him.',
      rating: 5
    },
    {
      name: 'Charles Gibson',
      role: 'Professional Golfer & Caddy',
      content: 'I have known Jason since we were both five years old. His ability to transform his game, understand the golf swing, and simplify it for others is quite extraordinary. He has an uncanny ability to use his experience to teach both beginners and experienced players, and as a professional former golfer and caddy, that ease of communication can\'t be understated.',
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
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
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from students who have transformed their golf game with Jason&apos;s coaching.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-green-600" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 mb-4">
            Ready to join our success stories?
          </p>
          <a
            href="/book"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Start Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection 