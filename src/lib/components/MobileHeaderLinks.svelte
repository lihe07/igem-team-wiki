<script>
  import routes from "$lib/header";
  import Icon from "@iconify/svelte";
  import { page } from "$app/stores";

  export let white = false; // If fg is white
  export let active = false;
</script>

<div class="bg">
  {#each routes as route, index}
    <div class="container" class:active style="transition-delay: 0.{index}s;">
      {#if route.link}
        <a class="toplevel" href={route.link} class:white>{route.text}</a>
      {:else}
        <p class:white class="toplevel">
          {route.text}
        </p>
        {#each route.children as child}
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
        {/each}
      {/if}
    </div>
  {/each}
</div>

<style>
  .bg {
    width: 100%;
    left: 0;
    overflow: hidden;
    margin-top: 0.3rem;
  }
  .container {
    border-radius: 1rem;
    padding: 1rem;
    margin: 1rem;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    transform: translateX(50vw);
    opacity: 0;
    transition: all 0.3s;
  }
  .container.active {
    opacity: 1;
    transform: translateX(0);
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

  a.child {
    padding: 0.7rem;
    display: block;
    line-height: 1rem;
    border-radius: 0.5rem;
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
