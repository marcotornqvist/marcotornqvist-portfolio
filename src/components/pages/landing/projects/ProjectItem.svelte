<script>
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

  $: mobile = innerWidth > 920 ? false : true;
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
    <h3>Collabor8</h3>
    <div class="description">
      <p>
        {#if !visible && mobile}
          Collabor8 is a social-media like platform created primarily for
          creators/artists that are looking to collaborate on different
          versatile projects. The main goal with Collabor8 was to create a
          project that would cover most of my web development skills in one
          single project, and in the mean time use as many modern technologies
          as possible...
        {:else}
          Collabor8 is a social-media like platform created primarily for
          creators/artists that are looking to collaborate on different
          versatile projects. The main goal with Collabor8 was to create a
          project that would cover most of my web development skills in one
          single project, and in the mean time use as many modern technologies
          as possible. I started out with designing the application, in Adobe
          XD. I then progressed to build the Backend and lastly but not least
          the Frontend.
          <br /><br />
          The application uses technologies such as Next.js, TypeScript, Node.js,
          GraphQL, Apollo, AWS, Prisma & PostgreSQL and covers functionality such
          as chat-messaging (subscriptions), image upload, authentication, queries
          & mutations.
        {/if}
      </p>
      {#if !visible && mobile}
        <span
          class="read-more"
          class:hidden={visible}
          on:click={() => (visible = true)}
        >
          Read More
        </span>
      {/if}
    </div>
    <span class="date">Mar 14, 2022</span>
    <div class="buttons">
      <button>
        <a href="https://collabor8-sepia.vercel.app" target="blank">
          <span>Demo</span>
        </a>
      </button>
      <button>
        <a href="https://github.com/marcotornqvist/collabor8" target="blank">
          <span>Github Repository</span>
        </a>
      </button>
    </div>
  </div>
</div>

<style lang="scss">
  @import "../../../../styles/variables/breakpoints";
  @import "../../../../styles/variables/border-radius";
  @import "../../../../styles/variables/colors";
  @import "../../../../styles/variables/fonts";
  @import "../../../../styles/variables/zindex";

  .project-item {
    display: flex;
    flex-direction: column;
    opacity: 0;
    transition: opacity 1s;

    &.visible {
      opacity: 1;
    }

    .image-container {
      display: flex;
      align-items: flex-end;
      padding-top: 3rem;
      width: 100%;
      background: $orange;
      z-index: $z-index1;
      border-top-left-radius: $radius-md;
      border-top-right-radius: $radius-md;

      img {
        width: 100%;
        height: 300px;
        object-fit: contain;
        object-position: center;
        border: none;
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 2rem 1.5rem;
      border-bottom-left-radius: $radius-md;
      border-bottom-right-radius: $radius-md;
      background: $white;

      h3 {
        color: $dark-blue;
        margin-bottom: 1rem;
      }

      .description {
        margin-bottom: 1.5rem;

        p {
          color: $dark-blue;
          margin-bottom: 1rem;
        }

        .read-more {
          font-family: $font-body;
          color: $orange;
          cursor: pointer;
        }
      }

      span.date {
        color: $grey;
      }

      .buttons {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding-top: 2rem;

        button {
          min-width: 100%;
          height: 3rem;
          margin-bottom: 1rem;
          border: 1px solid #e7e7e7;
          border-radius: 25px;
          background: #f3f3f3;

          a {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 100%;
            min-height: 100%;
            padding: 0 1rem;
          }

          &:last-child {
            margin-bottom: 0;
          }

          span {
            font-size: 14px;
            color: $dark-blue;
          }
        }
      }
    }
  }

  @media only screen and (min-width: $breakpoint-sm) {
    .project-item {
      .content .buttons {
        display: flex;
        flex-direction: row;
        flex: 1;

        button {
          min-width: initial;
          flex: 1;
          margin: 0 1rem 0 0;
          max-width: 250px;

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
        border-radius: 0;
        border-top-left-radius: $radius-md;
        border-bottom-left-radius: $radius-md;
      }

      .content {
        flex: 1;
        height: 700px;
        margin: 0;
        padding-top: 3rem;
        border-radius: 0;
        border-top-right-radius: $radius-md;
        border-bottom-right-radius: $radius-md;

        .buttons {
          display: flex;
          flex-direction: row;

          button {
            margin-right: 1.5rem;
            width: 250px;

            a &:last-child {
              margin: 0;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1050px) {
    .project-item {
      .image-container {
        img {
          height: 70%;
        }
      }
    }
  }

  @media only screen and (min-width: $breakpoint-xl) {
    .project-item {
      .image-container {
        padding-top: 6rem;

        img {
          height: 100%;
        }
      }

      .content {
        padding-top: 5.5rem;
      }
    }
  }
</style>
