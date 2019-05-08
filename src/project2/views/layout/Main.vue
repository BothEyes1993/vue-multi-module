<template>
  <div class="page-main">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PageMain'
}
</script>

<style lang="scss" scoped>
.page-main {
  flex-grow: 1;
  background-color: #e9eef3;
}
</style>
