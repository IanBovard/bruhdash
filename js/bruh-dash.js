var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (array) {
    return array[0];
  },


  // returns the last element of an array
  last: function (array) {
    return array[array.length-1];
  },

  // returns the index of the first matching element from left to right
  indexOf: function (array, element) {
    for (var i=0;i<array.length;i++){
      if(array[i] === element){
        console.log(array[i]);
        console.log(i);
        return i;
    }

  }
  return -1;
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (array, element) {
    for (var i = array.length-1; i >= 0; i--){
      if(array[i] === element){
        console.log(array[i]);
        console.log(i);
        return i;
      }
    }
    return -1;
  },

  // returns an array with all elements except for the last element
  initial: function (array) {
    return array.slice(0, array.length-1);


  },

  // returns an array with all falsey values removed
  compact: function(array) {
    return array.filter(Boolean);
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (array, start, end) {
    var newArray = array.slice(start, end);
    console.log(newArray);
    return newArray;

  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(array, amount){
    if (amount === 0){
      return array;
    }else if (typeof amount !== "number"){
      array.shift();
      console.log(array);
      return array;
    }else{
      array.splice(0, amount);
      console.log(array);
      return array;
    }
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(array, amount) {
    if (amount === 0){
      return array;
    }else if (typeof amount !== "number"){
      array.pop();
      return array;
    }else{
      array.splice(array.length-amount, amount);
      return array;
    }
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (array, amount) {
    if (amount === 0){
      var emptyArray = [];
      return emptyArray;
    }else if (amount > array.length){
      return array;
    }else if (typeof amount !== "number"){
      array.splice(1, array.length);
      return array;
    }else{
      return array.slice(0, amount);
    }
  },

  // creates a slice of an array with n elements taken from the end
 /* takeRight: function (array, amount) {
    if (amount === 0){
      var emptyArray = [];
      return emptyArray;
    }else if (amount !== "number"){
      array.splice(0, array.length-1);
      console.log(array);
      return array;
    }else if (amount > array.length){
      return array;
    }else{
       array.splice(0, value-1);
       console.log(array);
       return array;
    }
  },*/
    takeRight: function (array,value) {
    if(typeof value !== "number"){
      array.splice(0, array.length-1);
      //console.log(array);
      return array;
    }else if(value === 0){
      array.splice(0, array.length);
      return array;
    }else if(value>array.length){
      return array;
    }else{
      array.splice(0, value-1);
      //console.log(array);
      return array;
    }
  },


  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(array, element, start, end) {
    for (var i = 0; i < array.length; i++){
      if (!start || !end){
        array[i] = element;
        console.log(array);
      }else{
        for (var j = start; j < end; j++){
          array[j] = element;
          console.log(array);
        }
      }
    }
    return array;
  },

  // removes all given values from an array
  pull: function (array1, array2) {
      for (var i = 0; i < array1.length; i++){
        for (var j = 0; j < array2.length; j++){
          if (array2[j] === array1[i]){
            array1.splice(i,1);
            console.log(array1);
          }
        }
      }
      return array1;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (array1, array2) {
    var count = 0;
    for (var i = 0; i < array1.length; i++){
      for (var j = 0; j < array2.length; j++){
        if (array2[j] === i){
          console.log(array1.splice(array2[j]-count, 1));
          count++;
        }
      }
    }
    return array1;
  },



  // creates an array excluding all the specified values
  without: function(array1, array2) {
      for (var i = 0; i < array1.length; i++){
        for (var j = 0; j < array2.length; j++){
          if (array2[j] === array1[i]){
            array1.splice(i,1);
            console.log(array1);
          }
        }
      }
      return array1;
  },

  // returns an array with specified values excluded
  difference: function(array1, array2) {
    var count = 0;
    for (var i = 0; i < array1.length; i++){
      for (var j = 0; j < array2.length; j++){
        if (array2[j] === i){
          console.log(array1.splice(array2[j]-count, 1));
          count++;
        }
      }
    }
    return array1;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/

  // creates an array of grouped elements
  zip: function () {

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {

  }
};