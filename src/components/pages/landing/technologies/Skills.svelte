<script>
  import { fly } from "svelte/transition";
  import inViewport from "../../../../utils/handlers/inViewport";
  import { technologies } from "../../../../utils/technologies";

  $: innerWidth = 0;
  let mobile = true;
  let visible = false;
  let skillsVisible = false;

  $: mobile = innerWidth > 768 ? false : true;

  $: list = mobile && !visible ? technologies.slice(0, 5) : technologies;
</script>

<svelte:window bind:innerWidth />

<div
  class="skills"
  use:inViewport={{ bottom: 100 }}
  on:enter={() => (skillsVisible = true)}
>
  <div class="container">
    {#if skillsVisible}
      <div class="title">
        <h2 in:fly={{ y: 50, duration: 1000, delay: 0 }}>
          Skills & Technologies
        </h2>
      </div>
      <div class="about" in:fly={{ y: 50, duration: 1000, delay: 500 }}>
        <h3>
          I’m constantly looking to grow as a developer and excited to work with
          new technologies.
        </h3>
        <p>
          Most recently, I have been focusing on learning more about AWS,
          NestJS, Docker, and frontend frameworks like Svelte (this site is
          built with Svelte). Additionally, I am curious to learn more about
          Web3 and delving deeper into design tools such as Figma.
        </p>
      </div>
      <h3 class="grid-title" in:fly={{ y: 50, duration: 1000, delay: 1000 }}>
        Technologies I’ve worked with:
      </h3>
      <ul in:fly={{ y: 50, duration: 1000, delay: 1500 }}>
        {#each list as tech}
          <li>
            <a href={tech.link} target="blank">
              <span>{tech.title}</span>
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
          </li>
        {/each}
      </ul>
      {#if !visible && mobile}
        <button
          class="show-more-btn"
          class:hidden={visible}
          in:fly={{ y: 50, duration: 1000, delay: 1500 }}
          on:click={() => (visible = true)}>Show All</button
        >
      {/if}
    {/if}
  </div>
</div>

<style lang="scss">
  @import "../../../../styles/variables/colors";
  @import "../../../../styles/variables/border-radius";
  @import "../../../../styles/variables/breakpoints";
  @import "../../../../styles/variables/fonts";

  .skills {
    padding-bottom: 9rem;

    .container {
      min-height: 300px;
    }

    h2 {
      margin-bottom: 1rem;
    }

    .about {
      margin-bottom: 3rem;
      max-width: 65ch;

      h3 {
        margin-bottom: 1rem;
      }
    }

    .grid-title {
      margin-bottom: 1.5rem;
    }

    ul {
      li {
        margin-bottom: 2rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid $white;

        a {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        span {
          font-family: $font-body;
          font-size: 1.25rem;
        }

        svg {
          width: 1.5rem;
          height: 1.5rem;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    .show-more-btn {
      width: 100%;
      height: 3rem;
      font-weight: 600;
      margin-top: 3rem;
      border: none;
      border-radius: $radius-md;
      background: $white;
      color: $dark-blue;
    }
  }

  @media only screen and (min-width: $breakpoint-md) {
    .skills {
      padding-bottom: 12rem;

      ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;

        li:last-child {
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media only screen and (min-width: $breakpoint-lg) {
    .skills {
      .about p {
        font-size: 1.25rem;
        line-height: 2.25rem;
      }

      .container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;

        h2 {
          grid-column: 1 / 2;
          grid-row: 1;
          margin: 0;
        }

        .about {
          grid-column: 2 / 3;
          grid-row: 1 / 3;
          margin: 0;

          h3 {
            margin-bottom: 3rem;
          }
        }

        .grid-title {
          grid-column: 1 / 2;
          grid-row: 2;
          margin: 0;
          align-self: flex-end;
        }

        ul {
          grid-template-columns: repeat(3, 1fr);
          grid-column: 1 / 3;
          grid-row: 3;
          margin-top: 6rem;
        }
      }
    }
  }

  @media only screen and (min-width: $breakpoint-xl) {
    .skills {
      .container {
        ul {
          grid-template-columns: repeat(4, 1fr);
        }
      }
    }
  }
</style>
