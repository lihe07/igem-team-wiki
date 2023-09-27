<script>
  import "$lib/assets/markdown.css";
  import Header from "$lib/components/Header.svelte";
  import { onDestroy, onMount } from "svelte";
  import { each } from "svelte/internal";
  export let bg =
    "https://images.unsplash.com/photo-1439405326854-014607f694d7";

  onMount(() => (window.header_thres = 300));
  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.header_thres = "window";
    }
  });

  let outline = [];

  /**
   * @param {HTMLElement} ele
   */
  function makeOutline(ele) {
    let h2s = ele.querySelectorAll("h1,h2,h3");
    // Give them ids
    h2s.forEach((e) => {
      e.id = e.textContent.replace(/\s/g, "-").toLowerCase();
      outline.push({
        id: e.id,
        text: e.textContent,
        level: e.tagName,
      });
    });

    console.log(outline);

    outline = outline;
  }

  /** @type {HTMLDivElement} */
  let body;

  onMount(() => {
    outline = [];
    makeOutline(body);
  });
</script>

<img class="bg" src={bg} alt="background" />
<div class="header-container">
  <Header fixed={false} white={true} />
</div>

<main>
  <div class="markdown-body" style="margin: 4rem 0; " bind:this={body}>
    <slot />
  </div>

  <div class="aside">
    <div class="outline">
      <h3>On this page:</h3>

      {#each outline as entry}
        <a
          href={`#${entry.id}`}
          style="display: block; margin-left: ${(entry.level - 2) * 1.5}rem"
        >
          {entry.text}
        </a>
      {/each}
    </div>
  </div>
</main>

<style scoped>
  h3 {
    font-size: 1rem;
    font-family: sans-serif;
    margin-bottom: 0.7rem;
  }

  a {
    color: black;
    text-decoration: none;
    opacity: 0.7;
    transition: opacity 0.2s;
    margin: 0.5rem 0;
    font-family: sans-serif;
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
  .aside {
    width: 20rem;
    margin-left: 2rem;
    margin-top: 3rem;
  }
  .outline {
    position: sticky;
    top: 6rem;
  }

  @media (max-width: 768px) {
    main {
      padding: 0 2rem;
    }

    .aside {
      display: none;
    }
    .markdown-body {
      margin-top: 2.5rem !important;
    }
  }
</style>
