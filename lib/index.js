const arr = require('./arrayFunctions.js');
const format  = require('./format.js');
const output = require('./output.js');

module.exports = function groupem(cli){
  
  let fileFormat = cli.flags.format ? cli.flags.format : "txt";
  try{
    if(cli.input[0]){

      let array = arr.fromFile(cli.input[0])

      if(cli.flags.random){
        array = arr.randomize(array);  
      }
      let string = format.toString(arr.chunk(array, cli.flags.size), fileFormat);
      if(cli.flags.format){
        output.toFile(string, fileFormat);      
      }
      else{
        console.log(string);
      }

    }else{
      cli.showHelp();
    }
  }catch(error){
    if(error.code === 'ENOENT'){
      console.log('File not found');
    }else{
      throw error;
    }
  }
}
