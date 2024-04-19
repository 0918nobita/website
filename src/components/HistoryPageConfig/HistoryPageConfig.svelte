<script lang="ts">
  import { onMount } from 'svelte';

  import { history } from '~/store';

  import HistoryPageConfigDisplay from './HistoryPageConfigDisplay.svelte';

  onMount(() => {
    const a = localStorage.getItem('historyA') === null;

    const b = localStorage.getItem('historyB') === null;

    const c = localStorage.getItem('historyC') !== null;

    history.set({ a, b, c });
  });

  function onChangeA() {
    const current = history.get();
    const checked = !current.a;

    if (checked) {
      localStorage.removeItem('historyA');
    } else {
      localStorage.setItem('historyA', 'hide');
    }

    history.set({ ...current, a: checked });
  }

  function onChangeB() {
    const current = history.get();
    const checked = !current.b;

    if (checked) {
      localStorage.removeItem('historyB');
    } else {
      localStorage.setItem('historyB', 'hide');
    }

    history.set({ ...current, b: checked });
  }

  function onChangeC() {
    const current = history.get();
    const checked = !current.c;

    if (checked) {
      localStorage.setItem('historyC', 'show');
    } else {
      localStorage.removeItem('historyC');
    }

    history.set({ ...current, c: checked });
  }
</script>

<HistoryPageConfigDisplay
  aChecked={$history.a}
  bChecked={$history.b}
  cChecked={$history.c}
  {onChangeA}
  {onChangeB}
  {onChangeC}
/>
