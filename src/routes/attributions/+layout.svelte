<script>
  import PlainLayout from "$lib/components/PlainLayout.svelte";
  import { remote } from "$lib/header";
</script>

<PlainLayout name="Attributions" bg={remote("/attributions/head.jpg")}>
  <slot />
</PlainLayout>
