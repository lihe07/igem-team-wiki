<script>
  export let name = "";
  export let avatar = "";
  export let desc = "No description provided.";
  export let tags = [""];
  export let background = "#e5e5e5";
  export let blur = "10px";
</script>

<div class="card">
  <div style={`background-image: ${background}; opacity: 0.6;`} class="bg" />

  <div class="content" style={`backdrop-filter: blur(${blur}); `}>
    <img src={avatar} alt="" srcset="" />

    <div>
      <h2>{name}</h2>

      <div class="tags">
        {#each tags as tag}
          <div class="tag">{tag}</div>
        {/each}
      </div>

      <p>
        {desc}
      </p>
    </div>
  </div>
</div>

<style>
  .card {
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow:
      0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
    transition: all 0.3s;
  }

  .card:hover {
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  }

  .tags {
    margin-top: 0.4rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .tag {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 0.5rem;
    padding: 0.3rem 0.8rem;
  }

  .bg {
    position: absolute;
    background-clip: cover;
    background-position: center;
    width: 100%;
    height: 100%;
  }
  .content {
    position: relative;
    height: 100%;
    box-sizing: border-box;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 3rem;
    font-family: sans-serif;
    background: rgba(255, 255, 255, 0.5);
    /* backdrop-filter: blur(10px); */
    padding: 3rem;
  }
  h2 {
    font-size: 2rem;
    margin: 0;
  }

  p {
    font-size: 1.3rem;
    line-height: 2rem;
  }

  img {
    width: 13rem;
    height: 15rem;
    object-fit: cover;
    border-radius: 1rem;
    border: white;
    border-width: 10px;
    border-style: solid;
  }

  @media (max-width: 1400px) {
    .content {
      flex-direction: column;
      gap: 1.5rem;
    }
  }
</style>
