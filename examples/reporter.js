"use strict";

module.exports = {
  reporter: function (errors) {
    var len = errors.length;
    var str = "";

    errors.forEach(function (r) {
      var file = r.file;
      var err = r.error;

      str += file + ": line " + err.line + ", col " +
        err.character + ", " + err.reason + "\n";
    });

    if (str) {
      process.stdout.write(str + "\n" + len + " error" +
        ((len === 1) ? "" : "s") + "\n");
    }
  }
};
