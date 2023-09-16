<script>
  import ScrollyVideo from "scrolly-video/dist/ScrollyVideo.svelte";
  import { onMount } from "svelte";

  // import ScrollyVideo from "scrolly-video/dist/ScrollyVideo.svelte";
  export let percent = 0;

  const video =
    "https://lms.d.zhan.com/zhanlms/addon_homework/2023/09/30964656505b16990208/goldengate.mp4";

  const rvideo =
    "https://lms.d.zhan.com/zhanlms/addon_homework/2023/09/40871056505b194584eb/rgoldengate.mp4";

  let reverse = false;

  let last_p = 0;

  $: p = percent / 10;

  function check() {
    if (p - last_p > 0) {
      reverse = false;
    }

    if (p - last_p < 0) {
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
    <ScrollyVideo src={rvideo} videoPercentage={1 - p} frameRate={60} />
  </div>
  <div style="opacity: {reverse ? 0 : 1};" class="v">
    <ScrollyVideo src={video} videoPercentage={p} useWebCodec={false} />
  </div>
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
