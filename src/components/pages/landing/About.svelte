<script>
  import { fly } from "svelte/transition";
  import inViewport from "../../../utils/handlers/inViewport";
  let visible = false;
</script>

<div class="about" use:inViewport on:enter={() => (visible = true)}>
  <div class="container">
    {#if visible}
      <div
        class="image-container"
        in:fly={{ y: 50, duration: 1000, delay: 500 }}
      >
        <img src="images/profile-image.jpeg" alt="profile" />
      </div>
      <h2 in:fly={{ y: 50, duration: 1000, delay: 1000 }}>
        A little bit about me.
      </h2>
      <p in:fly={{ y: 50, duration: 1000, delay: 1500 }}>
        I’m currently a last year Information Technology student at Arcada
        University of Applied Sciences in Helsinki. I’ve worked with web
        applications since early 2018 through multiple hobby and school
        projects. I speak fluent Finnish, Swedish and English. My passion and
        goal is to create seamless and elegant web applications that meets the
        clients expectations as good possible.
      </p>
    {/if}
  </div>
</div>

<style lang="scss">
  @import "../../../styles/variables/zindex";
  @import "../../../styles/variables/border-radius";
  @import "../../../styles/variables/breakpoints";
  @import "../../../styles/variables/shadows";

  .about {
    display: block;
    padding-bottom: 3rem;

    .container {
      min-height: 300px;
    }

    .image-container {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-bottom: 1.5rem;
      z-index: $z-index1;

      img {
        height: 150px;
        width: 150px;
        border-radius: $radius-round;
        box-shadow: $box-shadow1;
      }
    }

    h2 {
      margin-bottom: 0.5rem;
      text-align: center;
    }

    p {
      text-align: center;
      max-width: 30;
      margin: 0 auto;
    }
  }

  @media only screen and (min-width: $breakpoint-lg) {
    .about p {
      font-size: 1.25rem;
      line-height: 2.25rem;
      max-width: 65ch;
    }
  }
</style>
