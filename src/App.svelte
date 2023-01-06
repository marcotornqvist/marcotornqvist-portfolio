<script>
  import Navbar from "./components/layout/Navbar.svelte";
  import Hero from "./components/pages/landing/Hero.svelte";
  import Projects from "./components/pages/landing/projects/Projects.svelte";
  import Scroller from "./components/pages/landing/technologies/Scroller.svelte";
  import Skills from "./components/pages/landing/technologies/Skills.svelte";
  import About from "./components/pages/landing/About.svelte";
  import Contact from "./components/pages/landing/contact/Contact.svelte";
  import Footer from "./components/layout/Footer.svelte";
</script>

<Navbar />
<main>
  <div class="wrapper">
    <Hero />
    <!-- <Projects /> -->
  </div>
  <!-- <Scroller /> -->
  <Skills />
  <About />
  <Contact />
  <Footer />
</main>

<style lang="scss" global>
  @import "./styles/styles";

  main {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>
