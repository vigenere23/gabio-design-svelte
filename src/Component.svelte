<h1 class="component">Hello world! {i}{vee}</h1>

<script lang="ts">
  interface World {
    tune: boolean
  }

  const vee: World = { tune: true }

  let i = 0;
  setInterval(() => i++, 1000)
</script>

<style lang="scss">
.component {
  color: blue;
}
</style>
