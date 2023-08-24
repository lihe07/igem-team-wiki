<script>
  import Card from "$lib/components/Card.svelte";

  export let percent = 0;
</script>

<div
  style="background: white;"
  style:opacity={Math.max(0, percent + 1)}
  style:transform={`rotate3d(1,0,0,${Math.min(percent, 0) * 30}deg)`}
>
  <section>
    <p>
      <b>Microplastics</b> are Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Praesentium vero temporibus impedit delectus deserunt
      incidunt voluptatem, assumenda magnam, consequatur error nesciunt,
      corporis dignissimos omnis repellat perferendis tempora quaerat obcaecati.
      Tempore.
      {percent}
    </p>

    <div class="cards">
      <div>
        <Card>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi unde
          consectetur officiis eaque commodi quas atque perferendis at vel fuga
          ut, laborum a vitae quos rerum asperiores? Laudantium, nesciunt
          aliquid? Lorem ipsum dolor sit amet, officia excepteur ex fugiat
          reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex
          esse exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
        </Card>
      </div>
      <div>
        <Card>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi unde
          consectetur officiis eaque commodi quas atque perferendis at vel fuga
          ut, laborum a vitae quos rerum asperiores? Laudantium, nesciunt
          aliquid?
        </Card>
        <Card
          background="url(https://images.unsplash.com/photo-1610296669228-602fa827fc1f)"
        >
          <div style="height:20rem" />
        </Card>
      </div>
    </div>
  </section>
</div>

<style>
  section {
    max-width: 100rem;
    margin: auto;
    padding: 5rem;
    box-sizing: border-box;
    overflow: hidden;
  }
  b {
    color: black;
  }
  p {
    font-family: sans-serif;
    font-size: 2rem;
    max-width: 70%;
    color: rgba(0, 0, 0, 0.8);
  }

  .cards {
    display: flex;
    gap: 3rem;
  }

  .cards div {
    flex: 1;
  }

  @media (max-width: 768px) {
    .cards {
      flex-direction: column;
      gap: 0;
    }
    section {
      padding: 5rem 2rem;
    }
    p {
      max-width: unset;
    }
  }
</style>
