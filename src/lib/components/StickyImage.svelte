<script>
  import { onMount } from "svelte";

  export let images = [
    "https://lms.d.zhan.com/zhanlms/addon_homework/2023/02/846314863eaf7ae27fe2/kvblurred.png",
    "https://lms.d.zhan.com/zhanlms/addon_homework/2023/10/186646524fa047daa3/kv.webp",
    "https://static.igem.wiki/teams/4714/wiki/for-test/placeholder.jpg",
  ];

  export let descriptions = [
    "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  ];

  export let transforms = {};

  let current = 0;
  export let contain = false;

  /** @type {HTMLDivElement} */
  let container;

  /** @type {HTMLDivElement} */
  let texts;

  function onScroll() {
    let active = 0;
    for (const ele of texts.children) {
      const index = Number(ele.getAttribute("data-index"));
      if (ele.getBoundingClientRect().top < 500) {
        if (index > active) active = index;
      }
    }
    current = active;
  }
  onMount(() => {
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);

    onScroll();

    return () => {
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("scroll", onScroll);
    };
  });
</script>

<div class="container">
  <div class="images">
    {#each images as image, i}
      <img
        src={image}
        class:active={current === i}
        alt=""
        class:contain
        style={`transform: ${transforms[i]}`}
      />
    {/each}
  </div>
  <div class="texts" bind:this={texts}>
    {#each descriptions as description, i}
      <div data-index={i} class:active={current === i} class="text">
        {#if typeof description === "string"}
          <!-- <p>{description}</p> -->
          {@html description}
        {:else}
          <svelte:component this={description} />
        {/if}

        {#if i < descriptions.length - 1}
          <hr />
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: row-reverse;
    gap: 5rem;
  }

  .images {
    position: sticky;
    top: 10vh;
    width: 50%;
    max-height: 80vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .texts {
    width: 50%;
    margin-top: 2rem;
  }

  .text {
    opacity: 0.5;
    transition: all 0.3s;
  }
  .text.active {
    opacity: 1;
  }

  img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.3s;
    object-fit: contain;
    background: transparent;
  }
  img.contain {
    object-fit: contain;
  }

  img.active {
    opacity: 1;
  }

  @media (max-width: 768px) {
    .container {
      display: block;
    }
    .texts {
      width: 100%;
    }
    .images {
      width: 100%;
      position: sticky;
      top: 65px;
      height: 20rem;
      background: white;
      z-index: 2;
    }
  }
</style>
