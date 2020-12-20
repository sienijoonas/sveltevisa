<script>
    import Title from "./Title.svelte"
    export let results;
</script>

<section>
    <p>sait nain monta oikein!</p>
    <div class="results">
        <span class="big">{results.correct}</span>
        <span class="small">/</span>
        <span class="big">{results.totalQuestions}</span>
    </div>
</section>

<style type="text/scss">
    p {
        color: #fffc;
        font-family: 'Palanquin Dark', sans-serif;
        font-size: 22px;
    }
    .results {
        display: flex;
        align-items: center;
        justify-content: center;
        
        & span {
            font-family: 'Bungee', cursive;
            display: block;
            color: #fffa;
        }
    }
    .big {
        font-size: 128px;
        line-height: 128px;
    }
    .small {
        font-size: 96px;
        line-height: 96px;
    }
</style>