<script>
  import Header from "$lib/components/Header.svelte";
  import Wave from "./Wave.svelte";
</script>

<div class="header-container">
  <Header fixed={false} white={true} />
</div>

<img
  src="https://img.js.design/assets/img/643f7bd8493676d9ede0f364.jpg"
  alt=""
  srcset=""
/>

<div class="cover" />

<h1>Lorem ipsum dolor sit amet. Some slogan here.</h1>

<div class="float">
  <Wave />
</div>

<style>
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  .cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5),
      rgba(12, 74, 110, 1)
    );
  }

  :global(.splash) .cover {
    animation: fade-blur 0.5s linear 1s forwards;
  }

  @keyframes fade-blur {
    from {
      backdrop-filter: blur(0px);
    }
    to {
      backdrop-filter: blur(10px);
    }
  }

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    font-size: 3rem;
    font-family: "Mate SC";
    width: max-content;
    max-width: 30rem;
    opacity: 0;
  }

  :global(.splash) h1 {
    animation: fade 0.5s ease-in 0.5s forwards;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .float {
    position: relative;
    bottom: -50px;
    opacity: 0;
  }

  :global(.splash) .float {
    animation: float 1s ease-in forwards;
  }

  @keyframes float {
    from {
      opacity: 0;
      bottom: -50px;
    }
    to {
      opacity: 1;
      bottom: 0;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.3rem;
      max-width: 80%;
    }
  }

  .header-container {
    position: absolute;
    top: 1.5rem;
    left: 0;
    width: 100%;
    z-index: 10;
  }
</style>
