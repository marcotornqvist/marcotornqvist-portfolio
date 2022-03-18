<script>
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";

  let ready = false;
  onMount(() => (ready = true));
</script>

<div class="hero">
  <div class="container">
    {#if ready}
      <h2 in:fly={{ y: 100, duration: 1000 }}>
        I'm Full Stack Developer based in Helsinki, Finland.
      </h2>
      <p in:fly={{ y: 100, duration: 1000 }}>
        I’m currently open for hire, preferably at a company based in Helsinki
        or Remote/Hybrid.
      </p>
    {/if}
  </div>
</div>

<style lang="scss">
  .hero {
    min-height: 70vh;
    padding-top: 100px;
    padding-bottom: 100px;

    h2 {
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1.125rem;
      line-height: 2rem;
      font-weight: 400;
    }
  }
</style>
