import type { MarkdownParser } from '@gabio/markdown-transpiler';
export declare class GioSvelteMarkdownParser implements MarkdownParser {
    private renderer;
    dependencies: {
        '@gabio/design-svelte': string[];
    };
    parse(markdownContent: string): string;
}
