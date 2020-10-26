import type {
  MarkdownParser,
  MarkdownParserOutput
} from '@gabio/markdown-transpiler'
import marked, { Renderer } from 'marked'

class GioSvelteMarkdownRenderer extends Renderer {
  private components: Set<string> = new Set()
  private idIncrements: Map<string, number> = new Map()

  heading(text: string, level: number): string {
    if (level === 1) {
      this.addComponentDependencies(['GioTitle'])
      return `<GioTitle noMargin fontSize="${48 / 16}rem">${text}</GioTitle>\n`
    } else if (level === 6) {
      this.addComponentDependencies(['GioSubtitle'])
      return `<GioSubtitle>${text}</GioSubtitle>\n`
    } else {
      this.addComponentDependencies(['GioHeading'])
      let id = text.toLowerCase().replace(/[^\w]+/g, '-')
      const idAlreadyPresent = this.idIncrements.has(id)
      this.idIncrements.set(id, (this.idIncrements.get(id) || 0) + 1)
      if (idAlreadyPresent) {
        id = `${id}-${this.idIncrements.get(id)}`
      }
      return `<GioHeading level={${
        level - 1
      }} id="${id}">${text}</GioHeading>\n`
    }
  }

  paragraph(text: string): string {
    this.addComponentDependencies(['GioBodyText'])
    return `<GioBodyText>${text}</GioBodyText>\n`
  }

  image(href: string, title: string, text: string): string {
    const caption = text || title || ''
    this.addComponentDependencies(['GioCaptionedImage', 'GioImage'])

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
    this.addComponentDependencies(['GioCaption'])
    return `<GioCaption>${quote}</GioCaption>\n`
  }

  codespan(code: string): string {
    code = this.svelteSafe(code)
    this.addComponentDependencies(['GioInlineCode'])
    return `<GioInlineCode>${code}</GioInlineCode>`
  }

  code(code: string, language?: string): string {
    this.addComponentDependencies(['GioCodeBlock'])
    return `<GioCodeBlock language="${language || ''}" code="${encodeURI(
      code
    )}" />\n`
  }

  list(body: string /*ordered: boolean, start: number*/): string {
    this.addComponentDependencies(['GioBodyText', 'GioList'])
    return `<GioBodyText noMargin><GioList indent>${body}</GioList></GioBodyText>\n`
  }

  listitem(text: string): string {
    this.addComponentDependencies(['GioListItem'])
    return `<GioListItem>${text}</GioListItem>\n`
  }

  link(href: string, _title: string, text: string) {
    this.addComponentDependencies(['GioSmartLink'])
    return `<GioSmartLink accent href="${href}">${text}</GioSmartLink>`
  }

  getComponents(): string[] {
    return Array.from(this.components.values())
  }

  private svelteSafe(text: string): string {
    return text.replace(/{/g, '&lbrace;').replace(/}/g, '&rbrace;')
  }

  private addComponentDependencies(components: string[]) {
    components.forEach((component) => this.components.add(component))
  }
}

export class GioSvelteMarkdownParser implements MarkdownParser {
  parse(markdownContent: string): MarkdownParserOutput {
    const renderer = new GioSvelteMarkdownRenderer()

    return {
      parsedContent: marked(markdownContent, {
        renderer
      }),
      dependencies: { '@gabio/design-svelte': renderer.getComponents() }
    }
  }
}
