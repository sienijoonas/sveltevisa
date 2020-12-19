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
        border-radius: 12px;
        padding: 12px 24px;
        width: 40%;
        transition: all 0.1s linear;
        box-shadow: 0 8px 0px 0px hsl(60, 58%, 71%);
        color: #0007;
        font-size: 16px;
        font-weight: 800;
        user-select: none;

        &:nth-child(n+3) {
            margin-top: 12px;
        }

        &:hover {
            transform: translateY(4px);
            border: 2px solid hsl(60, 68%, 81%);
            box-shadow: 0 4px 0px 0px  hsl(60, 58%, 71%);
        }
        &:active{
            transform: translateY(6px);
            // border: 2px solid green;
            background-color: hsl(60, 78%, 91%);
            padding-top: 13px;
            padding-bottom: 11px;
            box-shadow: 0px 0.5px 0px 0.5px hsl(60, 58%, 71%);
        }
        &:focus {
            border: 2px solid hsl(60, 58%, 71%);
        }
    }
    @media (max-width: 560px) {
        button {
            width: 90%;
            padding: 2vw 3vw;
            box-shadow: 0 1.5vw 0px 0px hsl(60, 58%, 71%);

            &:nth-child(n+1) {
            margin-top: 2vw;

            &:hover {
                box-shadow: 0 1vw 0px 0px  hsl(60, 58%, 71%);
            }
            &:active {
                padding-top: 2.2vw;
                padding-bottom: 1.8vw;
            }
        }
        }
    }

</style>