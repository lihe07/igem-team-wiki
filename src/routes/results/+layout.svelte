<script>
  import PlainLayout from "$lib/components/PlainLayout.svelte";
  import { remote } from "$lib/header";
</script>

<PlainLayout name="Results" bg={remote("/results/head.jpg")}>
  <slot />
</PlainLayout>
