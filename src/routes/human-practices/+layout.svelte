<script>
  import ArticleLayout from "$lib/components/ArticleLayout.svelte";
  import { remote } from "$lib/header";
  import StickyImage from "$lib/components/StickyImage.svelte";
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
    remote("/human-practices/14.svg"),
    remote("/human-practices/15.svg"),
    remote("/human-practices/16.svg"),
  ];

  const transforms = {
    5: "translateX(-62%) scale(200%)",
    6: "translateX(-70%) scale(250%)",
    7: "translateX(-50%) scale(200%)",
    8: "translateX(-50%) scale(200%)",
    9: "translateX(-50%) scale(200%)",
    10: "translateX(-50%) scale(200%)",
    11: "translateX(-50%) scale(200%)",
    12: "translateX(-50%) scale(200%)",
    13: "translateX(-50%) scale(200%)",
    14: "translateX(-50%) scale(200%)",
  };
</script>

<ArticleLayout name="Human Practice" bg={remote("/human-practices/nhead.jpg")}>
  <slot />
</ArticleLayout>

<main>
  <div class="markdown-body" style="margin: 4rem 0; ">
    <StickyImage contain descriptions={sections} {images} {transforms} />
    <h2>References</h2>

    <p>
      Carrington, D. (2021, December 8). <em
        >Microplastics cause damage to human cells, study shows</em
      >. The Guardian.
      <a
        href="https://www.theguardian.com/environment/2021/dec/08/microplastics-damage-human-cells-study-plastic"
        target="_blank"
        class="url"
        >https://www.theguardian.com/environment/2021/dec/08/microplastics-damage-human-cells-study-plastic</a
      >
    </p>
    <p>
      Mason, S. A., Welch, V. G., &amp; Neratko, J. (2018). Synthetic Polymer
      Contamination in Bottled Water. <em>Frontiers in Chemistry</em>,
      <em>6</em>(407).
      <a
        href="https://doi.org/10.3389/fchem.2018.00407"
        target="_blank"
        class="url">https://doi.org/10.3389/fchem.2018.00407</a
      >
    </p>
    <p>
      Meng, F., Zhang, S., Oh, Y., Zhou, Z., Shin, H.-S., &amp; Chae, S.-R.
      (2017). Fouling in membrane bioreactors: An updated review. <em
        >Water Research</em
      >, <em>114</em>, 151–180.
      <a
        href="https://doi.org/10.1016/j.watres.2017.02.006"
        target="_blank"
        class="url">https://doi.org/10.1016/j.watres.2017.02.006</a
      >
    </p>
    <p>
      Radityaningrum, A. D., Trihadiningrum, Y., Mar’atusholihah, Soedjono, E.
      S., &amp; Herumurti, W. (2021). Microplastic contamination in water supply
      and the removal efficiencies of the treatment plants: A case of Surabaya
      City, Indonesia. <em>Journal of Water Process Engineering</em>,
      <em>43</em>, 102195.
      <a
        href="https://doi.org/10.1016/j.jwpe.2021.102195"
        target="_blank"
        class="url">https://doi.org/10.1016/j.jwpe.2021.102195</a
      >
    </p>
    <p>
      Shen, M., Zeng, Z., Wen, X., Ren, X., Zeng, G., Zhang, Y., &amp; Xiao, R.
      (2021). Presence of microplastics in drinking water from freshwater
      sources: the investigation in Changsha, China. <em
        >Environmental Science and Pollution Research</em
      >, <em>28</em>(31), 42313–42324.
      <a
        href="https://doi.org/10.1007/s11356-021-13769-x"
        target="_blank"
        class="url">https://doi.org/10.1007/s11356-021-13769-x</a
      >
    </p>
    <p>
      Vercauteren, M., Semmouri, I., Van Acker, E., Pequeur, E., Van Esch, L.,
      Uljee, I., Asselman, J., &amp; Janssen, C. R. (2023). Assessment of road
      run-off and domestic wastewater contribution to microplastic pollution in
      a densely populated area (Flanders, Belgium). <em
        >Environmental Pollution</em
      >, <em>333</em>, 122090.
      <a
        href="https://doi.org/10.1016/j.envpol.2023.122090"
        target="_blank"
        class="url">https://doi.org/10.1016/j.envpol.2023.122090</a
      >
    </p>
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
