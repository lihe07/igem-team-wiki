<script>
  import { afterNavigate, beforeNavigate, goto } from "$app/navigation";

  let loaded = true;

  let skip = false;

  beforeNavigate((n) => {
    if (!n.to) return;

    if (skip) {
      console.log("skip");
      skip = false;
      return;
    }

    n.cancel();
    console.log(n);
    loaded = false;

    setTimeout(() => {
      // Start navigation
      skip = true;
      goto(n.to.url);
    }, 300);
  });

  afterNavigate(() => {
    loaded = true;
  });
</script>

<div class="content" class:loaded>
  <slot />
</div>

<div class="splash" class:loaded>TR</div>

<style>
  .splash {
    position: fixed;
    z-index: 19;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: black;
    transition: opacity 0.3s;
  }
  .content {
    opacity: 0;
    transition: opacity 0.3s;
  }
  .content.loaded {
    opacity: 1;
  }
  .splash.loaded {
    opacity: 0;
    pointer-events: none;
  }
</style>
