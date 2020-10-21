<ul class="gio-list" class:indent class:noMargin>
  <slot />
</ul>

<script lang="ts">
  export let indent: boolean = false
  export let noMargin: boolean = false
</script>

<style lang="scss">
  @import '../../styles/sizes';

  .gio-list {
    line-height: 1.75em;
    list-style: none;
    padding: 0;
    margin-left: 0;
    margin-right: 0;
    @include text-margin;

    &.noMargin {
      margin-top: 0;
      margin-bottom: 0;
    }

    &.indent {
      margin-left: rem(24px);
    }

    :global(.gio-list) {
      margin: 0;

      &.indent {
        margin-left: 0;
      }
    }
  }
</style>
