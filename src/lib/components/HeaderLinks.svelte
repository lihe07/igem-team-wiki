<script>
  import routes from "$lib/header";
</script>

{#each routes as route}
  {#if route.link}
    <a href={route.link}>{route.text}</a>
  {:else}
    <p>{route.text}</p>
  {/if}
{/each}

<style>
  p,
  a {
    color: white;
    text-decoration: none;
    margin: 0;
    line-height: 3rem;
    opacity: 0.8;
    cursor: pointer;
  }
</style>
