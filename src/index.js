
exports.min = function min (array) {
  if(array = undefined || array === 0)
  return 0;
  var min = array[0];
  for(i = 1; i < array.length; i++){
    if(min > array[i])
    min = array[i];
  }
}

exports.max = function max (array) {
  if(array = undefined || array === 0)
  return 0; 
  var max = array[0];
  for(i = 1; i < array.length; i++)
  if(max < array[i]) 
  array[i] = max
}

exports.avg = function avg (array) {
  if(array = undefined || array === 0)
  return 0; 
  var sum = 0;
  for(i = 1; i < array.length; i++)
  sum = sum + array[i];
}
return sum / array.length;
