"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GioSvelteMarkdownParser = void 0;
const tslib_1 = require("tslib");
const marked_1 = tslib_1.__importStar(require("marked"));
class GioSvelteMarkdownRenderer extends marked_1.Renderer {
    heading(text, level) {
        const id = text.toLowerCase().replace(/[^\w]+/g, '-');
        return level === 1
            ? `<GioTitle noMargin fontSize="${48 / 16}rem">${text}</GioTitle>\n`
            : level === 6
                ? `<GioSubtitle>${text}</GioSubtitle>\n`
                : `<GioHeading level={${level - 1}} id="#${id}">${text}</GioHeading>\n`;
    }
    paragraph(text) {
        return `<GioBodyText>${text}</GioBodyText>\n`;
    }
    image(href, title, text) {
        const caption = text || title || '';
        return `
      <GioCaptionedImage caption="${caption}">
        <div slot="image">
          <GioImage
            srcs={['${href}']}
            desc="${caption}"
            lazy
          />
        </div>
      </GioCaptionedImage>\n`;
    }
    blockquote(quote) {
        return `<GioCaption>${quote}</GioCaption>\n`;
    }
    codespan(code) {
        code = this.svelteSafe(code);
        return `<GioInlineCode>${code}</GioInlineCode>`;
    }
    code(code, language) {
        return `<GioCodeBlock language="${language}" code="${encodeURI(code)}" />\n`;
    }
    list(body /*ordered: boolean, start: number*/) {
        return `<GioBodyText noMargin><GioList indent>${body}</GioList></GioBodyText>\n`;
    }
    listitem(text) {
        return `<GioListItem>${text}</GioListItem>\n`;
    }
    link(href, _title, text) {
        return `<GioSmartLink accent href="${href}">${text}</GioSmartLink>`;
    }
    svelteSafe(text) {
        return text.replace(/{/g, '&lbrace;').replace(/}/g, '&rbrace;');
    }
}
class GioSvelteMarkdownParser {
    constructor() {
        this.renderer = new GioSvelteMarkdownRenderer();
        this.dependencies = {
            '@gabio/design-svelte': [
                'GioBodyText',
                'GioTitle',
                'GioSubtitle',
                'GioHeading',
                'GioCaption',
                'GioInlineCode',
                'GioCodeBlock',
                'GioList',
                'GioListItem',
                'GioCaptionedImage',
                'GioSmartLink',
                'GioImage'
            ]
        };
    }
    parse(markdownContent) {
        return marked_1.default(markdownContent, {
            renderer: this.renderer
        });
    }
}
exports.GioSvelteMarkdownParser = GioSvelteMarkdownParser;
//# sourceMappingURL=markdown.js.map