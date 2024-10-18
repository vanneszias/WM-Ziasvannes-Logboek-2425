System.register([],(function(e,r){"use strict";return{execute:function(){var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function t(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var o={exports:{}};
/*!
			    localForage -- Offline Storage, Improved
			    Version 1.10.0
			    https://localforage.github.io/localForage
			    (c) 2013-2017 Mozilla, Apache License 2.0
			*/!function(e){e.exports=function e(r,n,o){function i(u,c){if(!n[u]){if(!r[u]){if(!c&&t)return t(u);if(a)return a(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var s=n[u]={exports:{}};r[u][0].call(s.exports,(function(e){var n=r[u][1][e];return i(n||e)}),s,s.exports,e,r,n,o)}return n[u].exports}for(var a=t,u=0;u<o.length;u++)i(o[u]);return i}({1:[function(e,n,t){(function(e){var r,t,o=e.MutationObserver||e.WebKitMutationObserver;if(o){var i=0,a=new o(s),u=e.document.createTextNode("");a.observe(u,{characterData:!0}),r=function(){u.data=i=++i%2}}else if(e.setImmediate||void 0===e.MessageChannel)r="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var r=e.document.createElement("script");r.onreadystatechange=function(){s(),r.onreadystatechange=null,r.parentNode.removeChild(r),r=null},e.document.documentElement.appendChild(r)}:function(){setTimeout(s,0)};else{var c=new e.MessageChannel;c.port1.onmessage=s,r=function(){c.port2.postMessage(0)}}var f=[];function s(){var e,r;t=!0;for(var n=f.length;n;){for(r=f,f=[],e=-1;++e<n;)r[e]();n=f.length}t=!1}function l(e){1!==f.push(e)||t||r()}n.exports=l}).call(this,void 0!==r?r:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,r,n){var t=e(1);function o(){}var i={},a=["REJECTED"],u=["FULFILLED"],c=["PENDING"];function f(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=c,this.queue=[],this.outcome=void 0,e!==o&&v(this,e)}function s(e,r,n){this.promise=e,"function"==typeof r&&(this.onFulfilled=r,this.callFulfilled=this.otherCallFulfilled),"function"==typeof n&&(this.onRejected=n,this.callRejected=this.otherCallRejected)}function l(e,r,n){t((function(){var t;try{t=r(n)}catch(o){return i.reject(e,o)}t===e?i.reject(e,new TypeError("Cannot resolve promise with itself")):i.resolve(e,t)}))}function d(e){var r=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof r)return function(){r.apply(e,arguments)}}function v(e,r){var n=!1;function t(r){n||(n=!0,i.reject(e,r))}function o(r){n||(n=!0,i.resolve(e,r))}function a(){r(o,t)}var u=h(a);"error"===u.status&&t(u.value)}function h(e,r){var n={};try{n.value=e(r),n.status="success"}catch(t){n.status="error",n.value=t}return n}function y(e){return e instanceof this?e:i.resolve(new this(o),e)}function p(e){var r=new this(o);return i.reject(r,e)}function b(e){var r=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,t=!1;if(!n)return this.resolve([]);for(var a=new Array(n),u=0,c=-1,f=new this(o);++c<n;)s(e[c],c);return f;function s(e,o){function c(e){a[o]=e,++u!==n||t||(t=!0,i.resolve(f,a))}r.resolve(e).then(c,(function(e){t||(t=!0,i.reject(f,e))}))}}function g(e){var r=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var n=e.length,t=!1;if(!n)return this.resolve([]);for(var a=-1,u=new this(o);++a<n;)c(e[a]);return u;function c(e){r.resolve(e).then((function(e){t||(t=!0,i.resolve(u,e))}),(function(e){t||(t=!0,i.reject(u,e))}))}}r.exports=f,f.prototype.catch=function(e){return this.then(null,e)},f.prototype.then=function(e,r){if("function"!=typeof e&&this.state===u||"function"!=typeof r&&this.state===a)return this;var n=new this.constructor(o);return this.state!==c?l(n,this.state===u?e:r,this.outcome):this.queue.push(new s(n,e,r)),n},s.prototype.callFulfilled=function(e){i.resolve(this.promise,e)},s.prototype.otherCallFulfilled=function(e){l(this.promise,this.onFulfilled,e)},s.prototype.callRejected=function(e){i.reject(this.promise,e)},s.prototype.otherCallRejected=function(e){l(this.promise,this.onRejected,e)},i.resolve=function(e,r){var n=h(d,r);if("error"===n.status)return i.reject(e,n.value);var t=n.value;if(t)v(e,t);else{e.state=u,e.outcome=r;for(var o=-1,a=e.queue.length;++o<a;)e.queue[o].callFulfilled(r)}return e},i.reject=function(e,r){e.state=a,e.outcome=r;for(var n=-1,t=e.queue.length;++n<t;)e.queue[n].callRejected(r);return e},f.resolve=y,f.reject=p,f.all=b,f.race=g},{1:1}],3:[function(e,n,t){(function(r){"function"!=typeof r.Promise&&(r.Promise=e(2))}).call(this,void 0!==r?r:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2}],4:[function(e,r,n){var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function o(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function i(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(e){return}}var a=i();function u(){try{if(!a||!a.open)return!1;var e="undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),r="function"==typeof fetch&&-1!==fetch.toString().indexOf("[native code");return(!e||r)&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(n){return!1}}function c(e,r){e=e||[],r=r||{};try{return new Blob(e,r)}catch(o){if("TypeError"!==o.name)throw o;for(var n=new("undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder),t=0;t<e.length;t+=1)n.append(e[t]);return n.getBlob(r.type)}}"undefined"==typeof Promise&&e(3);var f=Promise;function s(e,r){r&&e.then((function(e){r(null,e)}),(function(e){r(e)}))}function l(e,r,n){"function"==typeof r&&e.then(r),"function"==typeof n&&e.catch(n)}function d(e){return"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e)),e}function v(){if(arguments.length&&"function"==typeof arguments[arguments.length-1])return arguments[arguments.length-1]}var h="local-forage-detect-blob-support",y=void 0,p={},b=Object.prototype.toString,g="readonly",m="readwrite";function _(e){for(var r=e.length,n=new ArrayBuffer(r),t=new Uint8Array(n),o=0;o<r;o++)t[o]=e.charCodeAt(o);return n}function w(e){return new f((function(r){var n=e.transaction(h,m),t=c([""]);n.objectStore(h).put(t,"key"),n.onabort=function(e){e.preventDefault(),e.stopPropagation(),r(!1)},n.oncomplete=function(){var e=navigator.userAgent.match(/Chrome\/(\d+)/),n=navigator.userAgent.match(/Edge\//);r(n||!e||parseInt(e[1],10)>=43)}})).catch((function(){return!1}))}function I(e){return"boolean"==typeof y?f.resolve(y):w(e).then((function(e){return y=e}))}function S(e){var r=p[e.name],n={};n.promise=new f((function(e,r){n.resolve=e,n.reject=r})),r.deferredOperations.push(n),r.dbReady?r.dbReady=r.dbReady.then((function(){return n.promise})):r.dbReady=n.promise}function E(e){var r=p[e.name].deferredOperations.pop();if(r)return r.resolve(),r.promise}function N(e,r){var n=p[e.name].deferredOperations.pop();if(n)return n.reject(r),n.promise}function D(e,r){return new f((function(n,t){if(p[e.name]=p[e.name]||L(),e.db){if(!r)return n(e.db);S(e),e.db.close()}var o=[e.name];r&&o.push(e.version);var i=a.open.apply(a,o);r&&(i.onupgradeneeded=function(r){var n=i.result;try{n.createObjectStore(e.storeName),r.oldVersion<=1&&n.createObjectStore(h)}catch(t){if("ConstraintError"!==t.name)throw t;console.warn('The database "'+e.name+'" has been upgraded from version '+r.oldVersion+" to version "+r.newVersion+', but the storage "'+e.storeName+'" already exists.')}}),i.onerror=function(e){e.preventDefault(),t(i.error)},i.onsuccess=function(){var r=i.result;r.onversionchange=function(e){e.target.close()},n(r),E(e)}}))}function j(e){return D(e,!1)}function O(e){return D(e,!0)}function R(e,r){if(!e.db)return!0;var n=!e.db.objectStoreNames.contains(e.storeName),t=e.version<e.db.version,o=e.version>e.db.version;if(t&&(e.version!==r&&console.warn('The database "'+e.name+"\" can't be downgraded from version "+e.db.version+" to version "+e.version+"."),e.version=e.db.version),o||n){if(n){var i=e.db.version+1;i>e.version&&(e.version=i)}return!0}return!1}function A(e){return new f((function(r,n){var t=new FileReader;t.onerror=n,t.onloadend=function(n){var t=btoa(n.target.result||"");r({__local_forage_encoded_blob:!0,data:t,type:e.type})},t.readAsBinaryString(e)}))}function x(e){return c([_(atob(e.data))],{type:e.type})}function k(e){return e&&e.__local_forage_encoded_blob}function B(e){var r=this,n=r._initReady().then((function(){var e=p[r._dbInfo.name];if(e&&e.dbReady)return e.dbReady}));return l(n,e,e),n}function C(e){S(e);for(var r=p[e.name],n=r.forages,t=0;t<n.length;t++){var o=n[t];o._dbInfo.db&&(o._dbInfo.db.close(),o._dbInfo.db=null)}return e.db=null,j(e).then((function(r){return e.db=r,R(e)?O(e):r})).then((function(t){e.db=r.db=t;for(var o=0;o<n.length;o++)n[o]._dbInfo.db=t})).catch((function(r){throw N(e,r),r}))}function T(e,r,n,t){void 0===t&&(t=1);try{var o=e.db.transaction(e.storeName,r);n(null,o)}catch(i){if(t>0&&(!e.db||"InvalidStateError"===i.name||"NotFoundError"===i.name))return f.resolve().then((function(){if(!e.db||"NotFoundError"===i.name&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),O(e)})).then((function(){return C(e).then((function(){T(e,r,n,t-1)}))})).catch(n);n(i)}}function L(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function P(e){var r=this,n={db:null};if(e)for(var t in e)n[t]=e[t];var o=p[n.name];o||(o=L(),p[n.name]=o),o.forages.push(r),r._initReady||(r._initReady=r.ready,r.ready=B);var i=[];function a(){return f.resolve()}for(var u=0;u<o.forages.length;u++){var c=o.forages[u];c!==r&&i.push(c._initReady().catch(a))}var s=o.forages.slice(0);return f.all(i).then((function(){return n.db=o.db,j(n)})).then((function(e){return n.db=e,R(n,r._defaultConfig.version)?O(n):e})).then((function(e){n.db=o.db=e,r._dbInfo=n;for(var t=0;t<s.length;t++){var i=s[t];i!==r&&(i._dbInfo.db=n.db,i._dbInfo.version=n.version)}}))}function F(e,r){var n=this;e=d(e);var t=new f((function(r,t){n.ready().then((function(){T(n._dbInfo,g,(function(o,i){if(o)return t(o);try{var a=i.objectStore(n._dbInfo.storeName).get(e);a.onsuccess=function(){var e=a.result;void 0===e&&(e=null),k(e)&&(e=x(e)),r(e)},a.onerror=function(){t(a.error)}}catch(u){t(u)}}))})).catch(t)}));return s(t,r),t}function M(e,r){var n=this,t=new f((function(r,t){n.ready().then((function(){T(n._dbInfo,g,(function(o,i){if(o)return t(o);try{var a=i.objectStore(n._dbInfo.storeName).openCursor(),u=1;a.onsuccess=function(){var n=a.result;if(n){var t=n.value;k(t)&&(t=x(t));var o=e(t,n.key,u++);void 0!==o?r(o):n.continue()}else r()},a.onerror=function(){t(a.error)}}catch(c){t(c)}}))})).catch(t)}));return s(t,r),t}function z(e,r,n){var t=this;e=d(e);var o=new f((function(n,o){var i;t.ready().then((function(){return i=t._dbInfo,"[object Blob]"===b.call(r)?I(i.db).then((function(e){return e?r:A(r)})):r})).then((function(r){T(t._dbInfo,m,(function(i,a){if(i)return o(i);try{var u=a.objectStore(t._dbInfo.storeName);null===r&&(r=void 0);var c=u.put(r,e);a.oncomplete=function(){void 0===r&&(r=null),n(r)},a.onabort=a.onerror=function(){var e=c.error?c.error:c.transaction.error;o(e)}}catch(f){o(f)}}))})).catch(o)}));return s(o,n),o}function q(e,r){var n=this;e=d(e);var t=new f((function(r,t){n.ready().then((function(){T(n._dbInfo,m,(function(o,i){if(o)return t(o);try{var a=i.objectStore(n._dbInfo.storeName).delete(e);i.oncomplete=function(){r()},i.onerror=function(){t(a.error)},i.onabort=function(){var e=a.error?a.error:a.transaction.error;t(e)}}catch(u){t(u)}}))})).catch(t)}));return s(t,r),t}function U(e){var r=this,n=new f((function(e,n){r.ready().then((function(){T(r._dbInfo,m,(function(t,o){if(t)return n(t);try{var i=o.objectStore(r._dbInfo.storeName).clear();o.oncomplete=function(){e()},o.onabort=o.onerror=function(){var e=i.error?i.error:i.transaction.error;n(e)}}catch(a){n(a)}}))})).catch(n)}));return s(n,e),n}function W(e){var r=this,n=new f((function(e,n){r.ready().then((function(){T(r._dbInfo,g,(function(t,o){if(t)return n(t);try{var i=o.objectStore(r._dbInfo.storeName).count();i.onsuccess=function(){e(i.result)},i.onerror=function(){n(i.error)}}catch(a){n(a)}}))})).catch(n)}));return s(n,e),n}function K(e,r){var n=this,t=new f((function(r,t){e<0?r(null):n.ready().then((function(){T(n._dbInfo,g,(function(o,i){if(o)return t(o);try{var a=i.objectStore(n._dbInfo.storeName),u=!1,c=a.openKeyCursor();c.onsuccess=function(){var n=c.result;n?0===e||u?r(n.key):(u=!0,n.advance(e)):r(null)},c.onerror=function(){t(c.error)}}catch(f){t(f)}}))})).catch(t)}));return s(t,r),t}function H(e){var r=this,n=new f((function(e,n){r.ready().then((function(){T(r._dbInfo,g,(function(t,o){if(t)return n(t);try{var i=o.objectStore(r._dbInfo.storeName).openKeyCursor(),a=[];i.onsuccess=function(){var r=i.result;r?(a.push(r.key),r.continue()):e(a)},i.onerror=function(){n(i.error)}}catch(u){n(u)}}))})).catch(n)}));return s(n,e),n}function Q(e,r){r=v.apply(this,arguments);var n=this.config();(e="function"!=typeof e&&e||{}).name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var t,o=this;if(e.name){var i=e.name===n.name&&o._dbInfo.db?f.resolve(o._dbInfo.db):j(e).then((function(r){var n=p[e.name],t=n.forages;n.db=r;for(var o=0;o<t.length;o++)t[o]._dbInfo.db=r;return r}));t=e.storeName?i.then((function(r){if(r.objectStoreNames.contains(e.storeName)){var n=r.version+1;S(e);var t=p[e.name],o=t.forages;r.close();for(var i=0;i<o.length;i++){var u=o[i];u._dbInfo.db=null,u._dbInfo.version=n}var c=new f((function(r,t){var o=a.open(e.name,n);o.onerror=function(e){o.result.close(),t(e)},o.onupgradeneeded=function(){o.result.deleteObjectStore(e.storeName)},o.onsuccess=function(){var e=o.result;e.close(),r(e)}}));return c.then((function(e){t.db=e;for(var r=0;r<o.length;r++){var n=o[r];n._dbInfo.db=e,E(n._dbInfo)}})).catch((function(r){throw(N(e,r)||f.resolve()).catch((function(){})),r}))}})):i.then((function(r){S(e);var n=p[e.name],t=n.forages;r.close();for(var o=0;o<t.length;o++)t[o]._dbInfo.db=null;var i=new f((function(r,n){var t=a.deleteDatabase(e.name);t.onerror=function(){var e=t.result;e&&e.close(),n(t.error)},t.onblocked=function(){console.warn('dropInstance blocked for database "'+e.name+'" until all open connections are closed')},t.onsuccess=function(){var e=t.result;e&&e.close(),r(e)}}));return i.then((function(e){n.db=e;for(var r=0;r<t.length;r++)E(t[r]._dbInfo)})).catch((function(r){throw(N(e,r)||f.resolve()).catch((function(){})),r}))}))}else t=f.reject("Invalid arguments");return s(t,r),t}var X={_driver:"asyncStorage",_initStorage:P,_support:u(),iterate:M,getItem:F,setItem:z,removeItem:q,clear:U,length:W,key:K,keys:H,dropInstance:Q};function G(){return"function"==typeof openDatabase}var J="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",V="~~local_forage_type~",Y=/^~~local_forage_type~([^~]+)~/,Z="__lfsc__:",$=Z.length,ee="arbf",re="blob",ne="si08",te="ui08",oe="uic8",ie="si16",ae="si32",ue="ur16",ce="ui32",fe="fl32",se="fl64",le=$+ee.length,de=Object.prototype.toString;function ve(e){var r,n,t,o,i,a=.75*e.length,u=e.length,c=0;"="===e[e.length-1]&&(a--,"="===e[e.length-2]&&a--);var f=new ArrayBuffer(a),s=new Uint8Array(f);for(r=0;r<u;r+=4)n=J.indexOf(e[r]),t=J.indexOf(e[r+1]),o=J.indexOf(e[r+2]),i=J.indexOf(e[r+3]),s[c++]=n<<2|t>>4,s[c++]=(15&t)<<4|o>>2,s[c++]=(3&o)<<6|63&i;return f}function he(e){var r,n=new Uint8Array(e),t="";for(r=0;r<n.length;r+=3)t+=J[n[r]>>2],t+=J[(3&n[r])<<4|n[r+1]>>4],t+=J[(15&n[r+1])<<2|n[r+2]>>6],t+=J[63&n[r+2]];return n.length%3==2?t=t.substring(0,t.length-1)+"=":n.length%3==1&&(t=t.substring(0,t.length-2)+"=="),t}function ye(e,r){var n="";if(e&&(n=de.call(e)),e&&("[object ArrayBuffer]"===n||e.buffer&&"[object ArrayBuffer]"===de.call(e.buffer))){var t,o=Z;e instanceof ArrayBuffer?(t=e,o+=ee):(t=e.buffer,"[object Int8Array]"===n?o+=ne:"[object Uint8Array]"===n?o+=te:"[object Uint8ClampedArray]"===n?o+=oe:"[object Int16Array]"===n?o+=ie:"[object Uint16Array]"===n?o+=ue:"[object Int32Array]"===n?o+=ae:"[object Uint32Array]"===n?o+=ce:"[object Float32Array]"===n?o+=fe:"[object Float64Array]"===n?o+=se:r(new Error("Failed to get type for BinaryArray"))),r(o+he(t))}else if("[object Blob]"===n){var i=new FileReader;i.onload=function(){var n=V+e.type+"~"+he(this.result);r(Z+re+n)},i.readAsArrayBuffer(e)}else try{r(JSON.stringify(e))}catch(a){console.error("Couldn't convert value into a JSON string: ",e),r(null,a)}}function pe(e){if(e.substring(0,$)!==Z)return JSON.parse(e);var r,n=e.substring(le),t=e.substring($,le);if(t===re&&Y.test(n)){var o=n.match(Y);r=o[1],n=n.substring(o[0].length)}var i=ve(n);switch(t){case ee:return i;case re:return c([i],{type:r});case ne:return new Int8Array(i);case te:return new Uint8Array(i);case oe:return new Uint8ClampedArray(i);case ie:return new Int16Array(i);case ue:return new Uint16Array(i);case ae:return new Int32Array(i);case ce:return new Uint32Array(i);case fe:return new Float32Array(i);case se:return new Float64Array(i);default:throw new Error("Unkown type: "+t)}}var be={serialize:ye,deserialize:pe,stringToBuffer:ve,bufferToString:he};function ge(e,r,n,t){e.executeSql("CREATE TABLE IF NOT EXISTS "+r.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],n,t)}function me(e){var r=this,n={db:null};if(e)for(var t in e)n[t]="string"!=typeof e[t]?e[t].toString():e[t];var o=new f((function(e,t){try{n.db=openDatabase(n.name,String(n.version),n.description,n.size)}catch(o){return t(o)}n.db.transaction((function(o){ge(o,n,(function(){r._dbInfo=n,e()}),(function(e,r){t(r)}))}),t)}));return n.serializer=be,o}function _e(e,r,n,t,o,i){e.executeSql(n,t,o,(function(e,a){a.code===a.SYNTAX_ERR?e.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[r.storeName],(function(e,u){u.rows.length?i(e,a):ge(e,r,(function(){e.executeSql(n,t,o,i)}),i)}),i):i(e,a)}),i)}function we(e,r){var n=this;e=d(e);var t=new f((function(r,t){n.ready().then((function(){var o=n._dbInfo;o.db.transaction((function(n){_e(n,o,"SELECT * FROM "+o.storeName+" WHERE key = ? LIMIT 1",[e],(function(e,n){var t=n.rows.length?n.rows.item(0).value:null;t&&(t=o.serializer.deserialize(t)),r(t)}),(function(e,r){t(r)}))}))})).catch(t)}));return s(t,r),t}function Ie(e,r){var n=this,t=new f((function(r,t){n.ready().then((function(){var o=n._dbInfo;o.db.transaction((function(n){_e(n,o,"SELECT * FROM "+o.storeName,[],(function(n,t){for(var i=t.rows,a=i.length,u=0;u<a;u++){var c=i.item(u),f=c.value;if(f&&(f=o.serializer.deserialize(f)),void 0!==(f=e(f,c.key,u+1)))return void r(f)}r()}),(function(e,r){t(r)}))}))})).catch(t)}));return s(t,r),t}function Se(e,r,n,t){var o=this;e=d(e);var i=new f((function(i,a){o.ready().then((function(){void 0===r&&(r=null);var u=r,c=o._dbInfo;c.serializer.serialize(r,(function(r,f){f?a(f):c.db.transaction((function(n){_e(n,c,"INSERT OR REPLACE INTO "+c.storeName+" (key, value) VALUES (?, ?)",[e,r],(function(){i(u)}),(function(e,r){a(r)}))}),(function(r){if(r.code===r.QUOTA_ERR){if(t>0)return void i(Se.apply(o,[e,u,n,t-1]));a(r)}}))}))})).catch(a)}));return s(i,n),i}function Ee(e,r,n){return Se.apply(this,[e,r,n,1])}function Ne(e,r){var n=this;e=d(e);var t=new f((function(r,t){n.ready().then((function(){var o=n._dbInfo;o.db.transaction((function(n){_e(n,o,"DELETE FROM "+o.storeName+" WHERE key = ?",[e],(function(){r()}),(function(e,r){t(r)}))}))})).catch(t)}));return s(t,r),t}function De(e){var r=this,n=new f((function(e,n){r.ready().then((function(){var t=r._dbInfo;t.db.transaction((function(r){_e(r,t,"DELETE FROM "+t.storeName,[],(function(){e()}),(function(e,r){n(r)}))}))})).catch(n)}));return s(n,e),n}function je(e){var r=this,n=new f((function(e,n){r.ready().then((function(){var t=r._dbInfo;t.db.transaction((function(r){_e(r,t,"SELECT COUNT(key) as c FROM "+t.storeName,[],(function(r,n){var t=n.rows.item(0).c;e(t)}),(function(e,r){n(r)}))}))})).catch(n)}));return s(n,e),n}function Oe(e,r){var n=this,t=new f((function(r,t){n.ready().then((function(){var o=n._dbInfo;o.db.transaction((function(n){_e(n,o,"SELECT key FROM "+o.storeName+" WHERE id = ? LIMIT 1",[e+1],(function(e,n){var t=n.rows.length?n.rows.item(0).key:null;r(t)}),(function(e,r){t(r)}))}))})).catch(t)}));return s(t,r),t}function Re(e){var r=this,n=new f((function(e,n){r.ready().then((function(){var t=r._dbInfo;t.db.transaction((function(r){_e(r,t,"SELECT key FROM "+t.storeName,[],(function(r,n){for(var t=[],o=0;o<n.rows.length;o++)t.push(n.rows.item(o).key);e(t)}),(function(e,r){n(r)}))}))})).catch(n)}));return s(n,e),n}function Ae(e){return new f((function(r,n){e.transaction((function(t){t.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],(function(n,t){for(var o=[],i=0;i<t.rows.length;i++)o.push(t.rows.item(i).name);r({db:e,storeNames:o})}),(function(e,r){n(r)}))}),(function(e){n(e)}))}))}function xe(e,r){r=v.apply(this,arguments);var n=this.config();(e="function"!=typeof e&&e||{}).name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var t,o=this;return s(t=e.name?new f((function(r){var t;t=e.name===n.name?o._dbInfo.db:openDatabase(e.name,"","",0),e.storeName?r({db:t,storeNames:[e.storeName]}):r(Ae(t))})).then((function(e){return new f((function(r,n){e.db.transaction((function(t){function o(e){return new f((function(r,n){t.executeSql("DROP TABLE IF EXISTS "+e,[],(function(){r()}),(function(e,r){n(r)}))}))}for(var i=[],a=0,u=e.storeNames.length;a<u;a++)i.push(o(e.storeNames[a]));f.all(i).then((function(){r()})).catch((function(e){n(e)}))}),(function(e){n(e)}))}))})):f.reject("Invalid arguments"),r),t}var ke={_driver:"webSQLStorage",_initStorage:me,_support:G(),iterate:Ie,getItem:we,setItem:Ee,removeItem:Ne,clear:De,length:je,key:Oe,keys:Re,dropInstance:xe};function Be(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&!!localStorage.setItem}catch(e){return!1}}function Ce(e,r){var n=e.name+"/";return e.storeName!==r.storeName&&(n+=e.storeName+"/"),n}function Te(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch(r){return!0}}function Le(){return!Te()||localStorage.length>0}function Pe(e){var r=this,n={};if(e)for(var t in e)n[t]=e[t];return n.keyPrefix=Ce(e,r._defaultConfig),Le()?(r._dbInfo=n,n.serializer=be,f.resolve()):f.reject()}function Fe(e){var r=this,n=r.ready().then((function(){for(var e=r._dbInfo.keyPrefix,n=localStorage.length-1;n>=0;n--){var t=localStorage.key(n);0===t.indexOf(e)&&localStorage.removeItem(t)}}));return s(n,e),n}function Me(e,r){var n=this;e=d(e);var t=n.ready().then((function(){var r=n._dbInfo,t=localStorage.getItem(r.keyPrefix+e);return t&&(t=r.serializer.deserialize(t)),t}));return s(t,r),t}function ze(e,r){var n=this,t=n.ready().then((function(){for(var r=n._dbInfo,t=r.keyPrefix,o=t.length,i=localStorage.length,a=1,u=0;u<i;u++){var c=localStorage.key(u);if(0===c.indexOf(t)){var f=localStorage.getItem(c);if(f&&(f=r.serializer.deserialize(f)),void 0!==(f=e(f,c.substring(o),a++)))return f}}}));return s(t,r),t}function qe(e,r){var n=this,t=n.ready().then((function(){var r,t=n._dbInfo;try{r=localStorage.key(e)}catch(o){r=null}return r&&(r=r.substring(t.keyPrefix.length)),r}));return s(t,r),t}function Ue(e){var r=this,n=r.ready().then((function(){for(var e=r._dbInfo,n=localStorage.length,t=[],o=0;o<n;o++){var i=localStorage.key(o);0===i.indexOf(e.keyPrefix)&&t.push(i.substring(e.keyPrefix.length))}return t}));return s(n,e),n}function We(e){var r=this.keys().then((function(e){return e.length}));return s(r,e),r}function Ke(e,r){var n=this;e=d(e);var t=n.ready().then((function(){var r=n._dbInfo;localStorage.removeItem(r.keyPrefix+e)}));return s(t,r),t}function He(e,r,n){var t=this;e=d(e);var o=t.ready().then((function(){void 0===r&&(r=null);var n=r;return new f((function(o,i){var a=t._dbInfo;a.serializer.serialize(r,(function(r,t){if(t)i(t);else try{localStorage.setItem(a.keyPrefix+e,r),o(n)}catch(u){"QuotaExceededError"!==u.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==u.name||i(u),i(u)}}))}))}));return s(o,n),o}function Qe(e,r){if(r=v.apply(this,arguments),!(e="function"!=typeof e&&e||{}).name){var n=this.config();e.name=e.name||n.name,e.storeName=e.storeName||n.storeName}var t,o=this;return t=e.name?new f((function(r){e.storeName?r(Ce(e,o._defaultConfig)):r(e.name+"/")})).then((function(e){for(var r=localStorage.length-1;r>=0;r--){var n=localStorage.key(r);0===n.indexOf(e)&&localStorage.removeItem(n)}})):f.reject("Invalid arguments"),s(t,r),t}var Xe={_driver:"localStorageWrapper",_initStorage:Pe,_support:Be(),iterate:ze,getItem:Me,setItem:He,removeItem:Ke,clear:Fe,length:We,key:qe,keys:Ue,dropInstance:Qe},Ge=function(e,r){return e===r||"number"==typeof e&&"number"==typeof r&&isNaN(e)&&isNaN(r)},Je=function(e,r){for(var n=e.length,t=0;t<n;){if(Ge(e[t],r))return!0;t++}return!1},Ve=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},Ye={},Ze={},$e={INDEXEDDB:X,WEBSQL:ke,LOCALSTORAGE:Xe},er=[$e.INDEXEDDB._driver,$e.WEBSQL._driver,$e.LOCALSTORAGE._driver],rr=["dropInstance"],nr=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(rr),tr={description:"",driver:er.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function or(e,r){e[r]=function(){var n=arguments;return e.ready().then((function(){return e[r].apply(e,n)}))}}function ir(){for(var e=1;e<arguments.length;e++){var r=arguments[e];if(r)for(var n in r)r.hasOwnProperty(n)&&(Ve(r[n])?arguments[0][n]=r[n].slice():arguments[0][n]=r[n])}return arguments[0]}var ar=function(){function e(r){for(var n in o(this,e),$e)if($e.hasOwnProperty(n)){var t=$e[n],i=t._driver;this[n]=i,Ye[i]||this.defineDriver(t)}this._defaultConfig=ir({},tr),this._config=ir({},this._defaultConfig,r),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch((function(){}))}return e.prototype.config=function(e){if("object"===(void 0===e?"undefined":t(e))){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var r in e){if("storeName"===r&&(e[r]=e[r].replace(/\W/g,"_")),"version"===r&&"number"!=typeof e[r])return new Error("Database version must be a number.");this._config[r]=e[r]}return!("driver"in e)||!e.driver||this.setDriver(this._config.driver)}return"string"==typeof e?this._config[e]:this._config},e.prototype.defineDriver=function(e,r,n){var t=new f((function(r,n){try{var t=e._driver,o=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!e._driver)return void n(o);for(var i=nr.concat("_initStorage"),a=0,u=i.length;a<u;a++){var c=i[a];if((!Je(rr,c)||e[c])&&"function"!=typeof e[c])return void n(o)}var l=function(){for(var r=function(e){return function(){var r=new Error("Method "+e+" is not implemented by the current driver"),n=f.reject(r);return s(n,arguments[arguments.length-1]),n}},n=0,t=rr.length;n<t;n++){var o=rr[n];e[o]||(e[o]=r(o))}};l();var d=function(n){Ye[t]&&console.info("Redefining LocalForage driver: "+t),Ye[t]=e,Ze[t]=n,r()};"_support"in e?e._support&&"function"==typeof e._support?e._support().then(d,n):d(!!e._support):d(!0)}catch(v){n(v)}}));return l(t,r,n),t},e.prototype.driver=function(){return this._driver||null},e.prototype.getDriver=function(e,r,n){var t=Ye[e]?f.resolve(Ye[e]):f.reject(new Error("Driver not found."));return l(t,r,n),t},e.prototype.getSerializer=function(e){var r=f.resolve(be);return l(r,e),r},e.prototype.ready=function(e){var r=this,n=r._driverSet.then((function(){return null===r._ready&&(r._ready=r._initDriver()),r._ready}));return l(n,e,e),n},e.prototype.setDriver=function(e,r,n){var t=this;Ve(e)||(e=[e]);var o=this._getSupportedDrivers(e);function i(){t._config.driver=t.driver()}function a(e){return t._extend(e),i(),t._ready=t._initStorage(t._config),t._ready}function u(e){return function(){var r=0;function n(){for(;r<e.length;){var o=e[r];return r++,t._dbInfo=null,t._ready=null,t.getDriver(o).then(a).catch(n)}i();var u=new Error("No available storage method found.");return t._driverSet=f.reject(u),t._driverSet}return n()}}var c=null!==this._driverSet?this._driverSet.catch((function(){return f.resolve()})):f.resolve();return this._driverSet=c.then((function(){var e=o[0];return t._dbInfo=null,t._ready=null,t.getDriver(e).then((function(e){t._driver=e._driver,i(),t._wrapLibraryMethodsWithReady(),t._initDriver=u(o)}))})).catch((function(){i();var e=new Error("No available storage method found.");return t._driverSet=f.reject(e),t._driverSet})),l(this._driverSet,r,n),this._driverSet},e.prototype.supports=function(e){return!!Ze[e]},e.prototype._extend=function(e){ir(this,e)},e.prototype._getSupportedDrivers=function(e){for(var r=[],n=0,t=e.length;n<t;n++){var o=e[n];this.supports(o)&&r.push(o)}return r},e.prototype._wrapLibraryMethodsWithReady=function(){for(var e=0,r=nr.length;e<r;e++)or(this,nr[e])},e.prototype.createInstance=function(r){return new e(r)},e}(),ur=new ar;r.exports=ur},{3:3}]},{},[4])(4)}(o);const i=n(o.exports),a={SecureStorage:"ionicSecureStorage",IndexedDB:i.INDEXEDDB,LocalStorage:i.LOCALSTORAGE},u={name:"_ionicstorage",storeName:"_ionickv",dbKey:"_ionickey",driverOrder:[a.SecureStorage,a.IndexedDB,a.LocalStorage]},c=new class{constructor(e=u){this._db=null,this._secureStorageDriver=null;const r=Object.assign({},u,e||{});this._config=r}async create(){const e=i.createInstance(this._config);return this._db=e,await e.setDriver(this._config.driverOrder||[]),this}async defineDriver(e){return e._driver===a.SecureStorage&&(this._secureStorageDriver=e),i.defineDriver(e)}get driver(){var e;return(null===(e=this._db)||void 0===e?void 0:e.driver())||null}assertDb(){if(!this._db)throw new Error("Database not created. Must call create() first");return this._db}get(e){return this.assertDb().getItem(e)}set(e,r){return this.assertDb().setItem(e,r)}remove(e){return this.assertDb().removeItem(e)}clear(){return this.assertDb().clear()}length(){return this.assertDb().length()}keys(){return this.assertDb().keys()}forEach(e){return this.assertDb().iterate(e)}setEncryptionKey(e){var r;if(!this._secureStorageDriver)throw new Error("@ionic-enterprise/secure-storage not installed. Encryption support not available");null===(r=this._secureStorageDriver)||void 0===r||r.setEncryptionKey(e)}};c.create(),e("P",{getProducts:async()=>c.get("products"),setProducts:async e=>c.set("products",e),async addProduct(e){const r=await this.getProducts();return r?(r.push(e),this.setProducts(r)):this.setProducts([e])},async searchProducts(e){const r=await this.getProducts();return r?r.filter((r=>r.name.toLowerCase().includes(e.toLowerCase()))):[]}})}}}));
