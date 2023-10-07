<script>
  import Card from "$lib/components/Card.svelte";
  import { Chart } from "chart.js/auto";

  /**
   * @param {HTMLCanvasElement} ele
   */
  function chart(ele) {
    new Chart(ele, {
      type: "doughnut",
      data: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            data: [1, 2, 3],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }
</script>

<Card>
  <div class="container">
    <canvas use:chart />

    <div class="num">114</div>
  </div>
</Card>

<style>
  .container {
    height: 100%;
    max-width: 100%;
    position: relative;

    padding: 2rem;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .num {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5rem;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    .num {
      font-size: 3rem;
    }
  }
</style>
