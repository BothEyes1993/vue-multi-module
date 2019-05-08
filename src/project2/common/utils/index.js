import CommUtils from '@comm/script/utils'

const utils = {
  ...CommUtils,

  test2Fn () {
    console.log('project2扩展函数+' + CommUtils.getCommonStr)
  }
}

export default utils
