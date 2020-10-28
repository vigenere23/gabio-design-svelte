<div class="gio-captioned-image" class:dark style="width: {width}">
  <slot name="image" />
  {#if caption}
    <div class="gio-captioned-image__caption">
      <GioText {dark}>{caption}</GioText>
    </div>
  {/if}
</div>

<script lang="ts">
  import GioText from '../typography/GioText.svelte'

  export let dark: boolean = false
  export let width = '100%'
  export let caption: string
</script>

<style lang="scss">
  @import '../../styles/colors';
  @import '../../styles/sizes';

  $border-size: 3px;

  .gio-captioned-image {
    border-radius: $border-radius-medium;
    margin-top: rem(32px);
    margin-bottom: rem(32px);

    :global([slot='image']),
    :global([slot='image'] > *) {
      display: block;
      width: 100%;
      background-color: white;
    }

    :global([slot='image']) {
      border-radius: $border-radius-small;
      border: solid $border-size $accent-light;
      overflow: hidden;
    }

    &.dark {
      :global([slot='image']) {
        border-color: dark(2);
      }

      .gio-captioned-image__caption {
        background-color: $accent-dark;
        border-left-color: $tertiary-text-light;
      }
    }

    &__caption {
      margin-top: -$border-size;
      padding: rem(8px) rem(12px);
      background-color: $accent-light;
      border-radius: $border-radius-small;

      :global(.gio-text) {
        font-size: rem(16px) !important;
      }
    }
  }
</style>
