<script>
  import PlainLayout from "$lib/components/PlainLayout.svelte";
  import { remote } from "$lib/header";
</script>

<PlainLayout name="Experiments" bg={remote("/experiments/head.jpg")}>
  <slot />
</PlainLayout>
