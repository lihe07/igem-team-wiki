<script>
  import { onMount } from "svelte";

  let loaded = false;
  let splash = false;
  const t0 = Date.now();
  const duration = 1000;

  function checkReadyState() {
    if (Date.now() - t0 < duration) {
      setTimeout(() => {
        checkReadyState();
      }, 100);
      return;
    }
    loaded = document.readyState === "complete";
    if (loaded) {
      setTimeout(() => (splash = true), 500);
    }
  }

  onMount(() => {
    checkReadyState();
    document.addEventListener("readystatechange", () => {
      checkReadyState();
    });
  });
  const colors = ["#3498db", "#48c9b0", "#73c6b6"];

  function bg(ele) {
    function animate() {
      ele.style.background = colors[Math.floor(Math.random() * colors.length)];
      // setTimeout(animate, Math.random() * 2000);
    }
    setTimeout(() => (ele.style.opacity = "1"), 300);
    animate();
  }
</script>

<div class="container full" class:loaded>
  <div class="bg full" style="opacity: 0;" use:bg />
  <div class="cover full">
    <svg viewBox="0 0 193.03573 24.999786" version="1.1">
      <defs id="defs1" />
      <g id="layer1" transform="translate(-202.58879,-325.94451)">
        <path
          d="m 187.30778,286.89887 q 4.288,0 6.464,1.28 2.208,1.248 2.208,4.384 0,2.016 -1.12,3.36 -1.12,1.312 -3.232,1.696 v 0.16 q 1.44,0.224 2.592,0.832 1.184,0.608 1.856,1.728 0.672,1.12 0.672,2.912 0,3.104 -2.144,4.8 -2.112,1.696 -5.792,1.696 h -8.032 v -22.848 z m 0.576,9.728 q 2.944,0 4.032,-0.928 1.088,-0.96 1.088,-2.816 0,-1.888 -1.344,-2.688 -1.312,-0.832 -4.224,-0.832 h -3.776 v 7.264 z m -4.224,2.4 v 8.288 h 4.608 q 3.04,0 4.224,-1.184 1.184,-1.184 1.184,-3.104 0,-1.792 -1.248,-2.88 -1.216,-1.12 -4.384,-1.12 z m 33.25599,10.72 -2.752,-7.072 h -9.056 l -2.72,7.072 h -2.912 l 8.928,-22.944 h 2.592 l 8.896,22.944 z m -6.176,-16.544 q -0.096,-0.256 -0.32,-0.928 -0.224,-0.672 -0.448,-1.376 -0.192,-0.736 -0.32,-1.12 -0.224,0.992 -0.512,1.952 -0.288,0.928 -0.48,1.472 l -2.592,6.912 h 7.232 z m 19.72,16.544 h -8.256 v -1.664 l 2.688,-0.608 v -18.272 l -2.688,-0.64 v -1.664 h 8.256 v 1.664 l -2.688,0.64 v 18.272 l 2.688,0.608 z m 23.72002,-11.648 q 0,5.792 -3.168,8.736 -3.136,2.912 -8.768,2.912 h -6.368 v -22.848 h 7.04 q 3.456,0 5.984,1.28 2.528,1.28 3.904,3.776 1.376,2.464 1.376,6.144 z m -3.04,0.096 q 0,-4.576 -2.272,-6.688 -2.24,-2.144 -6.368,-2.144 h -3.744 v 17.92 h 3.104 q 9.28,0 9.28,-9.088 z m 7.27198,4.224 v -2.496 h 7.744 v 2.496 z m 22.92002,-13.312 q -3.68,0 -5.792,2.464 -2.112,2.464 -2.112,6.752 0,4.256 1.952,6.752 1.984,2.464 5.92,2.464 1.504,0 2.848,-0.256 1.344,-0.256 2.624,-0.64 v 2.496 q -1.28,0.48 -2.656,0.704 -1.344,0.224 -3.232,0.224 -3.488,0 -5.824,-1.44 -2.336,-1.44 -3.52,-4.096 -1.152,-2.656 -1.152,-6.24 0,-3.456 1.248,-6.08 1.28,-2.656 3.744,-4.128 2.464,-1.504 5.984,-1.504 3.616,0 6.304,1.344 l -1.152,2.432 q -1.056,-0.48 -2.368,-0.864 -1.28,-0.384 -2.816,-0.384 z m 28.904,20.64 h -2.88 v -10.656 h -11.712 v 10.656 h -2.88 v -22.848 h 2.88 v 9.664 h 11.712 v -9.664 h 2.88 z m 13.67198,0 h -8.256 v -1.664 l 2.688,-0.608 v -18.272 l -2.688,-0.64 v -1.664 h 8.256 v 1.664 l -2.688,0.64 v 18.272 l 2.688,0.608 z m 23.52802,0 h -3.36 l -12.224,-18.976 h -0.128 q 0.064,1.12 0.16,2.784 0.096,1.664 0.096,3.424 v 12.768 h -2.656 v -22.848 h 3.328 l 12.192,18.912 h 0.128 q -0.032,-0.512 -0.096,-1.536 -0.032,-1.024 -0.096,-2.24 -0.032,-1.216 -0.032,-2.24 v -12.896 h 2.688 z m 21.544,0 -2.752,-7.072 h -9.056 l -2.72,7.072 h -2.912 l 8.928,-22.944 h 2.592 l 8.896,22.944 z m -6.176,-16.544 q -0.096,-0.256 -0.32,-0.928 -0.224,-0.672 -0.448,-1.376 -0.192,-0.736 -0.32,-1.12 -0.224,0.992 -0.512,1.952 -0.288,0.928 -0.48,1.472 l -2.592,6.912 h 7.232 z"
          id="text1"
          style="font-size: 32px; line-height: 0; font-family: &quot;Noto Sans&quot;; letter-spacing: 1px; white-space: pre; fill: rgb(255, 255, 255); stroke: rgb(255, 255, 255); stroke-width: 1.51181px; stroke-opacity: 1; --darkreader-inline-fill: #e8e6e3; --darkreader-inline-stroke: #e8e6e3;"
          transform="translate(22.564921,40.121552)"
          aria-label="BAID-CHINA"
          class="svg-elem-1"
          data-darkreader-inline-fill=""
          data-darkreader-inline-stroke=""
        />
      </g>
    </svg>
  </div>
</div>

<div class="content" class:splash>
  <slot />
</div>

<style>
  @keyframes anim-stroke {
    0% {
      stroke-dashoffset: 1007.6720581054688px;
      stroke-dasharray: 1007.6720581054688px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 1007.6720581054688px;
    }
  }

  @keyframes anim-fill {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(255, 255, 255);
    }
  }

  .svg-elem-1 {
    animation: anim-stroke 3s cubic-bezier(0.47, 0, 0.745, 0.715) 0s both,
      anim-fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.3s both;
  }

  svg {
    width: 40%;
    min-width: 240px;
    max-width: 500px;
  }

  .full {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  .bg {
    transition: all 0.5s ease-in;
  }
  .container {
    z-index: 20;
    transition: opacity 2s;
    background: black;
  }

  .cover {
    backdrop-filter: blur(500px);
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container.loaded {
    opacity: 0;
    pointer-events: none;
  }
</style>
