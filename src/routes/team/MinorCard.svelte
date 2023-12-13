<script>
  export let name = "";
  export let avatar = "";
</script>

<div class="card">
  <img src={avatar} alt="" srcset="" />

  <div>
    <h2>{name}</h2>

    <!-- <p> Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum
      sint consectetur cupidatat.
    </p> -->
  </div>
</div>

<style>
  .card {
    background: #e7e5e4;
    border-radius: 1rem;
    box-shadow:
      0 1px 3px 0 rgb(0 0 0 / 0.1),
      0 1px 2px -1px rgb(0 0 0 / 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    font-family: sans-serif;
    padding: 2rem;
    transition: all 0.3s;
    opacity: 0.8;
  }
  .card:hover {
    opacity: 1;
    box-shadow:
      0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  h2 {
    font-size: 1.5rem;
    margin: 0;
    text-align: center;
  }

  p {
    font-size: 1rem;
    opacity: 0.7;
  }

  img {
    width: 12rem;
    height: 11rem;
    object-fit: cover;
    border-radius: 1rem;
    border: white;
    border-style: solid;
    border-width: 5px;
  }

  @media (max-width: 768px) {
    .card {
      flex-direction: row;
      padding: 1rem;
    }
    img {
      width: 8rem;
      height: 10rem;
    }
    h2 {
      text-align: left;
    }
    p {
      font-size: 0.8rem;
    }
  }
</style>
