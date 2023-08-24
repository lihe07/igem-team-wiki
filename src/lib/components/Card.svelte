<script>
  export let background = "rgba(0, 0, 0, 0.1)";
</script>

<div style:background>
  <slot />
</div>

<style>
  div {
    padding: 2rem;
    border-radius: 2rem;
    font-size: 2rem;
    margin: 3rem 0;
    background-size: cover !important;
  }
</style>
