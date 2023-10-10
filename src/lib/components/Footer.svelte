<footer>
  <div class="icons">
    <h1 class="logo">BAID-CHINA</h1>
    <div class="div" />
    <img
      class="igem"
      alt="igem"
      src="https://old.igem.org/wiki/images/e/e4/Main_igem_logo.svg"
    />
  </div>

  <p class="copy">Copyright asdasdasd</p>
</footer>

<style>
  .logo {
    margin: 0;
    font-size: 2rem;
    font-family: sans-serif;
  }
  .icons {
    display: flex;
    width: 100%;
    gap: 3rem;
    justify-content: center;
    align-items: center;
  }
  .div {
    background: rgba(0, 0, 0, 0.8);
    width: 3px;
    height: 3rem;
  }
  .igem {
    width: 10rem;
    height: 10rem;
  }
  .copy {
    opacity: 0.5;
    font-family: sans-serif;
    font-size: 1rem;
    text-align: center;
  }
  footer {
    background: #f5f5f4;
    padding-top: 2rem;
  }
  @media (max-width: 768px) {
    .icons {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .div {
      width: 3rem;
      height: 3px;
    }
    .igem {
      width: 8rem;
      height: 7rem;
    }
  }
</style>
