<div class="gio-caption" class:dark class:noMargin class:noBorder>
  <GioText {dark} type="primary">
    <slot />
  </GioText>
</div>

<script lang="ts">
  import { GioText } from '..'

  export let dark = false
  export let noMargin = false
  export let noBorder = false
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

    &.noBorder {
      border-left: none;
    }

    &.noMargin {
      margin-top: 0;
      margin-bottom: 0;
    }

    // for markdown transpiling
    :global(.gio-body-text),
    :global(.gio-text) {
      line-height: normal; // TODO check for replacement
    }

    // for markdown transpiling
    :global(.gio-body-text) {
      font-size: inherit;
      margin: 0 !important;
    }
  }
</style>
