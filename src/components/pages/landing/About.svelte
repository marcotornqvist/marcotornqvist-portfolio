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
        I’m currently studying information technology on my last year at Arcada
        University of Applied Sciences where I will be graduating in May. I’ve
        worked with web applications since early 2018 through multiple hobby and
        school projects. I speak fluent Finnish, Swedish and English. I’m
        currently open for hire, preferably at a company based in Helsinki or
        Remote/Hybrid.
      </p>
    {/if}
  </div>
</div>

<style lang="scss">
  @import "../../../styles/variables/zindex";
  @import "../../../styles/variables/border-radius";
  @import "../../../styles/variables/shadows";

  .about {
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
    }
  }
</style>
