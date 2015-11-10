function Weather(){
  this.Storm = 0.5;
}

Weather.prototype.isStormy = function(){
  return (Math.random() > this.Storm);
};
