<script>
  import ArticleLayout from "$lib/components/ArticleLayout.svelte";
  import { remote } from "$lib/header";
</script>

<ArticleLayout name="Measurement" bg={remote("/measurements/head.jpg")}>
  <slot />
</ArticleLayout>
