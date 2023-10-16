<script>
  import Vis from "$lib/components/Vis.svelte";
  import VisCard from "$lib/components/VisCard.svelte";
  import { transform } from "$lib/header";
  import LearnMore from "./LearnMore.svelte";

  export let percent = 0;
</script>

<div class="bg" style:opacity={Math.min(Math.max(0, percent + 1), 1)}>
  <section>
    <p class="intro">
      <b>Microplastics</b> are minuscule plastic particles, smaller than 5 millimeters.
      We are already familiar with Microplastics, but how microplastics affect human
      health? We made an interactive example.
    </p>

    <Vis />

    <div class="gap" />

    <VisCard>
      <div class="learn-more">
        <p>More details can be found in our modelling page.</p>
        <LearnMore href={transform("/model")}>Learn More</LearnMore>
      </div>
    </VisCard>
  </section>
</div>

<style>
  .bg {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(3px);
    position: relative;
    z-index: 10;
  }
  section {
    max-width: 100rem;
    margin: auto;
    padding: 5rem;
    box-sizing: border-box;
    overflow: hidden;
  }
  b {
    color: black;
  }
  p {
    font-family: sans-serif;
    font-size: 2.5rem;
    color: rgba(0, 0, 0, 0.8);
    line-height: 4rem;
  }

  .intro {
    max-width: 70%;
  }

  .gap {
    height: 3rem;
  }

  .learn-more {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    gap: 2rem;
    padding: 2rem;
  }

  .learn-more p {
    /* font-size: 2rem; */
    margin: 0;
  }

  @media (max-width: 1400px) {
    p {
      font-size: 1.5rem;
      line-height: 1.5;
    }
    .learn-more {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    section {
      padding: 5rem 2rem;
    }
    .intro {
      max-width: unset;
      line-height: 1.5;
    }
    .learn-more {
      font-size: 1.5rem;
      flex-direction: column;
      gap: 2rem;
      padding: 1rem;
    }

    .gap {
      height: 1rem;
    }
    .learn-more p {
      font-size: 1.5rem;
      text-align: center;
    }
    p {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }
</style>
