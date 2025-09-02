import React from "react"

import type { TStrapiStats } from "@/types/api"

import { Container } from "@/components/elementary/Container"
import { Heading } from "@/components/typography/Heading"
import { Paragraph } from "@/components/typography/Paragraph"

interface StrapiStatsProps {
  data: TStrapiStats
}

const StrapiStats: React.FC<StrapiStatsProps> = ({ data }) => {
  const { title, subtitle, stats, backgroundColor } = data

  return (
    <section
      className="py-20 md:py-24"
      style={{ backgroundColor: backgroundColor || "#1e293b" }}
    >
      <Container>
        {/* Header */}
        {(title || subtitle) && (
          <div className="mb-16 text-center">
            {title && (
              <Heading
                variant="h2"
                className="mb-6 text-4xl font-bold text-white md:text-5xl"
              >
                {title}
              </Heading>
            )}
            {subtitle && (
              <Paragraph className="mx-auto max-w-3xl text-xl text-slate-300">
                {subtitle}
              </Paragraph>
            )}
          </div>
        )}

        {/* Stats Grid */}
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/10">
                  {/* Value */}
                  <div className="mb-2 text-4xl font-bold text-blue-400 transition-colors duration-300 group-hover:text-blue-300 md:text-5xl">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <Paragraph className="text-sm font-medium tracking-wide text-slate-300 uppercase">
                    {stat.label}
                  </Paragraph>

                  {/* Description */}
                  {stat.description && (
                    <Paragraph className="mt-3 text-sm text-slate-400">
                      {stat.description}
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

export default StrapiStats
