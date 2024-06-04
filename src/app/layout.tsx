import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Providers } from "./providers"
import Navbar from "./components/Navbar"
import { ReactNode } from "react"
import { Flex } from "@chakra-ui/react"
import Footer from "./components/Footer"
import Hero from "./components/Hero"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Iades",
  description: "Generated by create next app",
  creator: "John Tsourtis",
  icons: {
    icon: "/svg/shortcut_icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}

const Layout = ({
  children,
}: Readonly<{
  children: ReactNode
}>) => (
  <Flex
    direction="column"
    justifyContent="space-between"
    alignItems="center"
    w="100%"
    maxW="100vw"
    h="100%"
    maxH="100%"
  >
    <Navbar />
    {children}
    <Footer />
  </Flex>
)
