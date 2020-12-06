<script>
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()
    export let clickHandler = (param) => {
        console.log(`clicked ${param}!`)
    }
    export let disabled = false;
</script>

<style>
    button {
        margin: 8px;
        border-radius: 8px;
        padding: 8px 32px;
    }
</style>

<button disabled={disabled} on:click={() => clickHandler(true) }>Khyl</button>
<button disabled={disabled} on:click={() => clickHandler(false) }>Ei</button>