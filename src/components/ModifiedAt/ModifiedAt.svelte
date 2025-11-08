<script lang="ts">
  import dayjs from "dayjs";

  import * as styles from "./ModifiedAt.css";

  interface Props {
    date: Date;
  }

  const { date }: Props = $props();
</script>

<aside class={styles.modifiedAt}>
  最終更新日：{dayjs(date).format("YYYY年MM月DD日")}
</aside>
