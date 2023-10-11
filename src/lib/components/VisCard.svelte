<script lang="ts">
  export let style = "";
  export let id = "";
</script>

<div {style} {id} {...$$props}>
  <slot />
</div>

<style>
  div {
    background-color: white;
    border-radius: 1.5rem;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    padding: 1.5rem;
    height: 100%;
    box-sizing: border-box;
  }
</style>
