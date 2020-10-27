<div class="gio-card">
  <GioSmartLink {href} on:click={handleClick}>
    <div class="gio-card__container" class:dark>
      {#if $$slots.image}
        <div class="gio-card__image-wrapper">
          <slot name="image" />
        </div>
      {/if}
      <div class="gio-card__content">
        <div class="gio-card__title">
          <GioHeading level={3} {dark}>{title}</GioHeading>
        </div>
        <div class="gio-card__tags">
          <GioText type="primary" dark={!dark}>
            {#each tags as tag}
              <GioTag {dark}>{tag}</GioTag>
            {/each}
          </GioText>
        </div>
        <div class="gio-card__desc">
          <GioText {dark}>{desc}</GioText>
        </div>
        {#if $$slots.actions}
          <div class="gio-card__actions">
            <slot name="actions" />
          </div>
        {/if}
      </div>
    </div>
  </GioSmartLink>
</div>

<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import GioSmartLink from '../GioSmartLink.svelte'
  import GioHeading from '../typography/GioHeading.svelte'
  import GioTag from '../typography/GioTag.svelte'
  import GioText from '../typography/GioText.svelte'

  export let dark: boolean = false
  export let href: string = undefined
  export let title: string
  export let desc: string
  export let tags: string[] = []

  const dispatch = createEventDispatcher()

  function handleClick(event: any) {
    dispatch('click', event)
  }
</script>

<style lang="scss">
  @import '../../styles/colors';
  @import '../../styles/sizes';
  @import '../../styles/transitions';

  .gio-card {
    display: block;
    width: rem(280px);
    margin: rem(16px);
    overflow: hidden;
    border-radius: $border-radius-medium;

    :hover,
    :focus,
    :active {
      .gio-card__container {
        border-color: $accent-dark;
        background-color: $focus-light;
        @include transition(base, in, background-color, border-color);

        &.dark {
          background-color: $focus-dark;
          border-color: $accent-light;
        }
      }
    }

    &__container {
      padding: rem(6px);
      padding-bottom: rem(8px);
      background-color: $accent-light;
      border: solid 3px $accent-light;
      border-radius: $border-radius-medium;
      @include transition(base, out, background-color);

      &.dark {
        background-color: $accent-dark;
        border-color: $accent-dark;
      }
    }

    &__image-wrapper {
      width: 100%;
      padding-bottom: 100% / 16 * 10;
      background-color: lighten($background-light, 2%);
      border-radius: $border-radius-small;
      overflow: hidden;
      position: relative;

      :global([slot='image']),
      :global([slot='image'] > *) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    &__content {
      padding: rem(8px);
      padding-top: 0;
    }

    &__title {
      line-height: 1.2em;
    }

    &__tags {
      margin-bottom: rem(16px);
    }

    &__desc {
      :global(.gio-text) {
        line-height: 1.2em;
      }
      max-height: 4 * 1.2em;
      overflow: hidden;
    }

    &__actions {
      margin-top: rem(16px);
      display: flex;
      justify-content: flex-end;
    }
  }
</style>
