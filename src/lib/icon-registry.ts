import type {
  IconDefinition,
  IconName
} from '@fortawesome/fontawesome-common-types'
import { fromPascalCaseToKebabCase } from './strings'

type IconsInput = { [key: string]: IconDefinition }

export class IconRegistry {
  private static icons: Map<IconName, IconDefinition> = new Map()

  public static registerIcons(icons: IconsInput) {
    for (const [name, icon] of Object.entries(icons)) {
      const iconName = transformIconName(name)
      IconRegistry.icons.set(iconName, icon)
    }
  }

  public static getIcon(iconName: IconName): IconDefinition {
    const icon = IconRegistry.icons.get(iconName)
    if (!icon) {
      throw new Error(
        `Icon ${iconName} was not found. Did you register it with 'IconRegistry.registerIcons()'?`
      )
    }
    return icon
  }
}

function transformIconName(iconName: string): IconName {
  return fromPascalCaseToKebabCase(iconName.replace('fa', '')) as IconName
}
