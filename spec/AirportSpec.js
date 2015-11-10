describe("Airport", function(){
  var airport;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });

  it('should possess no planes upon creation', function(){
    expect(airport.hangar()).toEqual([]);
  });

  describe('landing',function(){
    it('should prevent planes from landing when full',function(){
      message = 'The airport is full';
      airport.land(plane);
      expect(function(){airport.land(plane);}).toThrow(new Error(message));
    });
  });
});
