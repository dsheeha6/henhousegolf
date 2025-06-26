'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, Users, GraduationCap, Check, ArrowRight, Video, ShoppingCart, Users2 } from 'lucide-react'
import Link from 'next/link'

const BookPage = () => {
  const [selectedService, setSelectedService] = useState('swing')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')

  const services = [
    {
      id: 'education',
      icon: GraduationCap,
      title: 'Education for Beginners',
      duration: '30-60 minutes',
      price: '$50/hr',
      description: 'Virtual education session to understand basics from what to wear, what to bring, and what to expect before your first time on the course.',
      features: [
        'Virtual session',
        'Course etiquette',
        'Equipment guidance',
        'What to expect'
      ]
    },
    {
      id: 'swing',
      icon: User,
      title: 'Swing Coaching',
      duration: '60 minutes',
      price: '$80/hr',
      description: 'In-person session focusing on your golf swing from driver to pitching wedge and putter. Customized based on your skill level and goals.',
      features: [
        'Driver to putter',
        'Customized approach',
        'Home or local facility',
        'Personal goals focus'
      ]
    },
    {
      id: 'playing',
      icon: Users,
      title: 'Playing Lessons',
      duration: '3-5 hours',
      price: '$150-250',
      description: 'For beginners: comfortable environment to learn fundamentals and etiquette. For experienced golfers: extended coaching on areas you need most.',
      features: [
        'Course management',
        'Club selection',
        'Scoring techniques',
        'Extended coaching time'
      ]
    },
    {
      id: 'virtual',
      icon: Video,
      title: 'Virtual Swing Lesson',
      duration: '30-60 minutes',
      price: '$50/hr',
      description: 'Send a video of your swing for analysis and receive feedback and suggestions for improvement.',
      features: [
        'Video analysis',
        'Written feedback',
        'Improvement suggestions',
        'Between lesson support'
      ]
    },
    {
      id: 'consulting',
      icon: ShoppingCart,
      title: 'General Consulting',
      duration: '30-60 minutes',
      price: '$50/hr',
      description: 'Help navigating the process of investing in new clubs to ensure you feel confident in your purchase.',
      features: [
        'Club selection guidance',
        'Purchase confidence',
        'Equipment advice',
        'Investment planning'
      ]
    },
    {
      id: 'foursome',
      icon: Users2,
      title: 'Fill Your Foursome',
      duration: 'Tournament length',
      price: 'Contact for pricing',
      description: 'Need an experienced player for your upcoming golf tournament? We may be able to help!',
      features: [
        'Tournament experience',
        'Competitive play',
        'Team support',
        'Flexible scheduling'
      ]
    }
  ]

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically integrate with a booking system
    alert('Booking form submitted! This would integrate with your booking system.')
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Schedule a Session
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Choose your preferred service, select a convenient time, and start your journey 
              to better golf today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Service Selection */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Choose Your Service</h2>
              
              <div className="max-h-[600px] overflow-y-auto pr-2 space-y-4">
                {services.map((service) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`border-2 rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                      selectedService === service.id
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                    onClick={() => setSelectedService(service.id)}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        selectedService === service.id ? 'bg-green-500' : 'bg-gray-100'
                      }`}>
                        <service.icon className={`h-5 w-5 ${
                          selectedService === service.id ? 'text-white' : 'text-gray-600'
                        }`} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-bold text-gray-900 truncate">{service.title}</h3>
                          <div className="text-right flex-shrink-0 ml-2">
                            <div className="text-base font-bold text-green-600">{service.price}</div>
                            <div className="text-xs text-gray-500">{service.duration}</div>
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{service.description}</p>
                        
                        <div className="grid grid-cols-2 gap-1">
                          {service.features.slice(0, 4).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-xs text-gray-600">
                              <Check className="h-3 w-3 text-green-500 mr-1 flex-shrink-0" />
                              <span className="truncate">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Session</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Date Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="h-4 w-4 inline mr-2" />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
                      required
                    />
                  </div>

                  {/* Time Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="h-4 w-4 inline mr-2" />
                      Preferred Time
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
                      required
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>

                  {/* Contact Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Special Requests or Notes
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-black"
                      placeholder="Any specific areas you'd like to focus on, experience level, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary group"
                  >
                    Schedule Session
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform inline" />
                  </button>
                </form>

                {/* Additional Info */}
                <div className="mt-8 p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">What to Expect</h3>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Confirmation email within 24 hours</li>
                    <li>• Please arrive 10 minutes early</li>
                    <li>• Bring your own clubs if possible</li>
                    <li>• Dress comfortably for outdoor activity</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Online Scheduling Notice */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <Link href="/book" className="btn-primary text-lg px-8 py-4">
              Schedule Online
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-3">What should I bring to my lesson?</h3>
              <p className="text-gray-600">Bring your golf clubs if you have them, comfortable clothing, and a positive attitude. We can provide clubs if needed.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-3">How do I cancel or reschedule?</h3>
              <p className="text-gray-600">Please contact us at least 24 hours in advance to cancel or reschedule your lesson. Late cancellations may incur a fee.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-3">What if it rains?</h3>
              <p className="text-gray-600">We&apos;ll contact you to reschedule if weather conditions are unfavorable. Your safety and comfort are our priority.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Do you offer package deals?</h3>
              <p className="text-gray-600">Yes! We offer discounted packages for multiple lessons. Contact us to discuss custom packages that fit your needs.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default BookPage 