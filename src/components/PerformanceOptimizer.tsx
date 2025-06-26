'use client'

import { useEffect } from 'react'

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Optimize images for better performance
    const images = document.querySelectorAll('img')
    images.forEach(img => {
      img.loading = 'lazy'
      img.decoding = 'async'
    })

    // Add intersection observer for better performance
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      }, {
        threshold: 0.1,
        rootMargin: '50px'
      })

      // Observe elements that can benefit from lazy loading
      const lazyElements = document.querySelectorAll('[data-lazy]')
      lazyElements.forEach(el => observer.observe(el))

      return () => observer.disconnect()
    }
  }, [])

  return null
}

export default PerformanceOptimizer 