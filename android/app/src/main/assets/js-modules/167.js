__d(function(E,e,t,R,i){'use strict';var s=e(i[0]),_=e(i[1]),S=e(i[2]),o=(e(i[3]),e(i[4])),n=e(i[5]),a=e(i[6]),l=e(i[7]),N=(e(i[8]),e(i[9])),T=(e(i[10]),N({NOT_RESPONDER:null,RESPONDER_INACTIVE_PRESS_IN:null,RESPONDER_INACTIVE_PRESS_OUT:null,RESPONDER_ACTIVE_PRESS_IN:null,RESPONDER_ACTIVE_PRESS_OUT:null,RESPONDER_ACTIVE_LONG_PRESS_IN:null,RESPONDER_ACTIVE_LONG_PRESS_OUT:null,ERROR:null})),h={RESPONDER_ACTIVE_PRESS_OUT:!0,RESPONDER_ACTIVE_PRESS_IN:!0},P={RESPONDER_INACTIVE_PRESS_IN:!0,RESPONDER_ACTIVE_PRESS_IN:!0,RESPONDER_ACTIVE_LONG_PRESS_IN:!0},O={RESPONDER_ACTIVE_LONG_PRESS_IN:!0},u=N({DELAY:null,RESPONDER_GRANT:null,RESPONDER_RELEASE:null,RESPONDER_TERMINATED:null,ENTER_PRESS_RECT:null,LEAVE_PRESS_RECT:null,LONG_PRESS_DETECTED:null}),r={NOT_RESPONDER:{DELAY:T.ERROR,RESPONDER_GRANT:T.RESPONDER_INACTIVE_PRESS_IN,RESPONDER_RELEASE:T.ERROR,RESPONDER_TERMINATED:T.ERROR,ENTER_PRESS_RECT:T.ERROR,LEAVE_PRESS_RECT:T.ERROR,LONG_PRESS_DETECTED:T.ERROR},RESPONDER_INACTIVE_PRESS_IN:{DELAY:T.RESPONDER_ACTIVE_PRESS_IN,RESPONDER_GRANT:T.ERROR,RESPONDER_RELEASE:T.NOT_RESPONDER,RESPONDER_TERMINATED:T.NOT_RESPONDER,ENTER_PRESS_RECT:T.RESPONDER_INACTIVE_PRESS_IN,LEAVE_PRESS_RECT:T.RESPONDER_INACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:T.ERROR},RESPONDER_INACTIVE_PRESS_OUT:{DELAY:T.RESPONDER_ACTIVE_PRESS_OUT,RESPONDER_GRANT:T.ERROR,RESPONDER_RELEASE:T.NOT_RESPONDER,RESPONDER_TERMINATED:T.NOT_RESPONDER,ENTER_PRESS_RECT:T.RESPONDER_INACTIVE_PRESS_IN,LEAVE_PRESS_RECT:T.RESPONDER_INACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:T.ERROR},RESPONDER_ACTIVE_PRESS_IN:{DELAY:T.ERROR,RESPONDER_GRANT:T.ERROR,RESPONDER_RELEASE:T.NOT_RESPONDER,RESPONDER_TERMINATED:T.NOT_RESPONDER,ENTER_PRESS_RECT:T.RESPONDER_ACTIVE_PRESS_IN,LEAVE_PRESS_RECT:T.RESPONDER_ACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:T.RESPONDER_ACTIVE_LONG_PRESS_IN},RESPONDER_ACTIVE_PRESS_OUT:{DELAY:T.ERROR,RESPONDER_GRANT:T.ERROR,RESPONDER_RELEASE:T.NOT_RESPONDER,RESPONDER_TERMINATED:T.NOT_RESPONDER,ENTER_PRESS_RECT:T.RESPONDER_ACTIVE_PRESS_IN,LEAVE_PRESS_RECT:T.RESPONDER_ACTIVE_PRESS_OUT,LONG_PRESS_DETECTED:T.ERROR},RESPONDER_ACTIVE_LONG_PRESS_IN:{DELAY:T.ERROR,RESPONDER_GRANT:T.ERROR,RESPONDER_RELEASE:T.NOT_RESPONDER,RESPONDER_TERMINATED:T.NOT_RESPONDER,ENTER_PRESS_RECT:T.RESPONDER_ACTIVE_LONG_PRESS_IN,LEAVE_PRESS_RECT:T.RESPONDER_ACTIVE_LONG_PRESS_OUT,LONG_PRESS_DETECTED:T.RESPONDER_ACTIVE_LONG_PRESS_IN},RESPONDER_ACTIVE_LONG_PRESS_OUT:{DELAY:T.ERROR,RESPONDER_GRANT:T.ERROR,RESPONDER_RELEASE:T.NOT_RESPONDER,RESPONDER_TERMINATED:T.NOT_RESPONDER,ENTER_PRESS_RECT:T.RESPONDER_ACTIVE_LONG_PRESS_IN,LEAVE_PRESS_RECT:T.RESPONDER_ACTIVE_LONG_PRESS_OUT,LONG_PRESS_DETECTED:T.ERROR},error:{DELAY:T.NOT_RESPONDER,RESPONDER_GRANT:T.RESPONDER_INACTIVE_PRESS_IN,RESPONDER_RELEASE:T.NOT_RESPONDER,RESPONDER_TERMINATED:T.NOT_RESPONDER,ENTER_PRESS_RECT:T.NOT_RESPONDER,LEAVE_PRESS_RECT:T.NOT_RESPONDER,LONG_PRESS_DETECTED:T.NOT_RESPONDER}},D={Mixin:{componentDidMount:function(){_.isTV&&(this._tvEventHandler=new n,this._tvEventHandler.enable(this,function(E,e){var t=o.findNodeHandle(E);e.dispatchConfig={},t===e.tag&&('focus'===e.eventType?E.touchableHandleActivePressIn&&E.touchableHandleActivePressIn(e):'blur'===e.eventType?E.touchableHandleActivePressOut&&E.touchableHandleActivePressOut(e):'select'===e.eventType&&E.touchableHandlePress&&!E.props.disabled&&E.touchableHandlePress(e))}))},componentWillUnmount:function(){this._tvEventHandler&&(this._tvEventHandler.disable(),delete this._tvEventHandler),this.touchableDelayTimeout&&clearTimeout(this.touchableDelayTimeout),this.longPressDelayTimeout&&clearTimeout(this.longPressDelayTimeout),this.pressOutDelayTimeout&&clearTimeout(this.pressOutDelayTimeout)},touchableGetInitialState:function(){return{touchable:{touchState:void 0,responderID:null}}},touchableHandleResponderTerminationRequest:function(){return!this.props.rejectResponderTermination},touchableHandleStartShouldSetResponder:function(){return!this.props.disabled},touchableLongPressCancelsPress:function(){return!0},touchableHandleResponderGrant:function(E){var e=E.currentTarget;E.persist(),this.pressOutDelayTimeout&&clearTimeout(this.pressOutDelayTimeout),this.pressOutDelayTimeout=null,this.state.touchable.touchState=T.NOT_RESPONDER,this.state.touchable.responderID=e,this._receiveSignal(u.RESPONDER_GRANT,E);var t=void 0!==this.touchableGetHighlightDelayMS?Math.max(this.touchableGetHighlightDelayMS(),0):130;0!==(t=isNaN(t)?130:t)?this.touchableDelayTimeout=setTimeout(this._handleDelay.bind(this,E),t):this._handleDelay(E);var R=void 0!==this.touchableGetLongPressDelayMS?Math.max(this.touchableGetLongPressDelayMS(),10):370;R=isNaN(R)?370:R,this.longPressDelayTimeout=setTimeout(this._handleLongDelay.bind(this,E),R+t)},touchableHandleResponderRelease:function(E){this._receiveSignal(u.RESPONDER_RELEASE,E)},touchableHandleResponderTerminate:function(E){this._receiveSignal(u.RESPONDER_TERMINATED,E)},touchableHandleResponderMove:function(E){if(this.state.touchable.touchState!==T.RESPONDER_INACTIVE_PRESS_IN&&this.state.touchable.positionOnActivate){var e=this.state.touchable.positionOnActivate,t=this.state.touchable.dimensionsOnActivate,R=this.touchableGetPressRectOffset?this.touchableGetPressRectOffset():{left:20,right:20,top:20,bottom:20},i=R.left,s=R.top,_=R.right,S=R.bottom,o=this.touchableGetHitSlop?this.touchableGetHitSlop():null;o&&(i+=o.left,s+=o.top,_+=o.right,S+=o.bottom);var n=a.extractSingleTouch(E.nativeEvent),l=n&&n.pageX,N=n&&n.pageY;if(this.pressInLocation)this._getDistanceBetweenPoints(l,N,this.pressInLocation.pageX,this.pressInLocation.pageY)>10&&this._cancelLongPressDelayTimeout();if(l>e.left-i&&N>e.top-s&&l<e.left+t.width+_&&N<e.top+t.height+S)this._receiveSignal(u.ENTER_PRESS_RECT,E),this.state.touchable.touchState===T.RESPONDER_INACTIVE_PRESS_IN&&this._cancelLongPressDelayTimeout();else this._cancelLongPressDelayTimeout(),this._receiveSignal(u.LEAVE_PRESS_RECT,E)}},_remeasureMetricsOnActivation:function(){var E=this.state.touchable.responderID;null!=E&&l.measure(E,this._handleQueryLayout)},_handleQueryLayout:function(E,e,t,R,i,_){(E||e||t||R||i||_)&&(this.state.touchable.positionOnActivate&&S.release(this.state.touchable.positionOnActivate),this.state.touchable.dimensionsOnActivate&&s.release(this.state.touchable.dimensionsOnActivate),this.state.touchable.positionOnActivate=S.getPooled(i,_),this.state.touchable.dimensionsOnActivate=s.getPooled(t,R))},_handleDelay:function(E){this.touchableDelayTimeout=null,this._receiveSignal(u.DELAY,E)},_handleLongDelay:function(E){this.longPressDelayTimeout=null;var e=this.state.touchable.touchState;e!==T.RESPONDER_ACTIVE_PRESS_IN&&e!==T.RESPONDER_ACTIVE_LONG_PRESS_IN?console.error('Attempted to transition from state `'+e+'` to `'+T.RESPONDER_ACTIVE_LONG_PRESS_IN+"`, which is not supported. This is most likely due to `Touchable.longPressDelayTimeout` not being cancelled."):this._receiveSignal(u.LONG_PRESS_DETECTED,E)},_receiveSignal:function(E,e){var t=this.state.touchable.responderID,R=this.state.touchable.touchState,i=r[R]&&r[R][E];if(t||E!==u.RESPONDER_RELEASE){if(!i)throw new Error('Unrecognized signal `'+E+'` or state `'+R+'` for Touchable responder `'+t+'`');if(i===T.ERROR)throw new Error('Touchable cannot transition from `'+R+'` to `'+E+'` for responder `'+t+'`');R!==i&&(this._performSideEffectsForTransition(R,i,E,e),this.state.touchable.touchState=i)}},_cancelLongPressDelayTimeout:function(){this.longPressDelayTimeout&&clearTimeout(this.longPressDelayTimeout),this.longPressDelayTimeout=null},_isHighlight:function(E){return E===T.RESPONDER_ACTIVE_PRESS_IN||E===T.RESPONDER_ACTIVE_LONG_PRESS_IN},_savePressInLocation:function(E){var e=a.extractSingleTouch(E.nativeEvent),t=e&&e.pageX,R=e&&e.pageY,i=e&&e.locationX,s=e&&e.locationY;this.pressInLocation={pageX:t,pageY:R,locationX:i,locationY:s}},_getDistanceBetweenPoints:function(E,e,t,R){var i=E-t,s=e-R;return Math.sqrt(i*i+s*s)},_performSideEffectsForTransition:function(E,e,t,R){var i=this._isHighlight(E),s=this._isHighlight(e);if((t===u.RESPONDER_TERMINATED||t===u.RESPONDER_RELEASE)&&this._cancelLongPressDelayTimeout(),!h[E]&&h[e]&&this._remeasureMetricsOnActivation(),P[E]&&t===u.LONG_PRESS_DETECTED&&this.touchableHandleLongPress&&this.touchableHandleLongPress(R),s&&!i?this._startHighlight(R):!s&&i&&this._endHighlight(R),P[E]&&t===u.RESPONDER_RELEASE){var _=!!this.props.onLongPress,S=O[E]&&(!_||!this.touchableLongPressCancelsPress());(!O[E]||S)&&this.touchableHandlePress&&(s||i||(this._startHighlight(R),this._endHighlight(R)),this.touchableHandlePress(R))}this.touchableDelayTimeout&&clearTimeout(this.touchableDelayTimeout),this.touchableDelayTimeout=null},_startHighlight:function(E){this._savePressInLocation(E),this.touchableHandleActivePressIn&&this.touchableHandleActivePressIn(E)},_endHighlight:function(E){var e=this;this.touchableHandleActivePressOut&&(this.touchableGetPressOutDelayMS&&this.touchableGetPressOutDelayMS()?this.pressOutDelayTimeout=setTimeout(function(){e.touchableHandleActivePressOut(E)},this.touchableGetPressOutDelayMS()):this.touchableHandleActivePressOut(E))}},TOUCH_TARGET_DEBUG:!1,renderDebugView:function(E){E.color,E.hitSlop;if(!D.TOUCH_TARGET_DEBUG)return null;throw Error('Touchable.TOUCH_TARGET_DEBUG should not be enabled in prod!')}};t.exports=D},167,[168,23,170,112,39,171,172,96,153,133,37]);