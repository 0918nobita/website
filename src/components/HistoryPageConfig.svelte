<script lang="ts">
  import { onMount } from 'svelte';

  import { history } from '~/store';

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

<input
  id="toggle-a"
  type="checkbox"
  checked={$history.a}
  on:change={onChangeA}
/>

<label for="toggle-a">キャリア・Web 開発と関係のある内容を表示する</label>

<br />

<input
  id="toggle-b"
  type="checkbox"
  checked={$history.b}
  on:change={onChangeB}
/>

<label for="toggle-b">その他の技術的な内容を表示する</label>

<br />

<input
  id="toggle-c"
  type="checkbox"
  checked={$history.c}
  on:change={onChangeC}
/>

<label for="toggle-c">技術的でない内容を表示する</label>
