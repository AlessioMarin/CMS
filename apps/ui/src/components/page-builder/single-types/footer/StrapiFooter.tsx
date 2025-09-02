import React from "react"

import type { TStrapiFooter } from "@/types/api"

import { AppLink } from "@/components/elementary/AppLink"
import { Container } from "@/components/elementary/Container"
import { ImageWithFallback } from "@/components/elementary/ImageWithFallback"
import { Heading } from "@/components/typography/Heading"
import { Paragraph } from "@/components/typography/Paragraph"

interface StrapiFooterProps {
  data: TStrapiFooter | null
}

const StrapiFooter: React.FC<StrapiFooterProps> = ({ data }) => {
  if (!data) {
    return (
      <footer className="bg-slate-900 py-12 text-white">
        <Container>
          <div className="text-center">
            <Paragraph className="text-slate-400">
              © 2024 Atlantic Partners. All rights reserved.
            </Paragraph>
          </div>
        </Container>
      </footer>
    )
  }

  const { sections, links, logoImage, copyRight } = data

  return (
    <footer className="bg-slate-900 text-white">
      <Container>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo Section */}
          <div className="lg:col-span-1">
            {logoImage?.image?.url ? (
              <AppLink
                href={logoImage.link?.href || "/"}
                newTab={logoImage.link?.newTab}
              >
                <ImageWithFallback
                  src={logoImage.image.url}
                  alt={logoImage.image.alternativeText || "Atlantic Partners"}
                  width={logoImage.image.width || 180}
                  height={logoImage.image.height || 50}
                  className="mb-6 h-12 w-auto brightness-0 invert filter"
                />
              </AppLink>
            ) : (
              <Heading variant="h3" className="mb-6 text-2xl font-bold">
                Atlantic Partners
              </Heading>
            )}

            <Paragraph className="leading-relaxed text-slate-400">
              Your trusted partner for innovative solutions and exceptional
              service.
            </Paragraph>
          </div>

          {/* Footer Sections */}
          {sections &&
            sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <Heading
                  variant="h4"
                  className="mb-4 text-lg font-semibold text-white"
                >
                  {section.title}
                </Heading>
                {section.links && section.links.length > 0 && (
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <AppLink
                          href={link.href}
                          newTab={link.newTab}
                          className="text-slate-400 underline-offset-4 transition-colors duration-200 hover:text-white hover:underline"
                        >
                          {link.label}
                        </AppLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

          {/* Additional Links */}
          {links && links.length > 0 && (
            <div className="space-y-4">
              <Heading
                variant="h4"
                className="mb-4 text-lg font-semibold text-white"
              >
                Quick Links
              </Heading>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <AppLink
                      href={link.href}
                      newTab={link.newTab}
                      className="text-slate-400 underline-offset-4 transition-colors duration-200 hover:text-white hover:underline"
                    >
                      {link.label}
                    </AppLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <Paragraph className="text-sm text-slate-400">
              {copyRight ||
                `© ${new Date().getFullYear()} Atlantic Partners. All rights reserved.`}
            </Paragraph>

            <div className="flex space-x-6">
              <AppLink
                href="/privacy"
                className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
              >
                Privacy Policy
              </AppLink>
              <AppLink
                href="/terms"
                className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
              >
                Terms of Service
              </AppLink>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default StrapiFooter
