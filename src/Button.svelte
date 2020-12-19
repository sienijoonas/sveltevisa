<script lang="ts">
    export let text;
    export let clickHandler = (param:any) => {
        console.log(`handler`)
    }
    export let parameter;
</script>

<button disabled={false} on:click={() => clickHandler(parameter) }>{text}</button>

<style type="text/scss">
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
        user-select: none;

        &:hover {
            transform: translateY(4px);
            border: 2px solid hsl(60, 68%, 81%);
            box-shadow: 0 4px 0px 0px  hsl(60, 58%, 71%);
        }
        &:active{
            transform: translateY(6px);
            border: 2px solid green;
            background-color: hsl(60, 78%, 91%);
            padding-top: 17px;
            padding-bottom: 15px;
            box-shadow: 0px 0.5px 0px 0.5px hsl(60, 58%, 71%);
        }
        &:focus {
            border: 2px solid hsl(60, 58%, 71%);
        }
    }
</style>