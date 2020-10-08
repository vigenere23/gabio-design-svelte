"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaIconRegistry = void 0;
const strings_1 = require("./strings");
class FaIconRegistry {
    static registerIcons(icons) {
        for (const [name, icon] of Object.entries(icons)) {
            const iconName = transformIconName(name);
            FaIconRegistry.icons[iconName] = icon;
        }
    }
    static getIcon(iconName) {
        const icon = FaIconRegistry.icons[iconName];
        if (!icon) {
            throw new Error(`Icon ${iconName} was not found. Did you register it with 'FaIconRegistry.registerIcons()'?`);
        }
        return icon;
    }
}
exports.FaIconRegistry = FaIconRegistry;
FaIconRegistry.icons = {};
function transformIconName(iconName) {
    return strings_1.fromPascalCaseToKebabCase(iconName.replace('fa', ''));
}
//# sourceMappingURL=faicon-registry.js.map