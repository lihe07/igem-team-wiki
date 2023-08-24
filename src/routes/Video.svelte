<script>
  import { tweened } from "svelte/motion";
  export let percent = 0;
</script>

<div style:opacity={percent + 1} style="">
  {percent}
</div>
