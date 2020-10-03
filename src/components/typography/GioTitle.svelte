<h1
  class="gio-title"
  class:noMargin
  class:dark
  class:centered
  style="font-size: {fontSize}">
  <slot />
</h1>

<script lang="ts">
  export let noMargin = false
  export let dark = false
  export let centered = false
  export let fontSize = 14 * 4 + 'px'
</script>

<style lang="scss">
  @import '../../styles/fonts.scss';
  @import '../../styles/colors.scss';

  .gio-title {
    font-family: $special-font;
    font-weight: 700;
    color: $primary-text-dark;

    &:not(.no-margin) {
      margin: 8rem 0;
    }

    &.centered {
      text-align: center;
    }

    &.dark {
      color: $primary-text-light;
    }
  }
</style>
