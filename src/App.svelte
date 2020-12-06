<script>
    import Question from './Question.svelte';
    import AnswerButtons from './AnswerButtons.svelte';
    import NextQuestionButton from './NextQuestionButton.svelte';
    import Results from './Results.svelte'
    import Footer from "./Footer.svelte"
    
    let questions = [
    {
        question: 'onko taa totta?',
        explanation: 'no taa nyt oli tammonen kyssari',
        answer: true,
    },
    {
        question: 'entas taa?',
        explanation: 'taaki ny oli vaan tammone',
        answer: false
    },
    {
        question: 'mites tan laita?',
        explanation: 'jep, just tammone',
        answer: true
    },
    ];
    let currentQuestion = 0;
    let correctGuesses = 0;
    let isAnswered = false;
    
    const checkAnswer = (answer) => {
        answer == questions[currentQuestion].answer && correctGuesses++;
        isAnswered = true;
    }
    const nextQuestion = () => {
        currentQuestion++;
        isAnswered = false;
    }

    $: console.log(`questions.length: ${questions.length}, currentQuestion: ${currentQuestion}`)
</script>

<div class="wrapper">
    <header>HEADERI</header>
    <main>
        {#if currentQuestion < questions.length}
        <h1>Question number {currentQuestion + 1}</h1>
        <section>
            <Question isAnswered={isAnswered} question={questions[currentQuestion]} />
            {#if !isAnswered}
            <AnswerButtons disabled={isAnswered} clickHandler={checkAnswer} />
            {:else}
            <NextQuestionButton clickHandler={nextQuestion} />
            Correct: {correctGuesses}/{questions.length}
            {/if}
        </section>

        {:else}
        <Results results={{correct: correctGuesses, totalQuestions: questions.length}} />
        {/if}
        
    </main>
    <Footer />
</div>

<style type="text/scss">
    :global(body) {
        padding: 0;
    }
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;
    }
    header {
        display: block;
        background-color: #aab;
        height: 32px;
    }
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #003ecc;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }
    
    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>