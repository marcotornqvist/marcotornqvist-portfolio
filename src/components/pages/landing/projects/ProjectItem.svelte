<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";

  $: innerWidth = 0;
  let mobile = true;
  let visible = false;
  let loaded = false;
  let thisImage;

  onMount(() => {
    thisImage.onload = () => {
      setTimeout(() => {
        loaded = true;
      }, 500);
    };
  });

  $: mobile = innerWidth > 768 ? false : true;
</script>

<svelte:window bind:innerWidth />

<div class="project-item" class:visible={loaded}>
  <div class="image-container">
    <img
      src="images/collabor8-landing.png"
      alt="collabor8 project landing page"
      bind:this={thisImage}
    />
  </div>
  <div class="content">
    <h4>Collabor8</h4>
    <div class="description" in:fade={{ duration: 1000 }}>
      <p class="section-1">
        My main goal with Collabor8 was to create a project that would cover
        most of my web development skills in one single project and in the mean
        time use as many modern technologies as possible. So I came up with
        Collabor8 which is a social-media plattform created for artists that are
        looking to collaborate on different versatile projects. I started out
        with designing the application, in Adobe XD. I then progressed to build
        the Backend and lastly but not least the Frontend. <br /><br />The
        application uses technologies such as Next.js, TypeScript, GraphQL,
        Node.js, AWS, Prisma & PostgreSQL and covers functionality such as
        chat-messaging (subscriptions), image upload, authentication, queries &
        mutations.
      </p>
      <!-- {#if visible || !mobile}
        <p class="section-2">
          The application uses technologies such as Next.js, TypeScript,
          GraphQL, Node.js, AWS, Prisma & PostgreSQL and covers functionality
          such as chat-messaging (subscriptions), image upload, authentication,
          queries & mutations.
        </p>
      {/if} -->
    </div>
    {#if !visible && mobile}
      <button
        class="read-more-btn"
        class:hidden={visible}
        on:click={() => (visible = true)}>Read More</button
      >
    {/if}
    <span class="date">Mar 14, 2022</span>
    <div class="buttons">
      <button>
        <span>Demo</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
      <button>
        <span>Github Repository</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
    </div>
  </div>
</div>

<style lang="scss">
  @import "../../../../styles/variables/breakpoints";
  @import "../../../../styles/variables/border-radius";
  @import "../../../../styles/variables/colors";
  @import "../../../../styles/variables/zindex";

  .project-item {
    display: flex;
    flex-direction: column;
    opacity: 0;
    transition: opacity 1s;
    border-top-left-radius: $radius-md;
    border-top-right-radius: $radius-md;

    &.visible {
      opacity: 1;
    }

    .image-container {
      width: 100%;
      z-index: $z-index1;

      img {
        height: 300px;
        width: 100%;
        object-fit: cover;
        object-position: center 10%;
        border-top-left-radius: $radius-md;
        border-top-right-radius: $radius-md;
      }
    }

    .content {
      flex: 1;
      padding: 2rem 1.5rem;
      margin-top: -4px;
      border-bottom-left-radius: $radius-md;
      border-bottom-right-radius: $radius-md;
      background: $white;

      h4 {
        color: $dark-blue;
        margin-bottom: 1rem;
      }

      .description {
        margin-bottom: 2rem;

        p {
          font-size: 16px;
          line-height: 2rem;
          color: $dark-blue;
        }
      }

      .read-more-btn {
        width: 100%;
        height: 3rem;
        padding: 0 1rem;
        margin-bottom: 2rem;
        font-size: px;
        font-weight: 500;
        border: none;
        border-radius: $radius-md;
        color: $white;
        background: $dark-blue;
      }

      span.date {
        color: $grey;
        font-size: px;
      }

      .buttons {
        padding-top: 2rem;

        button {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 3rem;
          padding: 0 1rem;
          margin-bottom: 1rem;
          border: none;
          border-radius: $radius-md;
          background: $orange;

          span {
            font-size: px;
            font-weight: 500;
            color: $white;
          }

          svg {
            width: 1.5rem;
            height: 1.5rem;
          }

          &:last-child {
            margin: 0;
          }
        }
      }
    }
  }

  @media only screen and (min-width: $breakpoint-lg) {
    .project-item {
      flex-direction: row;

      .image-container {
        flex: 1;
        height: 700px;

        img {
          border-radius: 0;
        }
      }

      .content {
        flex: 1;
        margin: 0;
        height: 700px;
        padding-top: 6rem;

        .buttons {
          display: flex;
          flex-direction: row;

          button {
            margin-right: 1.5rem;
            width: 250px;

            &:last-child {
              margin: 0;
            }
          }
        }
      }
    }
  }
</style>
