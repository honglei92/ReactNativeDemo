__d(function(e,n,o,t,r){'use strict';var a=n(r[0]),u=n(r[1]),s=u.currentCentroidXOfTouchesChangedAfter,d=u.currentCentroidYOfTouchesChangedAfter,i=u.previousCentroidXOfTouchesChangedAfter,c=u.previousCentroidYOfTouchesChangedAfter,p=u.currentCentroidX,v=u.currentCentroidY,h={_initializeGestureState:function(e){e.moveX=0,e.moveY=0,e.x0=0,e.y0=0,e.dx=0,e.dy=0,e.vx=0,e.vy=0,e.numberActiveTouches=0,e._accountsForMovesUpTo=0},_updateGestureStateOnMove:function(e,n){e.numberActiveTouches=n.numberActiveTouches,e.moveX=s(n,e._accountsForMovesUpTo),e.moveY=d(n,e._accountsForMovesUpTo);var o=e._accountsForMovesUpTo,t=i(n,o),r=s(n,o),a=c(n,o),u=d(n,o),p=e.dx+(r-t),v=e.dy+(u-a),h=n.mostRecentTimeStamp-e._accountsForMovesUpTo;e.vx=(p-e.dx)/h,e.vy=(v-e.dy)/h,e.dx=p,e.dy=v,e._accountsForMovesUpTo=n.mostRecentTimeStamp},create:function(e){var n={handle:null},o={stateID:Math.random()};return h._initializeGestureState(o),{panHandlers:{onStartShouldSetResponder:function(n){return void 0!==e.onStartShouldSetPanResponder&&e.onStartShouldSetPanResponder(n,o)},onMoveShouldSetResponder:function(n){return void 0!==e.onMoveShouldSetPanResponder&&e.onMoveShouldSetPanResponder(n,o)},onStartShouldSetResponderCapture:function(n){return 1===n.nativeEvent.touches.length&&h._initializeGestureState(o),o.numberActiveTouches=n.touchHistory.numberActiveTouches,void 0!==e.onStartShouldSetPanResponderCapture&&e.onStartShouldSetPanResponderCapture(n,o)},onMoveShouldSetResponderCapture:function(n){var t=n.touchHistory;return o._accountsForMovesUpTo!==t.mostRecentTimeStamp&&(h._updateGestureStateOnMove(o,t),!!e.onMoveShouldSetPanResponderCapture&&e.onMoveShouldSetPanResponderCapture(n,o))},onResponderGrant:function(t){return n.handle||(n.handle=a.createInteractionHandle()),o.x0=p(t.touchHistory),o.y0=v(t.touchHistory),o.dx=0,o.dy=0,e.onPanResponderGrant&&e.onPanResponderGrant(t,o),void 0===e.onShouldBlockNativeResponder||e.onShouldBlockNativeResponder()},onResponderReject:function(t){S(n,e.onPanResponderReject,t,o)},onResponderRelease:function(t){S(n,e.onPanResponderRelease,t,o),h._initializeGestureState(o)},onResponderStart:function(n){var t=n.touchHistory;o.numberActiveTouches=t.numberActiveTouches,e.onPanResponderStart&&e.onPanResponderStart(n,o)},onResponderMove:function(n){var t=n.touchHistory;o._accountsForMovesUpTo!==t.mostRecentTimeStamp&&(h._updateGestureStateOnMove(o,t),e.onPanResponderMove&&e.onPanResponderMove(n,o))},onResponderEnd:function(t){var r=t.touchHistory;o.numberActiveTouches=r.numberActiveTouches,S(n,e.onPanResponderEnd,t,o)},onResponderTerminate:function(t){S(n,e.onPanResponderTerminate,t,o),h._initializeGestureState(o)},onResponderTerminationRequest:function(n){return void 0===e.onPanResponderTerminationRequest||e.onPanResponderTerminationRequest(n,o)}},getInteractionHandle:function(){return n.handle}}}};function S(e,n,o,t){e.handle&&(a.clearInteractionHandle(e.handle),e.handle=null),n&&n(o,t)}o.exports=h},261,[187,262]);