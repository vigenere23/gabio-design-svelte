<span class="gio-inline-code" class:dark>
  <slot />
</span>

<script lang="ts">
  export let dark = false
</script>

<style lang="scss">
  @import '../../styles/colors';
  @import '../../styles/fonts';
  @import '../../styles/sizes';

  .gio-inline-code {
    padding: rem(2px) rem(4px);
    color: $secondary-text-dark;
    background-color: $accent-light;
    border-radius: $border-radius-small;
    font-family: $code-font;
    font-weight: inherit;
    font-size: 0.9em;

    &.dark {
      background-color: $accent-dark;
      color: $secondary-text-light;
    }
  }
</style>
