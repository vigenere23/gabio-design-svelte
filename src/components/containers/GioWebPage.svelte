<div class="gio-web-page">
  <slot />
</div>

<script lang="ts">
</script>

<style lang="scss">
  @import '../../styles/sizes';

  .gio-web-page {
    width: 100%;
    min-height: calc(100vh - #{$header-height});
  }
</style>
