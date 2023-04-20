<script>
  export let autoHide = true;
  import routes from "$lib/header";
</script>

<header class:autoHide>
  <span class="team-name">BAID-China</span>

  <div class="routes">
    {#each routes as route}
      <p>{route.text}</p>
    {/each}
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

  header.autoHide {
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
  .routes {
    display: flex;
    gap: 3rem;
  }
</style>
