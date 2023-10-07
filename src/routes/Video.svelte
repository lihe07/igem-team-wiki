<script>
  import ScrollyVideo from "scrolly-video/dist/ScrollyVideo.svelte";
  import { onMount } from "svelte";

  // import ScrollyVideo from "scrolly-video/dist/ScrollyVideo.svelte";
  export let percent = 0;

  const video = "/goldengate.mp4";

  const rvideo = "/rgoldengate.mp4";

  let reverse = false;

  let last_p = 0;

  $: p = percent / 10;

  function check() {
    if (p - last_p > 0.01) {
      reverse = false;
    }

    if (p - last_p < -0.01) {
      reverse = true;
    }

    last_p = p;

    setTimeout(check, 100);
  }

  onMount(() => {
    check();
  });
</script>

<div style:opacity={percent + 1} style="" class="c">
  <div style="opacity: {reverse ? 1 : 0};" class="v">
    <ScrollyVideo src={rvideo} videoPercentage={1 - p} />
  </div>
  <div style="opacity: {reverse ? 0 : 1};" class="v">
    <ScrollyVideo src={video} videoPercentage={p} />
  </div>
  <!-- <div style="position: absolute; top: 50vh; color: white;"> -->
  <!--   <h1>{p} {reverse}</h1> -->
  <!-- </div> -->
</div>

<style>
  .c {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .v {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    left: 0;
  }
</style>
