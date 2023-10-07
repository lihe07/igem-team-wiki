<script>
  import FooterBox from "./FooterBox.svelte";
  import header from "$lib/header";

  export let percent = 0;
</script>

<div class="bg" style="opacity: {percent + 2.3};">
  <div class="container">
    <h1 class="logo">BAID-China</h1>
    <div class="links">
      <h1>Next Steps</h1>

      <div class="boxes">
        {#each header as entry}
          <FooterBox title={entry.text}>
            {#each entry.children || [] as child}
              <a href={child.link}>{child.text}</a>
            {/each}
          </FooterBox>
        {/each}
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
    opacity: 0.7;
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 1rem 0;
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
