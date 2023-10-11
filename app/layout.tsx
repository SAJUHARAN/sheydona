import { Navbar,Footer } from '@/components'
import './globals.css'


export const Metadata = {
  title: 'legacy wear',
  description: 'best wears ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        { <Navbar/>}
        {children}
        <Footer/>
        </body>
    </html>
  )
}
