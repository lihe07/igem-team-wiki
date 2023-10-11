<script>
  import { onMount } from "svelte";
  import { tweened } from "svelte/motion";

  export let height = "";

  /** @type {HTMLDivElement} */
  let container;
  /** @type {HTMLDivElement?} */
  export let anchor = null;
  /** @type {HTMLDivElement} */
  let inner;

  /** @type {HTMLDivElement} */
  let _anchor;

  let percent = 0;

  function onScroll() {
    if (!container) return;
    let a = anchor || _anchor;

    percent =
      -a.getBoundingClientRect().top /
      (container.scrollHeight - height.length ? inner.scrollHeight : 0);
  }

  onMount(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
  });

  const s = tweened(percent, {
    duration: 500,
  });
  $: s.set(percent);
</script>

<div class="anchor" bind:this={_anchor} />
<div
  class="container"
  bind:this={container}
  style:height
  class:sticky={height.length}
>
  <div class="inner" class:screen={height.length} bind:this={inner}>
    <slot percent={$s} />
  </div>
</div>

<style scoped>
  .container {
    width: 100%;
  }

  .container.sticky {
    position: sticky;
    top: 0;
  }

  .inner {
    width: 100%;
  }

  .screen {
    position: sticky;
    top: 0;
    height: 100vh;
    overflow: hidden;
  }
</style>
