import type { MarkdownParser } from '@gabio/markdown-transpiler'
import marked, { Renderer } from 'marked'

class GioSvelteMarkdownRenderer extends Renderer {
  heading(text: string, level: number): string {
    const id = text.toLowerCase().replace(/[^\w]+/g, '-')
    return level === 1
      ? `<GioTitle noMargin fontSize="${48 / 16}rem">${text}</GioTitle>\n`
      : level === 6
      ? `<GioSubtitle>${text}</GioSubtitle>\n`
      : `<GioHeading level={${level - 1}} id="#${id}">${text}</GioHeading>\n`
  }

  paragraph(text: string): string {
    return `<GioBodyText>${text}</GioBodyText>\n`
  }

  image(href: string, title: string, text: string): string {
    const caption = text || title || ''
    return `
      <GioCaptionedImage caption="${caption}">
        <div slot="image">
          <GioImage
            srcs={['${href}']}
            desc="${caption}"
            lazy
          />
        </div>
      </GioCaptionedImage>\n`
  }

  blockquote(quote: string): string {
    return `<GioCaption>${quote}</GioCaption>\n`
  }

  codespan(code: string): string {
    code = this.svelteSafe(code)
    return `<GioInlineCode>${code}</GioInlineCode>`
  }

  code(code: string, language?: string): string {
    return `<GioCodeBlock language="${language}" code="${encodeURI(code)}" />\n`
  }

  list(body: string /*ordered: boolean, start: number*/): string {
    return `<GioBodyText noMargin><GioList indent>${body}</GioList></GioBodyText>\n`
  }

  listitem(text: string): string {
    return `<GioListItem>${text}</GioListItem>\n`
  }

  link(href: string, _title: string, text: string) {
    return `<GioSmartLink accent href="${href}">${text}</GioSmartLink>`
  }

  private svelteSafe(text: string): string {
    return text.replace(/{/g, '&lbrace;').replace(/}/g, '&rbrace;')
  }
}

export class GioSvelteMarkdownParser implements MarkdownParser {
  private renderer: Renderer = new GioSvelteMarkdownRenderer()

  getDependencies() {
    return {
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
    }
  }

  parse(markdownContent: string): string {
    return marked(markdownContent, {
      renderer: this.renderer
    })
  }
}
