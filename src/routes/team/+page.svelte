<script>
  import { remote } from "$lib/header";
  import Card from "./Card.svelte";
  import MinorCard from "./MinorCard.svelte";

  const major = [
    {
      name: "Changsheng Liu",
      tags: ["Instructor", "PI"],
      avatar: remote("/avatars/changsheng.jpg"),
      background: `url(${remote("/avatars/bg.jpg")})`,
      desc: "Dr. Changsheng Liu received his Ph.D. from Peking University and worked as a postdoctoral fellow in Peking University.",
    },
    {
      name: "Ying Dai",
      tags: ["Instructor"],
      avatar: remote("/avatars/ying.jpg"),
      background: `url(${remote("/avatars/ba.jpg")})`,
      desc: "Primary PI; AP Biology teacher at Beijing Academy. Support team activities and connection to the school.",
    },
    {
      name: "Han Gao",
      tags: ["Student", "Leader"],
      avatar: remote("/avatars/han.jpg"),
      background: `url(${remote("/avatars/bg.jpg")})`,
      desc: "A student interested in biology at G11C1. She was the team leader of BAID-China, as well as the co-leader of the Wet lab part.",
    },
    {
      name: "He Li",
      tags: ["Student", "Model", "Team Wiki"],
      avatar: remote("/avatars/he.jpg"),
      background: `url(${remote("/avatars/bg.jpg")})`,
      desc: "A math and chemistry fan. Specialized in computational tasks, he was the leader of modelling team and the developer of our team wiki.",
    },
    {
      name: "Yimo Chen",
      tags: ["Student", "Human Practices"],
      // avatar: "/baid-china/yimo.jpg",
      avatar: remote("/avatars/yimo.jpg"),
    },
  ];

  const minor = [
    {
      name: "Mufeng Li",
      tags: ["Student", "Wet Lab"],
      // avatar: "/baid-china/mufeng.jpg",
      avatar: remote("/avatars/mufeng.jpg"),
    },
    {
      name: "Tianlang Gao",
      tags: ["Student", "Model"],
      // avatar: "/baid-china/tianlang.jpg",
      // background: "url(/ba.jpg)",
      avatar: remote("/avatars/tianlang.jpg"),
      background: `url(${remote("/avatars/bg.jpg")})`,
    },
    {
      name: "Yiyi Ding",
      // avatar: "/yiyi.jpg",
      avatar: remote("/avatars/yiyi.jpg"),
    },
    {
      name: "Yidi Ma",
      // avatar: "/a.jpg",
      avatar: remote("/avatars/a.jpg"),
    },
    {
      name: "Chuyan Wen",
      // avatar: "/b.jpg",
      avatar: remote("/avatars/b.jpg"),
    },
    {
      name: "Zixi Wang",
      // avatar: "/d.jpg",
      avatar: remote("/avatars/d.jpg"),
    },
    {
      name: "Jiayang Liu",
      // avatar: "/jiayang.jpg",
      avatar: remote("/avatars/jiayang.jpg"),
    },
    {
      name: "Yiwei Wan",
      // avatar: "/yiwei.jpg",
      avatar: remote("/avatars/yiwei.jpg"),
    },
    {
      name: "Lihan Zhang",
      // avatar: "/lihan.jpg",
      avatar: remote("/avatars/lihan.jpg"),
    },
  ];
</script>

<h1>Meet our Team!</h1>

<div class="major">
  {#each major as e}
    <Card {...e} />
  {/each}
</div>

<section
  style="background: url(https://static.igem.wiki/teams/4714/wiki/avatars/colorful.jpg)"
  class="sp"
>
  <div style="background: rgba(0, 0, 0, 0.3); " class="mask">
    <h1
      class="thanks"
      style="margin: 0; margin-bottom: 2rem; font-family: 'Pacifico'; font-weight: 500; font-size: 3.5rem;"
    >
      Special Thanks
    </h1>

    <div style="max-width: 50rem; margin: auto;">
      <Card
        background="transparent"
        tags={["Art", "Design", "Graphics"]}
        desc="世界一の美少女絵師でーす"
        name="Xiyu Su"
        avatar="https://static.igem.wiki/teams/4714/wiki/avatars/xiyu.jpg"
      />
    </div>
  </div>
</section>

<h1>Group Members</h1>

<div class="minor">
  {#each minor as e}
    <MinorCard {...e} />
  {/each}
</div>

<style>
  @font-face {
    font-family: "Pacifico";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://static.igem.wiki/teams/4714/wiki/pacifico.woff2)
      format("woff2");
  }

  .sp {
    color: white;
    background-size: cover;
    border-radius: 3rem;
    overflow: hidden;
    margin: 5rem -2rem;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  }
  .mask {
    position: relative;
    top: 0;
    padding: 3rem 3rem;
  }
  h1 {
    text-align: center;
    font-size: 3rem;
    font-family: sans-serif;
  }
  .major {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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
    .sp {
      margin: 3rem -1rem;
    }
    .major {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }
    .minor {
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
    }
  }
</style>
