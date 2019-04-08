var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(arrayName,element){
 return [element,...arrayName];
}

function destructivelyAddElementToBeginningOfArray(arrayName,element){
  arrayName.unshift(element);
  return arrayName;
}