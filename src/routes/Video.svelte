<script>
  import ScrollyVideo from "scrolly-video/dist/ScrollyVideo.svelte";
  import { onMount } from "svelte";

  export let percent = 0;

  const video =
    "https://lms.d.zhan.com/zhanlms/addon_homework/2023/10/94297036526c35c6cbc3/video.mp4";

  const rvideo =
    "https://lms.d.zhan.com/zhanlms/addon_homework/2023/10/81585166526c3733e7e2/rvideo.mp4";

  let reverse = false;

  let last_p = 0;

  $: p = Math.max(0, Math.min(percent / 11 - 0.02, 1));

  function check() {
    if (p - last_p > 0.01) {
      reverse = false;
    }

    if (p - last_p < -0.01) {
      reverse = true;
    }

    last_p = p;
  }

  onMount(() => {
    const i = setInterval(check, 300);
    return () => clearInterval(i);
  });
</script>

<div style="" class="c">
  <div style="opacity: {reverse ? 1 : 0};" class="v">
    <ScrollyVideo
      src={rvideo}
      videoPercentage={1 - p}
      useWebCodecs={false}
      sticky={false}
      trackScroll={false}
      transitionSpeed={500}
    />
  </div>
  <div style="opacity: {reverse ? 0 : 1};" class="v">
    <ScrollyVideo
      src={video}
      videoPercentage={p}
      useWebCodecs={false}
      sticky={false}
      trackScroll={false}
      transitionSpeed={500}
    />
  </div>

  <!-- <div style="position: absolute; z-index: 10; top: 50%;">
    <h2>{p}, {reverse}, {percent}</h2>
  </div> -->
</div>

<style>
  .c {
    position: absolute;
    width: 100vw;
    height: 100%;
    top: 0;
  }

  .v {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
