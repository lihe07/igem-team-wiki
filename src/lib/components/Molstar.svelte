<script>
  import "molstar/build/viewer/molstar.css";
  async function viewer(ele) {
    console.log(molstar);
    const viewer = await molstar.Viewer.create(ele, {
      layoutIsExpanded: false,
      layoutShowControls: false,
      layoutShowRemoteState: false,
      layoutShowSequence: true,
      layoutShowLog: false,
      layoutShowLeftPanel: true,

      viewportShowExpand: true,
      viewportShowSelectionMode: false,
      viewportShowAnimation: false,

      pdbProvider: "rcsb",
      emdbProvider: "rcsb",
    });
    viewer.loadPdb("7bv2");
  }
</script>

<svelte:head>
  <script type="text/javascript" src="/molstar.js"></script>
</svelte:head>

<div use:viewer class="viewer" />

<style>
  :global(.msp-viewport) {
    position: relative;
    height: 100%;
  }
  :global(.msp-plugin) {
    position: relative;
    height: 100%;
  }
  :global(.msp-layout-expanded) {
    z-index: 20;
  }
  .viewer {
    height: 30rem;
  }

  @media (max-width: 768px) {
    .viewer {
      height: 20rem;
    }
  }
</style>
