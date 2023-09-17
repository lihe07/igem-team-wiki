<script>
  export let title = "";
</script>

<div class="container">
  <h2>{title}</h2>

  <div>
    <slot />
  </div>
</div>

<style>
  h2 {
    font-size: 1.5rem;
    margin-top: 0;
    margin-bottom: 1rem;
  }
  .container {
    flex: 1;
    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.4);

    padding: 1.5rem;
  }
</style>
