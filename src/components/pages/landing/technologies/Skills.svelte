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
          lately I’ve been learning about Solidity and Blockchain development.
          I’m eager to learn more about Web3 technologies, but also frontend
          frameworks such as Svelte, Remix and backend languages such as Golang
          and Rust.
        </p>
      </div>
      <h3 class="grid-title" in:fly={{ y: 50, duration: 1000, delay: 1000 }}>
        Technologies I’ve worked with:
      </h3>
      <ul in:fly={{ y: 50, duration: 1000, delay: 1500 }}>
        {#each list as tech}
          <li>
            <a href={tech.link} target="_blank">
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
</style>
