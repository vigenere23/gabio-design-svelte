import type {
  IconDefinition,
  IconName
} from '@fortawesome/fontawesome-common-types'

type IconsInput = { [key: string]: IconDefinition }
type FaIcons = {
  [key in IconName]?: IconDefinition
}

export class FaIconRegistry {
  private static icons: FaIcons = {}

  public static registerIcons(icons: IconsInput) {
    for (const [name, icon] of Object.entries(icons)) {
      const iconName = transformIconName(name)
      FaIconRegistry.icons[iconName] = icon
    }
  }

  public static getIcon(iconName: IconName): IconDefinition {
    const icon: IconDefinition = FaIconRegistry.icons[iconName]
    if (!icon) {
      throw new Error(
        `Icon ${iconName} was not found. Did you register it with 'FaIconRegistry.registerIcons()'?`
      )
    }
    return icon
  }
}

function transformIconName(iconName: string): IconName {
  return iconName
    .replace('fa', '')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/_/g, '-')
    .toLowerCase() as IconName
}
