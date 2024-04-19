<script lang="ts">
  export let aChecked: boolean;

  export let bChecked: boolean;

  export let cChecked: boolean;

  export let onChangeA: () => void;

  export let onChangeB: () => void;

  export let onChangeC: () => void;
</script>

<input id="toggle-a" type="checkbox" checked={aChecked} on:change={onChangeA} />

<label for="toggle-a">キャリア・Web 開発と関係のある内容を表示する</label>

<br />

<input id="toggle-b" type="checkbox" checked={bChecked} on:change={onChangeB} />

<label for="toggle-b">その他の技術的な内容を表示する</label>

<br />

<input id="toggle-c" type="checkbox" checked={cChecked} on:change={onChangeC} />

<label for="toggle-c">技術的でない内容を表示する</label>
