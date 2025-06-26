'use client'

import { motion } from 'framer-motion'
import { Camera, Users, Target } from 'lucide-react'
import Image from 'next/image'

const GallerySection = () => {
  const galleryItems = [
    {
      id: 1,
      title: 'Personal Coaching',
      description: 'One-on-one instruction tailored to your needs',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=400&h=300&fit=crop&crop=center',
      alt: 'Golf coaching session'
    },
    {
      id: 2,
      title: 'Course Management',
      description: 'Learn strategic thinking and course navigation',
      icon: Target,
      image: '/michael-jasmund-QU5Gt-2Xovs-unsplash.jpg',
      alt: 'Golf course view'
    },
    {
      id: 3,
      title: 'Swing Analysis',
      description: 'Detailed technique improvement and feedback',
      icon: Camera,
      image: '/edwin-compton-Z8XlmAj65iM-unsplash.jpg',
      alt: 'Golf swing analysis'
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Experience HenHouse Golf
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our personalized approach transforms your game through focused instruction and real-world application.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center space-x-3 mb-3">
                  <item.icon className="h-6 w-6 text-green-400" />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                <p className="text-green-100 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection 