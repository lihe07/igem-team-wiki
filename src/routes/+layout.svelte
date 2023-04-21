<script>
  import Header from "$lib/components/Header.svelte";
  import PageScroll from "$lib/components/PageScroll.svelte";
  import Splash from "$lib/components/Splash.svelte";
</script>

<Splash>
  <Header />
  <PageScroll>
    <slot />
  </PageScroll>
</Splash>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }
</style>
