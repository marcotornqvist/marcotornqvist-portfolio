<script>
  import Row from "./Row.svelte";
  import { technologies } from "../../../../utils/technologies";
  const frontend = technologies.filter((item) => item.row === "frontend");
  const backend = technologies.filter((item) => item.row === "backend");
  const tools = technologies.filter((item) => item.row === "tools");
</script>

<div class="scroller">
  <Row technologies={frontend} />
  <Row technologies={backend} />
  <Row technologies={tools} />
</div>

<style lang="scss">
  @import "../../../../styles/variables/breakpoints";

  .scroller {
    padding-bottom: 9rem;
  }

  @media only screen and (min-width: $breakpoint-md) {
    .scroller {
      padding-bottom: 12rem;
    }
  }
</style>
