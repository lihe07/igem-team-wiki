<script lang="ts">
  import { onMount } from "svelte";
  import { fade, slide } from "svelte/transition";
  import Card from "./Card.svelte";
  import Chart from "chart.js/auto";

  import human from "$lib/assets/human.webp";
  import Arrow from "./Arrow.svelte";

  let t = 5;

  function initHistogram(ele: HTMLCanvasElement) {
    // Calculate height

    const dummyData = [0, 10, 5, 2, 20, 30, 45, 50, 60, 70];

    const ctx = ele.getContext("2d")!;
    const chart = new Chart(ctx, {
      // type: "line",
      data: {
        labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        datasets: [
          {
            type: "line",
            data: dummyData,
            hidden: true,
            tension: 0.3,
            pointRadius: 0,
          },
          {
            type: "bar",
            data: dummyData,
            backgroundColor: "#00bce2",
            borderColor: "#00bce2",
            borderWidth: 1,
            barPercentage: 1,
            categoryPercentage: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    return chart;
  }

  let tissue_chart: Chart, gut_chart: Chart;
  let tissue: HTMLCanvasElement, gut: HTMLCanvasElement;

  onMount(() => {
    // Init charts
    tissue_chart = initHistogram(tissue);
    gut_chart = initHistogram(gut);

    // Init Arrows

    window.addEventListener("resize", locateArrows);
    locateArrows();
  });

  const foods = [
    {
      name: "Fish",
      defaultIR: 0.5,
    },
    {
      name: "Meat",
      defaultIR: 0.5,
    },
  ];

  interface Irs {
    [key: string]: number;
  }
  let selectedFoods = ["Fish"];
  let irs: Irs = {};

  foods.forEach((food) => {
    foods.forEach((food) => {
      irs[food.name] = food.defaultIR;
    });
  });

  $: if (tissue_chart && gut_chart) {
    tissue_chart.data.datasets[1].data = [
      0,
      10 * t,
      5,
      2,
      20 * t,
      30,
      45 + t,
      50 + t,
      60 + t,
      70 + t,
    ];
    tissue_chart.data.datasets[0].data = tissue_chart.data.datasets[1].data;

    tissue_chart.update();

    gut_chart.data.datasets[0].data = [
      0,
      10 * t,
      5,
      2,
      20 * t,
      30,
      45 + t,
      50 + t,
      60 + t,
      70 + t,
    ];

    gut_chart.data.datasets[1].data = gut_chart.data.datasets[0].data;

    gut_chart.update();
  }

  let arrow1 = {
    pos1: { x: 0, y: 0 },
    pos2: { x: 0, y: 0 },
  };

  let arrow2 = { ...arrow1 };
  let arrow3 = { ...arrow1 };

  let human_img: HTMLImageElement;
  function locateArrows() {
    const ingest = document.getElementById("ingest")!.getBoundingClientRect();
    const img = human_img.getBoundingClientRect();

    arrow1.pos1 = {
      x: ingest.right,
      y: ingest.top + ingest.height / 2,
    };

    arrow1.pos2 = {
      x: img.left + img.width * 0.16,
      y: img.top + img.height * 0.2,
    };

    const tissue = document.getElementById("tissue")!.getBoundingClientRect();
    arrow2.pos1 = {
      x: img.left + img.width * 0.65,
      y: img.top + img.height * 0.45,
    };

    arrow2.pos2 = {
      x: tissue.left - 30,
      y: tissue.top + tissue.height / 2,
    };

    const gut = document.getElementById("gut")!.getBoundingClientRect();
    arrow3.pos1 = {
      x: img.left + img.width * 0.5,
      y: img.top + img.height * 0.81,
    };

    arrow3.pos2 = {
      x: gut.left - 30,
      y: gut.top + gut.height / 2,
    };
  }
</script>

<div class="bg">
  <main>
    <div class="flex">
      <!-- Left -->
      <Card title="Ingest Foods" style="flex: 1;" id="ingest">
        <p>TODO: Beautify Widgets</p>
        {#each foods as food}
          <div>
            <div class="name-and-check">
              <span>{food.name}</span>
              <input
                type="checkbox"
                bind:group={selectedFoods}
                value={food.name}
              />
            </div>
            {#if selectedFoods.includes(food.name)}
              <div transition:slide={{}}>
                <span>Intake Rate</span>
                <input
                  type="range"
                  bind:value={irs[food.name]}
                  min="0"
                  max="1"
                  step="0.1"
                />
              </div>
            {/if}
          </div>
        {/each}

        <!-- <Arrow pos1={{ x: 300, y: 300 }} pos2={{ x: 500, y: 500 }} /> -->
        <Arrow {...arrow1} />
      </Card>

      <Card title="Accumulation time">
        <p>TODO: Beautify Widgets</p>
        <input type="range" bind:value={t} min="0" max="10" step="1" />
      </Card>
    </div>
    <div class="center">
      <!-- Center -->
      <img src={human} alt="Human digest system" bind:this={human_img} />
    </div>

    <div class="flex">
      <Card style="flex: 1;" title="MP Conc in body tissue" id="tissue">
        <!-- Right -->
        <div class="canvas-container">
          <canvas id="tissue" bind:this={tissue} />
        </div>
        <Arrow color="#f96302" {...arrow2} />
      </Card>
      <Card style="flex: 1;" title="MP Conc in gut" id="gut">
        <div class="canvas-container">
          <canvas id="gut" bind:this={gut} />
        </div>
        <Arrow color="#f96302" {...arrow3} />
      </Card>
    </div>
  </main>
</div>

<style>
  .bg {
    background-color: #a5dde2;
    width: 100%;
    min-height: 100vh;
  }

  .flex {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
  }

  .name-and-check {
    display: flex;
    justify-content: space-between;
  }

  /* canvas {
    height: 100%;
    width: 100%;
  } */

  .canvas-container {
    width: 100%;
    height: 80%;
  }

  .center {
    min-width: 15rem;
    margin: 0 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  main {
    display: flex;
    max-width: 90rem;
    padding: 2rem;
    margin: auto;
    box-sizing: border-box;
    height: 100vh;
  }
</style>
