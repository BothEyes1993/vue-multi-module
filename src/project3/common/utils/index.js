import CommUtils from '@comm/script/utils'

const utils = {
  ...CommUtils,

  test3Fn () {
    console.log('project3扩展函数+' + CommUtils.getCommonStr)
  }
}

export default utils
