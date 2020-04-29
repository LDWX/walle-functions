"use strict";

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.map");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.match");

require("core-js/modules/es.string.split");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

exports.__esModule = true;
exports.getQueryString = getQueryString;
exports.getQueryObject = getQueryObject;

/**
 * 从url中获取指定 key 的值
 * @param {String} name 要获取的参数名称
 * @return {String} 如果获取到则返回相应的值，没获取到则返回: ""
 */
function getQueryString(url, name) {
  var queryMap = GetQueryObject(url);
  if (!queryMap.size) return "";
  return queryMap.get(name);
}

function getQueryObject(url) {
  var reg = /\w+=\w*/g;
  var params = url.match(reg);
  if (!params) return new Map();
  var queryMap = new Map();
  params.forEach(function (query) {
    var arr = query.split('=');
    queryMap.set(arr[0], arr[1]);
  });
  return queryMap;
} // module.exports = {
//   GetQueryObject,
//   GetQueryString
// }