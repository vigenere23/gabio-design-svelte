<div class="gio-web-page" style="min-height: calc(100vh - {headerHeight})">
  <slot />
</div>

<script lang="ts">
  export let headerHeight = '0px'
</script>

<style lang="scss">
  @import '../../styles/sizes';

  .gio-web-page {
    width: 100%;
  }
</style>
