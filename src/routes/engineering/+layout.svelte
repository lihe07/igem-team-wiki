<script>
  import ArticleLayout from "$lib/components/ArticleLayout.svelte";
  import { remote } from "$lib/header";
</script>

<ArticleLayout name="Engineering" bg={remote("/engineering/head.jpg")}>
  <slot />
</ArticleLayout>
