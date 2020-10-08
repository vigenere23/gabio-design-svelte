import type {
  IconDefinition,
  IconName
} from '@fortawesome/fontawesome-common-types'
import { fromPascalCaseToKebabCase } from './strings'

type IconsInput = { [key: string]: IconDefinition }
type Icons = {
  [key in IconName]?: IconDefinition
}

export class IconRegistry {
  private static icons: Icons = {}

  public static registerIcons(icons: IconsInput) {
    for (const [name, icon] of Object.entries(icons)) {
      const iconName = transformIconName(name)
      IconRegistry.icons[iconName] = icon
    }
  }

  public static getIcon(iconName: IconName): IconDefinition {
    const icon = IconRegistry.icons[iconName]
    if (!icon) {
      throw new Error(
        `Icon ${iconName} was not found. Did you register it with 'IconRegistry.registerIcons()'?`
      )
    }
    return icon as IconDefinition
  }
}

function transformIconName(iconName: string): IconName {
  return fromPascalCaseToKebabCase(iconName.replace('fa', '')) as IconName
}
