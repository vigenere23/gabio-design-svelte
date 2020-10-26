<div {id} class="gio-heading {levelClass}" class:dark class:noMargin>
  <slot />
</div>

<script lang="ts">
  type HeadingLevel = 1 | 2 | 3 | 4

  export let dark: boolean = false
  export let noMargin: boolean = false
  export let level: HeadingLevel = 2
  export let id: string = undefined

  $: levelClass = `level-${level}`
</script>

<style lang="scss">
  @import '../../styles/fonts';
  @import '../../styles/colors';
  @import '../../styles/sizes';

  .gio-heading {
    font-family: $special-font;
    font-weight: 700;
    color: $primary-text-dark;
    margin-top: rem(16px);
    margin-bottom: rem(16px);
    line-height: 1.1;

    &.level-1 {
      font-size: rem(38px);
      padding: rem(4px) 0;
      margin-top: rem(32px);
      border-bottom: solid rem(3px) $focus-light;
    }

    &.level-2 {
      margin-top: rem(32px);
      font-size: rem(28px); // rem(32px);
    }

    &.level-3 {
      font-size: rem(24px);
    }

    &.level-4 {
      font-size: rem(20px);
    }

    &.dark {
      color: $primary-text-light;

      &.level-1 {
        border-bottom-color: $focus-dark;
      }
    }

    &.noMargin {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
</style>
