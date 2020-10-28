<div class="gio-text {type}" class:dark>
  <slot />
</div>

<script lang="ts">
  type TextType = 'primary' | 'secondary' | 'tertiary'

  export let dark: boolean = false
  export let type: TextType = 'secondary'
</script>

<style lang="scss">
  @import '../../styles/fonts.scss';
  @import '../../styles/colors.scss';
  @import '../../styles/sizes.scss';

  .gio-text {
    font-family: $classic-font;
    font-size: rem(17px);
    font-weight: 500;
    line-height: 1;

    &.primary {
      color: $primary-text-dark;
    }

    &.secondary {
      color: $secondary-text-dark;
    }

    &.tertiary {
      color: $tertiary-text-dark;
    }

    &.dark {
      &.primary {
        color: $primary-text-light;
      }

      &.secondary {
        color: $secondary-text-light;
      }

      &.tertiary {
        color: $tertiary-text-light;
      }
    }
  }
</style>
