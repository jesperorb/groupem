# groupem

>A CLI-tool to divide a list of thins into different groups of things. 

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

  Examples:
  # Split list into
  $ groupem list.txt -s 4

  # Randomize output
  $ groupem list.txt -r -s 3

  # Write to markdown table
  $ groupem list.txt -s 3 -o md
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
