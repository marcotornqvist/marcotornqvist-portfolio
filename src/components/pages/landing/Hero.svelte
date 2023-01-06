<script>
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";

  let ready = false;
  onMount(() => (ready = true));
</script>

<div class="hero">
  <div class="container">
    {#if ready}
      <div class="wrapper">
        <h2 in:fly={{ y: 100, duration: 1000 }}>
          I'm a Software Developer based in Helsinki, Finland.
        </h2>
        <p in:fly={{ y: 100, duration: 1000 }}>
          My passion and goal is to create seamless and elegant applications
          that help my clients succeed and reach their goals.
        </p>
      </div>
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
    min-height: calc(100vh - 5rem);
    // min-height: 70vh;

    .container {
      padding-bottom: 3rem;
    }

    .wrapper {
      padding-bottom: 5rem;
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
        max-width: 45ch;
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
