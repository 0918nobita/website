<script lang="ts">
</script>

<div class="card-container">
  <slot />
</div>

<style>
  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    gap: 30px;
  }
</style>
