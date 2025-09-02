import React from "react"

import type { TStrapiHero } from "@/types/api"

import { AppLink } from "@/components/elementary/AppLink"
import { Container } from "@/components/elementary/Container"
import { ImageWithFallback } from "@/components/elementary/ImageWithFallback"
import { Heading } from "@/components/typography/Heading"
import { Paragraph } from "@/components/typography/Paragraph"
import { Button } from "@/components/ui/button"

interface StrapiHeroProps {
  data: TStrapiHero
}

const StrapiHero: React.FC<StrapiHeroProps> = ({ data }) => {
  const {
    title,
    subtitle,
    description,
    ctaButton,
    backgroundImage,
    backgroundColor,
    textColor,
    overlayOpacity,
  } = data

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      {backgroundImage?.image && (
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={backgroundImage.image.url}
            alt={backgroundImage.image.alternativeText || "Hero background"}
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-blue-900/80"
            style={{ opacity: overlayOpacity || 0.7 }}
          />
        </div>
      )}

      {/* Background Color Fallback */}
      {!backgroundImage?.image && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
          style={{ backgroundColor: backgroundColor || "#1e293b" }}
        />
      )}

      {/* Content */}
      <Container className="relative z-10 max-w-4xl text-center">
        <div className="space-y-8">
          {/* Title */}
          <Heading
            variant="h1"
            className={`text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl ${
              textColor === "dark" ? "text-slate-900" : "text-white"
            }`}
          >
            {title}
          </Heading>

          {/* Subtitle */}
          {subtitle && (
            <Heading
              variant="h2"
              className={`text-xl font-light md:text-2xl lg:text-3xl ${
                textColor === "dark" ? "text-slate-700" : "text-blue-100"
              }`}
            >
              {subtitle}
            </Heading>
          )}

          {/* Description */}
          {description && (
            <Paragraph
              className={`mx-auto max-w-2xl text-lg leading-relaxed md:text-xl ${
                textColor === "dark" ? "text-slate-600" : "text-slate-200"
              }`}
            >
              {description}
            </Paragraph>
          )}

          {/* CTA Button */}
          {ctaButton && (
            <div className="pt-4">
              <AppLink
                href={ctaButton.href}
                openExternalInNewTab={ctaButton.newTab}
              >
                <Button
                  size="lg"
                  className="transform rounded-full bg-blue-600 px-8 py-4 text-lg text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-2xl"
                >
                  {ctaButton.label}
                </Button>
              </AppLink>
            </div>
          )}
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transform">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30">
          <div className="mt-2 h-3 w-1 animate-bounce rounded-full bg-white/50" />
        </div>
      </div>
    </section>
  )
}

export default StrapiHero
