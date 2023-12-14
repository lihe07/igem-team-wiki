<script>
  import "$lib/assets/markdown.css";
  import Header from "$lib/components/Header.svelte";
  import { onDestroy, onMount } from "svelte";
  export let bg =
    "https://static.igem.wiki/teams/4714/wiki/for-test/placeholder.jpg";
  export let name = "";

  let transform = "scale(1.1)";
  function onMouseMove(e) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    const translateX = deltaX / window.innerWidth;
    const translateY = deltaY / window.innerHeight;

    transform = `scale(1.1) translateX(${translateX}%) translateY(${translateY}%)`;
  }

  onMount(() => {
    window.header_thres = 300;
    window.addEventListener("mousemove", onMouseMove);
  });
  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.header_thres = "window";
      window.removeEventListener("mousemove", onMouseMove);
    }
  });
</script>

<div class="bg">
  <img src={bg} alt="background" style:transform />
</div>

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
    overflow: hidden;
  }
  .bg img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    filter: brightness(0.7);
    transition: transform 0.1s;
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

  @media (max-width: 1500px) {
    .markdown-body {
      width: 70%;
    }
  }

  @media (max-width: 930px) {
    main {
      padding: 0 2rem;
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
