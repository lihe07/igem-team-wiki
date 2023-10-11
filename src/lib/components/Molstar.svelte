<script>
  import "molstar/build/viewer/molstar.css";
  import { onMount } from "svelte";
  export let pdb = "7bv2";

  onMount(async () => {
    if (window.molstar) return;

    const resp = await fetch(
      "https://static.igem.wiki/teams/4714/wiki/molstar.js"
    );

    const ele = document.createElement("script");
    ele.type = "text/javascript";
    ele.appendChild(document.createTextNode(await resp.text()));

    document.head.appendChild(ele);
  });

  function viewer(ele) {
    const i = setInterval(async () => {
      if (window.molstar) {
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
          volumesAndSegmentationsDefaultServer:
            "https://static.igem.wiki/teams/4714/wiki/",
        });
        // viewer.loadPdb("7bv2");
        viewer.loadStructureFromUrl(pdb, "pdb");
        clearInterval(i);
      }
    });

    return () => clearInterval(i);
  }
</script>

<div use:viewer class="viewer" />

<style>
  :global(.msp-viewport) {
    position: relative;
    height: 100%;
    width: 100%;
  }
  :global(.msp-plugin) {
    position: relative;
    height: 100%;
    width: 100%;
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
