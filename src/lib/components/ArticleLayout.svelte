<script>
  import "$lib/assets/markdown.css";
  import { onDestroy, onMount } from "svelte";
  import PlainLayout from "./PlainLayout.svelte";
  export let bg =
    "https://static.igem.wiki/teams/4714/wiki/for-test/placeholder.jpg";
  export let name = "";

  let outline = [];

  /**
   * @param {HTMLElement} ele
   */
  function makeOutline(ele) {
    let h2s = ele.querySelectorAll("h1,h2");
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

  /** @type {Element | boolean} */
  let hideOutline;

  onMount(() => {
    outline = [];
    makeOutline(body);

    hideOutline = body.querySelector("div[data-hide-outline]") || false;

    if (hideOutline) {
    }
  });
</script>

<PlainLayout {name} {bg}>
  <main>
    <div class="markdown-body" bind:this={body}>
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
</PlainLayout>

<style scoped>
  h3 {
    font-size: 1.4rem;
    font-family: sans-serif;
    margin-bottom: 0.7rem;
  }

  a {
    color: black;
    text-decoration: none !important;
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

  main {
    width: 100%;
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
