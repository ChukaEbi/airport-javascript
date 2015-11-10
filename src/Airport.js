function Airport(){
   this.planes = [];
   this.max = 1;

}

Airport.prototype.hangar = function(){
  return this.planes;
};

Airport.prototype.capacity = function(){
  return this.max;
};

Airport.prototype.land = function(p){
  if (this.planes.length < this.max){
    this.planes.push(p);
  }
  else{
    throw new Error("The airport is full");
  }
};
