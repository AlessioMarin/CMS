import React from "react"

import type { TStrapiContentWithImage } from "@/types/api"

import { AppLink } from "@/components/elementary/AppLink"
import { Container } from "@/components/elementary/Container"
import { ImageWithFallback } from "@/components/elementary/ImageWithFallback"
import { Heading } from "@/components/typography/Heading"
import { Paragraph } from "@/components/typography/Paragraph"
import { Button } from "@/components/ui/button"

interface StrapiContentWithImageProps {
  data: TStrapiContentWithImage
}

const StrapiContentWithImage: React.FC<StrapiContentWithImageProps> = ({
  data,
}) => {
  const { title, content, image, ctaButton, imagePosition, backgroundColor } =
    data

  const isImageLeft = imagePosition === "left"

  return (
    <section
      className="py-20 md:py-24"
      style={{ backgroundColor: backgroundColor || "#f8fafc" }}
    >
      <Container>
        <div
          className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
            isImageLeft ? "lg:grid-flow-col" : ""
          }`}
        >
          {/* Content */}
          <div className={`space-y-8 ${isImageLeft ? "lg:order-2" : ""}`}>
            {title && (
              <Heading
                variant="h2"
                className="text-4xl leading-tight font-bold text-slate-900 md:text-5xl"
              >
                {title}
              </Heading>
            )}

            {content && (
              <div className="prose prose-lg prose-slate max-w-none">
                <Paragraph className="text-xl leading-relaxed text-slate-600">
                  {content}
                </Paragraph>
              </div>
            )}

            {ctaButton && (
              <div className="pt-4">
                <AppLink href={ctaButton.href} newTab={ctaButton.newTab}>
                  <Button
                    size="lg"
                    className="transform rounded-full bg-blue-600 px-8 py-4 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
                  >
                    {ctaButton.label}
                  </Button>
                </AppLink>
              </div>
            )}
          </div>

          {/* Image */}
          {image?.url && (
            <div className={`${isImageLeft ? "lg:order-1" : ""}`}>
              <div className="group relative aspect-square overflow-hidden rounded-2xl shadow-2xl lg:aspect-[4/3]">
                <ImageWithFallback
                  src={image.url}
                  alt={image.alternativeText || title || "Content image"}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

export default StrapiContentWithImage
