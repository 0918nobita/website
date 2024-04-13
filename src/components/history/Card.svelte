<script lang="ts">
  export let title: string;
  export let desc: string;

  export let hasDialog = false;

  function onClick() {
    if (!hasDialog) {
      return;
    }
    // console.log('clicked');
  }
</script>

{#if hasDialog}
  <button type="button" on:click={onClick}>
    <div class="title"><h3>{title}</h3></div>
    <p>{desc}</p>
  </button>
{:else}
  <article>
    <div class="title"><h3>{title}</h3></div>
    <p>{desc}</p>
  </article>
{/if}

<style>
  button {
    display: grid;
    grid-template-rows: subgrid;
    grid-row: span 2;
    gap: 0;
    border-radius: 7px;
    border: 2px solid var(--card-border-color);
    box-shadow: var(--card-box-shadow);
    background: transparent;
    appearance: none;
    padding: 0;
    color: var(--main-text);
    font-size: 15px;
    line-height: 1.5;
    text-align: start;
  }

  article {
    display: grid;
    grid-template-rows: subgrid;
    grid-row: span 2;
    gap: 0;
    border-radius: 7px;
    border: 2px solid var(--card-border-color);
    box-shadow: var(--card-box-shadow);
    font-size: 15px;
    line-height: 1.5;
  }

  .title {
    margin: 0;
    background-color: var(--card-border-color);
    padding: 0.5rem 0.7rem 0.5rem 0.7rem;
    display: grid;
    align-items: center;
  }

  h3 {
    margin: 0;
  }

  p {
    margin: 0;
    padding: 0.5rem 0.7rem 0.5rem 0.7rem;
  }
</style>
