<script>
  export let avg = 12;
  export let med = 12;
  export let name = "gut";
  export let foods = ["bear", "water"];
  export let age = 50;
</script>

<div class="container">
  <div class="stat">
    <div class="n">
      <span class="label">Average</span>
      <span class="num">{avg.toFixed(1)}</span>
    </div>
    <div class="split" />
    <div class="n">
      <span class="label">Median</span>
      <span class="num">{med.toFixed(1)}</span>
    </div>
  </div>

  <p class="desc">
    The modeling indicated that people who regularly ingest <span
      >{foods.join(", ")}</span
    >
    are expected to have an MP concentration of <span>{avg}</span> in the
    <span>{name}</span>
    at the age of <span>{age}</span>
    years. The median of MP concentration in this population is {med}.
  </p>
</div>

<style>
  .container {
    height: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-height: 20rem;
  }
  .stat {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .n {
    text-align: center;
  }

  .label {
    width: 100%;
    display: block;
    font-family: sans-serif;
    font-size: 1rem;
    opacity: 0.8;
  }

  .num {
    font-size: 3rem;
  }
  .split {
    width: 4px;
    background: rgba(0, 0, 0, 0.5);
    height: 3rem;
  }
  .desc {
    font-family: sans-serif;
    margin-top: 1rem;
    font-size: 16px;
    margin-bottom: 0;
    line-height: 1.8;
    color: rgba(0, 0, 0, 0.7);
  }
  .desc span {
    color: rgba(0, 0, 0);
    font-weight: 500;
  }
</style>
