<script>
  import "$lib/assets/markdown.css";
  import Header from "$lib/components/Header.svelte";
  export let bg =
    "https://images.unsplash.com/photo-1439405326854-014607f694d7";
</script>

<img class="bg" src={bg} alt="background" />
<div class="header-container">
  <Header fixed={false} white={true} />
</div>

<section>
  <div class="markdown-body" style="margin: 4rem 0; ">
    <slot />
  </div>
</section>

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
  section {
    padding: 0 5rem;
    max-width: 100rem;
    width: 100%;
    margin: auto;
    box-sizing: border-box;
    background: white;
  }
  @media (max-width: 768px) {
    section {
      padding: 0 2rem;
    }
    .markdown-body {
      margin-top: 2.5rem !important;
    }
  }
</style>

