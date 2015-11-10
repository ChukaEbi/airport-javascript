describe("Plane", function(){
  var plane;

  beforeEach(function(){
    plane = new Plane();
  });

  describe("when a plane lands", function(){
    it('should should be able to land', function(){
      expect(plane.land).toBeDefined();
    });
  });

  describe("when a plane takes off", function(){
    it('should be able to take off', function(){
      expect(plane.takeOff).toBeDefined();
    });
  });
});
