import path from 'path'

export function isExternalUrl(url: string) {
  return /^http/.test(url)
}

export function toSpaRoute(url: string): string {
  return path.join('#', url)
}
