<div class="gio-code-block">
  <div class="gio-code-block__top-bar">
    <div class="gio-code-block__top-bar__window-buttons">
      <div class="gio-code-block__top-bar__window-buttons__red" />
      <div class="gio-code-block__top-bar__window-buttons__yellow" />
      <div class="gio-code-block__top-bar__window-buttons__green" />
    </div>
    <GioText dark type="secondary">
      <span class="gio-code-block__top-bar__language">{language}</span>
    </GioText>
  </div>

  <pre><code
      bind:this={codeElement}
      class="language-{language}">{decodedCode}</code></pre>
</div>

<script lang="ts">
  import GioText from './GioText.svelte'
  import Prism from '../../../lib/prism.min.js'
  import { onMount } from 'svelte'

  export let language: string
  export let code: string
  let codeElement: HTMLElement

  $: decodedCode = decodeURI(code)

  onMount(async () => {
    Prism.highlightElement(codeElement)
  })
</script>

<style lang="scss">
  @import '../../styles/fonts';
  @import '../../styles/colors';
  @import '../../styles/sizes';

  .gio-code-block {
    font-size: rem(14px);
    overflow: hidden;
    border-radius: $border-radius-medium;
    @include text-margin;

    &__top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px;
      background-color: $accent-dark;
      color: $primary-text-light;
      text-align: left;

      &__window-buttons {
        display: flex;

        > * {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          margin: 0 4px;
        }

        &__red {
          background-color: hsl(355, 65%, 65%);
        }

        &__yellow {
          background-color: hsl(39, 67%, 69%);
        }

        &__green {
          background-color: hsl(95, 38%, 62%);
        }
      }

      &__language {
        font-size: rem(14px);
      }
    }
  }
</style>
