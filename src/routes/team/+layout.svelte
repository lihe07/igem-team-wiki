<script>
  import PlainWaveLayout from "$lib/components/PlainWaveLayout.svelte";
  import { remote } from "$lib/header";
</script>

<PlainWaveLayout bg={remote("/avatars/team.jpg")}>
  <slot />
</PlainWaveLayout>
