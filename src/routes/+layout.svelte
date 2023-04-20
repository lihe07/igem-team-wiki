<script>
  import Header from "$lib/components/Header.svelte";
  import PageScroll from "$lib/components/PageScroll.svelte";
</script>

<Header />
<PageScroll>
  <slot />
</PageScroll>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }
</style>
