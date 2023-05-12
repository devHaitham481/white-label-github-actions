<script lang="ts">
  import { components } from "$lib/store";
</script>

<h1 class="text-3xl font-bold text-primary-500">Hello world!</h1>
{#if $components.Superdupersecret}
  <svelte:component this={$components.Superdupersecret} />
{/if}
<!-- <svelte:component this={$components.Superdupersecret} />
<svelte:component this={$components.Testing} /> -->
