var recipes = Object()




function updateObjectWithKeyAndValue(object, key, value){
  var newob = Object.assign(object,newob);    
  newob[key] = value;
  return newob
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  delete object[key]
  return object
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
