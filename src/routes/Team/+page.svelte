<script>
  import Card from "./Card.svelte";
  import MinorCard from "./MinorCard.svelte";

  const major = [
    {
      name: "Akaza Akari",
      tags: ["Student", "PI", "Human Practice"],
      avatar:
        "https://img.moegirl.org.cn/common/7/79/%E8%B5%A4%E5%BA%A7%E7%81%AF%E9%87%8C%E8%A7%92%E8%89%B2%E6%AD%8C2.jpg",
      background:
        "url(https://img.moegirl.org.cn/common/b/b5/Diyizhongxue_02.JPG)",
    },
    {
      name: "Toshino Kyoko",
      tags: ["Student", "Modelling"],
      avatar:
        "https://img.moegirl.org.cn/common/a/ae/%E5%B2%81%E7%BA%B3%E4%BA%AC%E5%AD%90%E8%A7%92%E8%89%B2%E6%AD%8C3.jpg",
      background:
        "url(https://img.moegirl.org.cn/common/8/82/%E6%A0%85%E5%B7%9D%E4%B8%AD%E5%AD%A6%E6%A0%A1.png)",
    },
  ];

  const minor = [
    {
      name: "Omuro Sakurako",
      avatar: "https://img.moegirl.org.cn/common/f/f8/YRYRomurosing1.jpg",
    },
    {
      name: "Sugiura Ayano",
      avatar:
        "https://img.moegirl.org.cn/common/7/71/%E6%9D%89%E6%B5%A6%E7%BB%AB%E4%B9%83%E8%A7%92%E8%89%B2%E6%AD%8C3.jpg",
    },
    {
      name: "Furutani Himawari",
      avatar: "https://img.moegirl.org.cn/common/7/7f/YRYRhmwrsing1.jpg",
    },
    {
      name: "Yoshikawa Chinatsu",
      avatar: "https://img.moegirl.org.cn/common/b/bf/YRYRnatsusing1.jpg",
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
</style>
