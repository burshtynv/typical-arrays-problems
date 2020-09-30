
exports.min = function min (array) {
  if (array === undefined || array.length === 0)
  return 0;
  var minValue = array[0];
  for( var i = 0; i < array.length; i++){
    if(array[i] < minValue)
    minValue = array[i];
}
return minValue;
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0)
  return 0; 
  var maxValue = array[0];
  for( var i = 0; i < array.length; i++){
  if(array[i] > maxValue) 
  maxValue = array[i];
}
return maxValue;
}


exports.avg = function avg (array) {
  if (array === undefined || array.length === 0)
  return 0; 
  var sumValue = 0;
  for( var i = 0; i < array.length; i++){
  sumValue = sumValue + array[i];
}
return sumValue / array.length;
}
