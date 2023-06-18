<script lang="ts">
  export let title = "";
  export let style = "";
  export let id = "";
</script>

<div {style} {id}>
  <h2>{title}</h2>
  <slot />
</div>

<style>
  div {
    background-color: #9bdbc1;
    border-radius: 1.5rem;
    padding: 1.5rem;
  }

  h2 {
    /* Text overflow: ... */
    white-space: nowrap;
    overflow: hidden;
  }
</style>
