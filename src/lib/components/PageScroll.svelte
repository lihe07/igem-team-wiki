<script>
  import { onDestroy, onMount } from "svelte";
  import { spring } from "svelte/motion";

  /** @type {HTMLElement} */
  let content;

  let hide = false;
  let enter = false;
  let lastUpdate = 0;

  /** @type {?number}*/
  let interval = setInterval(updateChecker, 1000);
  function updateChecker() {
    if (Date.now() - lastUpdate > 1000) {
      hide = true;
      interval && clearInterval(interval);
      interval = null;
    }
  }

  let percent = spring(0);
  let barHeight = 0;
  function updateScroll() {
    hide = false;
    lastUpdate = Date.now();

    barHeight = window.innerHeight / content.scrollHeight;

    percent.set(
      (window.scrollY / (content.scrollHeight - window.innerHeight)) *
        (1 - barHeight)
    );

    if (!interval) {
      interval = setInterval(updateChecker, 1000);
    }
  }

  onMount(() => {
    updateScroll();
    window.addEventListener("scroll", updateScroll);
  });

  onDestroy(() => {
    if (typeof window !== "undefined")
      window.removeEventListener("scroll", updateScroll);
  });
</script>

<div>
  <div class="content" bind:this={content}>
    <slot />
  </div>
  <div
    class="mouse"
    on:mouseenter={() => (enter = true)}
    on:mouseleave={() => (enter = false)}
  />
  <div
    class="scroll"
    class:hide={hide && !enter}
    style="height: {barHeight * 100}%; top: {$percent * 100}%"
  />
</div>

<style>
  :global(html) {
    scrollbar-width: none;
    overflow-x: hidden;
  }
  /* Hide scrollbar */
  :global(::-webkit-scrollbar) {
    display: none;
  }
  .content {
    min-width: 100%;
  }
  .mouse {
    position: fixed;
    right: 0;
    top: 0;
    width: 20px;
    height: 100%;
  }
  .scroll {
    position: fixed;
    right: 1px;
    top: 0;
    background-color: black;
    border-radius: 1em;
    opacity: 50%;
    width: 5px;
    transition: opacity 0.3s;
  }
  .scroll.hide {
    opacity: 0;
  }
  .scroll:hover {
    opacity: 70%;
  }
  .scroll:active {
    opacity: 50%;
  }
</style>
