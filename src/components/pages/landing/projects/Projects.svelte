<script>
  import ProjectItem from "./ProjectItem.svelte";

  let visible = false;
  let y;

  $: if (y > 80) {
    visible = true;
  }
</script>

<svelte:window bind:scrollY={y} />

<div class="projects">
  <div class="container">
    <h4 class:visible>Projects</h4>
    <ProjectItem />
  </div>
</div>

<style lang="scss">
  @import "../../../../styles/variables/breakpoints";
  @import "../../../../styles/variables/border-radius";
  @import "../../../../styles/variables/colors";

  .projects {
    padding-bottom: 9rem;

    h4 {
      opacity: 0;
      transition: opacity 1s;
      margin-bottom: 0.5rem;

      &.visible {
        opacity: 1;
      }
    }
  }
</style>
