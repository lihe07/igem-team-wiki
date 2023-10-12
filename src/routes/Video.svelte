<script>
  import { remote } from "$lib/header";
  import { onMount } from "svelte";

  export let percent = 0;

  const video = remote("/video.js");

  $: p = Math.max(0, Math.min(percent / 11 - 0.02, 1));

  /** @type {HTMLVideoElement} */
  let ele;

  function play() {
    ele.currentTime = ele.duration * p;

    requestAnimationFrame(play);
  }

  onMount(() => {
    play();
  });
</script>

<div style="" class="c">
  <video preload="auto" src={video} bind:this={ele} class="v">
    <track kind="captions" />
  </video>
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
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
</style>
