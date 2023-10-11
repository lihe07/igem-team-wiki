<script>
  import AbsurbParticles from "./AbsurbParticles.svelte";
  import CompCard from "./CompCard.svelte";
  import First from "./First.svelte";
  import Footer from "./Footer.svelte";
  import Inplace from "./Inplace.svelte";
  import LearnMore from "./LearnMore.svelte";
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

<Inplace height="1500vh" let:percent>
  <AbsurbParticles bind:enter {percent} />
  <Video {percent} />
  <CompCard {percent} enter={3.15} leave={5}>
    <b style="color: black;">Whatever Protein</b> is the main functioning component
    of our membrane. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
    exercitationem? Vel, error. Assumenda consectetur, repellendus, hic necessitatibus
    vitae numquam libero tenetur sequi aut corporis quaerat debitis in quas est tempora!
  </CompCard>
  <CompCard {percent} enter={6.0} leave={7.7} left>
    <b style="color: black;">APT, or Palygorskite</b> Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Quisquam, exercitationem? Vel, error. Assumenda
    consectetur, repellendus, hic necessitatibus vitae numquam libero tenetur sequi
    aut corporis quaerat debitis in quas est tempora!
  </CompCard>
  <CompCard {percent} enter={8.6} leave={10.5}>
    <b style="color: black;">Bacterial Cellulose Membrane</b> Lorem ipsum dolor sit
    amet consectetur adipisicing elit. Quisquam, exercitationem? Vel, error. Assumenda
    consectetur, repellendus, hic necessitatibus vitae numquam libero tenetur sequi
    aut corporis quaerat debitis in quas est tempora!
  </CompCard>
</Inplace>

<Inplace let:percent>
  <Footer {percent} />
</Inplace>

<style>
</style>
