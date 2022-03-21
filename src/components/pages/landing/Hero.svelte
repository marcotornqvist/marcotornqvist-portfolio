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
        I'm a Full Stack Developer based in Helsinki, Finland.
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
    display: flex;
    align-items: center;
    min-height: 70vh;

    .container {
      padding-bottom: 3rem;
    }

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
      padding: 6rem 0 3rem;

      h2 {
        max-width: 25ch;
      }

      p {
        font-size: 1.5rem;
        line-height: 2.75rem;
        max-width: 33ch;
      }
    }
  }

  @media only screen and (min-width: $breakpoint-xl) {
    .hero {
      padding: 9rem 0 3rem;

      h2 {
        margin-bottom: 1.5rem;
      }

      p {
        font-size: 1.75rem;
        line-height: 3rem;
      }
    }
  }
</style>
