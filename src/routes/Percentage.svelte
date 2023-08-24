<script>
  import { onMount } from "svelte";
  import { spring } from "svelte/motion";

  /** @type {HTMLDivElement}*/
  let container;

  /** @type {HTMLDivElement}*/
  let anchor;

  let percent = 0;

  function onScroll() {
    if (!container) return;

    percent = -anchor.getBoundingClientRect().top / container.scrollHeight;
  }

  onMount(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
  });
  const s = spring(percent);
  $: s.set(percent);
</script>

<div class="anchor" bind:this={anchor} />
<div bind:this={container}>
  <slot {percent} />
</div>
