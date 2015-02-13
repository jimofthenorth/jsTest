function ArraySeq(array) {
  this.currentElement = -1;
  this.array = array;
}
ArraySeq.prototype.current = function() {
  return this.array[this.currentElement];
}
ArraySeq.prototype.next = function() {
  if(this.currentElement >= this.array.length - 1) {
    return false;
  }
  this.currentElement++;
  return true;
}

// TEST ArraySeq(array)
/*
var as = new ArraySeq([1, 2]);
console.log(as.current());
as.next();
console.log(as.current());
*/


function RangeSeq(from, to) {
  this.currentElement = from - 1;
  this.to = to;
}
RangeSeq.prototype.current = function() {
  return this.currentElement;
}
RangeSeq.prototype.next = function() {
  if(this.currentElement >= this.to) {
    return false;
  }
  this.currentElement++;
  return true;
}



function logFive(sequence) {
  for(var i = 0; i < 5; i++) {
    if(!sequence.next()) {
      return false;
    }
    else {
      console.log(sequence.current());
    }
  }
}


logFive(new ArraySeq([1, 2]));
logFive(new RangeSeq(100, 1000));
logFive(new ArraySeq([]));
