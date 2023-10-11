<script lang="ts">
  import { onMount } from "svelte";
  import Card from "./VisCard.svelte";
  import Chart from "chart.js/auto";

  import calculate from "./vis";
  import FoodBar from "./FoodBar.svelte";
  import InputRange from "./InputRange.svelte";
  import InputCheck from "./InputCheck.svelte";
  import AvgMed from "./AvgMed.svelte";

  let t = 5;

  function initHistogram(ele: HTMLCanvasElement, label: string, title: string) {
    // Calculate height

    const dummyData = [{ x: 0.5, y: 10 }];

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
          title: { text: title, display: true },
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
    tissue_chart = initHistogram(tissue, "Tissue", "MP Conc in Tissue");
    gut_chart = initHistogram(gut, "Gut", "MP Conc in Gut");
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

    console.log(C_tis_samples);

    tissue_chart.update();

    gut_chart.data.datasets[0].data = Object.entries(C_mp_samples).map(
      ([x, y]) => ({
        x: Number(x),
        y,
      })
    );

    gut_chart.update();
  }
</script>

<div class="bg">
  <main>
    <!-- Left -->
    <div class="left">
      <div class="ingest">
        <Card style="overflow-y: scroll; " id="ingest">
          <h2>Ingest Foods</h2>
          {#each foods as food}
            <FoodBar
              name={food.name}
              included={selectedFoods.includes(food.name)}
            >
              <InputCheck
                slot="checkbox"
                selected={selectedFoods}
                value={food.name}
                on:checked={() =>
                  (selectedFoods = [...selectedFoods, food.name])}
                on:unchecked={() =>
                  (selectedFoods = selectedFoods.filter(
                    (e) => e !== food.name
                  ))}
              />

              <InputRange
                slot="range"
                bind:value={irs[food.name]}
                min="0"
                max="1"
                step="0.1"
              />
            </FoodBar>
          {/each}
        </Card>
      </div>

      <Card style="height: unset;">
        <span class="label">Accumulation years:</span>

        <InputRange bind:value={t} min="1" max="70" step="1" />
      </Card>
    </div>

    <div class="tissue-chart">
      <Card id="tissue">
        <!-- Right -->
        <div class="canvas-container">
          <canvas id="tissue" bind:this={tissue} />
        </div>
      </Card>
    </div>

    <div class="tissue">
      <Card>
        <!-- Rightmost  -->
        <AvgMed name="Tissue" />
      </Card>
    </div>

    <div class="gut-chart">
      <Card id="gut" style="grid-row: 2; grid-column: 2;">
        <div class="canvas-container">
          <canvas id="gut" bind:this={gut} />
        </div>
      </Card>
    </div>

    <div class="gut">
      <Card>
        <!-- Rightmost  -->
        <AvgMed />
      </Card>
    </div>
  </main>
</div>

<style>
  .bg {
    width: 100%;
  }

  h2 {
    font-family: sans-serif;
  }

  .canvas-container {
    width: 100%;
    height: 100%;
    max-height: 20rem;
  }

  main {
    display: grid;
    grid-template-columns: 1.5fr 2.7fr 2fr;
    grid-template-rows: 1fr 1fr;
    gap: 3rem;
    margin: auto;
    box-sizing: border-box;
    width: 100%;
  }

  .left {
    grid-row: span 2;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    height: 100%;
  }
  .ingest {
    max-height: 40rem;
  }

  .label {
    font-family: sans-serif;
    display: block;
    opacity: 0.5;
    margin-bottom: 0.4rem;
  }

  .tissue-chart {
    grid-row: 1;
    grid-column: 2;
  }
  .tissue {
    grid-row: 1;
    grid-column: 3;
  }

  .gut-chart {
    grid-row: 2;
    grid-column: 2;
  }

  .tissue {
    grid-row: 2;
    grid-column: 3;
  }

  @media (max-width: 1400px) {
    main {
      grid-template-columns: 1fr 2fr;
      grid-template-rows: auto 1fr auto 1fr;
      gap: 2rem;
    }

    .canvas-container {
      max-height: 10rem;
      max-width: 99%;
    }
    .gut-chart {
      grid-row: 3;
    }

    .tissue {
      grid-row: 2;
      grid-column: 2;
    }
    .ingest {
      max-height: 99%;
    }
    .gut {
      grid-row: 4;
      grid-column: 2;
    }

    .left {
      grid-row: span 4;
      gap: 2rem;
    }
  }

  @media (max-width: 768px) {
    main {
      display: flex;
      flex-direction: column;
      height: unset;
      gap: 1rem;
    }
    .left {
      gap: 1rem;
    }

    .canvas-container {
      max-height: 20rem;

      max-width: 100%;
    }
  }
</style>
