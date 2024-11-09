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
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
      <link rel="manifest" href="/favicon/site.webmanifest"></link>
    </head>
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
    </>
  )
}
