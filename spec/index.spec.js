'use strict';

var UUT = require('../dist');

describe('object-helper', function() {

  var uut, stubObject;

  beforeEach(function() {
    stubObject = {};
    uut = new UUT(stubObject);
  });

  describe('get', function() {

    it('should return correct value in object', function() {
      stubObject.a = {b: {c: 1}};
      expect(uut.get('a.b.c')).toBe(1);
    });

  });

  describe('set', function() {

    it('should set the value of an object', function() {
      uut.set('x.y.z', 10);
      expect(stubObject.x.y.z).toBe(10);
    });

  });

});
