<picture class="gio-image">
  {#each srcsets as srcset}
    <source {srcset} type={imageType(srcset)} on:error={handleSrcsetError} />
  {/each}
  <img
    class="gio-image__image"
    style="object-fit: {objectFit}"
    bind:this={imageElement}
    src={imageSrc}
    alt={desc}
    title={desc} />
</picture>

<script lang="ts">
  import { onMount } from 'svelte'

  type ObjectFit = 'contain' | 'cover'
  const LOADING_IMAGE_SRC = ''

  export let srcs: string[] = []
  export let desc: string
  export let objectFit: ObjectFit = undefined
  export let lazy: boolean = false

  let imageElement: HTMLImageElement
  let srcsets: string[] = []
  let imageSrc = LOADING_IMAGE_SRC
  let intersectionObserver: IntersectionObserver | null = null

  $: lastSrc = srcs[srcs.length - 1]
  $: shouldLazyLoad = lazy && 'IntersectionObserver' in window

  onMount(async () => {
    if (shouldLazyLoad) {
      startLazyLoading()
    } else {
      imageSrc = lastSrc
      srcsets = srcs
    }
  })

  function imageType(src: string): string {
    let type = src.match(/image\/[a-z]+/)?.shift()
    if (!type) {
      const extension = src.split('.').pop()
      if (!extension) {
        type = undefined
      } else {
        type = `image/${extension}`
      }
    }

    return type
  }

  function startLazyLoading(): void {
    intersectionObserver = new IntersectionObserver((entries, observer) => {
      intersectionObserver = observer
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          srcsets = srcs
          imageSrc = lastSrc
          observer.unobserve(entry.target)
        }
      })
    })
    intersectionObserver.observe(imageElement)
  }

  function handleSrcsetError(event: Event) {
    ;(event.currentTarget as HTMLSourceElement).srcset = lastSrc
  }
</script>

<style lang="scss">
  .gio-image {
    display: block;

    &__image {
      display: block;
      width: 100%;
      height: 100%;
      opacity: 1;
      transition: opacity 0.3s ease-in-out;

      &[src=''] {
        opacity: 0;
      }
    }
  }
</style>
