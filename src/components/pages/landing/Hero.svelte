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
        Currently open for hire, preferably at a company based in Helsinki or
        Remote/Hybrid.
      </p>
    {/if}
  </div>
</div>

<style lang="scss">
  @import "../../../styles/variables/breakpoints";
  @import "../../../styles/variables/border-radius";
  @import "../../../styles/variables/colors";

  .hero {
    min-height: 70vh;
    padding-top: 100px;
    padding-bottom: 100px;

    h2 {
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1.25rem;
      line-height: 2.25rem;
    }
  }

  @media only screen and (min-width: $breakpoint-sm) {
    .hero {
      h2 {
        margin-bottom: 1rem;
      }
    }
  }
</style>
