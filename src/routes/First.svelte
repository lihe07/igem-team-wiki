<script>
  import Header from "$lib/components/Header.svelte";
  import Wave from "./Wave.svelte";
</script>

<div class="header-container">
  <Header fixed={false} />
</div>

<img
  src="https://img.js.design/assets/img/643f7bd8493676d9ede0f364.jpg"
  alt=""
  srcset=""
/>

<div class="cover" />

<h1>Lorem ipsum dolor sit amet. Some slogan here.</h1>

<Wave />

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
