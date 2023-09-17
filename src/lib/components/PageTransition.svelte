<script>
  import { afterNavigate, beforeNavigate, goto } from "$app/navigation";
  import Icon from "@iconify/svelte";
  import header from "$lib/header";

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

  let entry = {
    icon: "",
    text: "",
  };

  function update(entries, _ = undefined) {
    entries.forEach((e) => {
      if (e.link === to?.route.id) {
        entry = e;
        return;
      }
      if (e.children) {
        update(e.children);
      }
    });
  }

  function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }

  $: {
    if (to?.route.id == "/") {
      entry = {
        icon: "fluent:home-48-filled",
        text: "Home",
      };
    } else update(header, to);
  }
</script>

<div class="content" class:loaded>
  <slot />
</div>

<div class="splash" class:loaded>
  <div class="circle" style="background-color: {choose(['#d6eaf8'])};">
    <Icon
      icon={entry.icon || "fluent:document-text-24-regular"}
      style="font-size: 100px;"
    />
  </div>
  <div class="text">
    <h2>{entry.text}</h2>
  </div>
</div>

<style scoped>
  .splash {
    position: fixed;
    z-index: 19;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: white;
    transition: opacity 0.3s;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .circle {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    animation: blink infinite 1.5s;
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

  .text {
    font-family: sans-serif;
  }
  .text h2 {
    font-family: serif;
    font-size: 50px;
    margin: 0;
  }

  @keyframes blink {
    0% {
      opacity: 100%;
    }
    50% {
      opacity: 70%;
    }
    100% {
      opacity: 100%;
    }
  }
</style>
