<script>
</script>

<nav>
  <div class="container">
    <h4>Marco Törnqvist</h4>
    <ul>
      <li>
        <a href="https://github.com/marcotornqvist" target="_blank">Github</a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/marco-t%C3%B6rnqvist-2b6211129/"
          target="_blank">LinkedIn</a
        >
      </li>
      <li class="hide-li">Email</li>
    </ul>
  </div>
</nav>

<style lang="scss">
  @import "../../styles/variables/breakpoints";
  @import "../../styles/variables/border-radius";
  @import "../../styles/variables/colors";

  nav {
    width: 100%;
    height: 5rem;
    background: $dark-blue;

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    h4 {
      font-size: 16px;
    }

    ul {
      display: flex;

      li {
        margin-left: 1rem;
        font-size: 16px;
        font-weight: 500;

        &:first-child {
          margin: 0;
        }

        &.hide-li {
          display: none;
        }
      }
    }

    @media only screen and (min-width: $breakpoint-sm) {
      nav {
        ul {
          li {
            &.hide-li {
              display: inline;
            }
          }
        }
      }
    }
  }
</style>
