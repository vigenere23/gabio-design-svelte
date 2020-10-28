<span class="gio-tag {type}" class:dark>
  <slot />
</span>

<script lang="ts">
  type TagType = 'primary' | 'secondary'

  export let dark: boolean = false
  export let type: TagType = 'primary'
</script>

<style lang="scss">
  @import '../../styles/colors';
  @import '../../styles/fonts';
  @import '../../styles/sizes';

  .gio-tag {
    font-family: $classic-font;
    font-size: 0.75em;
    font-weight: 700;
    padding: rem(5px) rem(7px);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-radius: $border-radius-small;
    display: inline-block;
    color: $primary-text-light;
    margin-bottom: rem(4px);

    &:not(:last-child) {
      margin-right: rem(5px);
    }

    &.primary {
      background-color: $accent-dark;
    }

    &.secondary {
      background-color: $hover-dark;
    }

    &.dark {
      color: $primary-text-dark;

      &.primary {
        background-color: $accent-light;
      }

      &.secondary {
        background-color: $hover-light;
      }
    }
  }
</style>
