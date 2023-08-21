<script>
  import { onMount } from "svelte";

  let loaded = false;
  const t0 = Date.now();
  const duration = 1000;

  function checkReadyState() {
    if (Date.now() - t0 < duration) {
      setTimeout(() => {
        checkReadyState();
      }, 100);
      return;
    }
    loaded = document.readyState === "complete";
  }

  onMount(() => {
    checkReadyState();
    document.addEventListener("readystatechange", () => {
      checkReadyState();
    });
  });
</script>

<div class="container" class:loaded>
  <h2>LOADING...</h2>
</div>

<div class="content" class:loaded>
  <slot />
</div>

<style>
  .container {
    position: fixed;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #99f6e4;
    transition: opacity 0.3s;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container.loaded {
    opacity: 0;
    pointer-events: none;
  }
</style>
