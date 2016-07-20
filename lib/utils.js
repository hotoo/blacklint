'use strict';

const fs = require('fs');
const path = require('path');

function getUserHome() {
  return process.env[ process.platform === 'win32' ? 'USERPROFILE' : 'HOME' ];
}

const $HOME = exports.$HOME = getUserHome();

exports.getBlacklintrc = function() {
  const currBlacklintrc = path.resolve('.blacklintrc');
  const homeBlacklintrc = path.join($HOME, '.blacklintrc');
  let blacklintrc;
  if (fs.existsSync(currBlacklintrc)) {
    blacklintrc = currBlacklintrc;
  } else if (fs.existsSync(homeBlacklintrc)) {
    blacklintrc = homeBlacklintrc;
  }
  return fs.readFileSync(blacklintrc).split(/\r\n|\r|\n/).filter(certain => !!certain);
};
