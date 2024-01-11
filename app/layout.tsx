import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const font = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vojtěch Váchal - Software Developer',
  description: 'Software Developer, Web Developer, IT Enthusiast, Vojtěch Váchal\'s portfolio. Explore my skills, projects and feel free to connect with me.',
  authors: {name: "Vojtěch Váchal", url: "https://vachal-vojtech.vercel.app"},
  keywords: ['Vojtěch', 'Váchal', 'Software', 'Developer', 'Engineer', 'IT', 'Computer', 'Science', 'Portfolio', 'Skills'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={font.className}>{children}</body>
    </html>
  )
}
