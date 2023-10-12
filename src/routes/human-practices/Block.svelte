<script>
  import Icon from "@iconify/svelte";
  export let icon = "";

  export let color = "";
  export let name = "";
</script>

<div class="card" style:background={color}>
  <div class="bg" />
  {#if name.length}
    <div class="headline">
      <Icon {icon} style="font-size: 2.5rem;" />
      <p class="name">{name}</p>
    </div>
  {/if}

  <p>
    <slot />
  </p>
</div>

<style>
  .card {
    border-radius: 1rem;
    color: white;
    padding: 2rem;
    margin: 2rem 0;
  }

  .headline {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .name {
    font-weight: 600;
    font-size: 1.5em;
    margin: 0;
  }
</style>
