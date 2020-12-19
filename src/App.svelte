<script lang="ts">
    import Question from './Question.svelte';
    import AnswerButtons from './AnswerButtons.svelte';
    import NextQuestionButton from './NextQuestionButton.svelte';
    import Results from './Results.svelte'
    import Header from "./Header.svelte"
    import Footer from "./Footer.svelte"
    import { testQuestions } from "./questions/questions"

    let questions = testQuestions

    let currentQuestion = 0;
    let correctGuesses = 0;
    let isAnswered = false;
    
    const checkAnswer = (answer: boolean): void => {
        answer == questions[currentQuestion].answer && correctGuesses++;
        isAnswered = true;
    }
    const nextQuestion = (): void => {
        currentQuestion++;
        isAnswered = false;
    }

    $: console.log(`questions.length: ${questions.length}, currentQuestion: ${currentQuestion}`)
</script>

<div class="wrapper">
    <Header debug={{currentQuestion: currentQuestion, correctGuesses: correctGuesses, isAnswered: isAnswered}} />
    <main>
        {#if currentQuestion < questions.length}
        <h1>Question number {currentQuestion + 1}</h1>
        <section>
            <Question isAnswered={isAnswered} question={questions[currentQuestion]} />
        </section>
        <div class="section">
            {#if !isAnswered}
            <AnswerButtons disabled={isAnswered} clickHandler={checkAnswer} />
            {:else}
            <NextQuestionButton clickHandler={nextQuestion} totalQuestions={questions.length} currentQuestion={currentQuestion} />
            <div>
                <p>Correct: {correctGuesses}/{questions.length}</p>
            </div>
            {/if}
        </div>

        {:else}
        <Results results={{correct: correctGuesses, totalQuestions: questions.length}} />
        {/if}
        
    </main>
    <Footer />
</div>

<style type="text/scss">

    @import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');

    :global(*) {
        box-sizing: border-box;
    }
    :global(body) {
        padding: 0;
        background-color: rgb(232, 227, 236);
    }
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;
    }
    main {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 0 auto;
        border: 2px solid hsl(205, 13%, 48%);
        border-radius: 16px;
        padding: 32px 64px;
        max-width: 240px;
        height: 540px;
        background-color: hsl(205, 23%, 58%);
        box-shadow: 0 6px 0px 0px hsl(205, 13%, 38%);
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

    h1 {
        display: block;
        margin-top: 0;
        border: 2px solid hsl(1, 16%, 46%);
        border-radius: 16px;
        padding: 16px 32px;
        width: 100%;
        background-color: hsl(1, 26%, 56%);
        color: #eee;
        text-transform: uppercase;
        font-family: 'Bungee', cursive;
        font-size: 3em;
        font-weight: 100;
        text-shadow: 1px 1px #0004;
        box-shadow: 0 6px 0px 0px hsl(1, 06%, 36%);
        user-select: none;
        transform: rotate(-1deg);

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
                color: #0004;
                position: absolute;
                font-weight: bold;
                font-size: 18px;
                user-select: none;
                text-shadow: 1px 1px 0px #fff3;

            }
    }
    
    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>