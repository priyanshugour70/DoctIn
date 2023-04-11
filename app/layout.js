import './globals.css'

export const metadata = {
  title: 'DoctIn | Home',
  description: 'This web application connects patients with disabilities with doctors.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
