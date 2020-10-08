<div class="gio-content" class:noPadding style="max-width: {maxWidth}">
  <slot />
</div>

<script lang="ts">
  export let noPadding = false
  export let maxWidth = '1100px'
</script>

<style lang="scss">
  @import '../../styles/sizes';

  .gio-content {
    width: 100%;
    margin: auto;
    padding-left: rem(12px);
    padding-right: rem(12px);

    &.noPadding {
      padding-left: 0;
      padding-right: 0;
    }
  }
</style>
