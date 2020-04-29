"use strict";

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.string.trim");

require("core-js/modules/web.dom-collections.for-each");

exports.__esModule = true;
exports.validateVariables = validateVariables;
exports.validateVariable = validateVariable;

require("regenerator-runtime/runtime");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * 
 * @param {Array} varArr 要验证的变量数组
 * @param {*} errTipsArr 与变量数组对应的错误提示语数组
 */
function validateVariables(_x, _x2, _x3) {
  return _validateVariables.apply(this, arguments);
}
/**
 * 
 * @param {String|Number} variable 需要验证是否为空值的变量
 * @param {String} errTips 空值提示语
 * @param {Function} errCallback 空值时需要执行的callback函数
 */


function _validateVariables() {
  _validateVariables = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(varArr, errTipsArr, errCallback) {
    var validateResultList;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            validateResultList = [];
            _context.next = 3;
            return varArr.forEach(function (ele, index) {
              validateVariable(ele, errTipsArr[index], errCallback).then(function (res) {
                validateResultList.push(res);
              });
            });

          case 3:
            return _context.abrupt("return", validateResultList);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _validateVariables.apply(this, arguments);
}

function validateVariable(variable, errTips, errCallback) {
  var _variable = String(variable).trim();

  return new Promise(function (resolve, reject) {
    if (_variable == "undefined" || _variable == "" || _variable == "null") {
      reject(errTips);
    }

    resolve(true);
  }).catch(function (err) {
    // console.error("validateVariable err: ", err)
    errCallback && errCallback(err);
    return false;
  });
}