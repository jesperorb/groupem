const should = require('should');
const fs = require('fs');
const arr = require('./lib/arrayFunctions.js');
const format = require('./lib/format.js');
const groupem = require('./lib/index.js');
const output = require('./lib/output.js');
const faker = require('faker');

describe('cli', ()=> {

  describe('i/o', ()=> {
    let fakeFile = {};
    before(() => {
      
      fakeFileExists = {
        input: ["test.txt"],
        flags: {
          size: 3,
          format: "txt"
        }
      };

      let string = "";
      for(let i = 0; i < 10; ++i){
        string += faker.name.findName() + "\n";
      }
      const file = fs.writeFileSync('test.txt', string , 'utf-8');   
    });

    it('should output a text file', () => {
      groupem(fakeFileExists);
      fs.existsSync('output.txt').should.be.true;
    });

    afterEach(() => {
      fs.unlinkSync('output.txt', (error) => {
        if (error) throw error;
      });
      fs.unlinkSync('test.txt', (error) => {
        if (error) throw error;
      });
    });
  });

  describe('array functions', ()=> {
    let array, clonedArray, chunkedArray;
    beforeEach(()=> {
      array = [ true , "two", "three", 5.5, "five", "six", 5, 6];
      clonedArray = [...array];
      chunkedArray = [ [true, "two"], ["three", 5.5], ["five", "six"], [5,6] ];
    });
    it('should shuffle an array', ()=> {
      arr.randomize(array).should.have.lengthOf(array.length);
      arr.randomize(clonedArray).toString().should.not.be.equal(array.toString());
    });
    it('should chunk the array', ()=> {
      arr.chunk(array, 2).toString().should.equal(chunkedArray.toString());
    });
  });

  describe('format array to string', () => {
    //Yes this is test 🤡🤠
    let testArray = [["Hello", "it is"], ["me", "and"]];
    let outputTxt = "1\nHello\nit is\n2\nme\nand\n";
    let outputMd  = "| | |\n|---|---|\n| 1 | Hello,  it is, |\n| 2 | me,  and, |\n";
    it('should format array to string txt', () => {
      format.toString(testArray, "txt").should.equal(outputTxt);
    });
    it('should format array to string md', () => {
      format.toString(testArray, "md").should.equal(outputMd);
    });
  });
});
