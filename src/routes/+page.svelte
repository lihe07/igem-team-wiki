<script>
  import AbsurbParticles from "./AbsurbParticles.svelte";
  import CompCard from "./CompCard.svelte";
  import First from "./First.svelte";
  import Footer from "./Footer.svelte";
  import Inplace from "./Inplace.svelte";
  import Microplastics from "./Microplastics.svelte";
  import Particles from "./Particles.svelte";
  import Video from "./Video.svelte";
  let enter = false;
</script>

<First />

<Inplace height="200vh" let:percent>
  {#if !enter}
    <Particles {percent} />
  {:else}
    <div style="height: 100%; width: 100%; background: #bae6fd;" />
  {/if}
</Inplace>

<Inplace let:percent>
  <Microplastics {percent} />
</Inplace>

<Inplace height="1300vh" let:percent>
  <AbsurbParticles bind:enter {percent} />
  <Video {percent} />
  <CompCard {percent} enter={3.15} leave={5}>
    <b>Oat globulin</b>, a naturally extracted or biologically modified protein
    with hydrophobic functional groups, increases the membrane’s removal
    efficiency by electrostatic and hydrophobic interactions.
  </CompCard>
  <CompCard {percent} enter={6.0} leave={7.7} left>
    <b>Attapulgite (APT)</b>, a cost-effective clay mineral with porous
    structure, increased the MP absorption sites on the filter membrane.
  </CompCard>
  <CompCard {percent} enter={8.6} leave={10.5}>
    <b>Bacterial cellulose (BC)</b>, a common biomedical material with high
    mechanical flexibility, biocompatibility, and low environmental impact,
    serves as the base cellulose structure of the membrane.
  </CompCard>
</Inplace>

<Inplace let:percent>
  <Footer {percent} />
</Inplace>

<style>
</style>
