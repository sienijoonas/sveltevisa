<script>
  export let question;
  export let isAnswered;
  export let isCorrect;
</script>

<div class="question">
  {#if !isAnswered}
  <!-- <p>{question.question}</p> -->
  <div class="img">
    <img src="images/{question.image}" alt={`Question`}>
  </div>
  {:else}
  {#if isCorrect}
  <span class="correct">Correct!</span>
  {:else}
  <span class="wrong">WRONG</span>
  {/if}
  <p>{question.explanation}</p>
  {/if}
</div>

<style type="text/scss">
  .question {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  p, span {
    margin: 8px auto;
    color: #fffd;
    font-family: 'Palanquin Dark', sans-serif;
    font-size: 28px;
    line-height: 32px;
  }
  .correct,
  .wrong {
    padding-bottom: 16px;
    font-size: 48px;
    font-weight: 600;
    text-transform: uppercase;
  }
  .img {
    position: relative;
    margin: 16px auto;
    border-radius: 16px;
    width: 384px;
    height: 240px;
    overflow: hidden;
    user-select: none;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      border: 3px solid #6a7d8a;
      border-radius: 16px;
      width: 380px;
      height: 234px;
      background-color: #fff6;
      box-shadow: inset 0px 10px 24px #000c;
      z-index: 5;
    }

    img {
      object-fit: cover;
      width: 120%;
      height: 120%;
      transform-origin: center;
      transform: rotate(5deg) translate(-10%, -10%);
    }
  }

  @media (max-width: 560px) {
    .img {
      width: 100%;
      height: 40vw;

      &:before {
        width: calc( 100% - 4px );
        height: calc( 40vw - 4px );
      }
    }
  }
</style>
