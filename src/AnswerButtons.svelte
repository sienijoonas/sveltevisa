<script>
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()
    export let clickHandler = (param) => {
        console.log(`clicked ${param}!`)
    }
</script>

<style>
    button {
        margin: 8px;
        border-radius: 8px;
        padding: 8px 32px;
    }
</style>

<button on:click={() => clickHandler(true) }>Khyl</button>
<button on:click={() => clickHandler(false) }>Ei</button>