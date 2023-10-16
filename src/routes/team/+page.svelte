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
      // avatar: "/ying.jpg",
      // background: "url(/ba.jpg)",

      avatar: remote("/avatars/ying.jpg"),
      background: `url(${remote("/avatars/bg.jpg")})`,
    },
    {
      name: "Han Gao",
      tags: ["Student", "Leader"],
      // avatar: "/baid-china/han.jpg",
      // background: "url(/ba.jpg)",

      avatar: remote("/avatars/han.jpg"),
      background: `url(${remote("/avatars/bg.jpg")})`,
    },
    {
      name: "He Li",
      tags: ["Student", "Model", "Team Wiki"],
      // avatar: "/baid-china/he.jpg",
      // background: "url(/ba.jpg)",

      avatar: remote("/avatars/he.jpg"),
      background: `url(${remote("/avatars/bg.jpg")})`,
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
      name: "Yimo Chen",
      tags: ["Student", "Human Practices"],
      // avatar: "/baid-china/yimo.jpg",
      avatar: remote("/avatars/yimo.jpg"),
    },
    {
      name: "Mufeng Li",
      tags: ["Student", "Wet Lab"],
      // avatar: "/baid-china/mufeng.jpg",
      avatar: remote("/avatars/mufeng.jpg"),
    },
  ];

  const minor = [
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

<div class="minor">
  {#each minor as e}
    <MinorCard {...e} />
  {/each}
</div>

<style>
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
    .major {
      display: flex;
      flex-direction: column;
    }
    .minor {
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
    }
  }
</style>
