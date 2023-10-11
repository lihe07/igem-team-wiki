<script>
  import FooterBox from "./FooterBox.svelte";
  import NextStepBox from "./NextStepBox.svelte";
  import logo from "$lib/assets/black.svg";
  import { transform } from "$lib/header";

  export let percent = 0;

  const links = [
    {
      name: "Project Description",
      icon: "fluent:slide-text-sparkle-28-regular",
      color: "#059669",
      href: transform("/Description"),
    },
    {
      name: "Modelling",
      icon: "fluent:slide-text-sparkle-28-regular",
      color: "#0ea5e9",
      href: transform("/Modelling"),
    },
    {
      name: "Experiments",
      icon: "fluent:slide-text-sparkle-28-regular",
      color: "#06b6d4",
      href: transform("/Experiments"),
    },
    {
      name: "Results",
      icon: "fluent:slide-text-sparkle-28-regular",
      color: "#6366f1",
      href: transform("/Results"),
    },
  ];

  const external_links = [
    {
      logo: "https://old.igem.org/wiki/images/e/e4/Main_igem_logo.svg",
      href: "https://www.igem.org/",
    },
    {
      logo: "https://vitejs.dev/stackblitz.svg",
      href: "#",
    },

    {
      logo: "https://sponsors.vuejs.org/images/divriots.png",
      href: "#",
    },
    {
      logo: "https://vitejs.dev/stackblitz.svg",
      href: "#",
    },
    {
      logo: "https://vitejs.dev/stackblitz.svg",
      href: "#",
    },
    {
      logo: "https://old.igem.org/wiki/images/e/e4/Main_igem_logo.svg",
      href: "https://www.igem.org/",
    },
  ];
</script>

<div class="bg" style="opacity: {percent + 1.5};">
  <div class="container">
    <div class="links">
      <h1>Next Steps</h1>

      <div class="boxes">
        {#each links as link}
          <NextStepBox {...link} />
        {/each}
      </div>
    </div>

    <div class="bottom">
      <FooterBox>
        <div class="product">
          <img src={logo} alt="plasticlear logo" />
        </div>
        <p class="desc">
          Team Wiki made with Svelte + Svelte Kit.
          <br />

          Made for iGEM 2023

          <br />
          Copyright 2023 @ BAID-China
        </p>
      </FooterBox>
      <div class="links-grid">
        {#each external_links as link}
          <a href={link.href} class="link">
            <img src={link.logo} alt="" />
          </a>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .links-grid {
    display: grid;
    flex: 1;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem;
    border-radius: 1rem;
    overflow: hidden;
  }

  .link {
    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(255, 255, 255, 0.4);
    filter: grayscale(1);
    opacity: 0.8;
    transition: all 0.3s;
  }

  .link:hover {
    opacity: 1;
    filter: grayscale(0);
    background: rgba(255, 255, 255, 0.7);
  }

  .link img {
    width: 10rem;
    height: 7rem;
    object-fit: contain;
  }

  .bg {
    min-height: 100vh;
    background: rgba(245, 254, 255, 0.7);
    border-radius: 2rem 2rem 0 0;
    backdrop-filter: blur(5px);
    box-sizing: border-box;
    max-width: 100vw;
    overflow: hidden;
  }

  .product {
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .product img {
    width: 60%;
  }
  .desc {
    font-family: sans-serif;
    opacity: 0.7;
    line-height: 1.8;
    font-size: 1.3rem;
    margin: 0;
  }

  .container {
    max-width: 100rem;
    padding: 10rem 5rem;
    box-sizing: border-box;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.5rem;
    font-family: sans-serif;
    margin-top: 0;
  }

  .boxes {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 3rem;
  }
  .bottom {
    margin-top: 3rem;
    display: grid;
    gap: 3rem;
    grid-template-columns: auto 1fr;
  }

  @media (max-width: 1400px) {
    .link img {
      width: 70%;
      height: 6rem;
    }
    .links-grid {
      min-width: 25rem;
    }
  }

  @media (max-width: 1200px) {
    .boxes {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 768px) {
    .container {
      padding: 5rem 2rem;
    }

    .bottom {
      grid-template-columns: 1fr;
    }
    .links-grid {
      grid-template-columns: 1fr 1fr;
    }

    .link img {
      width: 80%;
      height: 6rem;
    }

    .boxes {
      grid-template-columns: 1fr;
    }
  }
</style>
