import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Jason Henley - Professional Golf Coach | HenHouse Golf',
  description: 'Learn about Jason Henley\'s golf coaching philosophy, experience, and approach to helping players improve their game.',
  keywords: 'golf instructor bio, golf teaching philosophy, golf coach credentials, professional golf coach',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 