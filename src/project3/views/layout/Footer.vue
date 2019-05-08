<template>
  <footer class="page-footer">
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter'
}
</script>

<style lang="scss" scoped>
.page-footer {
  width: 100%;
  height: 60px;
  display: flex;
  flex-shrink: 0;
  background-color: #b3c0d1;
}
</style>
