<script lang="ts">
  export let results;
  
  const getRating = (points) => {
    const prc = points / results.totalQuestions
    
    if (prc == 1) {
      return 'Perfect!!'
    } else if (prc >= 0.8) {
      return 'Awesome!'
    } else if (prc >= 0.6) {
      return 'Almost there!'
    } else if (prc >= 0.4) {
      return 'Still a lot to learn!'
    } else if (prc >= 0.2) {
      return 'Beginner level!'
    } else {
      return 'Better luck next time!'
    }
    
  }
</script>

<section>
  <div class="results">
    <span class="big">{results.correct}</span>
    <span class="small"> / </span>
    <span class="big">{results.totalQuestions}</span>
  </div>
  <p>{getRating(results.correct)}</p>
</section>

<style type="text/scss">
  p {
    color: #fffc;
    font-family: 'Palanquin Dark', sans-serif;
    font-size: 32px;
  }
  .results {
    display: flex;
    align-items: center;
    justify-content: center;
    
    & span {
      display: block;
      color: #fff;
      font-family: 'Bungee', cursive;
      text-shadow: 4px 5px #0004;
    }
  }
  .big {
    font-size: 128px;
    line-height: 128px;
  }
  .small {
    font-size: 84px;
    line-height: 84px;
    padding: 0 8px;
  }
  
  @media (max-width: 560px) {
    p {
      margin: 0;
    }
  }
</style>