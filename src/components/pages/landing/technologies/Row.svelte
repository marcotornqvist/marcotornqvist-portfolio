<script>
  import inViewport from "../../../../utils/handlers/inViewport";
  export let technologies;
</script>

<ul
  class="row"
  use:inViewport
  on:enter={() => console.log("enter")}
  on:exit={() => console.log("exit")}
>
  {#each technologies as tech}
    <li>
      <h1>{tech.title}</h1>
    </li>
  {/each}
</ul>

<!-- https://svelte.dev/repl/1c57f2ada7f54dee96b690d9924022c5?version=3.46.4 -->

<!-- {#if show}
<div transition:fly={{x: -100, opacity: 1}} style="--translate: {translateAmount}px">
	This is a test
</div>
{/if} -->
<style lang="scss">
  ul {
    display: flex;
    align-items: center;
    overflow: hidden;

    li {
      margin-right: 1.5rem;

      h1 {
        white-space: nowrap;
      }

      &:first-child {
        padding-left: 1.5rem;
      }

      &:last-child {
        margin: 0;
        padding-right: 1.5rem;
      }
    }
  }
</style>
