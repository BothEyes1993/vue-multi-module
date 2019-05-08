<template>
  <page-column>
    <page-header>project3<img :src="img"/></page-header>
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
import Test from '../../components/Test.vue'

export default {
  data () {
    return {
      img: ''
    }
  },
  components: {
    Test
  },
  created () {
    this.img = `${location.protocol}//${location.host}/static/static3/img3.png`
  }
}
</script>
