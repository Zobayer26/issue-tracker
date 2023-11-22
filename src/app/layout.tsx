import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@radix-ui/themes/styles.css';
import './theme-config.css'
import './globals.css'
import Navbar from '@/components/Navbar'
import { Theme } from '@radix-ui/themes';

const inter = Inter({ subsets: ['latin'],
variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Issue Tracker',
  description: 'devlop using next js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
      <Theme appearance="light" accentColor="iris">
        <Navbar />
        <main className='p-5'>
          {children}
        </main>
        </Theme>
      </body>
    </html>
  )
}
