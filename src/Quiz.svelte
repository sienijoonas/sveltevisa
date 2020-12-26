<script lang="ts">
  import Question from './Question.svelte';
  import AnswerButtons from './AnswerButtons.svelte';
  import Button from './Button.svelte';
  import Title from './Title.svelte'
  import Results from './Results.svelte'
  import { Languages } from "./types"
  import confetti from "canvas-confetti"

  export let questions;

  let currentQuestion = 0;
  let correctGuesses = 0;
  let isAnswered = false;
  let isCorrect = false;

  const checkAnswer = (answer: boolean): void => {
    if (answer == questions[currentQuestion].answer) {
      isCorrect = true;
      correctGuesses++;
      confetti({
        scalar: 4,
        gravity: 2,
        spread: 90,
        ticks: 50,
        origin: {
          y: 0.6,
        }
      })
    } else {
      isCorrect = false
    }

    isAnswered = true;
  }
  const nextQuestion = (): void => {
    currentQuestion++;
    isAnswered = false;
  }

  $: console.log(`questions.length: ${questions.length}, currentQuestion: ${currentQuestion}`)
  $: isOver = currentQuestion >= questions.length

</script>

<main>
  {#if currentQuestion < questions.length}
  <div class="title">
    <Title currentQuestion={currentQuestion} isOver={isOver} />
  </div>
  <div class="question">
    <Question isAnswered={isAnswered} question={questions[currentQuestion]} isCorrect={isCorrect} />
  </div>
  <div class="buttons">
    {#if !isAnswered}
    <AnswerButtons>
      <Button text={Languages.ja} clickHandler={checkAnswer} parameter={Languages.ja} />
      <Button text={Languages.zh} clickHandler={checkAnswer} parameter={Languages.zh} />
      <Button text={Languages.th} clickHandler={checkAnswer} parameter={Languages.th} />
      <Button text={Languages.kr} clickHandler={checkAnswer} parameter={Languages.kr} />
    </AnswerButtons>
    {:else}
    <AnswerButtons>
      <Button
      text={
        currentQuestion + 1 == questions.length ?
        `See results` :
        `Next Question`
      }
      clickHandler={nextQuestion}
      />
    </AnswerButtons>
    {/if}
  </div>
  {:else}
  <Title />
  <AnswerButtons>
    <Results results={{correct: correctGuesses, totalQuestions: questions.length}} />
  </AnswerButtons>
  {/if}

</main>

<style type="text/scss">
  main {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    border: 3px solid hsl(205, 13%, 48%);
    border-radius: 16px;
    padding: 32px 64px;
    width: 540px;
    height: 620px;
    background-color: hsl(205, 23%, 58%);
    box-shadow: 0 8px 0px 0px #54636d, 0 6px 8px 6px #0006;
    text-align: center;

    &:before {
      top: 4px;
      left: 6px;
    }
    &:after {
      bottom: 4px;
      right: 6px;
    }
    &:before,
    &:after {
      content: '◎';
      color: #0002;
      position: absolute;
      font-weight: bold;
      font-size: 24px;
      user-select: none;
      text-shadow: 2px 2px 0px #fff2;

    }
  }

  @media (max-width: 560px) {
    main {
      width: 100%;
      min-height: 60vh;
      height: auto;
      padding: 4vw 10vw;
    }
  }
</style>
