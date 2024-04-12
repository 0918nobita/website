<script lang="ts">
  import { history } from '../store';
</script>

{#if $history.c}
  <slot />
{/if}
