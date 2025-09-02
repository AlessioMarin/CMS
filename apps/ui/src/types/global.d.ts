// Use type safe message keys with `next-intl`
type Messages = typeof import("../../locales/it.json")
// eslint-disable-next-line no-unused-vars
declare interface IntlMessages extends Messages {}
