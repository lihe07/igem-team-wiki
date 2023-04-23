<script>
  import routes from "$lib/header";
</script>

{#each routes as route}
  {#if route.link}
    <a href={route.link}>{route.text}</a>
  {:else}
    <div class="container">
      <p>
        {route.text}
        <svg width="20" height="20" viewBox="0 0 20 20" class="chevron">
          <path
            fill="currentColor"
            d="M15.854 7.646a.5.5 0 0 1 .001.707l-5.465 5.484a.55.55 0 0 1-.78 0L4.147 8.353a.5.5 0 1 1 .708-.706L10 12.812l5.147-5.165a.5.5 0 0 1 .707-.001Z"
          />
        </svg>
      </p>
      <div class="glass">
        {#each route.children as route}
          <a href={route.link}>{route.text}</a>
          <br />
        {/each}
      </div>
    </div>
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
    transition: opacity 0.15s;
  }

  .container:hover p,
  a:hover {
    opacity: 1;
  }

  a:active {
    opacity: 0.5;
  }

  .chevron {
    margin-left: 0;
    margin-top: -1px;
    vertical-align: middle;
    transition: transform 0.15s;
  }

  .container:hover .chevron {
    transform: rotate(180deg);
  }

  .container {
    position: relative;
  }
  .glass {
    position: absolute;
    top: 90%;
    left: 0;
    padding: 1rem;
    width: 10rem;
    /* height: 100%; */
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    /* border: 1px solid rgba(0, 0, 0, 0.5); */
    transform-origin: top;
    transform: scale(0.8);
    pointer-events: none;
    border-radius: 0.5rem;
    opacity: 0;
    transition: all 0.15s;
  }

  .container:hover .glass {
    top: 100%;
    transform: scale(1);
    opacity: 1;
    pointer-events: all;
  }
</style>
