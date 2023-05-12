<script lang="ts">
  import "../app.css";
  import Navbar from "$lib/core/navbar.svelte";
  import { page } from "$app/stores";

  import { components } from "$lib/store";
  import { getCustomComponentsByEnv } from "$lib/custom";
  // NOTE: old way of loading components
  // getCustomComponents($page.data.environment.components).then((customs) => {
  //   components.set(customs);
  // });

  // NOTE: use this if eagerly loading components
  // components.set(getCustomComponentsByEnv($page.data.environment.name));

  // NOTE: use this if lazily loading components
  getCustomComponentsByEnv($page.data.environment.name).then((customs) => {
    components.set(customs);
  });
</script>

<Navbar />
<main class="flex flex-col gap-4 p-4">
  <slot />
  <pre class="bg-gray-700 text-gray-100 p-2 text-xs">$page: {JSON.stringify(
      $page,
      null,
      2
    )}</pre>
</main>

{#if $page.data.environment.name === "repguide"}
  <style lang="postcss">
    @import "../repguide.css";
  </style>
{/if}

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.50);
  }
</style>
