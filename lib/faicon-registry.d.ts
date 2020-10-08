import type { IconDefinition, IconName } from '@fortawesome/fontawesome-common-types';
declare type IconsInput = {
    [key: string]: IconDefinition;
};
export declare class FaIconRegistry {
    private static icons;
    static registerIcons(icons: IconsInput): void;
    static getIcon(iconName: IconName): IconDefinition;
}
export {};
