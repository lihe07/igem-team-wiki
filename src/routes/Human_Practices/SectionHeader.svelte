<script>
  export let background =
    "url(https://static.igem.wiki/teams/4714/wiki/for-test/placeholder.jpg)";
  export let title = "";
</script>

<h2>{title}</h2>
<div class="container" style={`background: ${background}`}>
  <div class="layer">
    <p>{title}</p>
  </div>
</div>

<style>
  h2 {
    height: 0;
    opacity: 0;
    margin: 0 !important;
  }
  .container {
    position: sticky;
    top: 90px;
    margin: 0 -1rem;
    margin-bottom: 2rem;
    width: calc(100% + 2rem);
    border-radius: 1rem;
    overflow: hidden;
    height: 30vh;
    min-height: 20rem;
    max-height: 50rem;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1);
    pointer-events: none;
    transition: all 0.3s;
    z-index: 2;
    background-size: cover !important;
  }

  .layer {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    font-size: 2rem;
    font-weight: bold;
  }
</style>
