<div class="gio-button__wrapper" class:noMarginLeft class:noMarginRight>
  <GioSmartLink {href} on:click={handleClick}>
    <div class="gio-button__container {size}" class:dark>
      <GioText {dark} type="primary">
        <div class="gio-button__content">
          <slot />
        </div>
      </GioText>
    </div>
  </GioSmartLink>
</div>

<script lang="ts">
  import GioSmartLink from '../GioSmartLink.svelte'
  import GioText from '../typography/GioText.svelte'
  import { createEventDispatcher } from 'svelte'

  type Size = 'small' | 'medium'

  export let dark: boolean = false
  export let noMarginLeft: boolean = false
  export let noMarginRight: boolean = false
  export let size: Size = 'medium'
  export let href: string = undefined

  const dispatch = createEventDispatcher()

  function handleClick() {
    dispatch('click')
  }
</script>

<style lang="scss">
  @import '../../styles/colors';
  @import '../../styles/transitions';
  @import '../../styles/sizes';

  .gio-button {
    &__wrapper {
      margin-left: rem(8px);
      margin-right: rem(8px);
      width: fit-content;

      &.noMarginLeft {
        margin-left: 0;
      }

      &.noMarginRight {
        margin-right: 0;
      }
    }

    &__container {
      display: flex;
      align-items: center;
      background-color: $accent-light;
      color: $primary-text-dark;
      cursor: pointer;
      @include transition(base, out, color, background-color);

      &.medium {
        height: rem(36px);
        border-radius: $border-radius-medium;
        padding: 0 rem(12px);
      }

      &.small {
        height: rem(32px);
        border-radius: $border-radius-medium;
        padding: 0 rem(10px);

        :global(.gio-button__content > *) {
          font-size: 0.9em;
        }

        :global(.gio-button__content .gio-icon) {
          margin-top: -0.1em;
        }
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

      :global(.gio-button__content > *) {
        flex-shrink: 0;
        line-height: 1em;
      }

      :global(.gio-button__content > :not(:first-child)) {
        margin-left: rem(8px);
      }
    }

    &__content {
      text-transform: uppercase;
      letter-spacing: 0.05em;
      flex: 0 0 auto;
      display: flex;
      align-items: center;
    }
  }
</style>
