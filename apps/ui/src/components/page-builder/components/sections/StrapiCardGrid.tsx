import React from "react"
import { Data } from "@repo/strapi"

import type { TStrapiCardGrid } from "@/types/api"

import { removeThisWhenYouNeedMe } from "@/lib/general-helpers"
import { AppLink } from "@/components/elementary/AppLink"
import { Container } from "@/components/elementary/Container"
import { ImageWithFallback } from "@/components/elementary/ImageWithFallback"
import { StrapiBasicImage } from "@/components/page-builder/components/utilities/StrapiBasicImage"
import { Heading } from "@/components/typography/Heading"
import { Paragraph } from "@/components/typography/Paragraph"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function StrapiCardGrid({
  component,
}: {
  readonly component: Data.Component<"sections.card-grid">
}) {
  removeThisWhenYouNeedMe("StrapiCardGrid")
  const { title, subtitle, cards, columns, backgroundColor } = component

  const gridCols = {
    "1": "grid-cols-1",
    "2": "grid-cols-1 md:grid-cols-2",
    "3": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    "4": "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <section
      className="py-20 md:py-24"
      style={{ backgroundColor: backgroundColor || "#ffffff" }}
    >
      <Container>
        {/* Header */}
        {(title || subtitle) && (
          <div className="mb-16 text-center">
            {title && (
              <Heading
                variant="heading2"
                className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl"
              >
                {title}
              </Heading>
            )}
            {subtitle && (
              <Paragraph className="mx-auto max-w-3xl text-xl text-slate-600">
                {subtitle}
              </Paragraph>
            )}
          </div>
        )}

        {/* Cards Grid */}
        {cards && cards.length > 0 && (
          <div className={`grid gap-8 ${gridCols[columns || "3"]}`}>
            {cards.map((card, index) => (
              <Card
                key={index}
                className="group border-0 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <CardContent className="p-8 text-center">
                  {/* Icon */}
                  <div className="grayscale">
                    <StrapiBasicImage
                      component={card.icon}
                      forcedSizes={{ width: 200 }}
                      priority={index < 10}
                      loading="eager"
                      className="z-10 max-h-10 w-full object-contain"
                    />
                  </div>

                  {/* Title */}
                  <Heading
                    variant="heading3"
                    className="mb-4 text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-blue-700 md:text-2xl"
                  >
                    {card.title}
                  </Heading>

                  {/* Description */}
                  {card.description && (
                    <Paragraph className="leading-relaxed text-slate-600">
                      {card.description}
                    </Paragraph>
                  )}

                  {/* CTA Button */}
                  {card.ctaButton && (
                    <div className="pt-4">
                      <AppLink
                        href={card.ctaButton?.href || "#"}
                        openExternalInNewTab={card.ctaButton?.newTab || false}
                      >
                        <Button
                          size="lg"
                          className="transform rounded-full bg-blue-600 px-8 py-4 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
                        >
                          {card.ctaButton.label}
                        </Button>
                      </AppLink>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}

StrapiCardGrid.displayName = "StrapiCardGrid"

export default StrapiCardGrid
