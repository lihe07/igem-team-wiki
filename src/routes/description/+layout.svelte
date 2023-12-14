<script>
  import PlainLayout from "$lib/components/PlainLayout.svelte";
  import { remote } from "$lib/header";
</script>

<PlainLayout name="Project Description" bg={remote("/description/head.jpg")}>
  <slot />
</PlainLayout>
