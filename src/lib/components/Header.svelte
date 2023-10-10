<script>
  import { onMount } from "svelte";

  export let fixed = true;
  export let white = false; // Fg: white

  import HeaderLinks from "./HeaderLinks.svelte";
  import MobileHeaderLinks from "./MobileHeaderLinks.svelte";

  let show = false;

  function onScroll() {
    if (typeof window?.header_thres != "number") {
      show = window.scrollY > window.innerHeight;
    } else {
      show = window.scrollY > window.header_thres;
    }

    if (!show && fixed) {
      show_mobile_menu = false;
    }
    if (fixed) {
      show_mobile_menu = false;
    }
  }

  function onResize() {
    if (window.innerWidth >= 830) {
      show_mobile_menu = false;
    }
  }

  onMount(() => {
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    onScroll();
  });

  let show_mobile_menu = false;
</script>

<header class:fixed class:show class:expand={show_mobile_menu}>
  <div class="main">
    <a class="team-name" class:white href="/">BAID-China</a>

    <div class="links">
      <HeaderLinks {white} />
    </div>

    <div
      class="mobile-menu"
      class:active={show_mobile_menu}
      class:white
      on:click={() => (show_mobile_menu = !show_mobile_menu)}
      on:keydown={() => {}}
    >
      <div class="line" />
      <div class="line" />
      <div class="line" />
    </div>
  </div>

  <div class="mobile-links" class:show={show_mobile_menu}>
    <MobileHeaderLinks {white} active={show_mobile_menu} />
  </div>
</header>

<style>
  header {
    transition: all 0.15s ease-in;
  }
  .main {
    box-sizing: border-box;
    padding: 0 5rem;
    margin: auto;
    max-width: 100rem;
    display: flex;
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
    right: 0;
    width: 100%;
    z-index: 10;
    opacity: 0;
    pointer-events: none;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(5px);
    box-sizing: border-box;
  }
  .mobile-links {
    pointer-events: none;
    opacity: 0;
    height: 0;
    width: 100vw;
    transition: all 0.3s;
  }

  .mobile-links.show {
    pointer-events: all;
    opacity: 100%;
    height: 100vh;
  }

  header.fixed .main {
    color: black;
  }

  header.expand {
    height: 50rem !important;
  }

  header.show {
    top: 0;
    opacity: 1;
    pointer-events: all;
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

  .mobile-menu {
    display: none;
    flex-direction: column;
    gap: 0.3rem;
    transition: opacity 0.15s;
    opacity: 1;
  }

  .mobile-menu:active {
    opacity: 0.5;
  }

  .line {
    background-color: black;
    border-radius: 10px;
    width: 25px;
    height: 3px;
    transition: all 0.15s;
    transform-origin: bottom left;
  }
  .white .line {
    background-color: white;
  }

  .mobile-menu.active .line:first-child {
    transform: rotate(45deg) translate(0.5px, -2.5px);
  }
  .mobile-menu.active .line:last-child {
    transform: rotate(-45deg) translate(2px, 3.5px);
  }

  .mobile-menu.active .line:nth-child(2) {
    opacity: 0;
  }

  @media (max-width: 830px) {
    .main {
      padding-left: 2rem !important;
      padding-right: 2rem !important;
    }
    header {
      height: 64px;
      padding-left: 0 !important;
      padding-right: 0 !important;
      overflow: hidden;
    }
    .links {
      display: none;
    }

    .mobile-menu {
      display: flex;
    }
  }
</style>
