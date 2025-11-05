import { setPluginConfig } from "@_sh/strapi-plugin-ckeditor"

import type { StrapiApp } from "@strapi/strapi/admin"

import { it } from "./it"

import "@repo/design-system/styles.css"

import { defaultCkEditorConfig } from "./ckeditor/configs"
import InternalJobsRunActions from "./extensions/InternalJobsRunActions"

export default {
  config: {
    locales: ["en", "it"],
    translations: {
      it,
    },
  },
  bootstrap(app: StrapiApp) {
    app.getPlugin("content-manager").injectComponent("listView", "actions", {
      name: "InternalJobsRunAction",
      Component: InternalJobsRunActions,
    })
  },
  register() {
    setPluginConfig({ presets: [defaultCkEditorConfig] })
  },
}
