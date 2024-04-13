<script lang="ts">
  import { history } from '../../store';
</script>

{#if $history.a}
  <slot />
{/if}
