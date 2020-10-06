type Icons = { [key: string]: any }

export class FaIconRegisterer {
  private static icons: Icons

  public static registerIcons(icons: Icons) {
    FaIconRegisterer.icons = icons
  }

  public static getIcon(iconName: string): any {
    return FaIconRegisterer.icons[iconName]
  }
}
