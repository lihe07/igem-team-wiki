<script>
  import { onMount } from "svelte";

  /** @type {HTMLElement} */
  let container;
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

  let percent = 0;
  let barHeight = 0;
  function updateScroll() {
    hide = false;
    lastUpdate = Date.now();
    barHeight = container.clientHeight / container.scrollHeight;

    percent =
      (container.scrollTop /
        (container.scrollHeight - container.clientHeight)) *
      barHeight;

    if (!interval) {
      interval = setInterval(updateChecker, 1000);
    }
  }

  onMount(() => {
    updateScroll();
  });
</script>

<div
  class="container"
  id="scroll"
  bind:this={container}
  on:scroll={updateScroll}
>
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
    style="height: {barHeight * 100}%; top: {percent * 100}%"
  />
</div>

<style>
  .container {
    height: 100vh;
    width: 100%;
    overflow: scroll;
    scrollbar-width: none;
    position: relative;
  }
  /* Hide scrollbar */
  .container::-webkit-scrollbar {
    display: none;
  }
  .content {
    min-width: 100%;
    overflow: hidden;
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
    background-color: white;
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
    opacity: 30%;
  }
</style>
