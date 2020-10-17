<div class="gio-card" class:notReady>
  <GioSmartLink href={computedHref}>
    <div class="gio-card__container" class:dark>
      {#if notReady}
        <div class="gio-card__overlay">
          <GioHeading level={3} {dark}>Coming soon!</GioHeading>
        </div>
      {/if}
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
  import GioSmartLink from './GioSmartLink.svelte'
  import GioHeading from './typography/GioHeading.svelte'
  import GioTag from './typography/GioTag.svelte'
  import GioText from './typography/GioText.svelte'

  export let dark = false
  export let notReady = false
  export let href: string = undefined
  export let title: string
  export let desc: string
  export let tags: string[] = []

  $: computedHref = notReady ? undefined : href
</script>

<style lang="scss">
  @import '../styles/colors';
  @import '../styles/sizes';
  @import '../styles/transitions';

  .gio-card {
    display: block;
    width: rem(280px);
    margin: rem(16px);
    overflow: hidden;
    border-radius: $border-radius-medium;

    &__container {
      padding: rem(6px);
      padding-bottom: rem(8px);
      background-color: $accent-light;
      border: solid 3px $accent-light;
      @include transition(base, out, background-color);

      &:hover,
      &:focus,
      &:active {
        border-color: $accent-dark;
        background-color: $focus-light;
        @include transition(base, in, background-color, border-color);
      }

      &.dark {
        background-color: $accent-dark;
        border-color: $accent-dark;

        .gio-card__overlay {
          background-color: rgba($focus-dark, 0.9);
        }

        &:focus,
        &:active,
        &:hover {
          background-color: $focus-dark;
          border-color: $accent-light;
        }
      }
    }

    :global(&.notReady .gio-smart-link) {
      cursor: default;
    }

    &__overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
      background-color: rgba($focus-light, 0.9);
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
