<script lang="ts">
    import Question from './Question.svelte';
    import AnswerButtons from './AnswerButtons.svelte';
    import Button from './Button.svelte';
    import Title from './Title.svelte'
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
    $: isOver = currentQuestion >= questions.length

</script>

<div class="wrapper">
    <Header debug={{currentQuestion: currentQuestion, correctGuesses: correctGuesses, isAnswered: isAnswered}} />
    <main>
        {#if currentQuestion < questions.length}
            <section class="title">
                <Title currentQuestion={currentQuestion} isOver={isOver} />
            </section>
            <section class="question">
                <Question isAnswered={isAnswered} question={questions[currentQuestion]} />
            </section>
            <div class="buttons">
                {#if !isAnswered}
                    <AnswerButtons>
                        <Button text="YES" clickHandler={checkAnswer} parameter={true} />
                        <Button text="NO" clickHandler={checkAnswer} parameter={false} />
                    </AnswerButtons>
                {:else}
                    <div>
                        <p>Correct: {correctGuesses}/{questions.length}</p>
                    </div>
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
            <Results results={{correct: correctGuesses, totalQuestions: questions.length}} />
        {/if}
        
    </main>
    <Footer />
</div>

<style type="text/scss">

    @import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Palanquin+Dark&display=swap');

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
        width: 720px;
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
    
    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>