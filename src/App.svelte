<script lang="ts">
  import Header from "./Header.svelte"
  import Quiz from "./Quiz.svelte"
  import Footer from "./Footer.svelte"
  import { guitars, languages } from "./questions/questions"

  let pizza = guitars;
  console.log(pizza)
  console.log(Object.keys(pizza))

  let questions = {
    questions: pizza.questions,
    answers: pizza.answers,
  }

  console.log(questions)

</script>

<div class="wrapper">
  <Header />
  <Quiz questionData={questions} />
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
