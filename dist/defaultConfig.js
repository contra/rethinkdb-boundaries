'use strict';

exports.__esModule = true;
exports.default = {
  ftp: {
    host: 'ftp2.census.gov',
    port: 21
  },
  rethink: {
    silent: true,
    host: 'localhost',
    port: 29015,
    ssl: false,
    db: 'test',
    table: 'Boundary'
  },
  base: '/geo/tiger/TIGER2015/',
  objects: ['STATE', 'PLACE']
};
module.exports = exports['default'];