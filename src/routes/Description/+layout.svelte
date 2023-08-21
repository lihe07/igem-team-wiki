<script>
  import Header from "$lib/components/Header.svelte";
</script>

<img
  class="bg"
  src="https://images.unsplash.com/photo-1439405326854-014607f694d7"
  alt=""
/>
<div class="header-container">
  <Header fixed={false} white={true} />
</div>

<section>
  <h1>Description</h1>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
    suscipit rerum voluptatem natus sapiente dolor corrupti tenetur libero
    possimus deserunt. Distinctio, vero. Odio soluta eum non vitae molestias
    nihil quisquam?
  </p>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
    suscipit rerum voluptatem natus sapiente dolor corrupti tenetur libero
    possimus deserunt. Distinctio, vero. Odio soluta eum non vitae molestias
    nihil quisquam?
  </p>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
    suscipit rerum voluptatem natus sapiente dolor corrupti tenetur libero
    possimus deserunt. Distinctio, vero. Odio soluta eum non vitae molestias
    nihil quisquam?
  </p>
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
    margin: auto;
    box-sizing: border-box;
  }
  @media (max-width: 768px) {
    section {
      padding: 0 2rem;
    }
  }
  h1 {
    font-size: 40px;
  }
</style>
