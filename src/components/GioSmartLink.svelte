<!-- <a href={computedHref} {target} class="gio-smart-link" class:dark class:accent>
  <slot />
</a><script lang="ts">
  import { isRelativeUrl } from '../utils/url'

  export let href: string
  export let disable = false
  export let dark = false
  export let accent = false

  $: isRelative = isRelativeUrl(href)
  $: computedHref = !disable && !isRelative ? href : undefined
  $: target = !disable && !isRelative && href ? '_blank' : undefined
</script><style lang="scss">
  @import '../styles/colors';

  .gio-smart-link {
    &.accent {
      color: $primary-text-dark;
      text-decoration: underline;

      &.dark {
        color: $primary-text-light;
      }
    }
  }
</style>-->
