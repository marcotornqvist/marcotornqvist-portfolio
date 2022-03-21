<script>
  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";
  import CopyClipBoard from "../modules/CopyClipBoard.svelte";
  import Notification from "./Notification.svelte";

  let email = "marcotornqvist@gmail.com";
  let copied = false;

  const copy = () => {
    copied = true;
    setTimeout(() => {
      copied = false;
    }, 5000);

    const app = new CopyClipBoard({
      target: document.getElementById("clipboard"),
      props: { email },
    });
    app.$destroy();
  };

  let ready = false;
  onMount(() => (ready = true));
</script>

<nav>
  <div class="container">
    {#if ready}
      <h4 in:fade={{ duration: 1000, delay: 0 }}>Marco Törnqvist</h4>
      <ul in:fade={{ duration: 1000, delay: 0 }}>
        <li>
          <a href="https://github.com/marcotornqvist" target="blank">Github</a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/marco-t%C3%B6rnqvist-2b6211129/"
            target="blank">LinkedIn</a
          >
        </li>
        <li class="email" on:click={copy} class:copied>Email</li>
      </ul>
      <Notification {copied} />
    {/if}
  </div>
</nav>

<style lang="scss">
  @import "../../styles/variables/breakpoints";
  @import "../../styles/variables/border-radius";
  @import "../../styles/variables/colors";

  nav {
    width: 100%;
    height: 5rem;
    background: $dark-blue;

    .container {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    ul {
      display: flex;

      li {
        margin-left: 1rem;
        font-size: 1rem;
        font-weight: 500;

        &:first-child {
          margin: 0;
        }

        &.email {
          display: none;
        }
      }

      li.copied {
        color: $orange;
      }
    }
  }

  @media only screen and (min-width: $breakpoint-sm) {
    nav ul {
      li.email {
        display: initial;
      }

      li,
      a {
        font-size: 1.125rem;
      }
    }
  }

  @media only screen and (min-width: $breakpoint-md) {
    nav ul li {
      margin-left: 1.5rem;
      transition: color 0.1s ease-in-out;

      &:hover {
        color: $orange;
      }
    }
  }

  @media only screen and (min-width: $breakpoint-xl) {
    nav ul {
      li,
      a {
        font-size: 1.25rem;
      }
    }
  }
</style>
