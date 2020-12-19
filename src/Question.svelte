<script>
    export let question;
    export let isAnswered;
</script>

<div class="question">
    {#if !isAnswered}
        <h2>{question.question}</h2>
    {:else}
        <p>{question.explanation}</p>
    {/if}
</div>

<style>
    .question {
        color: #fffc;
    }
</style>