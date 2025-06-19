"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Persona from "@/components/persona"
import { NavItem } from "@/components/nav-item"
import { useMobile } from "@/hooks/use-mobile"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Content", path: "/content" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Web3 & NFTs", path: "/web3" },
  { name: "Community", path: "/community" },
]

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-[#8B5CF6]/90 backdrop-blur-md text-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
            whileHover={{ scale: 1.05 }}
          >
            <span
              className={`text-xl md:text-2xl font-bold ${scrolled ? "text-white" : "text-[#8B5CF6]"} comic-title`}
              style={{
                textShadow: scrolled
                  ? "2px 2px 0 #5B21B6, -1px -1px 0 #5B21B6, 1px -1px 0 #5B21B6, -1px 1px 0 #5B21B6, 1px 1px 0 #5B21B6"
                  : "2px 2px 0 #5B21B6, -1px -1px 0 #5B21B6, 1px -1px 0 #5B21B6, -1px 1px 0 #5B21B6, 1px 1px 0 #5B21B6",
              }}
            >
              Wave
            </span>
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-1 bg-[#FB923C]"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          {navItems.map((item) => (
            <NavItem
              key={item.path}
              name={item.name}
              path={item.path}
              isActive={pathname === item.path}
              isScrolled={scrolled}
            />
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className={scrolled ? "text-white" : ""}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80vw] max-w-[300px] border-l-[#8B5CF6] p-0">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <span
                  className="text-xl font-bold text-[#8B5CF6] comic-title"
                  style={{
                    textShadow:
                      "1px 1px 0 #5B21B6, -0.5px -0.5px 0 #5B21B6, 0.5px -0.5px 0 #5B21B6, -0.5px 0.5px 0 #5B21B6, 0.5px 0.5px 0 #5B21B6",
                  }}
                >
                  Wave
                </span>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 p-0">
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <nav className="flex flex-col p-2 overflow-y-auto flex-grow">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={item.path}
                      className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-colors relative ${
                        pathname === item.path ? "bg-[#8B5CF6]/10 text-[#8B5CF6]" : "hover:bg-gray-100 text-gray-700"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {/* Mobile Nav Portal - Only show for active item */}
                      {pathname === item.path && (
                        <motion.div
                          className="absolute -z-10 left-0 top-0 w-full h-full overflow-hidden rounded-lg"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 20,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "linear",
                            }}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/4 portal-glow"
                            style={{ opacity: 0.5 }}
                          >
                            <Image
                              src="/images/portal.png"
                              alt="Navigation Portal"
                              width={40}
                              height={40}
                              loading="lazy"
                              className="w-10 h-10"
                            />
                          </motion.div>
                        </motion.div>
                      )}

                      <div className="flex-shrink-0">
                        <Persona emotion={item.name === "About" ? "about" : item.name.toLowerCase()} size="tiny" />
                      </div>
                      <span className="font-medium comic-text-body text-base">{item.name}</span>
                      {pathname === item.path && (
                        <motion.div
                          className="ml-auto w-1 h-6 bg-[#8B5CF6] rounded-full"
                          layoutId="mobile-indicator"
                          initial={{ height: 0 }}
                          animate={{ height: "1.5rem" }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="p-4 border-t border-gray-200">
                <div className="wave-bg h-6 rounded-lg"></div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
