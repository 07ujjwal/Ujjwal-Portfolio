// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"l9Mez":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"ebWYT":[function(require,module,exports) {
var _skillsComponent = require("./components/skillsComponent");
var _experiencesComponent = require("./components/experiencesComponent");
var _projectsComponentJs = require("./components/projectsComponent.js");
var _activitiesComponentJs = require("./components/ActivitiesComponent.js");
document.querySelector(".nav__toggle--open").addEventListener("click", function() {
    document.querySelector(".nav__links").classList.toggle("show");
    document.querySelector(".nav__toggle--open").classList.toggle("show");
    document.querySelector(".nav__toggle--close").classList.toggle("show");
});
document.querySelector(".nav__toggle--close").addEventListener("click", function() {
    document.querySelector(".nav__links").classList.toggle("show");
    document.querySelector(".nav__toggle--open").classList.toggle("show");
    document.querySelector(".nav__toggle--close").classList.toggle("show");
});
document.addEventListener("DOMContentLoaded", ()=>{
    const aboutMeSection = document.querySelector(".about-me");
    const skillLogos = document.querySelectorAll(".skill__logo");
    const scrollToContactBtn = document.getElementById("scrollToContact");
    skillLogos.forEach((logo)=>{
        logo.style.animation = "float 2s ease-in-out infinite";
    });
    const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting) aboutMeSection.classList.remove("exit");
            else aboutMeSection.classList.add("exit");
        });
    }, {
        threshold: 0.1
    });
    observer.observe(aboutMeSection);
    if (scrollToContactBtn) scrollToContactBtn.addEventListener("click", function(e) {
        e.preventDefault();
        const contactSection = document.getElementById("contactId");
        if (contactSection) {
            const offSetTop = contactSection.offsetTop;
            window.scrollTo({
                top: offSetTop,
                behavior: "smooth"
            });
        }
    });
});
//PROJECT CARDS
document.addEventListener("DOMContentLoaded", ()=>{
    const projectCards = document.querySelectorAll(".project-card");
    const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting) {
                entry.target.classList.add("project-card-enter");
                entry.target.classList.remove("project-card-exit");
            } else {
                entry.target.classList.remove("project-card-enter");
                entry.target.classList.add("project-card-exit");
            }
        });
    }, {
        threshold: 0.2
    });
    projectCards.forEach((card)=>{
        observer.observe(card);
    });
});
// darkMode
document.addEventListener("DOMContentLoaded", function() {
    const toggleModeButton = document.getElementById("toggleMode");
    const body = document.body;
    const icon = toggleModeButton.querySelector("ion-icon");
    function updateIcon(isDarkMode) {
        icon.setAttribute("name", isDarkMode ? "sunny" : "moon");
    }
    toggleModeButton.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
        const isDarkMode = body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDarkMode);
        updateIcon(isDarkMode);
    });
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) body.classList.add("dark-mode");
    updateIcon(isDarkMode);
});
document.addEventListener("DOMContentLoaded", ()=>{
    (0, _skillsComponent.renderSkills)();
    (0, _experiencesComponent.renderExperiences)();
    (0, _projectsComponentJs.renderProjects)();
    (0, _activitiesComponentJs.renderActivities)();
});

},{"./components/skillsComponent":"ccwu9","./components/experiencesComponent":"fYmJ6","./components/projectsComponent.js":"dxF16","./components/ActivitiesComponent.js":"7jCiP"}],"ccwu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderSkills", ()=>renderSkills);
var _skillsData = require("../data/skillsData");
console.log((0, _skillsData.skillsData));
function renderSkills() {
    const skillsContainer = document.getElementById("skillsContainer");
    (0, _skillsData.skillsData).forEach((category)=>{
        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("skills__category");
        const categoryTitle = document.createElement("h2");
        categoryTitle.classList.add("skills__category__title");
        categoryTitle.textContent = category.category;
        const categoryContainer = document.createElement("div");
        categoryContainer.classList.add("skills__category__container");
        category.skills.forEach((skill)=>{
            const skillDiv = document.createElement("div");
            skillDiv.classList.add("skill");
            const skillLogo = document.createElement("img");
            skillLogo.src = skill.logo;
            skillLogo.alt = skill.name;
            skillLogo.classList.add("skill__logo");
            const skillName = document.createElement("span");
            skillName.classList.add("skill__name");
            skillName.textContent = skill.name;
            const skillLevel = document.createElement("div");
            skillLevel.classList.add("skill__level");
            const skillLevelBar = document.createElement("div");
            skillLevelBar.classList.add("skill__level-bar");
            skillLevelBar.style.width = `${skill.level}%`;
            skillLevel.appendChild(skillLevelBar);
            skillDiv.appendChild(skillLogo);
            skillDiv.appendChild(skillName);
            skillDiv.appendChild(skillLevel);
            categoryContainer.appendChild(skillDiv);
        });
        categoryDiv.appendChild(categoryTitle);
        categoryDiv.appendChild(categoryContainer);
        skillsContainer.appendChild(categoryDiv);
    });
}

},{"../data/skillsData":"6tdFO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6tdFO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "skillsData", ()=>skillsData);
const skillsData = [
    {
        category: "Languages",
        skills: [
            {
                name: "C/C++",
                level: 85,
                logo: "https://img.icons8.com/color/48/000000/c-programming.png"
            },
            {
                name: "JavaScript",
                level: 90,
                logo: "https://img.icons8.com/color/48/000000/javascript.png"
            },
            {
                name: "TypeScript",
                level: 80,
                logo: "https://img.icons8.com/color/48/000000/typescript.png"
            }
        ]
    },
    {
        category: "Backend",
        skills: [
            {
                name: "Node.js",
                level: 80,
                logo: "https://img.icons8.com/color/48/000000/nodejs.png"
            },
            {
                name: "Express.js",
                level: 75,
                logo: "https://img.icons8.com/ios/50/000000/express-js.png"
            },
            {
                name: "Microservices",
                level: 70,
                logo: "https://img.icons8.com/color/48/000000/microservices.png"
            }
        ]
    },
    {
        category: "Frontend",
        skills: [
            {
                name: "React",
                level: 85,
                logo: "https://img.icons8.com/color/48/000000/react-native.png"
            },
            {
                name: "TailwindCSS",
                level: 70,
                logo: "https://img.icons8.com/fluency/48/000000/tailwind-css.png"
            },
            {
                name: "HTML",
                level: 95,
                logo: "https://img.icons8.com/color/48/000000/html-5.png"
            },
            {
                name: "CSS",
                level: 85,
                logo: "https://img.icons8.com/color/48/000000/css3.png"
            },
            {
                name: "Bootstrap",
                level: 75,
                logo: "https://img.icons8.com/color/48/000000/bootstrap.png"
            }
        ]
    },
    {
        category: "Other Frameworks",
        skills: [
            {
                name: "Next.js",
                level: 40,
                logo: "https://img.icons8.com/ios/50/000000/nextjs.png"
            }
        ]
    },
    {
        category: "Databases",
        skills: [
            {
                name: "PostgreSQL",
                level: 80,
                logo: "https://img.icons8.com/color/48/000000/postgresql.png"
            },
            {
                name: "MongoDB",
                level: 75,
                logo: "https://img.icons8.com/color/48/000000/mongodb.png"
            }
        ]
    },
    {
        category: "Developer Tools",
        skills: [
            {
                name: "Postman",
                level: 70,
                logo: "https://img.icons8.com/dusk/64/000000/postman-api.png"
            },
            {
                name: "VS Code",
                level: 90,
                logo: "https://img.icons8.com/color/48/000000/visual-studio-code-2019.png"
            },
            {
                name: "GitHub",
                level: 85,
                logo: "https://img.icons8.com/fluent/48/000000/github.png"
            }
        ]
    },
    {
        category: "DevOps",
        skills: [
            {
                name: "Docker",
                level: 75,
                logo: "https://img.icons8.com/color/48/000000/docker.png"
            },
            {
                name: "Kubernetes",
                level: 60,
                logo: "https://img.icons8.com/color/48/000000/kubernetes.png"
            },
            {
                name: "Jenkins",
                level: 65,
                logo: "https://img.icons8.com/color/48/000000/jenkins.png"
            },
            {
                name: "CI/CD",
                level: 70,
                logo: "https://img.icons8.com/color/48/000000/continuous-integration.png"
            }
        ]
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"fYmJ6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderExperiences", ()=>renderExperiences);
var _experiencesData = require("../data/experiencesData");
function renderExperiences() {
    const slider = document.querySelector(".slider");
    const dotsContainer = document.querySelector(".dots");
    (0, _experiencesData.experiencesData).forEach((experience, index)=>{
        const slideDiv = document.createElement("div");
        slideDiv.classList.add("slide", `slide--${index + 1}`);
        slideDiv.innerHTML = `
      <div class="experience">
        <h5 class="experience__header">${experience.role} at ${experience.company}</h5>
        <blockquote class="experience__text">${experience.description}</blockquote>
        <address class="experience__details">
          <p class="experience__location">${experience.location}</p>
          <p class="experience__duration">${experience.duration}</p>
        </address>
      </div>
    `;
        slider.appendChild(slideDiv);
        const dot = `
      <button class="dots__dot" data-slide="${index}"></button>
    `;
        dotsContainer.insertAdjacentHTML("beforeend", dot);
    });
    const slides = document.querySelectorAll(".slide");
    const btnLeft = document.querySelector(".slider__btn--left");
    const btnRight = document.querySelector(".slider__btn--right");
    const dotContainer = document.querySelector(".dots");
    let currentSlide = 0;
    const maxSlide = slides.length;
    const moveSlides = (slide)=>{
        slides.forEach((s, i)=>{
            s.style.transform = `translateX(${100 * (i - slide)}%)`;
        });
    };
    const nextSlide = ()=>{
        if (currentSlide === maxSlide - 1) currentSlide = 0;
        else currentSlide++;
        moveSlides(currentSlide);
        activateDot(currentSlide);
    };
    const prevSlide = ()=>{
        if (currentSlide === 0) currentSlide = maxSlide - 1;
        else currentSlide--;
        moveSlides(currentSlide);
        activateDot(currentSlide);
    };
    const createDots = ()=>{
        slides.forEach((_, i)=>{
            const dot = `
        <button class="dots__dot" data-slide="${i}"></button>
      `;
            dotContainer.insertAdjacentHTML("beforeend", dot);
        });
    };
    const activateDot = (slide)=>{
        document.querySelectorAll(".dots__dot").forEach((dot)=>dot.classList.remove("dots__dot--active"));
        document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add("dots__dot--active");
    };
    dotContainer.addEventListener("click", (e)=>{
        if (e.target.classList.contains("dots__dot")) {
            const { slide } = e.target.dataset;
            moveSlides(slide);
            activateDot(slide);
        }
    });
    btnRight.addEventListener("click", nextSlide);
    btnLeft.addEventListener("click", prevSlide);
    document.addEventListener("keydown", (e)=>{
        if (e.key === "ArrowLeft") prevSlide();
        if (e.key === "ArrowRight") nextSlide();
    });
    const autoSlide = ()=>{
        setInterval(()=>{
            nextSlide();
        }, 3000);
    };
    moveSlides(0);
    createDots();
    activateDot(0);
    autoSlide();
}

},{"../data/experiencesData":"kjJdO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kjJdO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "experiencesData", ()=>experiencesData);
const experiencesData = [
    {
        company: "Flipr Innovation Labs Private Limited",
        role: "Software Engineer Intern",
        location: "97, 17th B Main Rd, 5th Block, Koramangala, Bengaluru, Karnataka 560095(Remote) ",
        duration: "April-2024 to july-2024",
        description: "During my internship at Flipr,I Developed a fully functional ed-tech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, providing an interactive and seamless learning experience for students and a robust platform for instructors to showcase their expertise and connect with learners globally..",
        logo: ""
    },
    {
        role: "Frontend Developer",
        company: "Musocial Private Limited",
        location: "JAMSHEDPUR, Jharkhand, India(Remote) ",
        duration: "Jan 2023 - feb 2023",
        description: "As a Frontend Developer at Musocial Private Limited, I developed and maintained the user interface of web applications. I utilized technologies such as HTML5, CSS, Bootstrap, and JavaScript to create responsive and interactive user experiences. My role also involved collaborating with the design team to implement visually appealing and user-friendly features.",
        logo: ""
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dxF16":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderProjects", ()=>renderProjects);
var _projectsDataJs = require("../data/projectsData.js");
function renderProjects() {
    const projectsContainer = document.querySelector(".projects__container");
    const projectsHTML = (0, _projectsDataJs.projectsData).map((project)=>`
    <div class="project-card">
      <img src="${project.imageUrl}" alt="Project Image for ${project.title}" class="project-card__image" />
      <div class="project-card__content">
        <h3 class="project-card__title">${project.title}</h3>
        <p class="project-card__description">${project.description}</p>
        <p class="project-card__stack">${project.stack}</p>
        <a href="${project.githubUrl}" class="project-card__link">GitHub</a>
        <a href="${project.liveDemoUrl}" class="project-card__link">Live Demo</a>
      </div>
    </div>
  `).join("");
    projectsContainer.innerHTML = projectsHTML;
}

},{"../data/projectsData.js":"iSlj8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iSlj8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "projectsData", ()=>projectsData);
const projectsData = [
    {
        title: "Tours Operations Automation System (API)",
        description: "The Tours Operations Automation System is a comprehensive solution designed to streamline and enhance the management of tour operations. This system offers a suite of features and functionalities that cater to both tour operators and customers, ensuring efficient handling of tour bookings, management, and customer interactions.",
        stack: "Tech Stack: Express.js (backend framework), Mongoose (MongoDB ODM), Node.js (runtime), JWT (authentication)",
        imageUrl: "https://i.imgur.com/2szXTYF.jpeg",
        githubUrl: "https://github.com/07ujjwal/Tour-Operator-Automation-System",
        liveDemoUrl: "https://documenter.getpostman.com/view/28420187/2sA3Qwb9TV"
    },
    {
        title: "Travel Zone",
        description: "The frontend of the Tours Operations Automation System is a dynamic and user-friendly interface that facilitates seamless interaction with the platform. It allows users to easily browse and book travel packages, manage their bookings, and access detailed information about tour guides and schedules. With a focus on intuitive navigation and responsive design, the frontend ensures a smooth and engaging experience for both tour operators and customers.",
        stack: "Tech Stack: React, React Hook Form, React Query, React Router DOM, Zustand, Axios, FontAwesome, Vite, ESLint",
        imageUrl: "https://i.imgur.com/aeO6kiG.png",
        githubUrl: "https://github.com/07ujjwal/Tour-Operator-Automation-System-Frontend",
        liveDemoUrl: "https://deployment-link.com"
    },
    {
        title: "Traveler-s-Horizons (Blogging Web App)",
        description: "A simplifies user engagement by seamlessly integrating location-based blogging features. It allows users to explore and contribute city-specific content, fostering a vibrant community atmosphere.",
        stack: "Tech Stack: React, React DOM, React Router DOM, Axios, Leaflet, React Leaflet, React Datepicker, React Easy Crop, React Hot Toast, React Icons, Vite, ESLint, Express, BcryptJS, JSON Web Token, Mongoose",
        imageUrl: "https://i.imgur.com/YIOll0a.jpeg",
        githubUrl: "https://github.com/07ujjwal/-Traveler-s-Horizons",
        liveDemoUrl: "traveler-s-horizons-1.onrender.com/"
    },
    {
        title: "News App API",
        description: "A robust and scalable RESTful API that provides access to a wide range of news articles. It enables users to fetch the latest news, filter by category, search topics, and manage their preferences, ensuring high performance and flexibility.",
        stack: "Tech Stack: Node.js, Express.js, MySQL, SQLish, JWT, Axios",
        imageUrl: "https://i.imgur.com/xv7uSpj.jpeg",
        githubUrl: "https://github.com/07ujjwal/News-App-API",
        liveDemoUrl: "https://news-app-api-demo.onrender.com/"
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7jCiP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderActivities", ()=>renderActivities);
var _activitiesData = require("../data/activitiesData");
function renderActivities() {
    const activitiesContainer = document.querySelector(".activities__container");
    const vlogsArticlesHTML = (0, _activitiesData.activitiesData).vlogsArticles.map((item)=>`<li><a href="${item.link}">${item.type} ${item.title}</a></li>`).join("");
    const extracurricularHTML = (0, _activitiesData.activitiesData).extracurricular.map((activity)=>`
      <div class="activities__item">
        <h4>${activity.title}</h4>
        <p><strong>${activity.period}</strong></p>
        <ul>
          ${activity.details.map((detail)=>`<li>${detail}</li>`).join("")}
        </ul>
      </div>
    `).join("");
    activitiesContainer.innerHTML = `
      <div class="activities__vlogs-articles">
        <h3 class="activities__title">Vlogs & Articles</h3>
        <ul class="activities__list">
          ${vlogsArticlesHTML}
        </ul>
      </div>
      <div class="activities__extracurricular">
        <h3 class="activities__title">Extracurricular Activities</h3>
        ${extracurricularHTML}
      </div>
    `;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../data/activitiesData":"fNBfB"}],"fNBfB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "activitiesData", ()=>activitiesData);
const activitiesData = {
    vlogsArticles: [
        // { type: "Vlog", title: "Vlog 1: Title", link: "#" },
        {
            type: "Article",
            title: " 1: QUANTUM COMPUTING INITIATIVES AND POTENTIAL INTERNATIONALLY",
            link: "https://medium.com/@ujjwalsingh_89964/quantum-computing-initiatives-and-potential-internationally-aeea765790e2"
        },
        // { type: "Vlog", title: "Vlog 2: Title", link: "#" },
        {
            type: "Article",
            title: " 2: Ola Ditching Google Maps for Homegrown Solution",
            link: "https://medium.com/@ujjwalsingh_89964/ola-ditching-google-maps-for-homegrown-solution-e3a0bf5ec31c"
        },
        {
            type: "Article",
            title: " 3: Exploring Butterflies AI \u2014 The Future of Social Media With AI-Generated Users",
            link: "https://medium.com/@ujjwalsingh_89964/exploring-butterflies-ai-the-future-of-social-media-with-ai-generated-users-0294994dff21"
        },
        {
            type: "Article",
            title: " 4: ISRO Opens Doors to Private Sector for Manufacturing India\u2019s Heaviest Rocket",
            link: "https://medium.com/@ujjwalsingh_89964/isro-opens-doors-to-private-sector-for-manufacturing-indias-heaviest-rocket-6b0ed8c6e249"
        }
    ],
    extracurricular: [
        {
            title: "DRISTI (Directing Rural India towards Social and Technological Integration)",
            period: "July 2022 \u2013 Present",
            details: [
                "Lead a team of over 10 individuals to orchestrate initiatives fostering rural welfare, positively impacting 100+ families.",
                "Drove educational initiatives for children and empowered women through skill development programs, increasing literacy rates by 30%."
            ]
        },
        {
            title: "ACM, Association for Computing Machinery \u2014\u2014 BIT Mesra",
            period: "Sept 2022 - Oct 2023",
            details: [
                "Conducted research contributing to a 20% increase in engagement on the organization\u2019s platforms.",
                "Fostered a supportive work environment, resulting in a 15% decrease in employee turnover.",
                "Ensured regulatory compliance with a 95% compliance rate through audits and risk assessments."
            ]
        }
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["l9Mez","ebWYT"], "ebWYT", "parcelRequire81b6")

//# sourceMappingURL=index.739bf03c.js.map
