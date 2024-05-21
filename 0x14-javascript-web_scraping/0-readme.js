#!/usr/bin/node

// This script reads from a file and displays the contents on standard output.

const fs = require('fs');
const path = require('path');

function readFromFile () {
  if (process.argv.length !== 3) {
    console.error(`Usage: ${path.basename(process.argv[1])} <filename>`);
    process.exit(1);
  }

  const filename = process.argv[2];
  fs.readFile(filename, 'utf-8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`);
      process.exit(1);
    }
    console.log(data);
  });
}

readFromFile();
