require("any-promise/register/bluebird");
var globby = require("globby");
var path = require("path");
var fsx = require("fs-promise");
var Promise = require("any-promise");

var outputRoot = path.resolve("copy", "here");

var globbyPaths = [
  config.resourcesCopyPath,
  config.fontCopyPath,
  config.cssCopyPath,
];
var sourceFiles = globby(globbyPaths);

return Promise.map(sourceFiles, function (sourceFile) {
  var destFile = path.join(outputRoot, path.basename(sourceFile));
  return fsx
    .copy(sourceFile, destFile)
    .catch(function (error) {
      console.error("doh", error);
    })
    .then(function () {
      console.log("copy is done");
    });
});
