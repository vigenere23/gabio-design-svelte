<div class="gio-body-text" class:noMargin>
  <GioText {dark} type="secondary">
    <slot />
  </GioText>
</div>

<script lang="ts">
  import GioText from './GioText.svelte'

  export let noMargin: boolean = false
  export let dark: boolean = false
</script>

<style lang="scss">
  @import '../../styles/sizes';

  .gio-body-text {
    line-height: 1.8em;
    font-size: rem(18px);
    @include text-margin;

    :global(.gio-text) {
      line-height: 1.8em;
      font-size: rem(18px);
    }

    &.noMargin {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
</style>
