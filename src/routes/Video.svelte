<script>
  import ScrollyVideo from "scrolly-video/dist/ScrollyVideo.svelte";
  import { onMount } from "svelte";

  // import ScrollyVideo from "scrolly-video/dist/ScrollyVideo.svelte";
  export let percent = 0;

  let bloburl = "";
  onMount(async () => {
    // frames = await extractFramesFromVideo(
    //   "https://scrollyvideo.js.org/goldengate.mp4"
    // );

    const resp = await fetch("https://scrollyvideo.js.org/goldengate.mp4");

    const blob = await resp.blob();
    bloburl = URL.createObjectURL(blob);
  });
</script>

<div style:opacity={percent + 1} style="">
  {#if bloburl.length}
    <ScrollyVideo src={bloburl} videoPercentage={percent / 10} frameRate={60} />
  {/if}
</div>
