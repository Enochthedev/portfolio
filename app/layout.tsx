import type React from "react"
import type { Metadata } from "next"
import { Inter, Bangers, Comic_Neue, Permanent_Marker } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
  display: "swap",
})

const comicNeue = Comic_Neue({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-comic-neue",
  display: "swap",
})

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-permanent-marker",
  display: "swap",
})

export const metadata: Metadata = {
  title: "WaveDidWhat - Streams, Codes, and Vibes",
  description: "A cartoon universe of streams, coding projects, and good vibes",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  icons: {
    icon: "/favicon.ico", // or "/favicon.png" if you prefer
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${bangers.variable} ${comicNeue.variable} ${permanentMarker.variable} min-h-screen flex flex-col`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
