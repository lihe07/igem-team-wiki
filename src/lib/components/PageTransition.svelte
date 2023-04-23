<script>
  import { afterNavigate, beforeNavigate, goto } from "$app/navigation";

  let loaded = true;

  let skip = false;

  /** @type {import("@sveltejs/kit").NavigationTarget?} */
  let from;

  /** @type {import("@sveltejs/kit").NavigationTarget?} */
  let to;

  beforeNavigate((n) => {
    if (!n.to || !n.from) return;

    if (skip) {
      console.log("skip");
      skip = false;
      return;
    }

    from = n.from;
    to = n.to;

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
    setTimeout(() => (loaded = true), 300);
  });
</script>

<div class="content" class:loaded>
  <slot />
</div>

<div class="splash" class:loaded>
  <h1>
    Transition: from {from?.route.id} to {to?.route.id}
  </h1>
</div>

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

    display: flex;
    justify-content: center;
    align-items: center;
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

  h1 {
    color: white;
  }
</style>
