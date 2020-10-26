<div class="gio-subtitle" class:dark class:centered class:noMargin>
  <slot />
</div>

<script lang="ts">
  export let dark: boolean = false
  export let centered: boolean = false
  export let noMargin: boolean = false
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
    margin-top: rem(32px);
    margin-bottom: rem(32px);
    line-height: 1.5;

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
