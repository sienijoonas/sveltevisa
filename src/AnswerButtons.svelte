<script>
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()
    export let clickHandler = (param) => {
        console.log(`clicked ${param}!`)
    }
    export let disabled = false;
</script>

<style type="text/scss">
    .container {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin: auto;
        border: 2px solid 	hsl(205, 89%, 71%);
        border-radius: 16px;
        padding: 16px 32px;
        width: 440px;
        background-color: 	hsl(205, 89%, 81%);
        box-shadow: 0 6px 0px 0px 	hsl(205, 89%, 61%);

        font-family: 'Bungee', cursive;

        &:before {
            top: 4px;
            left: 6px;
        }
        &:after {
            bottom: 4px;
            right: 6px;
        }
        &:before,
        &:after {
            content: '◎';
            color: #0002;
            position: absolute;
            font-weight: bold;
            user-select: none;
            text-shadow: 1px 1px 1px #fff2;
        }
    }
    button {
        position: relative;
        background-color: hsl(60, 78%, 91%);
        border: 2px solid hsl(60, 68%, 81%);
        border-radius: 16px;
        padding: 16px 64px;
        transition: all 0.1s linear;
        box-shadow: 0 8px 0px 0px hsl(60, 58%, 71%);
        color: #0007;
        font-size: 24px;
        font-weight: 800;

        &:hover {
            transform: translateY(4px);
            border: 2px solid hsl(60, 68%, 81%);
            box-shadow: 0 4px 0px 0px  hsl(60, 58%, 71%);
        }
        &:active{
            transform: translateY(6px);
            border: 2px solid green;
            background-color: #eee;
            padding-top: 17px;
            padding-bottom: 15px;
            box-shadow: inset 0px 0.5px 0px 0.5px #0003;
        }
        &:focus {
            border: 2px solid #bbb;
        }
    }
</style>

<div class="container">
    <button disabled={disabled} on:click={() => clickHandler(true) }>YES</button>
    <button disabled={disabled} on:click={() => clickHandler(false) }>NO</button>
</div>