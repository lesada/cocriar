import Header from '@/components/Header'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Co-criar'
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '700']
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '700']
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
