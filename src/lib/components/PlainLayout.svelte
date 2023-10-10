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

<main>
  <div class="markdown-body" style="margin: 4rem 0; ">
    <slot />
  </div>
</main>

<style scoped>
  .header-container {
    position: absolute;
    top: 1.5rem;
    left: 0;
    width: 100%;
    z-index: 10;
  }
  .bg {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  main {
    padding: 0 5rem;
    max-width: 100rem;
    width: 100%;
    margin: auto;
    box-sizing: border-box;
    background: white;

    display: flex;
  }
  .markdown-body {
    flex: 1;
  }

  @media (max-width: 768px) {
    main {
      padding: 0 2rem;
    }

    .markdown-body {
      margin-top: 2.5rem !important;
    }
  }
</style>
