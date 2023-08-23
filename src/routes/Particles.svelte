<script>
  import Particles from "svelte-particles";
  import { loadFull } from "tsparticles";

  export let percent = 0;

  /** @type {import("tsparticles-engine").ISourceOptions}*/
  const options = {
    autoPlay: true,
    style: {
      position: "relative",
      height: "100vh",
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
        speed: 2,
      },
      collisions: {
        enable: true,
        absorb: {
          speed: 2,
        },
      },
      number: {
        value: 100,
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

  $: {
    if (percent > 0.3) {
      // Aggregate
    }
  }
</script>

<div class="particles" class:show={percent > 0.1}>
  <Particles {options} {particlesInit} on:particlesLoaded={onParticlesLoaded} />
</div>

<style>
  .particles {
    opacity: 0;
    transition: opacity 1s;
  }
  .show {
    opacity: 1;
  }
</style>
