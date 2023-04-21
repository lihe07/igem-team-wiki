<script>
  export let fixed = true;
  import HeaderLinks from "./HeaderLinks.svelte";
</script>

<header class:fixed>
  <span class="team-name">BAID-China</span>

  <div class="links">
    <HeaderLinks />
  </div>
</header>

<style>
  header {
    display: flex;
    padding: 0 5rem;
    box-sizing: border-box;
    font-family: sans-serif;
    justify-content: space-between;
    color: white;
  }

  header.fixed {
    position: fixed;
    top: 1.5rem;
    left: 0;
    width: 100%;
    height: 5rem;
    z-index: 10;
    color: black;
    opacity: 0;
  }

  .team-name {
    font-weight: bold;
    font-size: 1.5rem;
  }
  .links {
    display: flex;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    header {
      padding: 0 2rem;
    }
    .links {
      display: none;
    }
  }
</style>
