// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
var string = "\n.cat-body {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%);\n    width: 300px;\n    height: 188px;\n    background: #bfbab3;\n    border-radius: 30px 90px 90px 90px;\n}\n.ear1, .ear2 {\n    position: absolute;\n    left: 20px;\n    bottom: 150px;\n    height: 50px;\n    width: 50px;\n    border-radius: 12px;\n    background: #bfbab3;\n    transform: rotate(45deg);\n}\n.ear2{\n    position: absolute;\n    left: 110px;\n    bottom: 150px;\n}\n@keyframes wave{\n    0%{\n        transform: rotate(45deg);\n    }\n    33%{\n        transform: rotate(55deg);\n    }\n    66%{\n        transform: rotate(35deg);\n    }\n    100%{\n        transform: rotate(45deg);\n    }\n}\n.ear1:hover, .ear2:hover{\n    animation: wave 400ms infinite linear;\n}\n.stripe1, .stripe2, .stripe3 {\n    position: absolute;\n    left: 70px;\n    top: 0;\n    width: 10px;\n    height: 25px;\n    background: #808080;\n    border-radius: 10px;\n}\n.stripe2 {\n    position: absolute;\n    left: 85px;\n    top: 0;\n}\n.stripe3 {\n    position: absolute;\n    left: 100px;\n    top: 0;\n}\n.stripe4, .stripe5 {\n    position: absolute;\n    left: 160px;\n    top: 0;\n    width: 20px;\n    height: 25px;\n    background: #808080;\n    border-radius: 0 0 10px 10px;\n}\n.stripe5 {\n    position: absolute;\n    left: 190px;\n    top: 0;\n}\n.beard-left1, .beard-right1, .beard-left2, .beard-right2 {\n    width: 30px;\n    height: 10px;\n    background: #4e2c11;\n    border-radius: 10px;\n}\n.beard-left1 {\n    position: absolute;\n    top: 45px;\n    left: -10px;\n    transform: rotate(10deg);\n}\n.beard-right1 {\n    position: absolute;\n    top: 65px;\n    left: -10px;\n    transform: rotate(-10deg);\n}\n.beard-left2 {\n    position: absolute;\n    top: 45px;\n    left: 160px;\n    transform: rotate(-10deg);\n}\n.beard-right2 {\n    position: absolute;\n    top: 65px;\n    left: 160px;\n    transform: rotate(10deg);\n}\n.eye1, .eye2 {\n    position: absolute;\n    left: 40px;\n    top: 40px;\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n    background: #4e2c11;\n}\n.eye2 {\n    position: absolute;\n    left: 125px;\n    top: 40px;\n}\n.nose > p {\n    position: absolute;\n    left: 80px;\n    top: 40px;\n    color: #4e2c11;\n    font-size: 22px;\n    font-weight: 800;\n}\n@keyframes wave2{\n    0%{\n        transform: rotate(0deg);\n    }\n    33%{\n        transform: rotate(5deg);\n    }\n    66%{\n        transform: rotate(-5deg);\n    }\n    100%{\n        transform: rotate(0deg);\n    }\n}\n.nose:hover p{\n    transform-origin: center bottom;\n    animation: wave2 300ms infinite linear;\n}\n.footer1, .footer2{\n    position: absolute;\n    bottom: -20px;\n    left: 50px;\n    height: 35px;\n    width: 30px;\n    background: #bfbab3;\n    border-radius: 15px;\n}\n.footer2{\n    position: absolute;\n    bottom: -20px;\n    left: 200px;\n}\n.tail-row {\n    position: absolute;\n    bottom: 120px;\n    left: 260px;\n    height: 25px;\n    width: 80px;\n    background: #bfbab3;\n    border-radius: 15px;\n}\n.tail-row::before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 40px;\n    height: 25px;\n    width: 15px;\n    background: #808080;\n}\n.tail-col {\n    position: absolute;\n    bottom: 120px;\n    left: 320px;\n    height: 50px;\n    width: 25px;\n    background: #bfbab3;\n    border-radius: 15px;\n}\n";
var n = 1;
var speed = 100;
var demo = document.querySelector("#demo");
var demo2 = document.querySelector("#demo2");

var run = function run() {
  n += 1;

  if (n > string.length) {
    window.clearInterval(id);
    return;
  }

  demo.innerText = string.substring(0, n);
  demo2.innerHTML = string.substring(0, n);
  demo.scrollTop = demo.scrollHeight;
};

var paly = function paly() {
  return setInterval(run, speed);
};

var pause = function pause() {
  window.clearInterval(id);
};

demo.innerText = string.substring(0, n);
demo2.innerHTML = string.substring(0, n);
var id = paly();

document.querySelector('#btnPause').onclick = function () {
  pause();
};

document.querySelector('#btnPlay').onclick = function () {
  id = paly();
};

document.querySelector('#btnSlow').onclick = function () {
  pause();
  speed = 200;
  id = paly();
};

document.querySelector('#btnNormal').onclick = function () {
  pause();
  speed = 100;
  id = paly();
};

document.querySelector('#btnFast').onclick = function () {
  pause();
  speed = 0;
  id = paly();
};
},{}],"../../../AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50385" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map