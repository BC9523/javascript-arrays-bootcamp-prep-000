var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(arrayName,element){
 return [element,...arrayName];
}

function destructivelyAddElementToBeginningOfArray(arrayName,element){
  arrayName.unshift(element);
  return arrayName;
}
function addElementToEndOfArray(arrayName,element){
  return [...arrayName,element];
}
function destructivelyAddElementToEndOfArray(){
  arrayName.push(element);
  return arrayName;
}