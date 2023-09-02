<script>
  import ScrollyVideo from "scrolly-video/dist/ScrollyVideo.svelte";
  export let percent = 0;
</script>

<div style:opacity={percent + 1} style="">
  <ScrollyVideo
    src="https://lms.d.zhan.com/zhanlms/addon_homework/2023/08/537798264e70c368902a/mmmmm.webm"
    videoPercentage={percent / 4}
  />
</div>
