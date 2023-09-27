<script>
  import routes from "$lib/header";
  import Icon from "@iconify/svelte";
  import { page } from "$app/stores";

  export let white = false; // If fg is white
  export let active = false;
</script>

<div class="bg">
  {#each routes as route, index}
    <div
      class="container"
      class:full={route.children}
      class:half={!route.children}
      class:active
      style="transition-delay: 0.{index}s;"
    >
      {#if route.link}
        <a class="toplevel" href={route.link} class:white>{route.text}</a>
      {:else}
        <p class:white class="toplevel">
          {route.text}
        </p>
        {#each route.children || [] as child, i}
          <a
            class="child"
            class:active={$page.url.pathname === child.link}
            href={child.link}
          >
            <div>
              <Icon style="font-size: 20px;" icon={child.icon} />
              <span>{child.text}</span>
            </div>
            {#if child.desc}
              <p class="desc">
                {child.desc}
              </p>
            {/if}
          </a>
          {#if i < route.children.length - 1}
            <hr />
          {/if}
        {/each}
      {/if}
    </div>
  {/each}
</div>

<style>
  .bg {
    width: 100%;
    left: 0;
    margin-top: 0.3rem;
    transition: all 0.3s;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding: 1rem;
    box-sizing: border-box;
  }

  .container {
    border-radius: 1rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    transform: translateX(50vw);
    transition: all 0.3s ease-in-out;
    opacity: 0;
  }

  .container.active {
    opacity: 1;
    transform: translateX(0);
  }

  .container.full {
    grid-column: span 2;
  }

  .container.half {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container.half a {
    text-align: center;
    margin: 0;
  }

  a,
  p {
    color: black;
    text-decoration: none;
    margin: 0;
    cursor: pointer;
    transition: opacity 0.15s;
  }

  .toplevel {
    font-size: 1.3rem;
    font-family: sans-serif;
    margin: 0 0.5rem;
    margin-bottom: 0.5rem;
  }

  hr {
    margin: 0;
    border-color: rgba(0, 0, 0, 0.3);
  }

  a.child {
    padding: 0.7rem;
    display: block;
    line-height: 1rem;
    transition: all 0.15s;
  }

  a.child div {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
  a.child .desc {
    margin-top: 0.3rem;
    opacity: 0.7;
    font-size: 0.8rem;
    line-height: 1rem;
  }

  a:active {
    opacity: 0.5;
  }
</style>
