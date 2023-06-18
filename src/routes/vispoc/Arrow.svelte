<script>
  export let pos1 = { x: 0, y: 0 };
  export let pos2 = { x: 0, y: 0 };

  export let color = "#00b760";

  $: half_width = 0.5 * (pos2.x - pos1.x);
</script>

<div
  class="line"
  style="width: {half_width +
    5}px; left: {pos1.x}px; top: {pos1.y}px; background-color: {color};"
/>

<div
  class="line v"
  style="height: {Math.abs(pos2.y - pos1.y) + 5}px; left: {half_width +
    pos1.x}px; top: {Math.min(pos1.y, pos2.y)}px; background-color: {color};"
/>

<div
  class="line"
  style="width: {half_width}px; left: {pos1.x +
    half_width}px; top: {pos2.y}px; background-color: {color};"
>
  <svg class="head" viewBox="0 0 12 12">
    <!-- Triangle -->
    <path
      fill={color}
      d="M1.5 6a.75.75 0 0 1 .75-.75h5.94L6.22 3.28a.75.75 0 0 1 1.06-1.06l3.25 3.25a.75.75 0 0 1 0 1.06L7.28 9.78a.75.75 0 0 1-1.06-1.06l1.97-1.97H2.25A.75.75 0 0 1 1.5 6Z"
    />
  </svg>
</div>

<style>
  .line {
    position: absolute;
    z-index: 10;
    height: 0.5rem;

    border-radius: 5px;
  }

  .v {
    width: 0.5rem;
  }

  .head {
    position: absolute;
    z-index: 20;
    width: 5rem;
    height: 4rem;
    border-radius: 50%;
    right: -2.5rem;
    top: -28px;
  }
</style>
