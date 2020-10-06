<li class="gio-list-item">
  <slot />
</li>

<style lang="scss">
  .gio-list-item {
    padding-left: 1.5em;
    line-height: inherit;

    &::before {
      content: '\279C'; // HEAVY ROUND-TIPPED RIGHT ARROW
      position: absolute;
      left: 0.25em;
      color: inherit;
    }
  }
</style>
