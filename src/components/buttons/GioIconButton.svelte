<div class="gio-icon-button__wrapper" class:noMarginLeft class:noMarginRight>
  <GioSmartLink {href} on:click={handleClick}>
    <div class="gio-icon-button__container {size}" class:dark>
      <GioText {dark} type="secondary">
        <GioIcon {name} />
      </GioText>
    </div>
  </GioSmartLink>
</div>

<script lang="ts">
  import GioSmartLink from '../GioSmartLink.svelte'
  import GioText from '../typography/GioText.svelte'
  import GioIcon from '../typography/GioIcon.svelte'
  import { createEventDispatcher } from 'svelte'
  import type { IconName } from '@fortawesome/fontawesome-common-types'

  type Size = 'small' | 'medium'

  export let dark: boolean = false
  export let noMarginLeft: boolean = false
  export let noMarginRight: boolean = false
  export let size: Size = 'medium'
  export let href: string = undefined
  export let name: IconName

  const dispatch = createEventDispatcher()

  function handleClick() {
    dispatch('click')
  }
</script>

<style lang="scss">
  @import '../../styles/colors';
  @import '../../styles/transitions';
  @import '../../styles/sizes';

  .gio-icon-button {
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
      border-radius: 50%;
      cursor: pointer;
      @include transition(base, out, color, background-color);

      &.medium {
        height: rem(36px);
        padding: 0 rem(12px);
      }

      &.small {
        height: rem(32px);
        padding: 0 rem(10px);

        :global(.gio-text) {
          font-size: 0.8em;
          line-height: 0.8em;
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
    }
  }
</style>
