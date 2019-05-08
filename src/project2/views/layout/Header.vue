<template>
  <header class="page-header">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<style lang="scss" scoped>
.page-header {
  width: 100%;
  height: 60px;
  display: flex;
  flex-shrink: 0;
  background-color: #b3c0d1;
}
</style>
