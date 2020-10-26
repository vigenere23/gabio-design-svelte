<div class="gio-caption" class:dark class:noMargin class:noBorder>
  <GioBodyText {dark}>
    <slot />
  </GioBodyText>
</div>

<script lang="ts">
  import GioBodyText from './GioBodyText.svelte'

  export let dark: boolean = false
  export let noMargin: boolean = false
  export let noBorder: boolean = false
</script>

<style lang="scss">
  @import '../../styles/colors';
  @import '../../styles/sizes';

  .gio-caption {
    display: block;
    padding: rem(10px) rem(12px);
    background-color: $accent-light;
    border-radius: $border-radius-small;
    border-left: solid rem(3px) $tertiary-text-dark;
    @include text-margin;

    &.dark {
      background-color: $accent-dark;
      border-left-color: $tertiary-text-light;
    }

    &.noBorder {
      border-left: none;
    }

    &.noMargin {
      margin-top: 0;
      margin-bottom: 0;
    }

    // for markdown transpiling
    :global(.gio-body-text) {
      font-size: inherit;
    }

    :global(:first-child) {
      margin-top: 0 !important;
    }

    :global(:last-child) {
      margin-bottom: 0 !important;
    }
  }
</style>
