<script>
  import Header from "$lib/components/Header.svelte";
  import PageScroll from "$lib/components/PageScroll.svelte";
  import Splash from "$lib/components/Splash.svelte";
  import PageTransition from "$lib/components/PageTransition.svelte";
  import { page } from "$app/stores";

  // import "@fontsource/roboto";
  import "@fontsource/mate-sc";
  import Footer from "$lib/components/Footer.svelte";
</script>

<Splash>
  <PageScroll>
    <PageTransition>
      <Header />
      <slot />
      {#if $page.route.id !== "/"}
        <Footer />
      {/if}
    </PageTransition>
  </PageScroll>
</Splash>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }
</style>
