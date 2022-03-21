<script>
  import { fly } from "svelte/transition";
  export let copied;
</script>

{#if copied}
  <div
    class="notification"
    in:fly={{ y: 50, duration: 1000 }}
    out:fly={{ y: 50, duration: 1000 }}
  >
    <span>Copied to clipboard!</span>
  </div>
{/if}

<style lang="scss">
  @import "../../styles/variables/border-radius";
  @import "../../styles/variables/colors";
  @import "../../styles/variables/shadows";
  @import "../../styles/variables/breakpoints";

  .notification {
    display: none;
  }

  @media only screen and (min-width: $breakpoint-sm) {
    .notification {
      display: initial;
      position: absolute;
      right: 1.5rem;
      top: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: $radius-md;
      height: 3.5rem;
      padding: 1rem 1.5rem;
      background: $orange;
      box-shadow: $box-shadow1;

      span {
        font-size: 1rem;
        font-weight: 500;
      }
    }
  }

  @media only screen and (min-width: $breakpoint-md) {
    .notification {
      right: 2rem;
    }
  }
</style>
