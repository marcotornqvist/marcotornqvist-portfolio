<script>
  import CopyClipBoard from "../../../modules/CopyClipBoard.svelte";

  let email = "marcotornqvist@gmail.com";
  let copied = false;

  const copy = () => {
    copied = true;
    const app = new CopyClipBoard({
      target: document.getElementById("clipboard"),
      props: { email },
    });
    app.$destroy();
  };
</script>

<div class="contact">
  <div class="container">
    <h4 class="title">Contact information</h4>
    <button on:click={copy} class:copied>
      <div class="email">
        <h4>{email}</h4>
      </div>
      {#if copied}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
          <path
            d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"
          />
        </svg>
      {:else}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke={"white"}
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      {/if}
    </button>
  </div>
</div>

<div id="clipboard" />

<style lang="scss">
  @import "../../../../styles/variables/breakpoints";
  @import "../../../../styles/variables/border-radius";
  @import "../../../../styles/variables/colors";

  .contact {
    display: flex;
    justify-content: center;
    padding-bottom: 9rem;

    h4.title {
      text-align: center;
      margin-bottom: 0.5rem;
    }

    button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 6rem;
      padding: 0 1.5rem;
      border: none;
      border-radius: $radius-lg;
      background: $blue;
      cursor: pointer;
      outline: none;

      .email {
        flex: 1;

        h4 {
          font-size: 16px;
        }
      }

      svg {
        min-width: 1.5rem;
        min-height: 1.5rem;
        max-width: 1.5rem;
        max-height: 1.5rem;
      }

      &.copied {
        background: $orange;
      }
    }
  }

  @media only screen and (min-width: $breakpoint-sm) {
    .contact {
      button {
        .email {
          padding-left: 2rem;

          h4 {
            font-size: 20px;
          }
        }

        svg {
          min-width: 2rem;
          min-height: 2rem;
        }
      }
    }
  }
</style>
