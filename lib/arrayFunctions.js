const fs =  require('fs');

module.exports = {

/**
 * Read file with fs and map to an array
 * @param  {String} file  Name of file
 * @return {Array}        Array of names split by newline
 */
fromFile: function(file) {
  let items = fs.readFileSync(file, 'utf-8');
  let list = items.split('\n').filter(val => val);
  return list.map(name => name);
},

chunk: function(array, size) {
  return array.map((item,index) => { 
    return index % size === 0 ? array.slice( index, index + size ) : null; })
            .filter(item => item);
},

/**
 * Randomizes array
 * @param  {Array} array  Sorted array
 * @return {Array}        randomized array
 */
randomize : function(array){
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
}
