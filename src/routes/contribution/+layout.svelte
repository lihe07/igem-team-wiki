<script>
  import PlainLayout from "$lib/components/PlainLayout.svelte";
  import { remote } from "$lib/header";
</script>

<PlainLayout name="Contribution" bg={remote("/contributions/head.jpg")}>
  <slot />
</PlainLayout>
