// const U = require("../utils/url")
import * as U from '../utils/url'


describe('Test url function:::\n', function() {
  let url = ""
  beforeEach( function() {
    url = "www.baidu.com?address=david&age=11"
  })
  
  describe('Test getQueryObject', function() {
    
    it('should return a map', function() {
      const map = U.getQueryObject(url)
      expect(map instanceof Map).toEqual(true)
      expect(map.get("address")).toEqual("david")
      expect(map.get("age")).toEqual("11")
    });
      
  });

  describe("Test getQueryString", function() {
    
    it('should return the correct value of key', function() {
      let address = U.getQueryString(url, "address")
      expect(address).toEqual("david")

      url = "www.baidu.com"
      address = U.getQueryString(url, "address")
      expect(address).toEqual("")

      url = "www.baidu.com?address="
      address = U.getQueryString(url, "address")
      expect(address).toEqual("")
      
      url = "www.baidu.com?=david"
      address = U.getQueryString(url, "address")
      expect(address).toEqual("")

    });
      
  });
    
});
  