var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequirec9fe;e.register("63yYm",function(t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var a=o?Object.getOwnPropertyDescriptor(e,u):null;a&&(a.get||a.set)?Object.defineProperty(n,u,a):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(e("acw62")),u=e("eRsTE"),a=e("9PnFD");function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=/*#__PURE__*/function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(y,e);var t,n,a,l=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n,o=s(y);if(t){var u=s(this).constructor;n=Reflect.construct(o,arguments,u)}else n=o.apply(this,arguments);return(e=n)&&("object"===r(e)||"function"==typeof e)?e:f(this)});function y(){var e;!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,y);for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return p(f(e=l.call.apply(l,[this].concat(n))),"callPlayer",u.callPlayer),p(f(e),"duration",null),p(f(e),"currentTime",null),p(f(e),"secondsLoaded",null),p(f(e),"mute",function(){e.callPlayer("mute")}),p(f(e),"unmute",function(){e.callPlayer("unmute")}),p(f(e),"ref",function(t){e.iframe=t}),e}return n=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var t=this;(0,u.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js","playerjs").then(function(e){t.iframe&&(t.player=new e.Player(t.iframe),t.player.on("ready",function(){// An arbitrary timeout is required otherwise
// the event listeners won’t work
setTimeout(function(){t.player.isReady=!0,t.player.setLoop(t.props.loop),t.props.muted&&t.player.mute(),t.addListeners(t.player,t.props),t.props.onReady()},500)}))},this.props.onError)}},{key:"addListeners",value:function(e,t){var n=this;e.on("play",t.onPlay),e.on("pause",t.onPause),e.on("ended",t.onEnded),e.on("error",t.onError),e.on("timeupdate",function(e){var t=e.duration,r=e.seconds;n.duration=t,n.currentTime=r})}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){this.callPlayer("setCurrentTime",e)}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",e)}},{key:"setLoop",value:function(e){this.callPlayer("setLoop",e)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return this.secondsLoaded}},{key:"render",value:function(){return /*#__PURE__*/o.default.createElement("iframe",{ref:this.ref,src:this.props.url,frameBorder:"0",scrolling:"no",style:{width:"100%",height:"100%"},allow:"encrypted-media; autoplay; fullscreen;",referrerPolicy:"no-referrer-when-downgrade"})}}],i(y.prototype,n),a&&i(y,a),y}(o.Component);t.exports.default=y,p(y,"displayName","Kaltura"),p(y,"canPlay",a.canPlay.kaltura)});//# sourceMappingURL=Kaltura.8652d15e.js.map

//# sourceMappingURL=Kaltura.8652d15e.js.map
