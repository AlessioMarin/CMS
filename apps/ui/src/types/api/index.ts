import type { AppLocale } from "@/types/general"

export interface APIResponseCollectionPagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export interface APIResponseCollectionMetadata {
  pagination: {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
}

export interface APIResponse<T> {
  data: T | null
  meta: object
}

export interface APIResponseCollection<T> {
  data: T[]
  meta: APIResponseCollectionMetadata
}

type StrapiImageMediaFormat = {
  ext?: string
  url?: string
  hash?: string
  mime?: string
  name?: string
  path?: string
  size?: number
  width?: number
  height?: number
}

export type StrapiImageMedia = {
  documentId: string
  id: number
  name?: string
  alternativeText?: string
  caption?: string
  width?: number
  height?: number
  createdAt?: string
  updatedAt?: string
  publishedAt?: string
  formats: {
    large: StrapiImageMediaFormat
    small: StrapiImageMediaFormat
    medium: StrapiImageMediaFormat
    thumbnail: StrapiImageMediaFormat
  }
  hash?: string
  ext?: string
  mime?: string
  size?: number
  url?: string
  previewUrl?: string
  provider?: string
  provider_metadata?: string
}

export interface APIResponseWithBreadcrumbs<T> {
  data: T | null
  meta: APIResponseCollectionMetadata & { breadcrumbs?: BreadCrumb[] }
}

export type AppLocalizedParams<T> = T & {
  // In fetch functions we can pass the AppLocale to get the correct data
  // AppLocale is meant to be frontend locale, that is mapped to the Strapi locale
  // before firing the request
  locale?: AppLocale
  middlewarePopulate?: string[]
}

export type BreadCrumb = {
  title: string
  fullPath: string
}

export type PageLocalization = {
  localizations: Array<{
    id: number
    documentId: string
    fullPath: string
    locale: string
  }>
} | null

// Strapi Component Types
export interface TStrapiLink {
  id?: number
  href: string
  text: string
  target?: "_self" | "_blank"
  isExternal?: boolean
}

export interface TStrapiBasicImage {
  id?: number
  image?: StrapiImageMedia
  alt?: string
}

export interface TStrapiServiceCard {
  id?: number
  title: string
  description?: string
  icon?: TStrapiBasicImage
  ctaButton?: TStrapiLink
}

export interface TStrapiCardGrid {
  id?: number
  title?: string
  subtitle?: string
  cards?: TStrapiServiceCard[]
  columns?: "1" | "2" | "3" | "4"
  backgroundColor?: string
  spacing?: "small" | "medium" | "large"
}

export interface TStrapiContentWithImage {
  id?: number
  title?: string
  content?: string
  image?: TStrapiBasicImage
  ctaButton?: TStrapiLink
  imagePosition?: "left" | "right"
}

export interface TStrapiHero {
  id?: number
  title: string
  subtitle?: string
  description?: string
  backgroundImage?: TStrapiBasicImage
  ctaButton?: TStrapiLink
  textAlign?: "left" | "center" | "right"
  backgroundColor?: string
  textColor?: string
  overlayOpacity?: number
}

export interface TStrapiStatItem {
  id?: number
  value: string
  label: string
  icon?: TStrapiBasicImage
}

export interface TStrapiStats {
  id?: number
  title?: string
  subtitle?: string
  stats?: TStrapiStatItem[]
  backgroundColor?: string
}

export interface TStrapiTeamMember {
  id?: number
  name: string
  position: string
  bio?: string
  photo?: TStrapiBasicImage
  socialLinks?: TStrapiLink[]
}

export interface TStrapiTeam {
  id?: number
  title?: string
  subtitle?: string
  members?: TStrapiTeamMember[]
}

export interface TStrapiFooterItem {
  id?: number
  title: string
  links?: TStrapiLink[]
}

export interface TStrapiFooter {
  id?: number
  documentId?: string
  logo?: TStrapiBasicImage
  description?: string
  columns?: TStrapiFooterItem[]
  socialLinks?: TStrapiLink[]
  bottomText?: string
  createdAt?: string
  updatedAt?: string
  publishedAt?: string
  locale?: string
}

export interface TStrapiNavbar {
  id?: number
  documentId?: string
  logoImage?: TStrapiBasicImage
  links?: TStrapiLink[]
  createdAt?: string
  updatedAt?: string
  publishedAt?: string
  locale?: string
}
