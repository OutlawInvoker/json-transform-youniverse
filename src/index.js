module.exports = {

  transform: function (array, key) {
    var output = [];
    for(var i=0; i<array.length; i++){
      var obj = {};
      var arr = [];
      for(var val in array[i]){
        arr.push(array[i][val]);
      }
      obj[key] = arr;
      output.push(obj);
    }
    return output;
  }

};