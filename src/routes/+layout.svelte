<script>
  import Header from "$lib/components/Header.svelte";
  import PageScroll from "$lib/components/PageScroll.svelte";
  import Splash from "$lib/components/Splash.svelte";
  import PageTransition from "$lib/components/PageTransition.svelte";
</script>

<Splash>
  <Header />
  <PageScroll>
    <PageTransition>
      <slot />
    </PageTransition>
  </PageScroll>
</Splash>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }
</style>
