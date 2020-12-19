<script>
    import Title from "./Title.svelte"
    export let results;
</script>

<Title />
<section>
    <p>sait nain monta oikein!</p>
    {results.correct}/{results.totalQuestions}
</section>

<style>
    p {
        color: #fffc;
        font-family: 'Palanquin Dark', sans-serif;
        font-size: 22px;
    }
</style>