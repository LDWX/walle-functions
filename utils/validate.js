/**
 * 
 * @param {Array} varArr 要验证的变量数组
 * @param {*} errTipsArr 与变量数组对应的错误提示语数组
 */
export async function validateVariables(varArr, errTipsArr, errCallback) {
  let validateResultList = [];
  await varArr.forEach( (ele, index) => {
    validateVariable(ele, errTipsArr[index], errCallback)
      .then(res => {
        validateResultList.push( res )
      })
  });

  return validateResultList;
}


/**
 * 
 * @param {String|Number} variable 需要验证是否为空值的变量
 * @param {String} errTips 空值提示语
 * @param {Function} errCallback 空值时需要执行的callback函数
 */
export function validateVariable(variable, errTips, errCallback) {
  const _variable = String(variable).trim()
  return new Promise((resolve, reject) => {
    if (_variable == "undefined" || _variable == "" || _variable == "null") {
      reject(errTips)
    }
    resolve(true)
  }).catch( err => {
    // console.error("validateVariable err: ", err)
    errCallback && errCallback(err)
    return false
  })
}