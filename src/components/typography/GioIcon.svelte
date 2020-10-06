<svg
  class="gio-icon"
  aria-hidden="true"
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  {viewBox}>
  <path fill="currentColor" d={path} />
</svg>

<script lang="ts">
  import { FaIconRegisterer } from '../../utils/faicon-registerer'

  export let iconName: string

  $: icon = FaIconRegisterer.getIcon(iconName)
  $: viewBox = '0 0 ' + icon.icon[0] + ' ' + icon.icon[1]
  $: path = icon.icon[4]
</script>

<style>
  .gio-icon {
    width: 1em;
    height: 1em;
    overflow: visible;
    display: inline-block;
  }
</style>
