<script>
  import { onMount } from "svelte";

  export let enter = false;

  /** @type {HTMLElement} */
  let ele;

  function onScroll() {
    const rect = ele.getBoundingClientRect();

    if (
      (rect.top >= 0 && rect.top <= window.innerHeight) ||
      (rect.bottom >= 0 && rect.bottom <= window.innerHeight)
    ) {
      enter = true;
    } else {
      enter = false;
    }
  }

  onMount(() => {
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  });

  import Particles from "svelte-particles";
  import { loadFull } from "tsparticles";

  export let percent = 0;

  /** @type {import("tsparticles-engine").ISourceOptions}*/
  const options = {
    autoPlay: true,
    style: {
      position: "relative",
      height: "64vh",
    },
    particles: {
      color: {
        value: "random",
      },
      shape: {
        type: ["circle", "triangle", "polygon"],
      },
      move: {
        enable: true,
        speed: 1,
        gravity: {
          acceleration: 20,
          maxSpeed: {
            min: 3,
            max: 5,
          },
          enable: true,
        },
      },

      number: {
        value: 300,
      },
    },

    interactivity: {
      detectsOn: "window",
      modes: {
        repulse: {
          distance: 100,
          duration: 5,
          speed: 1,
          maxSpeed: 3,
        },
      },
    },
  };

  async function particlesInit(engine) {
    await loadFull(engine);
  }

  let container;

  /**
   * @param {CustomEvent<{ particles?: import("tsparticles-engine").Container }>} event
   */
  function onParticlesLoaded(event) {
    container = event.detail.particles;
  }
</script>

<section bind:this={ele} class:enter>
  {#if enter}
    <div style:opacity={1 - percent} class="inner">
      <Particles
        {options}
        {particlesInit}
        on:particlesLoaded={onParticlesLoaded}
      />
    </div>
  {/if}
</section>

<style>
  section {
    position: absolute;
    z-index: 3;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
</style>
