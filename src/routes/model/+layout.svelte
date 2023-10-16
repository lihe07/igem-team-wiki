<script>
  import ArticleLayout from "$lib/components/ArticleLayout.svelte";
  import { remote } from "$lib/header";
</script>

<ArticleLayout name="Model" bg={remote("/modelling/header.jpg")}
  ><slot /></ArticleLayout
>
