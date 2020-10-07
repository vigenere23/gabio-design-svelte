export function isExternalUrl(url: string) {
  return /^http/.test(url)
}
