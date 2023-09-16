<script>
  import FooterBox from "./FooterBox.svelte";
</script>

<div class="container">
  <h1>More in detail</h1>

  <FooterBox title="Project">Description</FooterBox>

  <FooterBox title="People">Team Attributions</FooterBox>
</div>

<style>
  .container {
    background: #bae6fd;
    border-radius: 2rem 2rem 0 0;
    padding: 7rem 5rem;
    box-sizing: border-box;
    height: calc(100vh + 30px);
  }

  h1 {
    font-size: 2.5rem;
  }
</style>
