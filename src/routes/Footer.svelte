<script>
  import FooterBox from "./FooterBox.svelte";

  export let percent = 0;
</script>

<div class="bg" style="opacity: {percent + 2.3};">
  <div class="container">
    <h1 class="logo">BAID-China <br /> (LOGO)</h1>
    <div class="links">
      <h1>Next Steps</h1>

      <div class="boxes">
        <FooterBox title="Project">Description</FooterBox>

        <FooterBox title="People">Team Attributions</FooterBox>
      </div>
    </div>
  </div>
</div>

<style>
  .bg {
    /* background: #bae6fd; */
    background: rgba(245, 254, 255, 0.7);
    border-radius: 2rem 2rem 0 0;
    backdrop-filter: blur(5px);
    box-sizing: border-box;
    max-width: 100vw;
    overflow: hidden;
  }

  .logo {
    font-family: sans-serif;
    text-align: center;
  }
  .links {
    flex: 1;
  }

  .container {
    max-width: 100rem;
    padding: 5rem;
    box-sizing: border-box;
    margin: 0 auto;

    display: flex;
    align-items: center;
    gap: 7rem;
  }
  h1 {
    font-size: 2.5rem;
  }

  .boxes {
    display: flex;
    justify-content: space-between;
    margin: 3rem 0;

    gap: 3rem;
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column-reverse;
    }

    .boxes {
      margin: 0;
    }
  }
</style>
