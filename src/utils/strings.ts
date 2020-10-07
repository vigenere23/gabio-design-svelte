export function fromPascalCaseToKebabCase(text: string): string {
  return text
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/_/g, '-')
    .toLowerCase()
}

export function fromKebabCasetoPascalCase(text: string): string {
  return text
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join('')
}
