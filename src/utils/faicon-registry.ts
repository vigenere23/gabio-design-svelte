type Icons = { [key: string]: any }

export class FaIconRegistry {
  private static icons: Icons = {}

  public static registerIcons(icons: Icons) {
    for (const [name, icon] of Object.entries(icons)) {
      const iconName = name.replace('fa', '').toLowerCase()
      FaIconRegistry.icons[iconName] = icon
    }
  }

  public static getIcon(iconName: string): any {
    const icon: any = FaIconRegistry.icons[iconName]
    if (!icon) {
      throw new Error(
        `Icon ${iconName} was not found. Did you register it with 'FaIconRegistry.registerIcons()'?`
      )
    }
    return icon
  }
}
