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
  import { isExternalUrl, toSpaRoute } from '../lib/url'

  export let href: string
  export let disable: boolean = false
  export let dark: boolean = false
  export let accent: boolean = false
  export let spa: boolean = false

  $: isExternal = isExternalUrl(href)
  $: computedHref =
    !disable && href ? (spa ? toSpaRoute(href) : href) : undefined
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
