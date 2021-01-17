<script lang="ts">
  import Header from "./Header.svelte"
  import Quiz from "./Quiz.svelte"
  import Footer from "./Footer.svelte"
  import { testQuestions } from "./questions/questions"

  let questions = testQuestions
</script>

<svelte:head>
  <script data-ad-client="ca-pub-7933888855529725" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
</svelte:head>

<div class="wrapper">
  <Header />
  <Quiz questions={questions} />
  <Footer />
</div>

<style type="text/scss">

  @import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Palanquin+Dark&display=swap');

  :global(*) {
    box-sizing: border-box;
  }
  :global(html) {
    height: 100%;
  }
  :global(body) {
    padding: 0;
    height:100%;
    background-image: url(../images/bg.jpg);
    backdrop-filter: blur(16px) grayscale(30%) brightness(120%);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
  }

  @media (max-width: 560px) {
    :global(body) {
      padding: 0 10px;
      background-position: top;
      background-repeat: repeat;
      background-size: 190vw 120vh;
      background-color: #593938;
    }
    .wrapper {
      justify-content: center;
    }
    .results {
      margin-top: 4vw;
    }
  }
</style>
