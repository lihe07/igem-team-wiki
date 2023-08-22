<script>
  import { onMount } from "svelte";

  let loaded = false;
  let splash = false;
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
    if (loaded) {
      setTimeout(() => (splash = true), 500);
    }
  }

  onMount(() => {
    checkReadyState();
    document.addEventListener("readystatechange", () => {
      checkReadyState();
    });
  });
  const colors = ["#3498db", "#48c9b0", "#73c6b6"];

  function bg(ele) {
    function animate() {
      ele.style.background = colors[Math.floor(Math.random() * colors.length)];
      setTimeout(animate, Math.random() * 2000);
    }
    setTimeout(() => (ele.style.opacity = "1"), 300);
    animate();
  }
</script>

<div class="container full" class:loaded>
  <div class="bg full" style="opacity: 0;" use:bg />
  <div class="cover full">
    <h2>Loading</h2>
  </div>
</div>

<div class="content" class:splash>
  <slot />
</div>

<style>
  .full {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }

  .bg {
    transition: all 0.5s ease-in;
  }
  .container {
    z-index: 20;
    transition: opacity 2s;
    background: black;
  }

  .cover {
    backdrop-filter: blur(500px);
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 {
    color: white;
    font-size: 50px;
    font-family: serif;
    text-shadow: 0 0 50px white;
  }

  .container.loaded {
    opacity: 0;
    pointer-events: none;
  }
</style>
