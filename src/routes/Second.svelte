<script>
  import { onMount } from "svelte";
  import { spring } from "svelte/motion";
  import Particles from "./Particles.svelte";

  /** @type {HTMLDivElement}*/
  let container;

  /** @type {HTMLDivElement}*/
  let anchor;

  let percent = 0;

  function onScroll() {
    if (!container) return;

    percent =
      (window.scrollY - anchor.offsetTop) /
      (container.offsetHeight - window.innerHeight);
  }

  onMount(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
  });

  const s = spring(percent);
  $: s.set(Math.max(0, Math.min(percent, 1)));
</script>

<div class="anchor" bind:this={anchor} />
<div class="container" bind:this={container}>
  <div class="inner">
    <Particles {percent} />
  </div>
</div>

<style scoped>
  .anchor {
    z-index: 5;
    position: absolute;
  }
  .container {
    background-color: gray;
    width: 100%;
    height: 300vh;
    margin-top: -10px;
    position: sticky;
    top: 0;
  }
  .inner {
    position: sticky;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: #bae6fd;
  }
</style>
