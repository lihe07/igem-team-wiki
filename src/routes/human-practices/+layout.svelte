<script>
  import ArticleLayout from "$lib/components/ArticleLayout.svelte";
  import PlainLayout from "$lib/components/PlainLayout.svelte";
  import { remote } from "$lib/header";
  import StickyImage from "$lib/components/StickyImage.svelte";
  import Block from "./Block.svelte";
  import SectionHeader from "./SectionHeader.svelte";
  import s1 from "./sections/s1.svelte";
  import s2 from "./sections/s2.svelte";
  import s3 from "./sections/s3.svelte";
  import s4 from "./sections/s4.svelte";
  import s5 from "./sections/s5.svelte";
  import s6 from "./sections/s6.svelte";
  import s7 from "./sections/s7.svelte";
  import s8 from "./sections/s8.svelte";
  import s9 from "./sections/s9.svelte";
  import s10 from "./sections/s10.svelte";
  import s11 from "./sections/s11.svelte";
  import s12 from "./sections/s12.svelte";
  import s13 from "./sections/s13.svelte";
  import s14 from "./sections/s14.svelte";

  const sections = [
    s1,
    s2,
    s3,
    s4,
    s5,
    s6,
    s7,
    s8,
    s9,
    s10,
    s11,
    s12,
    s13,
    s14,
  ];

  const images = [
    remote("/human-practices/1.svg"),
    remote("/human-practices/2.svg"),
    remote("/human-practices/3.svg"),
    remote("/human-practices/4.svg"),
    remote("/human-practices/5.svg"),
    remote("/human-practices/6.svg"),
    remote("/human-practices/7.svg"),
    remote("/human-practices/8.svg"),
    remote("/human-practices/9.svg"),
    remote("/human-practices/10.svg"),
    remote("/human-practices/11.svg"),
    remote("/human-practices/12.svg"),
    remote("/human-practices/13.svg"),
    remote("/human-practices/14.svg"),
  ];
</script>

<ArticleLayout name="Human Practice">
  <slot />
</ArticleLayout>

<main>
  <div class="markdown-body" style="margin: 4rem 0; ">
    <StickyImage contain descriptions={sections} {images} />
    <h2>References</h2>
  </div>
</main>

<style>
  main {
    padding: 0 5rem;
    max-width: 100rem;
    width: 100%;
    margin: auto;
    box-sizing: border-box;
    background: white;

    display: flex;
  }

  .markdown-body {
    flex: 1;
    line-height: 2.5;
    font-size: 20px;
  }

  @media (max-width: 1500px) {
    .markdown-body {
      width: 70%;
    }
  }

  @media (max-width: 930px) {
    main {
      padding: 0 2rem;
    }
  }
</style>
