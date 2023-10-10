<script>
  import Card from "$lib/components/Card.svelte";
</script>

<Card
  background="url(https://static.igem.wiki/teams/4714/wiki/for-test/placeholder.jpg)"
>
  <div class="overlay">
    <p class="over">Over</p>
    <p class="stat">
      <span>14M</span>
      tons
    </p>

    <p class="desc">MPs have accumulated on the world’s ocean floor</p>
  </div>
</Card>

<style>
  .overlay {
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    padding: 5rem;
    border-radius: 2rem;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  p {
    margin: 0;
  }

  .over {
    font-size: 3rem;
    font-family: sans-serif;
    margin-bottom: 1rem;
  }

  span {
    font-size: 8rem;
    font-weight: bold;
  }

  .stat {
    font-size: 6rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
  }

  .desc {
    font-size: 2rem;
    font-family: sans-serif;
    opacity: 0.8;
    text-align: center;
  }

  @media (max-width: 1500px) {
    .overlay {
      padding: 2rem;
    }

    .over {
      font-size: 2rem;
    }

    span {
      font-size: 5rem;
    }

    .stat {
      font-size: 3rem;
    }

    .desc {
      font-size: 1.5rem;
    }
  }
</style>
