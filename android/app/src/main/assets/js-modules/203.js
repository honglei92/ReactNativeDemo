__d(function(t,i,e,a,s){'use strict';i(s[0]),i(s[1]);var n=i(s[2]),o=i(s[3]).shouldUseNativeDriver,r=void 0;function _(){if(!r){var t=i(s[4]);r=t.inOut(t.ease)}return r}var u=(function(i){function e(t){babelHelpers.classCallCheck(this,e);var i=babelHelpers.possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return i._toValue=t.toValue,i._easing=void 0!==t.easing?t.easing:_(),i._duration=void 0!==t.duration?t.duration:500,i._delay=void 0!==t.delay?t.delay:0,i.__iterations=void 0!==t.iterations?t.iterations:1,i.__isInteraction=void 0===t.isInteraction||t.isInteraction,i._useNativeDriver=o(t),i}return babelHelpers.inherits(e,i),babelHelpers.createClass(e,[{key:"__getNativeAnimationConfig",value:function(){for(var t=[],i=0;i<this._duration;i+=16.666666666666668)t.push(this._easing(i/this._duration));return t.push(this._easing(1)),{type:'frames',frames:t,toValue:this._toValue,iterations:this.__iterations}}},{key:"start",value:function(t,i,e,a,s){var n=this;this.__active=!0,this._fromValue=t,this._onUpdate=i,this.__onEnd=e;var o=function(){0!==n._duration||n._useNativeDriver?(n._startTime=Date.now(),n._useNativeDriver?n.__startNativeAnimation(s):n._animationFrame=requestAnimationFrame(n.onUpdate.bind(n))):(n._onUpdate(n._toValue),n.__debouncedOnEnd({finished:!0}))};this._delay?this._timeout=setTimeout(o,this._delay):o()}},{key:"onUpdate",value:function(){var t=Date.now();if(t>=this._startTime+this._duration)return 0===this._duration?this._onUpdate(this._toValue):this._onUpdate(this._fromValue+this._easing(1)*(this._toValue-this._fromValue)),void this.__debouncedOnEnd({finished:!0});this._onUpdate(this._fromValue+this._easing((t-this._startTime)/this._duration)*(this._toValue-this._fromValue)),this.__active&&(this._animationFrame=requestAnimationFrame(this.onUpdate.bind(this)))}},{key:"stop",value:function(){babelHelpers.get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"stop",this).call(this),this.__active=!1,clearTimeout(this._timeout),t.cancelAnimationFrame(this._animationFrame),this.__debouncedOnEnd({finished:!1})}}]),e})(n);e.exports=u},203,[182,198,200,185,204]);