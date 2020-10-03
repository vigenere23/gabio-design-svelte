<h1 class="gio-title" class:noMargin class:dark class:centered>
  <slot />
</h1>

<script lang="ts">
  export let noMargin = false
  export let dark = false
  export let centered = false
</script>

<style lang="scss">
  @import '../../styles/fonts.scss';
  @import '../../styles/colors.scss';
  @import '../../styles/sizes.scss';

  .gio-title {
    font-family: $special-font;
    font-weight: 700;
    color: $primary-text-dark;
    margin-top: rem(32px);
    margin-bottom: rem(32px);
    font-size: rem(56px);

    &.noMargin {
      margin-top: 0;
      margin-bottom: 0;
    }

    &.centered {
      text-align: center;
    }

    &.dark {
      color: $primary-text-light;
    }
  }
</style>
