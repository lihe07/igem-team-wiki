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
      },
      number: {
        value: 300,
      },
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
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

<section>
  <div class="particles">
    <Particles
      {options}
      {particlesInit}
      on:particlesLoaded={onParticlesLoaded}
    />
  </div>
</section>

<style>
  section {
    background: #bae6fd;
  }
  .particles {
    opacity: 0;
  }
</style>
