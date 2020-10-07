import type {
  IconDefinition,
  IconName
} from '@fortawesome/fontawesome-common-types'
import { fromPascalCaseToKebabCase } from './strings'

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
  return fromPascalCaseToKebabCase(iconName.replace('fa', '')) as IconName
}
