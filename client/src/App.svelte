<script lang="ts">
    export let name = 'world';
    let msg = 'message';
    $: computed = `[${msg.toUpperCase()}]`;
    let err = false;
    let text = '';
    const focusOutHandler = () => {
        err = text === '';
    };
</script>

<h1>Hello {name}!</h1>

<h2>Input</h2>
<input bind:value={msg} />
<p>Computed: {computed}</p>

<h2>Textarea</h2>
<textarea
    bind:value={text}
    on:focusout={focusOutHandler}
    aria-describedby="textarea_error"
    aria-required
/>
{#if err}
    <p id="textarea_error">
        Error: This field is empty; it is a required field and must be filled
        in.
    </p>
{/if}

<style>
    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }
    #textarea_error {
        color: red;
    }
</style>
