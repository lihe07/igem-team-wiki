<script>
  import Card from "$lib/components/Card.svelte";
  import human from "$lib/assets/human.webp";
  import LearnMore from "./LearnMore.svelte";
  import NumberStat from "./NumberStat.svelte";
  import ChartStat from "./ChartStat.svelte";
  import { transform } from "$lib/header";

  export let percent = 0;
</script>

<div
  style="background: white;"
  style:opacity={Math.max(0, percent + 1)}
  style:transform={`rotate3d(1,0,0,${Math.min(percent, 0) * 30}deg)`}
>
  <section>
    <p class="intro">
      <b>Microplastics</b> are minuscule plastic particles, smaller than 5 millimeters
      in size, that have infiltrated our environment, posing a significant threat
      to both ecosystems and human health.
    </p>

    <div class="cards">
      <NumberStat />
      <ChartStat />
      <div class="right">
        <Card>
          <div class="interactive">
            <img class="human" src={human} alt="human" />
            <p>
              We made an interactive model to show how microplastics can enter
              the human body.
            </p>
            <LearnMore href={transform("/vispoc")}>Learn More</LearnMore>
          </div>
        </Card>
      </div>
    </div>
  </section>
</div>

<style>
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

  .cards {
    display: grid;
    gap: 5rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    max-height: 65rem;
  }

  .right {
    grid-row: 1 / span 2;
    grid-column: 2;
  }

  .interactive {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5rem;
    box-sizing: border-box;
  }

  .interactive p {
    max-width: 30rem;
    margin: 2rem 0;
  }

  .human {
    width: 100%;
    height: 100%;
    max-height: 30rem;
    max-width: 30rem;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    section {
      padding: 5rem 2rem;
    }
    .intro {
      max-width: unset;
    }
    p {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    .interactive {
      padding: 3rem 2rem;
    }
  }

  @media (max-width: 1024px) {
    .cards {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      max-height: unset;
    }
    .human {
      max-height: 25rem;
    }
  }
</style>
