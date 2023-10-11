<script>
  import Header from "$lib/components/Header.svelte";
  import Wave from "./Wave.svelte";
  import logo from "$lib/assets/white.svg";
</script>

<div class="header-container">
  <Header fixed={false} white={true} />
</div>

<img
  src="https://img.js.design/assets/img/643f7bd8493676d9ede0f364.jpg"
  alt=""
  srcset=""
  class="bg"
/>

<div class="cover" />

<div class="text">
  <!-- <p style="filter:opacity(0.8);" class="a">Introducing</p> -->
  <img class="a logo" src={logo} alt="" />
  <p
    style="filter: opacity(0.6); font-weight: normal; font-size: 1.5rem; line-height: 1.6;"
    class="b"
  >
    Simple production. High efficiency.
    <br />
    Absent Microplastics.
  </p>
</div>

<div class="float">
  <Wave />
</div>

<style>
  .bg {
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

  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    max-width: 30rem;
  }
  .text p {
    font-family: sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
  }

  .logo {
    margin: 20px;
    width: 16rem;
  }

  .text * {
    opacity: 0;
  }

  :global(.splash) .text * {
    animation: fade 0.5s ease-in 0.5s forwards;
  }

  .a {
    animation-delay: 0.3s !important;
  }
  .b {
    animation-delay: 1s !important;
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

  .header-container {
    position: absolute;
    top: 1.5rem;
    left: 0;
    width: 100%;
    z-index: 10;
  }
</style>
