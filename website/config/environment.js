'use strict';

module.exports = function (environemnt) {
  let ENV = {
    modulePrefix: 'website',
    environemnt,
    rootURL: '/',
    locationType: 'history',

  }

  return ENV;
};
