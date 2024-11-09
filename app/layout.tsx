import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

export const metadata = {
  title: 'Baby Shower Trivia',
  description: 'A fun trivia game for a baby shower',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <head>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
      />
    </head>
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
    </>
  )
}
