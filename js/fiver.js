  (function() {
      app.startUps = [];
      app.has = function(value) {
        var found = true;
        for (var i=0; i<=arguments.length-1; i++) {
          var value = arguments[i];
          if (!(typeof value !== "undefined" && value !== null && value !== "")) found = false;
        }
        return found;
      };
      app.camelCase = function camelize(str, capitalFirst) {
        if (!app.has(capitalFirst)) capitalFirst = false;
        var result = str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
          return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
        if (capitalFirst) result = result.substr(0, 1).toUpperCase() + result.substr(1, 999);
        return result;
      };
      app.properCase = function(str) {
        return str.replace(
          /\w\S*/g,
          function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); }
        );
      };
    })();
  app["build"] = {};
  app["config"] = {};
  app["images"] = {};
  app["styles"] = {};
  
  (function() {
      if (app.has(app.api) === true) { // callbacks
        (function() {
          var callbackLevel = function(apiLevel) {
            if (app.has(apiLevel) && !app.has(apiLevel.length)) {
              for (var moduleName in apiLevel) {
                if (app.has(apiLevel[moduleName]) === true) {
                  callbackLevel(apiLevel[moduleName]);
                  for (var key in apiLevel[moduleName]) {
                    (function(moduleName, key) {
                      var func = apiLevel[moduleName][key];
                      if (key.split("Callback").length > 1 && typeof func === "function") {
                        apiLevel[moduleName][key.split("Callback").shift() + "Multi"] = async function(count, name, callback, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15) {
                          return new Promise(function(resolve, reject) {
                            if (!app.has(count)) count = 1;
                            var rCount = 0;
                            var resolveCount;
                            for (var i=0; i<=count-1; i++) {
                              (async function(index) {
                                var countResult = await apiLevel[moduleName][key.split("Callback").shift()](name, async function(arg1, arg2, arg3, arg4, arg5) {
                                  if (typeof callback === "function") {
                                    var result = await callback(arg1, arg2, arg3, arg4, arg5);
                                    if (result === true && !app.has(resolveCount)) {
                                      console.log("MULTI INDEX:", index);
                                      resolveCount = index;
                                    }
                                    return result;
                                  }
                                }, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15);
                                rCount += 1;
                                if (resolveCount === index || rCount >= count) resolve(countResult);
                              })(i);
                            }
                          });
                        };
                        apiLevel[moduleName][key.split("Callback").shift()] = async function(name, callback, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15) {
                          if (typeof callback !== "function") {
                            arg15 = arg13; arg14 = arg12; arg13 = arg11; arg12 = arg10; arg11 = arg9; arg10 = arg8;arg9 = arg7; arg8 = arg6; arg7 = arg5; arg6 = arg4; arg5 = arg3; arg4 = arg2; arg3 = arg1; arg2 = callback; arg1 = name;
                          }
                          var output, error;
                          await apiLevel[moduleName][key](async function(data, page) {
                            var result = typeof callback === "function" ? await callback(data, page) : undefined;
                            if (app.has(result) && app.has(result.length)) {
                              if (!app.has(output)) output = [];
                              output = output.concat(result);
                            } else {
                              output = data;
                            }
                            return result;
                          }, function(err, errorText) {
                            error = {error: err, errorText};
                          }, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15);
                          var obj = {};
                          if (typeof callback !== "function") return output;
                          obj[name] = output;
                          obj.error = error;
                          return obj;
                        };
                      }
                    })(moduleName, key);
                  }
                }
              }
            }
          };
          callbackLevel(app.api);
        })();
      }
  
      // call in the end
      if (typeof app.start === "function") {
        app.start();
      }
  
      for (var i=0; i<=app.startUps.length-1; i++) {
        if (typeof app.startUps[i] === "function") {
          app.startUps[i]();
        }
      }
      for (var i=0; i<=app.startUps.length-1; i++) {
        if (!(typeof app.startUps[i] === "function")) {
          setTimeout(app.startUps[i].callback, app.startUps[i].time);
        }
      }
    })();
(function() {
    app.startUps = [];
    app.has = function(value) {
      var found = true;
      for (var i=0; i<=arguments.length-1; i++) {
        var value = arguments[i];
        if (!(typeof value !== "undefined" && value !== null && value !== "")) found = false;
      }
      return found;
    };
    app.camelCase = function camelize(str, capitalFirst) {
      if (!app.has(capitalFirst)) capitalFirst = false;
      var result = str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      }).replace(/\s+/g, '');
      if (capitalFirst) result = result.substr(0, 1).toUpperCase() + result.substr(1, 999);
      return result;
    };
    app.properCase = function(str) {
      return str.replace(
        /\w\S*/g,
        function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); }
      );
    };
  })();
app["build"] = {};
app["config"] = {};
app["images"] = {};
app["styles"] = {};

(function() {
    if (app.has(app.api) === true) { // callbacks
      (function() {
        var callbackLevel = function(apiLevel) {
          if (app.has(apiLevel) && !app.has(apiLevel.length)) {
            for (var moduleName in apiLevel) {
              if (app.has(apiLevel[moduleName]) === true) {
                callbackLevel(apiLevel[moduleName]);
                for (var key in apiLevel[moduleName]) {
                  (function(moduleName, key) {
                    var func = apiLevel[moduleName][key];
                    if (key.split("Callback").length > 1 && typeof func === "function") {
                      apiLevel[moduleName][key.split("Callback").shift() + "Multi"] = async function(count, name, callback, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15) {
                        return new Promise(function(resolve, reject) {
                          if (!app.has(count)) count = 1;
                          var rCount = 0;
                          var resolveCount;
                          for (var i=0; i<=count-1; i++) {
                            (async function(index) {
                              var countResult = await apiLevel[moduleName][key.split("Callback").shift()](name, async function(arg1, arg2, arg3, arg4, arg5) {
                                if (typeof callback === "function") {
                                  var result = await callback(arg1, arg2, arg3, arg4, arg5);
                                  if (result === true && !app.has(resolveCount)) {
                                    console.log("MULTI INDEX:", index);
                                    resolveCount = index;
                                  }
                                  return result;
                                }
                              }, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15);
                              rCount += 1;
                              if (resolveCount === index || rCount >= count) resolve(countResult);
                            })(i);
                          }
                        });
                      };
                      apiLevel[moduleName][key.split("Callback").shift()] = async function(name, callback, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15) {
                        if (typeof callback !== "function") {
                          arg15 = arg13; arg14 = arg12; arg13 = arg11; arg12 = arg10; arg11 = arg9; arg10 = arg8;arg9 = arg7; arg8 = arg6; arg7 = arg5; arg6 = arg4; arg5 = arg3; arg4 = arg2; arg3 = arg1; arg2 = callback; arg1 = name;
                        }
                        var output, error;
                        await apiLevel[moduleName][key](async function(data, page) {
                          var result = typeof callback === "function" ? await callback(data, page) : undefined;
                          if (app.has(result) && app.has(result.length)) {
                            if (!app.has(output)) output = [];
                            output = output.concat(result);
                          } else {
                            output = data;
                          }
                          return result;
                        }, function(err, errorText) {
                          error = {error: err, errorText};
                        }, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15);
                        var obj = {};
                        if (typeof callback !== "function") return output;
                        obj[name] = output;
                        obj.error = error;
                        return obj;
                      };
                    }
                  })(moduleName, key);
                }
              }
            }
          }
        };
        callbackLevel(app.api);
      })();
    }

    // call in the end
    if (typeof app.start === "function") {
      app.start();
    }

    for (var i=0; i<=app.startUps.length-1; i++) {
      if (typeof app.startUps[i] === "function") {
        app.startUps[i]();
      }
    }
    for (var i=0; i<=app.startUps.length-1; i++) {
      if (!(typeof app.startUps[i] === "function")) {
        setTimeout(app.startUps[i].callback, app.startUps[i].time);
      }
    }
  })();