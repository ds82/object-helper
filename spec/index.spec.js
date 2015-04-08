'use strict';

var UUT = require('../dist');

describe('object-helper', function() {

  describe('get', function() {

    var uut, stubObject;

    beforeEach(function() {
      stubObject = {};
      uut = new UUT(stubObject);
    });

    it('should return correct value in object', function() {
      stubObject.a = {b: {c: 1}};
      expect(uut.get('a.b.c')).toBe(1);
    });

  });

});
