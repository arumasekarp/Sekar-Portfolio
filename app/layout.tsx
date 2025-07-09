import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sekar's Portfolio - Wahyu Aji Aruma Sekar Puri",
  description:
    "Portfolio website showcasing data analytics and information systems projects by Wahyu Aji Aruma Sekar Puri, Information Systems student at Universitas Indonesia.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
