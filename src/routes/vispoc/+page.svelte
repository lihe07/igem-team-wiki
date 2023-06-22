<script lang="ts">
  import { onMount } from "svelte";
  import { fade, slide } from "svelte/transition";
  import Card from "./Card.svelte";
  import Chart from "chart.js/auto";

  import human from "$lib/assets/human.webp";
  import Arrow from "./Arrow.svelte";

  import calculate from "./main";

  let t = 5;

  function initHistogram(ele: HTMLCanvasElement, label: string) {
    // Calculate height

    const dummyData = [
      { x: 0.5, y: 10 },
      { x: 1.5, y: 20 },
      { x: 2.5, y: 30 },
      { x: 3.5, y: 40 },
      { x: 4.5, y: 50 },
      { x: 5.5, y: 60 },
      { x: 6.5, y: 70 },
      { x: 7.5, y: 80 },
      { x: 8.5, y: 90 },
      { x: 9.5, y: 100 },
    ];

    const ctx = ele.getContext("2d")!;
    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        datasets: [
          {
            label,
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
          },
          x: {
            type: "linear",
            offset: false,
            grid: {
              offset: false,
            },
            ticks: {
              stepSize: 1,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              title: (items) => {
                if (items.length === 0) return "";
                const min = items[0].parsed.x - 0.5;
                const max = items[0].parsed.x + 0.5;
                return `Conc ${min}~${max}`;
              },
            },
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
    tissue_chart = initHistogram(tissue, "Tissue");
    gut_chart = initHistogram(gut, "Gut");

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
      name: "Mollusc",
      defaultIR: 0.5,
    },
    {
      name: "Crustaceans",
      defaultIR: 0.5,
    },
    {
      name: "Tap Water",
      defaultIR: 0.5,
    },
    {
      name: "Bottled Water",
      defaultIR: 0.5,
    },
    {
      name: "Salt",
      defaultIR: 0.5,
    },
    {
      name: "Beer",
      defaultIR: 0.5,
    },
    {
      name: "Milk",
      defaultIR: 0.5,
    },
  ];

  interface Irs {
    [key: string]: number;
  }
  let selectedFoods = ["Fish", "Bottled Water", "Salt", "Milk"];
  let irs: Irs = {};

  foods.forEach((food) => {
    irs[food.name] = food.defaultIR;
  });

  const SAMPLE_NUM = 500;

  interface Samples {
    [key: number]: number;
  }

  $: if (tissue_chart && gut_chart) {
    const C_tis_samples: Samples = {};
    const C_mp_samples: Samples = {};
    for (let i = 0; i < SAMPLE_NUM; i++) {
      const res = calculate(t, selectedFoods, irs);

      C_tis_samples[res.C_tis - 0.5] =
        (C_tis_samples[res.C_tis - 0.5] || 0) + 1;

      C_mp_samples[res.C_mp - 0.5] = (C_mp_samples[res.C_mp - 0.5] || 0) + 1;
    }

    tissue_chart.data.datasets[0].data = Object.entries(C_tis_samples).map(
      ([x, y]) => ({
        x: Number(x),
        y,
      })
    );

    tissue_chart.update();

    gut_chart.data.datasets[0].data = Object.entries(C_mp_samples).map(
      ([x, y]) => ({
        x: Number(x),
        y,
      })
    );

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
        <p>TODO: Beautify Widgets: {t} years</p>
        <input type="range" bind:value={t} min="1" max="70" step="1" />
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
