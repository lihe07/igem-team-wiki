<script>
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";

  export let name = "";
  export let icon = "";
  export let href = "/";
  export let color = "#064e3b";
  let hover = false;
  /** @type {HTMLAnchorElement} */
  let container;
  let active = false;
  onMount(() => {
    const i = setInterval(() => {
      const rect = container.getBoundingClientRect();
      if (
        rect.top < window.innerHeight * 0.5 &&
        rect.bottom > window.innerHeight * 0.3
      )
        active = true;
      else active = false;
    }, 300);

    return () => clearInterval(i);
  });
</script>

<a class="container" {href} bind:this={container} class:active>
  <div class="bg" style={`background: ${color}`} />
  <div class="icon">
    <Icon style="color: white;" {icon} />
  </div>

  <h2>{name}</h2>
  <p class="desc">Lorem ipsum dolor sit amet, qui minim labore.</p>
</a>

<style>
  h2 {
    font-size: 1.6rem;
    max-width: 10rem;
    font-family: sans-serif;
    text-align: center;
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 0;
    transition: all 0.25s;
    position: relative;
    z-index: 10;
  }
  .container {
    text-decoration: none;
    color: black;
    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.4);
    padding: 2rem;
    position: relative;
    overflow: hidden;
    opacity: 0.8;
    transition: opacity 0.3s;
  }

  .container:hover .bg {
    transform: scale(4) translateX(-13%);
  }
  .container:hover {
    opacity: 1;
  }

  .container:hover h2 {
    transform: translateY(-3rem);
    color: white;
  }

  .container:hover .icon {
    transform: translateY(-1rem);
  }

  .container:hover .desc {
    opacity: 0.8;
  }

  .container:active {
    opacity: 0.5;
  }

  .desc {
    font-family: sans-serif;
    font-size: 1.2rem;
    opacity: 0;
    max-width: 18rem;
    text-align: center;
    position: relative;
    color: white;
    z-index: 10;
    margin: 0;
    margin-top: -1.3rem;
    transition: all 0.2s;
    transition-delay: 0.1s;
  }

  .bg {
    border-radius: 50%;
    background: white;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 10rem;
    width: 10rem;
    z-index: 1;
    transition: all 0.3s ease-out;
  }

  .icon {
    width: 10rem;
    position: relative;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    z-index: 10;
    font-size: 6rem;
    transition: all 0.3s;
  }
  @media (max-width: 768px) {
    .bg,
    .icon {
      width: 8rem;
      height: 8rem;
    }
    .icon {
      font-size: 4rem;
    }
    .desc {
      font-size: 1.2rem;
    }

    .container.active .bg {
      transform: scale(4) translateX(-13%);
    }
    .container.active {
      opacity: 1;
    }

    .container.active h2 {
      transform: translateY(-3rem);
      color: white;
    }

    .container.active .icon {
      transform: translateY(-1rem);
    }

    .container.active .desc {
      opacity: 0.8;
    }
  }
</style>
