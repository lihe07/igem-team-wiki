<script>
  export let href = "/";
</script>

<a {href}>
  <svg width="2em" height="2em" viewBox="0 0 24 24"
    ><path
      fill="currentColor"
      d="M12.001 2c5.523 0 10 4.477 10 10s-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10Zm.78 5.469l-.084-.073a.75.75 0 0 0-.882-.007l-.094.08l-.073.084a.75.75 0 0 0-.007.883l.08.094l2.72 2.72H7.75l-.103.006a.75.75 0 0 0-.64.642L7 11.999l.007.102a.75.75 0 0 0 .642.641l.101.007h6.69l-2.72 2.72l-.073.085a.75.75 0 0 0 1.05 1.05l.084-.073l4.001-4l.073-.085a.75.75 0 0 0 .007-.882l-.08-.094l-4-4.001l-.085-.073l.084.073Z"
    /></svg
  >
  <slot />
</a>

<style>
  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #0969da;
    text-decoration: none;
    font-family: sans-serif;
    opacity: 0.8;
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    opacity: 1;
  }

  a:active {
    opacity: 0.5;
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    a {
      font-size: 1.5rem;
    }
  }
</style>
