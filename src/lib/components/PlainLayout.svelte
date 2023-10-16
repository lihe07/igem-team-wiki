<script>
  import "$lib/assets/markdown.css";
  import Header from "$lib/components/Header.svelte";
  import { onDestroy, onMount } from "svelte";
  export let bg =
    "https://static.igem.wiki/teams/4714/wiki/for-test/placeholder.jpg";
  export let name = "";

  onMount(() => (window.header_thres = 300));
  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.header_thres = "window";
    }
  });
</script>

<img class="bg" src={bg} alt="background" />

<div class="title">
  <h1>{name}</h1>
</div>

<div class="header-container">
  <Header fixed={false} white={true} />
</div>

<main>
  <div class="markdown-body" style="margin: 4rem 0; ">
    <slot />
  </div>
</main>

<style scoped>
  h3 {
    font-size: 1.4rem;
    font-family: sans-serif;
    margin-bottom: 0.7rem;
  }

  .title {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 500px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  h1 {
    font-size: 4.5rem;
    color: white;
  }

  a {
    color: black;
    text-decoration: none;
    opacity: 0.7;
    transition: opacity 0.2s;
    margin: 0.5rem 0;
    font-family: sans-serif;
    font-size: 20px;
    line-height: 2;
  }

  a:hover,
  a:focus,
  a:active {
    opacity: 1;
  }

  .header-container {
    position: absolute;
    top: 1.5rem;
    left: 0;
    width: 100%;
    z-index: 10;
  }
  .bg {
    width: 100%;
    height: 500px;
    object-fit: cover;
    filter: brightness(0.7);
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
    line-height: 2.5;
    font-size: 20px;
  }

  .aside {
    width: 20rem;
    margin-left: 3rem;
    margin-top: 3rem;
  }
  .outline {
    position: sticky;
    top: 6rem;
  }

  @media (max-width: 1500px) {
    .markdown-body {
      width: 70%;
    }
  }

  @media (max-width: 930px) {
    main {
      padding: 0 2rem;
    }

    .aside {
      display: none;
    }

    h1 {
      font-size: 3rem;
    }

    .bg,
    .title {
      height: 300px;
    }

    .markdown-body {
      margin-top: 2.5rem !important;
      line-height: 2;
    }
  }
</style>
