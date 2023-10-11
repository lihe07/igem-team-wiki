<script>
  export let percent = 0;
  export let enter = 0;
  export let leave = 0;
  export let left = false;
</script>

<div class="container">
  <div class="inner" class:left>
    <div class="card" class:active={percent <= leave && percent >= enter}>
      <slot />
    </div>
  </div>
</div>

<style>
  .container {
    position: absolute;
    left: 2rem;
    top: 7rem;
    bottom: 10rem;
    right: 2rem;
  }
  .inner {
    max-width: 100rem;
    margin: auto;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
  }

  .inner.left {
    justify-content: start;
  }

  .card {
    width: 33%;
    height: max-content;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    border-radius: 1rem;
    padding: 2rem;
    font-family: sans-serif;
    font-size: 1.5rem;
    line-height: 1.5;

    opacity: 0;
    color: rgba(0, 0, 0, 0.8);
    transition: all 0.3s ease-in-out;
  }

  .card.active {
    opacity: 1;
  }

  @media (max-width: 1000px) {
    .inner {
      align-items: start;
    }
    .card {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .container {
      top: 5rem;
      left: 1rem;
      right: 1rem;
    }

    .card {
      font-size: 1.2rem;
    }
  }
</style>
