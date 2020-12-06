<script>
    export let question;
    export let isAnswered;
</script>

{#if !isAnswered}
    <h2>{question.question}</h2>
{:else}
    <p>{question.explanation}</p>
{/if}