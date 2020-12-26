<script lang="ts">
  import { fly } from 'svelte/transition';
  export let isOver:Boolean = true;
  export let currentQuestion:number = 1;
</script>

<h1 in:fly="{{ y: -100, duration: 500 }}">
  {#if !isOver}
  <span>Question </span> <span>#{currentQuestion + 1}</span>
  {:else}
  <span>Results</span>
  {/if}
</h1>

<style type="text/scss">
  h1 {
    display: block;
    width: 100%;
    margin: 0 auto;
    user-select: none;
  }
  span {
    display: inline-block;
    margin: 0;
    border: 2px solid hsl(1, 16%, 46%);
    border-radius: 16px;
    padding: 12px 24px;
    background-color: hsl(1, 26%, 56%);
    color: hsl(60, 78%, 91%);
    text-transform: uppercase;
    font-family: 'Bungee', cursive;
    font-size: 28px;
    font-weight: 100;
    text-shadow: 3px 3px #0004;
    text-transform: uppercase;
    box-shadow: 0 6px 0px 0px hsl(1, 06%, 36%);
    transform: rotate(-1deg);

    &:nth-child(2) {
      position: relative;
      top: 6px;
      padding: 0px 24px;
      color: #eee;
      font-size: 64px;
    }

    &:before {
      top: 35%;
      left: 6px;
    }
    &:after {
      top: 35%;
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

  @media (max-width: 560px) {
    span, span:nth-child(2) {
      font-size: 6vw;
      padding: 2vw 6vw;

      &:nth-child(2) {
        position: relative;
        top: -1vw;
      }

      &:before,
      &:after {
        content: none;
      }
    }
  }
</style>
