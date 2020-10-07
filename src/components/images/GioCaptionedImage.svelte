<div class="gio-captioned-image" class:dark style="width: {width}">
  <slot name="image" />
  {#if caption}
    <div class="gio-captioned-image__caption">
      <GioCaption noMargin noBorder {dark}>{caption}</GioCaption>
    </div>
  {/if}
</div>

<script lang="ts">
  import GioCaption from '../typography/GioCaption.svelte'

  export let dark = false
  export let width = '100%'
  export let caption: string
</script>

<style lang="scss">
  @import '../../styles/colors';
  @import '../../styles/sizes';

  $border-size: 3px;

  .gio-captioned-image {
    margin: 16px auto;
    border-radius: $border-radius-medium;

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
    }

    &__caption {
      margin-top: -$border-size;
    }
  }
</style>
