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
      if (
        ele.getBoundingClientRect().top <
        container.getBoundingClientRect().bottom + 200
      ) {
        if (index > active) active = index;
        if (index == -1) {
          active = -1;
          break;
        }
      }
    }
    current = active;
  }
  onMount(() => {
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("scroll", onScroll);
    };
  });
</script>

<div class="images" bind:this={container} class:hide={current < 0}>
  {#each images as image, i}
    <img src={image} class:active={current === i} alt="" class:contain />
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
  <div data-index={-1} />
</div>

<style>
  .images {
    position: sticky;
    top: 90px;
    margin: 0 -1rem;
    width: calc(100% + 2rem);
    border-radius: 1rem;
    overflow: hidden;
    height: 40vh;
    min-height: 20rem;
    max-height: 33vh;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1);
    pointer-events: none;
    transition: all 0.3s;
    z-index: 2;
  }

  .images.hide {
    opacity: 0;
  }

  .texts {
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
    object-fit: cover;
  }
  img.contain {
    object-fit: contain;
  }

  img.active {
    opacity: 1;
  }

  @media (max-width: 768px) {
    .images {
      top: 70px;
    }
  }
</style>
