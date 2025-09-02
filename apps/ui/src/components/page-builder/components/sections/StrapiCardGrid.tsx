import React from "react"

import type { TStrapiCardGrid } from "@/types/api"

import { Container } from "@/components/elementary/Container"
import { ImageWithFallback } from "@/components/elementary/ImageWithFallback"
import { Heading } from "@/components/typography/Heading"
import { Paragraph } from "@/components/typography/Paragraph"
import { Card, CardContent } from "@/components/ui/card"

interface StrapiCardGridProps {
  data: TStrapiCardGrid
}

const StrapiCardGrid: React.FC<StrapiCardGridProps> = ({ data }) => {
  const { title, subtitle, cards, columns, backgroundColor } = data

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
                variant="h2"
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
                  {card.icon?.url && (
                    <div className="mb-6 flex justify-center">
                      <div className="h-16 w-16 rounded-full bg-blue-50 p-3 transition-colors duration-300 group-hover:bg-blue-100">
                        <ImageWithFallback
                          src={card.icon.url}
                          alt={card.icon.alternativeText || card.title}
                          width={40}
                          height={40}
                          className="h-full w-full object-contain filter transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  )}

                  {/* Title */}
                  <Heading
                    variant="h3"
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
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}

export default StrapiCardGrid
