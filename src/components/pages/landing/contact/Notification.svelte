<script>
  import { fly } from "svelte/transition";
  export let copied;
</script>

<div class="notification-container">
  {#if copied}
    <div
      class="notification"
      in:fly={{ y: 50, duration: 1000 }}
      out:fly={{ y: 50, duration: 1000 }}
    >
      <span>Copied to clipboard!</span>
    </div>
  {/if}
</div>

<style lang="scss">
  @import "../../../../styles/variables/border-radius";
  @import "../../../../styles/variables/colors";
  @import "../../../../styles/variables/shadows";

  .notification-container {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 6rem;

    .notification {
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
</style>
