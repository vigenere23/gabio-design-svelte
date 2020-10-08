<a
  class="gio-smart-link"
  class:dark
  class:accent
  rel="noopener"
  href={computedHref}
  {target}>
  <slot />
</a>

<script lang="ts">
  import { isExternalUrl } from '../lib/url'

  export let href: string
  export let disable = false
  export let dark = false
  export let accent = false

  $: isExternal = isExternalUrl(href)
  $: computedHref = !disable && href ? href : undefined
  $: target = !disable && isExternal && href ? '_blank' : undefined
</script>

<style lang="scss">
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
</style>
