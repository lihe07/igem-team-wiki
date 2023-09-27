<script>
    import { page } from "$app/stores";
</script>

<div>
    <h1>Error Caught!</h1>
    <h2>{$page.status}: {$page.error?.message}</h2>
</div>

<style>
    div {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        margin-top: 3rem;
    }
</style>
