// const V = require('../utils/validate')
import * as V from '../utils/validate'

describe("Test Validate", function() { 
  
  describe('\nvalidateVariable test:::\n', function() {
    beforeEach(function() {
      this._var = ""
    })
    
    it("should return false for ' undefined/''/' '/null '", async function() {
      this._var = ""
      let result = await V.validateVariable(this._var, `${this._var}不能为空`)
      expect(result).toEqual(false)

      this._var = " "
      result = await V.validateVariable(this._var, `${this._var}不能为空`)
      expect(result).toEqual(false)
      
      this._var = undefined
      result = await V.validateVariable(this._var, `${this._var}不能为空`)
      expect(result).toEqual(false)

      this._var = null
      result = await V.validateVariable(this._var, `${this._var}不能为空`)
      expect(result).toEqual(false)
    })

    
    it('toggle error callback', async function() {
      this._var = undefined
      let result = await V.validateVariable(this._var, `${this._var}不能为空`, function(err) {
        console.info(err)
      })
      expect(result).toEqual(false)
    });

    
    it('normal string should return true', async function() {
      this._var = "shenxin"
      let result = await V.validateVariable(this._var, `${this._var}不能为空`, function(err) {
        console.info(err)
      })
      expect(result).toEqual(true)
    });           
  });

  describe("\nvalidateVariables:::\n", function() {
    beforeEach(function() {
      this.varList = ["", "shenxin", null, undefined]
      this.tips = [
        "不能为空",
        "shenxin不能为空",
        "null不能为空",
        "undefined不能为空",
      ]
      this.callback = function(err) {
        console.log("validateVariables callback::: ", err)
      }
    })
    
    it('normal test', function() {
      let result = V.validateVariables(this.varList, this.tips, this.callback)
      result.then(res => {
        expect(res).toEqual([false, true, false, false])
      })
    });      
  })        
})