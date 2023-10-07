<script>
  export let background = "rgba(0, 0, 0, 0.1)";
</script>

<div style:background>
  <slot />
</div>

<style>
  div {
    border-radius: 2rem;
    box-sizing: border-box;
    font-size: 2rem;
    background-size: cover !important;
    height: 100%;
    width: 100%;

    overflow: hidden;
  }
</style>
