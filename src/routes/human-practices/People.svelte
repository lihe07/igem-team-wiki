<script>
  import Block from "./Block.svelte";

  export let avatar = "";
</script>

<Block color="#e7e5e4">
  <div class="main">
    <img src={avatar} alt="avatar" />

    <p>
      <slot />
    </p>
  </div>
</Block>

<style>
  .main {
    display: flex;
    gap: 3rem;
    color: black;
    align-items: center;
    padding: 1rem;
    flex-direction: column;
  }
  p {
    margin: 0;
  }

  img {
    border-radius: 1rem;
    height: 20rem;
  }
</style>
