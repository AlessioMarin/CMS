"use client"

import React, { useState } from "react"
import { Menu, X } from "lucide-react"

import type { TStrapiNavbar } from "@/types/api"

import { AppLink } from "@/components/elementary/AppLink"
import { Container } from "@/components/elementary/Container"
import { ImageWithFallback } from "@/components/elementary/ImageWithFallback"
import { Button } from "@/components/ui/button"

interface StrapiNavbarProps {
  data: TStrapiNavbar | null
}

const StrapiNavbar: React.FC<StrapiNavbarProps> = ({ data }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  if (!data) {
    return (
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-slate-800 bg-slate-900/95 backdrop-blur-sm">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <div className="text-xl font-bold text-white">
              Atlantic Partners
            </div>
          </div>
        </Container>
      </nav>
    )
  }

  const { links, logoImage } = data

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-slate-800 bg-slate-900/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            {logoImage?.image?.url ? (
              <AppLink
                href={logoImage.link?.href || "/"}
                newTab={logoImage.link?.newTab}
              >
                <div className="flex items-center space-x-3">
                  <ImageWithFallback
                    src={logoImage.image.url}
                    alt={logoImage.image.alternativeText || "Atlantic Partners"}
                    width={logoImage.image.width || 150}
                    height={logoImage.image.height || 40}
                    className="h-8 w-auto brightness-0 invert filter md:h-10"
                  />
                </div>
              </AppLink>
            ) : (
              <AppLink
                href="/"
                className="text-xl font-bold text-white md:text-2xl"
              >
                Atlantic Partners
              </AppLink>
            )}
          </div>

          {/* Desktop Menu */}
          {links && links.length > 0 && (
            <div className="hidden items-center space-x-8 md:flex">
              {links.map((link, index) => (
                <AppLink
                  key={index}
                  href={link.href}
                  newTab={link.newTab}
                  className="font-medium text-slate-200 underline-offset-4 transition-colors duration-200 hover:text-white hover:underline"
                >
                  {link.label}
                </AppLink>
              ))}
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:bg-slate-800 hover:text-slate-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && links && links.length > 0 && (
          <div className="border-t border-slate-800 bg-slate-900/98 backdrop-blur-sm md:hidden">
            <div className="space-y-4 py-4">
              {links.map((link, index) => (
                <AppLink
                  key={index}
                  href={link.href}
                  newTab={link.newTab}
                  className="block rounded px-4 py-2 font-medium text-slate-200 transition-colors duration-200 hover:bg-slate-800/50 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </AppLink>
              ))}
            </div>
          </div>
        )}
      </Container>
    </nav>
  )
}

export default StrapiNavbar
