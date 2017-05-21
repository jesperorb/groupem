const fs = require('fs');

module.exports = {

  toFile: function(string, format){
    fs.writeFileSync(`output.${format}`, string, 'utf-8', (error) => {
      if (error) throw error;
      console.log(`Wrote to file: output.${format}`);
    })
  }
}