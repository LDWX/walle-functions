/**
 * 从url中获取指定 key 的值
 * @param {String} name 要获取的参数名称
 * @return {String} 如果获取到则返回相应的值，没获取到则返回: ""
 */
export function getQueryString(url, name ) {
  const queryMap = getQueryObject(url);
  if (!queryMap.size) return ""
  return queryMap.get(name)
}

export function getQueryObject(url) {
  const reg = /\w+=\w*/g;
  let params = url.match(reg)
  if (!params) return new Map()
  let queryMap = new Map()
  params.forEach( query => {
    let arr = query.split('=')
    queryMap.set(arr[0], arr[1])
  })
  return queryMap  
}


// module.exports = {
//   GetQueryObject,
//   GetQueryString
// }