var path = require('path');

var framework = function(files) {
  files.unshift({
    pattern: path.resolve(require.resolve('chai-datetime')),
    included: true,
    served: true,
    watched: false
  });
};

framework.$inject = ['config.files'];
module.exports = {'framework:chai-datetime': ['factory', framework]};
