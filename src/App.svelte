<script>
    import Question from './Question.svelte';
    import AnswerButtons from './AnswerButtons.svelte';
    import Results from './Results.svelte'
    import Footer from "./Footer.svelte"
    
    let questions = [
    {
        question: 'onko taa totta?',
        explanation: '',
        answer: true,
    },
    {
        question: 'entas taa?',
        answer: false
    },
    {
        question: 'mites tan laita?',
        answer: true
    },
    ];
    let currentQuestion = 0;
    let correctGuesses = 0;
    let disabled = false;
    
    const checkAnswer = (answer) => {
        console.log(`oYAAAA ${answer}`)
        console.log(`your answer is`)
        console.log(answer == questions[currentQuestion].answer)
        
        answer == questions[currentQuestion].answer && correctGuesses++;
        currentQuestion++;
    }
    
    $: console.log(`questions.length: ${questions.length}, currentQuestion: ${currentQuestion}`)
</script>

<div class="wrapper">
    <header>HEADERI</header>
    <main>
        {#if currentQuestion < questions.length}
        <h1>Question number {currentQuestion + 1}</h1>
        <section>
            <Question question={questions[currentQuestion]} />
            <AnswerButtons clickHandler={checkAnswer} />
        </section>
        Correct: {correctGuesses}/{questions.length}
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