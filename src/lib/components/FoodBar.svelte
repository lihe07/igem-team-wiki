<script>
  import { createEventDispatcher } from "svelte";
  import { fade, slide } from "svelte/transition";
  export let name = "Food Name";
  export let included = false;
  const dispatch = createEventDispatcher();
</script>

<div class="container" class:included>
  <div class="head">
    <span class="name">{name}</span>
    <div class="checkbox">
      <slot name="checkbox" />
    </div>
  </div>

  {#if included}
    <div transition:slide={{ duration: 300 }} class="props">
      <span class="label">Intake Rate (g/d):</span>
      <slot name="range" />
    </div>
  {/if}
</div>

<style>
  .container {
    width: 100%;
    background: rgba(0, 0, 0, 0.08);
    padding: 1rem 2rem;
    box-sizing: border-box;
    border-radius: 1rem;
    font-family: sans-serif;
    margin-bottom: 1rem;
    transition: all 0.3s;
  }

  .name,
  .checkbox {
    opacity: 0.3;
    transition: all 0.3s;
  }

  .container:hover .checkbox {
    opacity: 1;
  }

  .container.included .name,
  .container.included .checkbox {
    opacity: 1;
  }

  .props {
    background: #f5f5f4;
    margin-top: 0.5rem;
    width: 100%;
    margin-left: -1rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }
  .label {
    display: block;
    opacity: 0.5;
    margin-top: 0.5rem;
  }

  .name {
    font-size: 1.3rem;
  }
  .head {
    display: flex;
    justify-content: space-between;
  }
</style>
