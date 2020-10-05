<span class="gio-tag {type}" class:dark>
  <slot />
</span>

<script lang="ts">
  type TagType = 'primary' | 'secondary'

  export let dark = false
  export let type: TagType = 'primary'
</script>

<style lang="scss">
  @import '../../styles/colors';
  @import '../../styles/sizes';

  .gio-tag {
    font-size: 0.75em;
    font-weight: 700;
    padding: rem(3px) rem(7px);
    text-transform: uppercase;
    margin-bottom: rem(4px);
    margin-right: rem(5px);
    border-radius: $border-radius-small;
    display: inline-block;

    &.primary {
      background-color: $accent-dark;
    }

    &.secondary {
      background-color: $hover-dark;
    }

    &.dark {
      &.primary {
        background-color: $accent-light;
      }

      &.secondary {
        background-color: $hover-light;
      }
    }
  }
</style>
