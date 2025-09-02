import React from "react"

import type { TStrapiTeam } from "@/types/api"

import { Container } from "@/components/elementary/Container"
import { ImageWithFallback } from "@/components/elementary/ImageWithFallback"
import { Heading } from "@/components/typography/Heading"
import { Paragraph } from "@/components/typography/Paragraph"

interface StrapiTeamProps {
  data: TStrapiTeam
}

const StrapiTeam: React.FC<StrapiTeamProps> = ({ data }) => {
  const { title, subtitle, members, backgroundColor } = data

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

        {/* Team Grid */}
        {members && members.length > 0 && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {members.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  {/* Photo */}
                  {member.photo?.url && (
                    <div className="relative mb-6">
                      <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-1">
                        <div className="h-full w-full overflow-hidden rounded-full">
                          <ImageWithFallback
                            src={member.photo.url}
                            alt={member.photo.alternativeText || member.name}
                            width={88}
                            height={88}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Name */}
                  <Heading
                    variant="h3"
                    className="mb-2 text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-blue-700"
                  >
                    {member.name}
                  </Heading>

                  {/* Role */}
                  {member.role && (
                    <Paragraph className="mb-3 font-medium text-blue-600">
                      {member.role}
                    </Paragraph>
                  )}

                  {/* Bio */}
                  {member.bio && (
                    <Paragraph className="text-sm leading-relaxed text-slate-600">
                      {member.bio}
                    </Paragraph>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}

export default StrapiTeam
