function repeat(string, times) {
  var result = "";
  for (var i = 0; i < times; i++)
    result += string;
  return result;
}
// End function repeat



function TextCell(text) {
  this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
  return this.text.reduce(function(width, line) {
    return Math.max(width, line.length);
  }, 0);
};
TextCell.prototype.minHeight = function() {
  return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
};
// End TextCell



function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}
StretchCell.prototype.minWidth = function() {
  return Math.max(this.width, this.inner.minWidth());
}
StretchCell.prototype.minHeight = function() {
  return Math.max(this.height, this.inner.minHeight());
}
StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height);
}
// End StretchCell



var padding = 2;
var stretch = new StretchCell(new TextCell("onefish\nbluefish"), 1, 2);
console.log(stretch.minWidth());
console.log(stretch.minHeight());
console.log(stretch.draw(stretch.minWidth()+padding, 3));

var padding = 0;
var stretch = new StretchCell(new TextCell("onefish\ntwofish"), 1, 1);
console.log(stretch.minWidth());
console.log(stretch.minHeight());
console.log(stretch.draw(stretch.minWidth()+padding, 3));
