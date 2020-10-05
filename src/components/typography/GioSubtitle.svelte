<div class="gio-subtitle" class:dark class:centered class:noMargin>
  <slot />
</div>

<script lang="ts">
  export let dark = false
  export let centered = false
  export let noMargin = false
</script>

<style lang="scss">
  @import '../../styles/fonts';
  @import '../../styles/colors';
  @import '../../styles/sizes';

  .gio-subtitle {
    font-family: $special-font;
    font-size: rem(22px);
    font-weight: 700;
    color: $tertiary-text-dark;
    @include text-margin;

    &.noMargin {
      margin-top: 0;
      margin-bottom: 0;
    }

    &.centered {
      text-align: center;
    }

    &.dark {
      color: $tertiary-text-light;
    }
  }
</style>
