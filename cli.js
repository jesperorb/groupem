#!/usr/bin/env node
const meow = require('meow');
const groupem = require('./lib');

const cli = meow(`
  Usage
  $ groupem <input>

  Options
  --size,     -s   size of groups
  --random,   -r   randomize array
  --format,   -f   output format: 'md' or 'txt'

  Examples:
  # Split list into
  $ groupem list.txt -s 4

  # Randomize output
  $ groupem list.txt -r -s 3

  # Write to markdown table
  $ groupem list.txt -s 3 -o md
  `, {
    alias: {
      f: 'format',
      r: "random",
      s: "size"
  }
});

groupem(cli);