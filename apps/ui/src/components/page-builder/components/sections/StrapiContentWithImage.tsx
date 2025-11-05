import React from "react"
import { Data } from "@repo/strapi"

import { removeThisWhenYouNeedMe } from "@/lib/general-helpers"
import { AppLink } from "@/components/elementary/AppLink"
import { Container } from "@/components/elementary/Container"
import { ImageWithFallback } from "@/components/elementary/ImageWithFallback"
import StrapiCkEditorContent from "@/components/page-builder/components/utilities/StrapiCkEditorContent"
import { Heading } from "@/components/typography/Heading"
import { Paragraph } from "@/components/typography/Paragraph"
import { Button } from "@/components/ui/button"

export function StrapiContentWithImage({
  component,
}: {
  readonly component: Data.Component<"sections.content-with-image">
}) {
  removeThisWhenYouNeedMe("StrapiContentWithImage")
  const { title, content, image, ctaButton, imagePosition, backgroundColor } =
    component

  const isImageLeft = imagePosition === "left"

  console.log("Rendering StrapiContentWithImage with component:", component)

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
                variant="heading2"
                className="text-4xl leading-tight font-bold text-slate-900 md:text-5xl"
              >
                {title}
              </Heading>
            )}

            {content?.content && (
              <div className="prose prose-lg prose-slate max-w-none">
                <p
                  className="text-xl leading-relaxed text-slate-600"
                  dangerouslySetInnerHTML={{ __html: content.content }}
                />
              </div>
            )}

            {ctaButton && (
              <div className="pt-4">
                <AppLink
                  href={ctaButton.href || "#"}
                  openExternalInNewTab={ctaButton?.newTab || false}
                >
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
          {image?.media?.url && (
            <div className={`${isImageLeft ? "lg:order-1" : ""}`}>
              <div className="group relative aspect-square overflow-hidden rounded-2xl shadow-2xl lg:aspect-[4/3]">
                <ImageWithFallback
                  src={image.media.url}
                  alt={image.media.alternativeText || title || "Content image"}
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

StrapiContentWithImage.displayName = "StrapiContentWithImage"

export default StrapiContentWithImage
