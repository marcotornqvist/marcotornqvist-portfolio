<script>
  let currentDate = new Date();
</script>

<footer>
  <div class="container">
    <span>Marco Törnqvist © {currentDate.getFullYear()}</span>
  </div>
</footer>

<style lang="scss">
  @import "../../styles/variables/colors";

  footer {
    min-height: 5rem;

    .container {
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        color: $grey;
        font-size: 14px;
      }
    }
  }
</style>
