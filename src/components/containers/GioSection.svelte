<section {id} class="gio-section" class:dark class:noPadding>
  <slot />
</section>

<script lang="ts">
  export let dark = false
  export let noPadding = false
  export let id: string = undefined
</script>

<style lang="scss">
  @import '../../styles/colors';
  @import '../../styles/sizes';

  .gio-section {
    width: 100%;
    background-color: $background-light;
    overflow: auto;

    &:not(.no-padding) {
      padding: rem(56px) 0;
    }

    &.dark {
      background-color: $background-dark;
    }
  }
</style>
