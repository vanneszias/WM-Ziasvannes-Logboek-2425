!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return u=t.done,t},e:function(t){s=!0,a=t},f:function(){try{u||null==n.return||n.return()}finally{if(s)throw a}}}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,a(n.key),n)}}function o(t,e,r){return e&&i(t.prototype,e),r&&i(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function a(e){var r=function(e,r){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,r||"default");if("object"!=t(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==t(r)?r:r+""}System.register(["./index-legacy-Cfgq9NCB.js"],(function(t,r){"use strict";var i,a;return{setters:[function(t){i=t.q,a=t.r}],execute:function(){
/*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
var r,u=function(){return o((function t(){n(this,t),this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}),[{key:"createGesture",value:function(t){var e;return new s(this,this.newID(),t.name,null!==(e=t.priority)&&void 0!==e?e:0,!!t.disableScroll)}},{key:"createBlocker",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new c(this,this.newID(),t.disable,!!t.disableScroll)}},{key:"start",value:function(t,e,r){return this.canStart(t)?(this.requestedStart.set(e,r),!0):(this.requestedStart.delete(e),!1)}},{key:"capture",value:function(t,e,r){if(!this.start(t,e,r))return!1;var n=this.requestedStart,i=-1e4;if(n.forEach((function(t){i=Math.max(i,t)})),i===r){this.capturedId=e,n.clear();var o=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(o),!0}return n.delete(e),!1}},{key:"release",value:function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)}},{key:"disableGesture",value:function(t,e){var r=this.disabledGestures.get(t);void 0===r&&(r=new Set,this.disabledGestures.set(t,r)),r.add(e)}},{key:"enableGesture",value:function(t,e){var r=this.disabledGestures.get(t);void 0!==r&&r.delete(e)}},{key:"disableScroll",value:function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(l)}},{key:"enableScroll",value:function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(l)}},{key:"canStart",value:function(t){return void 0===this.capturedId&&!this.isDisabled(t)}},{key:"isCaptured",value:function(){return void 0!==this.capturedId}},{key:"isScrollDisabled",value:function(){return this.disabledScroll.size>0}},{key:"isDisabled",value:function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)}},{key:"newID",value:function(){return this.gestureId++,this.gestureId}}])}(),s=function(){return o((function t(e,r,i,o,a){n(this,t),this.id=r,this.name=i,this.disableScroll=a,this.priority=1e6*o+r,this.ctrl=e}),[{key:"canStart",value:function(){return!!this.ctrl&&this.ctrl.canStart(this.name)}},{key:"start",value:function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)}},{key:"capture",value:function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t}},{key:"release",value:function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))}},{key:"destroy",value:function(){this.release(),this.ctrl=void 0}}])}(),c=function(){return o((function t(e,r,i,o){n(this,t),this.id=r,this.disable=i,this.disableScroll=o,this.ctrl=e}),[{key:"block",value:function(){if(this.ctrl){if(this.disable){var t,r=e(this.disable);try{for(r.s();!(t=r.n()).done;){var n=t.value;this.ctrl.disableGesture(n,this.id)}}catch(i){r.e(i)}finally{r.f()}}this.disableScroll&&this.ctrl.disableScroll(this.id)}}},{key:"unblock",value:function(){if(this.ctrl){if(this.disable){var t,r=e(this.disable);try{for(r.s();!(t=r.n()).done;){var n=t.value;this.ctrl.enableGesture(n,this.id)}}catch(i){r.e(i)}finally{r.f()}}this.disableScroll&&this.ctrl.enableScroll(this.id)}}},{key:"destroy",value:function(){this.unblock(),this.ctrl=void 0}}])}(),l="backdrop-no-scroll",d=new u,f=function(t,e,r,n){var i,o,a=v(t)?{capture:!!n.capture,passive:!!n.passive}:!!n.capture;return t.__zone_symbol__addEventListener?(i="__zone_symbol__addEventListener",o="__zone_symbol__removeEventListener"):(i="addEventListener",o="removeEventListener"),t[i](e,r,a),function(){t[o](e,r,a)}},v=function(t){if(void 0===r)try{var e=Object.defineProperty({},"passive",{get:function(){r=!0}});t.addEventListener("optsTest",(function(){}),e)}catch(n){r=!1}return!!r},h=function(t){return t instanceof Document?t:t.ownerDocument},y=function(t){var e=!1,r=!1,n=!0,i=!1,o=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),a=o.canStart,u=o.onWillStart,s=o.onStart,c=o.onEnd,l=o.notCaptured,v=o.onMove,y=o.threshold,S=o.passive,g=o.blurOnStart,k={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},w=function(t,e,r){var n=r*(Math.PI/180),i="x"===t,o=Math.cos(n),a=e*e,u=0,s=0,c=!1,l=0;return{start:function(t,e){u=t,s=e,l=0,c=!0},detect:function(t,e){if(!c)return!1;var r=t-u,n=e-s,d=r*r+n*n;if(d<a)return!1;var f=Math.sqrt(d),v=(i?r:n)/f;return l=v>o?1:v<-o?-1:0,c=!1,!0},isGesture:function(){return 0!==l},getDirection:function(){return l}}}(o.direction,o.threshold,o.maxAngle),X=d.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),Y=function(){e&&(i=!1,v&&v(k))},E=function(){return!!X.capture()&&(e=!0,n=!1,k.startX=k.currentX,k.startY=k.currentY,k.startTime=k.currentTime,u?u(k).then(G):G(),!0)},G=function(){g&&function(){if("undefined"!=typeof document){var t=document.activeElement;(null==t?void 0:t.blur)&&t.blur()}}(),s&&s(k),n=!0},I=function(){e=!1,r=!1,i=!1,n=!0,X.release()},_=function(t){var r=e,i=n;I(),i&&(b(k,t),r?c&&c(k):l&&l(k))},D=function(t,e,r,n,i){var o,a,u,s,c,l,d,v=0,y=function(n){v=Date.now()+2e3,e(n)&&(!a&&r&&(a=f(t,"touchmove",r,i)),u||(u=f(n.target,"touchend",m,i)),s||(s=f(n.target,"touchcancel",m,i)))},b=function(n){v>Date.now()||e(n)&&(!l&&r&&(l=f(h(t),"mousemove",r,i)),d||(d=f(h(t),"mouseup",p,i)))},m=function(t){S(),n&&n(t)},p=function(t){g(),n&&n(t)},S=function(){a&&a(),u&&u(),s&&s(),a=u=s=void 0},g=function(){l&&l(),d&&d(),l=d=void 0},k=function(){S(),g()},w=function(){arguments.length>0&&void 0!==arguments[0]&&!arguments[0]?(o&&o(),c&&c(),o=c=void 0,k()):(o||(o=f(t,"touchstart",y,i)),c||(c=f(t,"mousedown",b,i)))};return{enable:w,stop:k,destroy:function(){w(!1),n=r=e=void 0}}}(o.el,(function(t){var e=p(t);return!(r||!n)&&(m(t,k),k.startX=k.currentX,k.startY=k.currentY,k.startTime=k.currentTime=e,k.velocityX=k.velocityY=k.deltaX=k.deltaY=0,k.event=t,(!a||!1!==a(k))&&(X.release(),!!X.start()&&(r=!0,0===y?E():(w.start(k.startX,k.startY),!0))))}),(function(t){e?!i&&n&&(i=!0,b(k,t),requestAnimationFrame(Y)):(b(k,t),w.detect(k.currentX,k.currentY)&&(w.isGesture()&&E()||T()))}),_,{capture:!1,passive:S}),T=function(){I(),D.stop(),l&&l(k)};return{enable:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t||(e&&_(void 0),I()),D.enable(t)},destroy:function(){X.destroy(),D.destroy()}}},b=function(t,e){if(e){var r=t.currentX,n=t.currentY,i=t.currentTime;m(e,t);var o=t.currentX,a=t.currentY,u=(t.currentTime=p(e))-i;if(u>0&&u<100){var s=(o-r)/u,c=(a-n)/u;t.velocityX=.7*s+.3*t.velocityX,t.velocityY=.7*c+.3*t.velocityY}t.deltaX=o-t.startX,t.deltaY=a-t.startY,t.event=e}},m=function(t,e){var r=0,n=0;if(t){var i=t.changedTouches;if(i&&i.length>0){var o=i[0];r=o.clientX,n=o.clientY}else void 0!==t.pageX&&(r=t.pageX,n=t.pageY)}e.currentX=r,e.currentY=n},p=function(t){return t.timeStamp||Date.now()};t("createSwipeBackGesture",(function(t,e,r,n,o){var u=t.ownerDocument.defaultView,s=i(t),c=function(t){return s?-t.deltaX:t.deltaX};return y({el:t,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:function(r){return s=i(t),function(t){var e=t.startX;return s?e>=u.innerWidth-50:e<=50}(r)&&e()},onStart:r,onMove:function(t){var e=c(t)/u.innerWidth;n(e)},onEnd:function(t){var e=c(t),r=u.innerWidth,n=e/r,i=function(t){return s?-t.velocityX:t.velocityX}(t),l=i>=0&&(i>.2||e>r/2),d=(l?1-n:n)*r,f=0;if(d>5){var v=d/Math.abs(i);f=Math.min(v,540)}o(l,n<=0?.01:a(0,n,.9999),f)}})}))}}}))}();
