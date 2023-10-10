<script>
  import "$lib/assets/markdown.css";
  import Header from "$lib/components/Header.svelte";
  import { onDestroy, onMount } from "svelte";
  export let bg =
    "https://static.igem.wiki/teams/4714/wiki/for-test/placeholder.jpg";

  onMount(() => (window.header_thres = 300));
  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.header_thres = "window";
    }
  });
</script>

<img class="bg" src={bg} alt="background" />
<div class="header-container">
  <Header fixed={false} white={true} />
</div>

<div class="container">
  <svg viewBox="0 0 900 600"
    ><path
      d="M0 557L21.5 550.2C43 543.3 86 529.7 128.8 529.5C171.7 529.3 214.3 542.7 257.2 549C300 555.3 343 554.7 385.8 547.7C428.7 540.7 471.3 527.3 514.2 525.2C557 523 600 532 642.8 538.3C685.7 544.7 728.3 548.3 771.2 549.2C814 550 857 548 878.5 547L900 546L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
      fill="#ffffff"
      stroke-linecap="round"
      stroke-linejoin="miter"
    /></svg
  >

  <main>
    <slot />
  </main>
</div>

<style scoped>
  main {
    padding: 0 5rem;
    max-width: 100rem;
    width: 100%;
    margin: auto;
    box-sizing: border-box;
    background: white;
  }
  .container {
    background: white;
    position: absolute;
    width: 100%;
    top: 500px;
    z-index: 3;
  }

  svg {
    width: 100%;
    margin-top: -100%;
  }
  .bg {
    width: 100%;
    height: 500px;
    object-fit: cover;
    position: fixed;
    top: 0;
    pointer-events: none;
    filter: brightness(0.7);
  }
  .header-container {
    position: fixed;
    top: 1rem;
    left: 0;
    z-index: 6;
    width: 100%;
    pointer-events: all;
  }

  @media (max-width: 768px) {
    main {
      padding: 0 2rem;
    }
  }
</style>
