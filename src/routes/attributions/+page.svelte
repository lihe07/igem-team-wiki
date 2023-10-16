<script>
  import Icon from "@iconify/svelte";

  const dots = ["#34d399", "#fbbf24", "#f87171"];
  const href = "https://attributions.igem.org?team=BAID-China&year=2023";
</script>

<h2>Attribution Form</h2>

<p>
  In accordance with the
  <a href="https://competition.igem.org/deliverables/project-attribution">
    new requirements
  </a>
  for the project attributions form, we provide the standard attributions form below:
</p>

<div class="container">
  <div class="header">
    <div class="icons">
      <Icon icon="fluent:arrow-left-12-regular" />
      <Icon icon="fluent:arrow-right-12-regular" />
      <Icon icon="fluent:arrow-sync-12-filled" />
    </div>
    <a class="bar" {href} target="_blank">{href}</a>
    <div class="dots">
      {#each dots as dot}
        <div style={`background: ${dot};`} />
      {/each}
    </div>
  </div>
  <iframe src={href} title="Attribution Form" />
</div>

<style>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    background: rgba(0, 0, 0, 0.3);
  }

  .dots,
  .icons {
    display: flex;
    gap: 0.5rem;
  }

  .icons {
    font-size: 1.4rem;
  }

  .dots div {
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
  }

  .bar {
    background: #cecece;
    padding: 0.5rem 2rem;
    border-radius: 1rem;
    color: black;
    text-decoration: none !important;
    opacity: 0.8;
  }

  .container {
    background: white;
    border-radius: 1rem;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
    overflow: hidden;
    margin-top: 2rem;
  }

  iframe {
    width: 100%;
    outline: none;
    border: none;
    height: 60vh;
  }

  @media (max-width: 768px) {
    .header {
      display: none;
    }

    iframe {
      height: 100vh;
    }
  }
</style>
