describe("Weather",function(){
  var weather;

  beforeEach(function(){
    weather = new Weather();
  });

  it('should be able to tell if it is stormy', function(){
    expect(weather.isStormy).toBeDefined();
  });
});
