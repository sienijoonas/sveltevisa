<script lang="ts">
    export let clickHandler = () => {}
    export let totalQuestions:number
    export let currentQuestion:number
</script>

<button on:click={() => clickHandler()}>
    {#if currentQuestion + 1 == totalQuestions}
        See results    
    {:else}
        Next Question
    {/if}
</button>

<style>
    button {
        margin: 8px;
        border-radius: 8px;
        padding: 8px 32px;
        border: 2px dashed #e2e2e2;
        box-shadow: 0 0 18px -4px #0dd400;
    }
</style>