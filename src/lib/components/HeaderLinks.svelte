<script>
  import routes from "$lib/header";
  import Icon from "@iconify/svelte";
  import { page } from "$app/stores";

  export let white = false; // If fg is white
</script>

{#each routes as route}
  {#if route.link}
    <a class="toplevel" href={route.link} class:white>{route.text}</a>
  {:else}
    <div class="container">
      <p class:white class="toplevel">
        {route.text}
        <svg width="20" height="20" viewBox="0 0 20 20" class="chevron">
          <path
            fill="currentColor"
            d="M15.854 7.646a.5.5 0 0 1 .001.707l-5.465 5.484a.55.55 0 0 1-.78 0L4.147 8.353a.5.5 0 1 1 .708-.706L10 12.812l5.147-5.165a.5.5 0 0 1 .707-.001Z"
          />
        </svg>
      </p>
      <div
        class="glass"
        class:blue={!white}
        class:wide={route.children.length >= 4}
      >
        {#each route.children as child}
          <a
            class="child"
            class:active={$page.url.pathname === child.link}
            href={$page.url.pathname === child.link ? "#" : child.link}
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
          <!-- <br /> -->
        {/each}
      </div>
    </div>
  {/if}
{/each}

<style>
  .toplevel {
    line-height: 3rem;
    opacity: 0.7;
  }

  a,
  p {
    color: black;
    text-decoration: none;
    margin: 0;
    cursor: pointer;
    transition: opacity 0.15s;
  }

  a.child {
    padding: 0.7rem;
    display: block;
    line-height: 1rem;
    border-radius: 0.5rem;
    --bg-op: 0;
    background-color: rgba(255, 255, 255, var(--bg-op));
    transition: all 0.15s;
  }

  a.child:hover,
  a.child.active {
    --bg-op: 0.3;
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

  .toplevel.white {
    color: white;
  }
  .toplevel:hover {
    opacity: 1;
  }

  a:active {
    opacity: 0.5;
    transform: scale(0.95);
  }

  a.active:active {
    opacity: 1;
    transform: none;
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
    padding: 0.5rem;
    background-color: rgba(255, 255, 255, 0.7);
    transform-origin: top;
    transform: scale(0.8);
    pointer-events: none;
    border-radius: 0.5rem;
    opacity: 0;
    transition: all 0.15s;

    display: grid;
    grid-template-columns: 1fr;
    gap: 0.15rem;
  }

  .glass.wide {
    grid-template-columns: 1fr 1fr;
  }

  .container:hover .glass {
    top: 100%;
    transform: scale(1);
    opacity: 1;
    pointer-events: all;
  }
</style>
