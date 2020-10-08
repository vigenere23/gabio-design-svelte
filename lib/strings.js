"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromKebabCasetoPascalCase = exports.fromPascalCaseToKebabCase = void 0;
function fromPascalCaseToKebabCase(text) {
    return text
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/_/g, '-')
        .toLowerCase();
}
exports.fromPascalCaseToKebabCase = fromPascalCaseToKebabCase;
function fromKebabCasetoPascalCase(text) {
    return text
        .split('-')
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join('');
}
exports.fromKebabCasetoPascalCase = fromKebabCasetoPascalCase;
//# sourceMappingURL=strings.js.map