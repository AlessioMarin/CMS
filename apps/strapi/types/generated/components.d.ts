import type { Schema, Struct } from "@strapi/strapi"

export interface ElementsFooterItem extends Struct.ComponentSchema {
  collectionName: "components_elements_footer_items"
  info: {
    description: ""
    displayName: "FooterItem"
  }
  attributes: {
    links: Schema.Attribute.Component<"utilities.link", true>
    title: Schema.Attribute.String & Schema.Attribute.Required
  }
}

export interface FormsContactForm extends Struct.ComponentSchema {
  collectionName: "components_forms_contact_forms"
  info: {
    displayName: "ContactForm"
  }
  attributes: {
    description: Schema.Attribute.Text
    gdpr: Schema.Attribute.Component<"utilities.link", false>
    title: Schema.Attribute.String
  }
}

export interface FormsNewsletterForm extends Struct.ComponentSchema {
  collectionName: "components_forms_newsletter_forms"
  info: {
    displayName: "Newsletter"
  }
  attributes: {
    description: Schema.Attribute.Text
    gdpr: Schema.Attribute.Component<"utilities.link", false>
    title: Schema.Attribute.String
  }
}

export interface SectionsAnimatedLogoRow extends Struct.ComponentSchema {
  collectionName: "components_sections_animated_logo_rows"
  info: {
    description: ""
    displayName: "AnimatedLogoRow"
  }
  attributes: {
    logos: Schema.Attribute.Component<"utilities.basic-image", true>
    text: Schema.Attribute.String & Schema.Attribute.Required
  }
}

export interface SectionsCardGrid extends Struct.ComponentSchema {
  collectionName: "components_sections_card_grids"
  info: {
    description: "Grid of service cards with icons, titles and descriptions"
    displayName: "CardGrid"
  }
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<"plugin::color-picker.color">
    cards: Schema.Attribute.Component<"utilities.service-card", true>
    columns: Schema.Attribute.Enumeration<["1", "2", "3", "4"]> &
      Schema.Attribute.DefaultTo<"3">
    spacing: Schema.Attribute.Enumeration<["small", "medium", "large"]> &
      Schema.Attribute.DefaultTo<"medium">
    subtitle: Schema.Attribute.Text
    title: Schema.Attribute.String
  }
}

export interface SectionsCarousel extends Struct.ComponentSchema {
  collectionName: "components_sections_carousels"
  info: {
    description: ""
    displayName: "Carousel"
  }
  attributes: {
    images: Schema.Attribute.Component<"utilities.image-with-link", true>
    radius: Schema.Attribute.Enumeration<["sm", "md", "lg", "xl", "full"]>
  }
}

export interface SectionsContentWithImage extends Struct.ComponentSchema {
  collectionName: "components_sections_content_with_images"
  info: {
    description: "Section with content and image side by side"
    displayName: "ContentWithImage"
  }
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<"plugin::color-picker.color">
    content: Schema.Attribute.Component<"utilities.ck-editor-content", false>
    ctaButton: Schema.Attribute.Component<"utilities.link", false>
    image: Schema.Attribute.Component<"utilities.basic-image", false>
    imagePosition: Schema.Attribute.Enumeration<["left", "right"]> &
      Schema.Attribute.DefaultTo<"right">
    subtitle: Schema.Attribute.String
    title: Schema.Attribute.String & Schema.Attribute.Required
    verticalAlignment: Schema.Attribute.Enumeration<
      ["top", "center", "bottom"]
    > &
      Schema.Attribute.DefaultTo<"center">
  }
}

export interface SectionsFaq extends Struct.ComponentSchema {
  collectionName: "components_sections_faqs"
  info: {
    description: ""
    displayName: "Faq"
  }
  attributes: {
    accordions: Schema.Attribute.Component<"utilities.accordions", true>
    subTitle: Schema.Attribute.String
    title: Schema.Attribute.String & Schema.Attribute.Required
  }
}

export interface SectionsHeadingWithCtaButton extends Struct.ComponentSchema {
  collectionName: "components_sections_heading_with_cta_buttons"
  info: {
    description: ""
    displayName: "HeadingWithCTAButton"
  }
  attributes: {
    cta: Schema.Attribute.Component<"utilities.link", false>
    subText: Schema.Attribute.String
    title: Schema.Attribute.String & Schema.Attribute.Required
  }
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: "components_sections_heroes"
  info: {
    description: "Hero section with background, title, subtitle and CTA for Atlantic Partners"
    displayName: "Hero"
  }
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<"plugin::color-picker.color">
    backgroundImage: Schema.Attribute.Component<"utilities.basic-image", false>
    ctaButton: Schema.Attribute.Component<"utilities.link", false>
    description: Schema.Attribute.Text
    layout: Schema.Attribute.Enumeration<["center", "left", "right"]> &
      Schema.Attribute.DefaultTo<"center">
    overlayOpacity: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 1
          min: 0
        },
        number
      > &
      Schema.Attribute.DefaultTo<0.5>
    subtitle: Schema.Attribute.Text
    textColor: Schema.Attribute.Enumeration<["light", "dark"]> &
      Schema.Attribute.DefaultTo<"light">
    title: Schema.Attribute.String & Schema.Attribute.Required
  }
}

export interface SectionsHorizontalImages extends Struct.ComponentSchema {
  collectionName: "components_sections_horizontal_images"
  info: {
    description: ""
    displayName: "HorizontalImages"
  }
  attributes: {
    fixedImageHeight: Schema.Attribute.Integer
    fixedImageWidth: Schema.Attribute.Integer
    imageRadius: Schema.Attribute.Enumeration<["sm", "md", "lg", "xl", "full"]>
    images: Schema.Attribute.Component<"utilities.image-with-link", true>
    spacing: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 20
          min: 0
        },
        number
      >
    title: Schema.Attribute.String & Schema.Attribute.Required
  }
}

export interface SectionsImageWithCtaButton extends Struct.ComponentSchema {
  collectionName: "components_sections_image_with_cta_buttons"
  info: {
    description: ""
    displayName: "ImageWithCTAButton"
  }
  attributes: {
    image: Schema.Attribute.Component<"utilities.basic-image", false>
    link: Schema.Attribute.Component<"utilities.link", false>
    subText: Schema.Attribute.String
    title: Schema.Attribute.String & Schema.Attribute.Required
  }
}

export interface SectionsStats extends Struct.ComponentSchema {
  collectionName: "components_sections_stats"
  info: {
    description: "Statistics section with numbers and labels"
    displayName: "Stats"
  }
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<"plugin::color-picker.color">
    stats: Schema.Attribute.Component<"utilities.stat-item", true>
    subtitle: Schema.Attribute.Text
    title: Schema.Attribute.String
  }
}

export interface SectionsTeam extends Struct.ComponentSchema {
  collectionName: "components_sections_teams"
  info: {
    description: "Team members section"
    displayName: "Team"
  }
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<"plugin::color-picker.color">
    members: Schema.Attribute.Component<"utilities.team-member", true>
    subtitle: Schema.Attribute.Text
    title: Schema.Attribute.String
  }
}

export interface SeoUtilitiesMetaSocial extends Struct.ComponentSchema {
  collectionName: "components_seo_utilities_meta_socials"
  info: {
    displayName: "metaSocial"
    icon: "project-diagram"
  }
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 65
      }>
    image: Schema.Attribute.Media<"images" | "files" | "videos">
    socialNetwork: Schema.Attribute.Enumeration<["Facebook", "Twitter"]> &
      Schema.Attribute.Required
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60
      }>
  }
}

export interface SeoUtilitiesSeo extends Struct.ComponentSchema {
  collectionName: "components_seo_utilities_seos"
  info: {
    description: ""
    displayName: "seo"
    icon: "search"
  }
  attributes: {
    applicationName: Schema.Attribute.String
    canonicalUrl: Schema.Attribute.String
    email: Schema.Attribute.String
    keywords: Schema.Attribute.Text
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160
      }>
    metaImage: Schema.Attribute.Media<"images">
    metaRobots: Schema.Attribute.Enumeration<
      [
        "all",
        "index",
        "index,follow",
        "noindex",
        "noindex,follow",
        "noindex,nofollow",
        "none",
        "noarchive",
        "nosnippet",
        "max-snippet",
      ]
    > &
      Schema.Attribute.DefaultTo<"all">
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60
      }>
    og: Schema.Attribute.Component<"seo-utilities.seo-og", false>
    siteName: Schema.Attribute.String
    structuredData: Schema.Attribute.JSON
    twitter: Schema.Attribute.Component<"seo-utilities.seo-twitter", false>
  }
}

export interface SeoUtilitiesSeoOg extends Struct.ComponentSchema {
  collectionName: "components_seo_utilities_seo_ogs"
  info: {
    displayName: "SeoOg"
    icon: "oneToMany"
  }
  attributes: {
    description: Schema.Attribute.String
    image: Schema.Attribute.Media<"images">
    title: Schema.Attribute.String
    type: Schema.Attribute.Enumeration<["website", "article"]> &
      Schema.Attribute.DefaultTo<"website">
    url: Schema.Attribute.String
  }
}

export interface SeoUtilitiesSeoTwitter extends Struct.ComponentSchema {
  collectionName: "components_seo_utilities_seo_twitters"
  info: {
    displayName: "SeoTwitter"
    icon: "oneToMany"
  }
  attributes: {
    card: Schema.Attribute.String
    creator: Schema.Attribute.String
    creatorId: Schema.Attribute.String
    description: Schema.Attribute.String
    images: Schema.Attribute.Media<"images", true>
    siteId: Schema.Attribute.String
    title: Schema.Attribute.String
  }
}

export interface SeoUtilitiesSocialIcons extends Struct.ComponentSchema {
  collectionName: "components_seo_utilities_social_icons"
  info: {
    displayName: "SocialIcons"
  }
  attributes: {
    socials: Schema.Attribute.Component<"utilities.image-with-link", true>
    title: Schema.Attribute.String
  }
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: "components_shared_open_graphs"
  info: {
    displayName: "openGraph"
    icon: "project-diagram"
  }
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200
      }>
    ogImage: Schema.Attribute.Media<"images">
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70
      }>
    ogType: Schema.Attribute.String
    ogUrl: Schema.Attribute.String
  }
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: "components_shared_seos"
  info: {
    displayName: "seo"
    icon: "search"
  }
  attributes: {
    canonicalURL: Schema.Attribute.String
    keywords: Schema.Attribute.Text
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160
        minLength: 50
      }>
    metaImage: Schema.Attribute.Media<"images">
    metaRobots: Schema.Attribute.String
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60
      }>
    metaViewport: Schema.Attribute.String
    openGraph: Schema.Attribute.Component<"shared.open-graph", false>
    structuredData: Schema.Attribute.JSON
  }
}

export interface UtilitiesAccordions extends Struct.ComponentSchema {
  collectionName: "components_utilities_accordions"
  info: {
    description: ""
    displayName: "Accordions"
  }
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required
    question: Schema.Attribute.String & Schema.Attribute.Required
  }
}

export interface UtilitiesBasicImage extends Struct.ComponentSchema {
  collectionName: "components_utilities_basic_images"
  info: {
    displayName: "BasicImage"
  }
  attributes: {
    alt: Schema.Attribute.String & Schema.Attribute.Required
    fallbackSrc: Schema.Attribute.String
    height: Schema.Attribute.Integer
    media: Schema.Attribute.Media<"images" | "videos"> &
      Schema.Attribute.Required
    width: Schema.Attribute.Integer
  }
}

export interface UtilitiesCkEditorContent extends Struct.ComponentSchema {
  collectionName: "components_utilities_ck_editor_contents"
  info: {
    displayName: "CkEditorContent"
  }
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        "plugin::ckeditor5.CKEditor",
        {
          preset: "defaultCkEditor"
        }
      >
  }
}

export interface UtilitiesContactInfo extends Struct.ComponentSchema {
  collectionName: "components_utilities_contact_infos"
  info: {
    description: "Contact information with address, phone, email"
    displayName: "ContactInfo"
  }
  attributes: {
    address: Schema.Attribute.Text
    email: Schema.Attribute.Email
    phone: Schema.Attribute.String
    title: Schema.Attribute.String
    workingHours: Schema.Attribute.String
  }
}

export interface UtilitiesImageWithLink extends Struct.ComponentSchema {
  collectionName: "components_utilities_image_with_links"
  info: {
    description: ""
    displayName: "ImageWithLink"
  }
  attributes: {
    image: Schema.Attribute.Component<"utilities.basic-image", false>
    link: Schema.Attribute.Component<"utilities.link", false>
  }
}

export interface UtilitiesLink extends Struct.ComponentSchema {
  collectionName: "components_utilities_links"
  info: {
    displayName: "Link"
  }
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required
    label: Schema.Attribute.String & Schema.Attribute.Required
    newTab: Schema.Attribute.Boolean
  }
}

export interface UtilitiesLinksWithTitle extends Struct.ComponentSchema {
  collectionName: "components_utilities_links_with_titles"
  info: {
    displayName: "LinksWithTitle"
  }
  attributes: {
    links: Schema.Attribute.Component<"utilities.link", true>
    title: Schema.Attribute.String
  }
}

export interface UtilitiesServiceCard extends Struct.ComponentSchema {
  collectionName: "components_utilities_service_cards"
  info: {
    description: "Card with icon, title, description and optional CTA"
    displayName: "ServiceCard"
  }
  attributes: {
    backgroundColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<"plugin::color-picker.color">
    borderColor: Schema.Attribute.String &
      Schema.Attribute.CustomField<"plugin::color-picker.color">
    ctaButton: Schema.Attribute.Component<"utilities.link", false>
    description: Schema.Attribute.Text
    icon: Schema.Attribute.Component<"utilities.basic-image", false>
    title: Schema.Attribute.String & Schema.Attribute.Required
  }
}

export interface UtilitiesStatItem extends Struct.ComponentSchema {
  collectionName: "components_utilities_stat_items"
  info: {
    description: "Individual statistic with number and label"
    displayName: "StatItem"
  }
  attributes: {
    icon: Schema.Attribute.Component<"utilities.basic-image", false>
    label: Schema.Attribute.String & Schema.Attribute.Required
    number: Schema.Attribute.String & Schema.Attribute.Required
    suffix: Schema.Attribute.String
  }
}

export interface UtilitiesTeamMember extends Struct.ComponentSchema {
  collectionName: "components_utilities_team_members"
  info: {
    description: "Individual team member with photo and details"
    displayName: "TeamMember"
  }
  attributes: {
    bio: Schema.Attribute.Text
    name: Schema.Attribute.String & Schema.Attribute.Required
    photo: Schema.Attribute.Component<"utilities.basic-image", false>
    position: Schema.Attribute.String & Schema.Attribute.Required
    socialLinks: Schema.Attribute.Component<"utilities.link", true>
  }
}

export interface UtilitiesText extends Struct.ComponentSchema {
  collectionName: "components_utilities_texts"
  info: {
    displayName: "Text"
  }
  attributes: {
    text: Schema.Attribute.String
  }
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "elements.footer-item": ElementsFooterItem
      "forms.contact-form": FormsContactForm
      "forms.newsletter-form": FormsNewsletterForm
      "sections.animated-logo-row": SectionsAnimatedLogoRow
      "sections.card-grid": SectionsCardGrid
      "sections.carousel": SectionsCarousel
      "sections.content-with-image": SectionsContentWithImage
      "sections.faq": SectionsFaq
      "sections.heading-with-cta-button": SectionsHeadingWithCtaButton
      "sections.hero": SectionsHero
      "sections.horizontal-images": SectionsHorizontalImages
      "sections.image-with-cta-button": SectionsImageWithCtaButton
      "sections.stats": SectionsStats
      "sections.team": SectionsTeam
      "seo-utilities.meta-social": SeoUtilitiesMetaSocial
      "seo-utilities.seo": SeoUtilitiesSeo
      "seo-utilities.seo-og": SeoUtilitiesSeoOg
      "seo-utilities.seo-twitter": SeoUtilitiesSeoTwitter
      "seo-utilities.social-icons": SeoUtilitiesSocialIcons
      "shared.open-graph": SharedOpenGraph
      "shared.seo": SharedSeo
      "utilities.accordions": UtilitiesAccordions
      "utilities.basic-image": UtilitiesBasicImage
      "utilities.ck-editor-content": UtilitiesCkEditorContent
      "utilities.contact-info": UtilitiesContactInfo
      "utilities.image-with-link": UtilitiesImageWithLink
      "utilities.link": UtilitiesLink
      "utilities.links-with-title": UtilitiesLinksWithTitle
      "utilities.service-card": UtilitiesServiceCard
      "utilities.stat-item": UtilitiesStatItem
      "utilities.team-member": UtilitiesTeamMember
      "utilities.text": UtilitiesText
    }
  }
}
