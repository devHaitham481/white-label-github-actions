<script>
  // import { page } from "$app/stores";
  import { components } from "$lib/store";
</script>

{#if $components.Test}
  <svelte:component this={$components.Test} />
{/if}
