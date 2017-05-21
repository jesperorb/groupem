module.exports = {
  /**
  * Writes the array to a .txt-file
  * @param  {Array} array  Array to print 
  * @return {String}    
  */
  toString: function(array, format){
    let string = "";
    if(format === 'txt'){
      for(let group of array){
        string += `${array.indexOf(group) + 1}\n`;
        for(let item of group){
          string += `${item}\n`;
        }
      }
    }else{
      string = "| | |\n|---|---|\n";
      for(let group of array){
        string += `| ${array.indexOf(group) + 1} |`;
        for(let item of group){
          string += ` ${item}, `;
        }
        string += `|\n`;
      }
      
    }
  return string;
  }
}