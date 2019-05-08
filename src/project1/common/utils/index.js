import CommUtils from '@comm/script/utils'

const utils = {
  ...CommUtils,

  test1Fn () {
    console.log('project1扩展函数+' + CommUtils.getCommonStr)
  }
}

export default utils
