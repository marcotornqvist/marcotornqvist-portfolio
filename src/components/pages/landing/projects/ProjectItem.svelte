<script>
  import { onMount } from "svelte";
  import truncateText from "../../../../utils/handlers/truncateText";

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

  const string = `My main goal with Collabor8 was to create a project that would cover most of my web development skills in one single project and in the mean time use as many modern technologies as possible. So I came up with Collabor8 which is a social-media plattform created for artists that are looking to collaborate on different versatile projects. I started out with designing the application, in Adobe XD. I then progressed to build the Backend and lastly but not least the Frontend. 
  
The application uses technologies such as Next.js, TypeScript, GraphQL, Node.js, AWS, Prisma & PostgreSQL and covers functionality such as chat-messaging (subscriptions), image upload, authentication, queries & mutations.`;
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
          {truncateText(string, 193)}
        {:else}
          {string}
        {/if}
      </p>
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
        <a href="https://collabor8-frontend.vercel.app/" target="blank">
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
        </a>
      </button>
      <button>
        <a href="https://github.com/marcotornqvist/collabor8" target="blank">
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
        </a>
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

      h3 {
        color: $dark-blue;
        margin-bottom: 1rem;
      }

      .description {
        margin-bottom: 1.5rem;

        p {
          color: $dark-blue;
        }
      }

      .read-more-btn {
        width: 100%;
        height: 3rem;
        padding: 0 1rem;
        margin-bottom: 1.5rem;
        font-weight: 500;
        border: none;
        border-radius: $radius-md;
        color: $white;
        background: $dark-blue;
      }

      span.date {
        color: $grey;
      }

      .buttons {
        padding-top: 2rem;

        button {
          width: 100%;
          height: 3rem;
          margin-bottom: 1rem;
          border: none;
          border-radius: $radius-md;
          background: $orange;

          a {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 1rem;
            height: 100%;
            width: 100%;
          }

          span {
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

            a &:last-child {
              margin: 0;
            }
          }
        }
      }
    }
  }
</style>
