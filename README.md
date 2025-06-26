# Hen House Golf - Professional Golf Instruction Website

A modern, responsive, and SEO-optimized website for a golf teaching professional. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🏌️ Features

### Design & User Experience
- **Modern, Clean Design**: Professional aesthetic with golf-themed color scheme
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Subtle animations using Framer Motion for enhanced UX
- **Fast Loading**: Optimized for performance and SEO
- **Accessible**: Built with accessibility best practices

### Pages & Sections
1. **Homepage**
   - Hero section with compelling copy and CTAs
   - About section with instructor background
   - Services showcase (Individual, Group, Junior lessons)
   - Testimonials slider with student reviews
   - Call-to-action sections

2. **About Page**
   - Detailed instructor bio and story
   - Teaching philosophy
   - Credentials and achievements
   - Professional background

3. **Book a Lesson Page**
   - Service selection (Individual, Group, Junior)
   - Interactive booking form
   - Date and time selection
   - FAQ section

4. **Contact Page**
   - Contact form with validation
   - Contact information display
   - Quick response guarantee
   - Common questions section

### Technical Features
- **SEO Optimized**: Meta tags, structured data, semantic HTML
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations and transitions
- **Lucide Icons**: Beautiful, consistent iconography
- **Mobile-First**: Responsive design approach

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd henhousegolf-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── book/              # Booking page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── Navbar.tsx         # Navigation component
│   ├── Hero.tsx           # Hero section
│   ├── AboutSection.tsx   # About section
│   ├── ServicesSection.tsx # Services showcase
│   ├── TestimonialsSection.tsx # Testimonials slider
│   ├── CTASection.tsx     # Call-to-action section
│   └── Footer.tsx         # Footer component
```

## 🎨 Customization

### Colors
The website uses a golf-themed color palette:
- Primary Green: `#16a34a` (green-600)
- Secondary Blue: `#3b82f6` (blue-500)
- Neutral Grays: Various gray shades for text and backgrounds

### Content
- Update instructor information in the About page
- Modify services and pricing in the Services section
- Add real testimonials and reviews
- Update contact information throughout the site

### Styling
- Custom CSS classes are defined in `globals.css`
- Component-specific styles use Tailwind CSS utilities
- Animations are handled by Framer Motion

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📈 SEO Features

- Semantic HTML structure
- Meta tags for all pages
- Open Graph tags for social sharing
- Structured data markup
- Fast loading times
- Mobile-friendly design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For questions or support, please contact:
- Email: info@henhousegolf.com
- Phone: (555) 123-4567

---

Built with ❤️ for golf instruction professionals
