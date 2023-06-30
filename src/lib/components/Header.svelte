<script>
  import { onMount } from "svelte";

  export let fixed = true;
  export let white = false; // Fg: white
  import HeaderLinks from "./HeaderLinks.svelte";

  let show = false;

  function onScroll() {
    show = window.scrollY > window.innerHeight;
  }

  onMount(() => {
    window.addEventListener("scroll", onScroll);
    onScroll();
  });
</script>

<header class:fixed class:show>
  <a class="team-name" class:white href="/">BAID-China</a>

  <div class="links">
    <HeaderLinks {white} />
  </div>
</header>

<style>
  header {
    display: flex;
    padding: 0 5rem;
    box-sizing: border-box;
    font-family: sans-serif;
    justify-content: space-between;
    align-items: center;
    color: white;
  }

  header.fixed {
    position: fixed;
    /* top: 1.5rem; */
    top: -1rem;
    left: 0;
    width: 100%;
    z-index: 10;
    color: black;
    opacity: 0;
    transition: all 0.3s;
    padding: 1rem 5rem;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(5px);
  }

  header.show {
    top: 0;
    opacity: 1;
  }

  .team-name {
    font-weight: bold;
    font-size: 1.5rem;
    text-decoration: none;
    color: black;
    display: block;

    line-height: 2rem;
  }

  .team-name.white {
    color: white;
  }

  .links {
    display: flex;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    header {
      padding: 0 2rem;
    }
    .links {
      display: none;
    }
  }
</style>
