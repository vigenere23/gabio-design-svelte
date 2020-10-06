<div
  class="gio-button {size}"
  class:dark
  class:noMarginLeft
  class:noMarginRight>
  <GioSmartLink {href} on:click={handleClick}>
    <GioText {dark} type="primary">
      <div class="gio-button__content">
        <slot />
      </div>
    </GioText>
  </GioSmartLink>
</div>

<script lang="ts">
  import GioSmartLink from './GioSmartLink.svelte'
  import GioText from './typography/GioText.svelte'
  import { createEventDispatcher } from 'svelte'

  type Size = 'small' | 'medium'

  export let dark = false
  export let noMarginLeft = false
  export let noMarginRight = false
  export let size: Size = 'medium'
  export let href = null

  const dispatch = createEventDispatcher()

  function handleClick() {
    dispatch('click')
  }
</script>

<style lang="scss">
  @import '../styles/colors';
  @import '../styles/transitions';
  @import '../styles/sizes';

  .gio-button {
    display: flex;
    align-items: center;
    width: fit-content;
    background-color: $accent-light;
    color: $primary-text-dark;
    margin-left: rem(8px);
    margin-right: rem(8px);
    cursor: pointer;
    @include transition(base, out, color, background-color);

    &.medium {
      height: rem(36px);
      padding: 0 rem(12px);
      border-radius: $border-radius-medium;
    }

    &.small {
      height: rem(32px);
      padding: 0 rem(10px);
      border-radius: $border-radius-medium;

      :global(.button-content > *) {
        font-size: 0.9em;
      }
    }

    &.noMarginLeft {
      margin-left: 0;
    }

    &.noMarginRight {
      margin-right: 0;
    }

    &:hover,
    &:active,
    &:focus {
      @include transition(base, in, color, background-color);
    }

    &:active,
    &:focus {
      background-color: $focus-light;
    }

    &:hover {
      background-color: $hover-light;
    }

    &.dark {
      background-color: $accent-dark;
      color: $primary-text-light;

      &:active,
      &:focus {
        background-color: $focus-dark;
      }

      &:hover {
        background-color: $hover-dark;
      }
    }

    > * {
      flex: 0 0 auto;
    }

    &__content {
      text-transform: uppercase;

      > :not(:first-child) {
        margin-left: rem(8px);
      }

      > * {
        vertical-align: middle;
      }
    }
  }
</style>
