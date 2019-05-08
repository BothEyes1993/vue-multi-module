<template>
  <page-column>
    <page-header>project1</page-header>
    <page-row>
      <page-aside></page-aside>
      <page-main>
        <test></test>
      </page-main>
    </page-row>
    <page-footer></page-footer>
  </page-column>
</template>

<script>
import Test from '@project2/components/Test.vue'

export default {
  components: {
    Test
  }
}
</script>
