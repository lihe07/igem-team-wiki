<script>
    import { page } from "$app/stores";
    import PlainLayout from "$lib/components/PlainLayout.svelte";
</script>

<PlainLayout>
    <div>
        <h1>Something went wrong!</h1>
        <h2>{$page.status}: {$page.error?.message}</h2>
        <p>Please try again!</p>
    </div>
</PlainLayout>

<style>
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        min-height: 30rem;
        margin-top: 3rem;
    }
</style>
