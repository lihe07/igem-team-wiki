<script>
  import "katex/dist/katex.min.css";
  import katex from "katex";
  export let expression = "";
  export let displayMode = false;
  let html = "";
  $: {
    try {
      html = katex.renderToString(expression, { displayMode });
    } catch (e) {
      html = `<span class="katex-error">${e.message}</span>`;
    }
  }
</script>

{@html html}
