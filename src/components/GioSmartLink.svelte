<a
  class="gio-smart-link"
  class:dark
  class:accent
  rel="noopener"
  href={computedHref}
  {target}
  on:click={handleClick}>
  <slot />
</a>

<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import { isExternalUrl, toSpaRoute } from '../lib/url'

  export let href: string
  export let disable: boolean = false
  export let dark: boolean = false
  export let accent: boolean = false
  export let spa: boolean = false

  const dispatch = createEventDispatcher()

  $: isExternal = isExternalUrl(href)
  $: computedHref =
    !disable && href ? (spa ? toSpaRoute(href) : href) : undefined
  $: target = !disable && isExternal && href ? '_blank' : undefined

  function handleClick(event: MouseEvent) {
    dispatch('click', event)
  }
</script>

<style lang="scss">
  @import '../styles/colors';

  .gio-smart-link {
    cursor: pointer;

    &.accent {
      color: $primary-text-dark;
      text-decoration: underline;

      &.dark {
        color: $primary-text-light;
      }
    }
  }
</style>
