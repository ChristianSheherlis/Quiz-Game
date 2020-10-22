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
})({"js/Questions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.questionBank = void 0;
var questionBank = [{
  question: "What club was Todd Howard famously in?",
  answers: ["Chess", "Newspaper", "Tiny Instrument Ensemble", "Drama"],
  correctAnswer: "Chess"
}, {
  question: "What game did Todd Howard NOT have a part in?",
  answers: ["Elder Scrolls V: Skyrim", "The Terminator: Future Shock", "Fallout 76", "Fallout New Vegas"],
  correctAnswer: "Fallout New Vegas"
}, {
  question: "What year was Nintendo founded?",
  answers: ["1889", "1977", "1973", "1985"],
  correctAnswer: "1889"
}, {
  question: "Who was the Prime Minister of Greece during World War I?",
  answers: ["Constantine I", "Eleftherios Venizelos", "Ioannis Metaxas", "Kyriakos Mitsotakis"],
  correctAnswer: "Eleftherios Venizelos"
}, {
  question: "Who is the only person to win Nobel Prizes in two separate sciences?",
  answers: ["Marie Curie", "Albert Einstein", "Neil DeGrasse Tyson", "Niels Bohr"],
  correctAnswer: "Marie Curie"
}, {
  question: "What is located at geographic coordinates (0, 0)?",
  answers: ["A buoy", "An island", "Nothing", "A rock with a couple of seagulls on it"],
  correctAnswer: "A buoy"
}, {
  question: "What company was Steve Jobs NOT involved with?",
  answers: ["Pixar", "Atari", "Apple", "IBM"],
  correctAnswer: "IBM"
}, {
  question: "What territory must the UK lose for the sun to set on the British Empire?",
  answers: ["The Cayman Islands", "The Pitcairn Islands", "Montserrat", "Turks and Caicos Islands"],
  correctAnswer: "The Pitcairn Islands"
}, {
  question: "Where did the Polynesians never migrate to?",
  answers: ["The Philippines", "New Guinea", "New Zealand", "Tasmania"],
  correctAnswer: "Tasmania"
}, {
  question: "What is the oldest known work of animation in Japan?",
  answers: ["Imokawa Mukuzo Genkanban no Maki", "Katsudō Shashin", "Namakura Gatana", "Hakujaden"],
  correctAnswer: "Katsudō Shashin"
}, {
  question: "What is the highest-grossing franchise in the world?",
  answers: ["Pokémon", "Hello Kitty", "Mickey Mouse", "Winnie the Pooh"],
  correctAnswer: "Pokémon"
}, {
  question: "What country is LEGO based out of?",
  answers: ["United States", "Switzerland", "China", "Denmark"],
  correctAnswer: "Denmark"
}, {
  question: "How many boxes of Kraft Dinner does Canada purchase per week?",
  answers: ["1 million", "1.7 million", "2.2 million", "3.5 million"],
  correctAnswer: "1.7 million"
}, {
  question: "What actor put a life-size statue of themselves in the window of their house?",
  answers: ["David Hasslehoff", "Nick Cage", "Emma Watson", "Willem Dafoe"],
  correctAnswer: "David Hasslehoff"
}, {
  question: "What was once an Olympic Event?",
  answers: ["Sculpting", "Cooking", "Treasure Hunting", "Jousting"],
  correctAnswer: "Sculpting"
}, {
  question: "In The Wizard of Oz, what is Dorothy’s last name?",
  answers: ["Baum", "Gale", "Parker", "Sayers"],
  correctAnswer: "Gale"
}, {
  question: "Where is the International Bowling Museum and Hall of Fame located?",
  answers: ["St. Louis, Missouri", "Henderson, Nevada", "Tulsa, Oklahoma", "Arlington, Texas"],
  correctAnswer: "Arlington, Texas"
}, {
  question: "Which Dr. Seuss book began as a bet?",
  answers: ["Horton Hears A Who", "Green Eggs and Ham", "Fox in Socks", "Wacky Wednesday"],
  correctAnswer: "Green Eggs and Ham"
}, {
  question: "Which voice actor is accredited with the most roles?",
  answers: ["Yuri Lowenthal", "Bryce Papenbrook", "Mel Blanc", "Cherami Leigh"],
  correctAnswer: "Mel Blanc"
}, {
  question: "What console was the first with a “Directional Pad”?",
  answers: ["NES", "Game & Watch", "Intellivision", "Entex “Select a Game”"],
  correctAnswer: "Entex “Select a Game”"
}];
exports.questionBank = questionBank;
},{}],"js/DOM.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DOMSelectors = void 0;
var DOMSelectors = {
  //DOM Selectors here to keep the code cleaner? May move it back if we don't have many DOM Selectors
  start: document.querySelector(".start"),
  displayContainer: document.querySelector(".quiz-container")
};
exports.DOMSelectors = DOMSelectors;
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

var _Questions = require("./Questions");

var _DOM = require("./DOM");

//it is greying it out cause they are no DOM Selectors YET
//I prefer to keep all my global variables up here, though they can be moved if you'd like
function shuffle(array) {
  var currentIndex = array.length,
      temporaryValue,
      randomIndex; // While there remain elements to shuffle...

  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; // And swap it with the current element.

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
} //this shuffles both the order of the questions, and the order to the answers to those questions


function shuffleEntireBank() {
  shuffle(_Questions.questionBank); //this shuffles the order to the answers

  var shuffledQuiz = _Questions.questionBank.map(function (item) {
    item.answers = shuffle(item.answers);
    return item;
  });

  console.log(shuffledQuiz);
} //after shuffling the question bank the below function will pull the first question
//when the function is called again it will call the next question


function init() {
  var questionNumb = -1;
  var score = 0;

  _DOM.DOMSelectors.start.addEventListener("click", function nextQuestion(e) {
    _DOM.DOMSelectors.start.innerHTML = "";
    _DOM.DOMSelectors.displayContainer.innerHTML = "";
    console.log(score);
    questionNumb += 1;
    console.log(questionNumb);

    if (questionNumb === 10) {
      _DOM.DOMSelectors.displayContainer.insertAdjacentHTML("afterbegin", "<p class= \"score\">You Scored ".concat(score, "!</p>\n          <p class= \"score\">Refresh the page to try again!</p>\n        "));
    } else {
      _DOM.DOMSelectors.displayContainer.insertAdjacentHTML("afterbegin", " <p class=\"question\">".concat(_Questions.questionBank[questionNumb].question, "</li>\n      <div class=\"answer-btns\">\n          <button class=\"ans ans0\">").concat(_Questions.questionBank[questionNumb].answers[0], "</button>\n          <button class=\"ans ans1\">").concat(_Questions.questionBank[questionNumb].answers[1], "</button>\n          <button class=\"ans ans2\">").concat(_Questions.questionBank[questionNumb].answers[2], "</button>\n          <button class=\"ans ans3\">").concat(_Questions.questionBank[questionNumb].answers[3], "</button>\n      </div>"));

      var answerSelector = {
        answerZero: document.querySelector(".ans0"),
        answerOne: document.querySelector(".ans1"),
        answerTwo: document.querySelector(".ans2"),
        answerThree: document.querySelector(".ans3")
      };
      console.log(answerSelector);
      answerSelector.answerZero.addEventListener("click", function (e) {
        if (_Questions.questionBank[questionNumb].answers[0] === _Questions.questionBank[questionNumb].correctAnswer) {
          score = score + 1;
          nextQuestion();
        } else {
          nextQuestion();
        }
      });
      answerSelector.answerOne.addEventListener("click", function (e) {
        if (_Questions.questionBank[questionNumb].answers[1] === _Questions.questionBank[questionNumb].correctAnswer) {
          score = score + 1;
          nextQuestion();
        } else {
          nextQuestion();
        }
      });
      answerSelector.answerTwo.addEventListener("click", function (e) {
        if (_Questions.questionBank[questionNumb].answers[2] === _Questions.questionBank[questionNumb].correctAnswer) {
          score = score + 1;
          nextQuestion();
        } else {
          nextQuestion();
        }
      });
      answerSelector.answerThree.addEventListener("click", function (e) {
        if (_Questions.questionBank[questionNumb].answers[3] === _Questions.questionBank[questionNumb].correctAnswer) {
          score = score + 1;
          nextQuestion();
        } else {
          nextQuestion();
        }
      });
    }
  });
}

shuffleEntireBank();
init();
},{"./Questions":"js/Questions.js","./DOM":"js/DOM.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64621" + '/');

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
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map