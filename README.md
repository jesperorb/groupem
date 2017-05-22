# groupem
[![Build Status](https://travis-ci.org/jesperorb/groupem.svg?branch=master)](https://travis-ci.org/jesperorb/groupem) [![Coverage Status](https://coveralls.io/repos/github/jesperorb/groupem/badge.svg?branch=master)](https://coveralls.io/github/jesperorb/groupem?branch=master)


>A CLI-tool to divide a list of things into different groups of things. 

Takes a file with items separated with newline.

## Installation

```bash
npm install --global groupem
```

## Usage

```bash
Usage
  $ groupem <input>

  Options
  --size,     -s   size of groups
  --random,   -r   randomize array
  --format,   -f   output format: 'md' or 'txt'
  --terminal  -t   output to terminal instead of file

  Examples:
  # Split list into groups of 4
  $ groupem list.txt -s 4

  # Randomize output
  $ groupem list.txt -r -s 3

  # Write to markdown table
  $ groupem list.txt -s 3 -f md
```

### Example

```
$ groupem list.txt -s 3 -f md
```

_`list.txt`_
```
Steve Van Greeben
Jorien Faandegeer
Juanita Arbol
Gorm Lindström
Odd Erixson
Dorma Golaga
```

_`output.md`_
```
|   |   |
|---|---|
| 1 | Steve Van Greeben, Jorien Faandegeer, Juanita Arbol, |
| 2 | Gorm Lindström, Odd Erixson, Dorma Golaga,           |
```

## Tests

```
npm test
```

## Todo

* Make so you can name the output file
* More error handling regarding path
* Clean up main function (less `if/else`-branches in main function)
* More testing? Testing I/O, relevant?
* 