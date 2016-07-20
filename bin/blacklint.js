#!/usr/bin/env node

'use strict';

const path = require('path');
const child_process = require('child_process');

const cwd = path.resolve(process.argv[2] || process.cwd());

const grep = child_process.spawn('grep', [
  '--color',
  '-r',
  '\\(describe\\|it\\)\\.only(',
  cwd,
], {
  cwd: cwd,
});

// Found counts of "describe.only" or "it.only".
let lines = 0;

grep.stdout.on('data', (data) => {
  lines += String(data).split(/\r\n|\r|\n/).length - 1;
  process.stdout.write(data);
});
grep.stderr.on('data', (data) => {
  process.stderr.write(data);
});

grep.on('error', err => {
  if (err.code === 'ENOENT') {
    console.error('No such file or directory:', cwd);
  } else {
    console.error('Lint error:', err);
  }
});

grep.on('close', (code) => {
  // grep: exit 1 when found nothing.
  // for this lint, is good news.
  if (code === 1) {
    code = 0;
  }
  process.exit(code || lines);
});
