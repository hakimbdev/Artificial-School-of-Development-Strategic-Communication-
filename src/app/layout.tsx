import type { Metadata } from 'next'
import '@/globals.css'

export const metadata: Metadata = {
  title: 'ASDSC | Build Authority. Communicate Impact. Earn Verified Professional Credentials.',
  description: 'Artificial School of Development & Strategic Communication - AI-powered professional learning platform for scholars, lecturers, and leaders.',
  keywords: 'professional learning, AI education, certificate, development, strategic communication',
  authors: [{ name: 'ASDSC Team' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'ASDSC - Professional Learning Platform',
    description: 'Earn verified professional credentials with AI-powered adaptive learning.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
