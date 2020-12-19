<script>
    import { fly } from 'svelte/transition';
</script>

<style type="text/scss">
    .shadow {
        margin: auto;
        box-shadow: inset 0px 2px 2px 2px hsl(204deg, 23%, 38%);
        border-radius: 16px;
        background-color: hsl(204deg, 23%, 48%);
        width: 440px;
    }
    .container {
        position: relative;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        border: 2px solid 	hsl(205, 89%, 71%);
        border-radius: 16px;
        padding: 16px 16px 20px;
        width: 100%;
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
</style>

<div class="shadow">
    <div class="container" in:fly="{{ y: -200, duration: 800 }}">
        <slot />
    </div>
</div>