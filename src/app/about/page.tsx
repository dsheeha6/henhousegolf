'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Award, Target, Heart, Star, Check } from 'lucide-react'
import Link from 'next/link'

const AboutPage = () => {
  const achievements = [
    {
      icon: Award,
      title: 'Division 1A Varsity Golf',
      description: 'Played at Mercer University, ranked as high as 13th in the nation'
    },
    {
      icon: Star,
      title: 'Top 90 World Amateur',
      description: 'Achieved ranking as a top 90 amateur golfer in the world'
    },
    {
      icon: Target,
      title: 'Professional Experience',
      description: 'Played professional golf on the Hooters Tour'
    },
    {
      icon: Heart,
      title: '17+ Years Coaching',
      description: 'Dedicated to helping others improve their game'
    }
  ]

  const coachingPhilosophy = [
    'Focus on fundamentals to build a solid foundation',
    'Customize coaching to meet individual needs',
    'Simplify the learning process without overwhelming complexity',
    'Teach through playing lessons for real-world application',
    'Build confidence across all aspects of the game'
  ]

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
              About Jason Henley
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Professional golf coach with 24+ years of experience, dedicated to helping golfers 
              of all skill levels improve their game through personalized coaching and fundamental focus.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                My Golf Journey
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  I started playing golf at age 5, and by the age of 17, I knew it would be a lifelong passion. 
                  I grew up in St. Ives Country Club in Johns Creek, GA where I won the Club Championship in 1999 and 2000, 
                  and went on to play Division 1A Varsity Golf at Mercer University.
                </p>
                
                <p>
                  During my college career, I was ranked as high as 13th in the nation for Division 1A and as a top 90 
                  amateur golfer in the world. Following college, I played professional golf on the Hooters Tour before 
                  transitioning to a career in the Telecom industry.
                </p>
                
                <p>
                  For the past 17+ years, I&apos;ve been coaching others and helping them improve their game. It&apos;s a great day 
                  when I can get to the course for practice and even better if I can help someone else while I&apos;m there.
                </p>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-6 rounded-xl"
                  >
                    <achievement.icon className="h-8 w-8 text-green-600 mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coaching Philosophy */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Coaching Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              &ldquo;We customize our coaching to meet your needs and believe that focusing on the fundamentals 
              simplifies the process of learning without having to spend &lsquo;Country Club&rsquo; money.&rdquo;
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {coachingPhilosophy.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-start space-x-3">
                  <Check className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{principle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Improve Your Game?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s work together to take your golf game to the next level. 
              Book a session today and start your journey to better golf.
            </p>
            <Link href="/book" className="btn-primary">
              Schedule Your Session
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default AboutPage 