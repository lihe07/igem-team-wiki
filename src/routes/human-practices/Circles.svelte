<script>
  import { remote } from "$lib/header";

  const images = ["APT", "Bagasse", "BC", "Coffee", "GTP", "Lignin"];
</script>

<div class="container">
  {#each images as img}
    <img src={remote(`/human-practices/${img.toLowerCase()}.png`)} alt={img} />
  {/each}
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
    padding: 2rem 5rem;
  }

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1400px) {
    .container {
      gap: 3rem;
      padding: 2rem 2rem;
    }
  }

  @media (max-width: 768px) {
    .container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
