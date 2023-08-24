<script>
  import First from "./First.svelte";
  import Inplace from "./Inplace.svelte";
  import Microplastics from "./Microplastics.svelte";
  import Particles from "./Particles.svelte";
  import Video from "./Video.svelte";
  let anchor;
</script>

<First />

<Inplace height="200vh" let:percent>
  <Particles {percent} />
</Inplace>

<Inplace let:percent>
  <Microplastics {percent} />
  <div style="height: 100vh;width: 100%;" />

  <div bind:this={anchor} />
  <div style="position: sticky; bottom: 0; z-index: -1;">
    <Inplace height="500vh" let:percent {anchor}>
      <Video {percent} />
    </Inplace>
  </div>
</Inplace>

<Inplace let:percent>
  <div style="height: 100vh; background: gray;">FOOTER</div>
</Inplace>

<style>
</style>
