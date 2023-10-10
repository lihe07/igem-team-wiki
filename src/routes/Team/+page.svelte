<script>
  import Card from "./Card.svelte";
  import MinorCard from "./MinorCard.svelte";

  const major = [
    {
      name: "Akaza Akari",
      tags: ["Student", "PI", "Human Practice"],
      avatar: "https://static.igem.wiki/teams/4714/wiki/for-test/akari.jpg",
      background:
        "url(https://lms.d.zhan.com/zhanlms/addon_homework/2023/10/3561956652545f3b9847/Diyizhongxue_02.JPG)",
    },
    {
      name: "Toshino Kyoko",
      tags: ["Student", "Modelling"],
      avatar: "https://static.igem.wiki/teams/4714/wiki/for-test/kyoko.jpg",
      background:
        "url(https://lms.d.zhan.com/zhanlms/addon_homework/2023/10/7275164652546138f518/%E6%A0%85%E5%B7%9D%E4%B8%AD%E5%AD%A6%E6%A0%A1.png)",
    },
  ];

  const minor = [
    {
      name: "Omuro Sakurako",
      avatar: "https://static.igem.wiki/teams/4714/wiki/for-test/sakurako.jpg",
    },
    {
      name: "Sugiura Ayano",
      avatar: "https://static.igem.wiki/teams/4714/wiki/for-test/ayano.jpg",
    },
    {
      name: "Furutani Himawari",
      avatar: "https://static.igem.wiki/teams/4714/wiki/for-test/himawari.jpg",
    },
    {
      name: "Yoshikawa Chinatsu",
      avatar: "https://static.igem.wiki/teams/4714/wiki/for-test/chinatsu.jpg",
    },
  ];
</script>

<h1>Meet our Team!</h1>

<div class="major">
  {#each major as e}
    <Card {...e} />
  {/each}
</div>

<div class="minor">
  {#each minor as e}
    <MinorCard {...e} />
  {/each}
</div>

<div style="height: 300rem" />

<style>
  h1 {
    text-align: center;
    font-size: 3rem;
    font-family: sans-serif;
  }
  .major {
    margin-top: 3rem;
    display: flex;
    gap: 5rem;
  }

  .minor {
    margin-top: 5rem;
    display: grid;
    gap: 5rem;
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1400px) {
    .minor {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .major {
      flex-direction: column;
    }
    .minor {
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
    }
  }
</style>
