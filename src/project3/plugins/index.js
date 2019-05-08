import Vue from 'vue'

import PageColumn from '@comm/components/Column.vue'
import PageRow from '@comm/components/Row.vue'

import utils from '../common/utils'
import PageAside from '../views/layout/Aside.vue'
import PageHeader from '../views/layout/Header.vue'
import PageMain from '../views/layout/Main.vue'
import PageFooter from '../views/layout/Footer.vue'

// Common component
Vue.component(PageColumn.name, PageColumn)
Vue.component(PageRow.name, PageRow)

// Component
Vue.component(PageAside.name, PageAside)
Vue.component(PageHeader.name, PageHeader)
Vue.component(PageMain.name, PageMain)
Vue.component(PageFooter.name, PageFooter)

console.log(utils.test3Fn)
