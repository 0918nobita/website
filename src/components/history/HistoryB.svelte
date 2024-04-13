<script lang="ts">
  import { history } from '../../store';
</script>

{#if $history.b}
  <slot />
{/if}
