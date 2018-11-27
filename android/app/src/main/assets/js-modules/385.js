__d(function(e,t,n,a,i){Object.defineProperty(a,"__esModule",{value:!0});var r=t(i[0]),o=babelHelpers.interopRequireWildcard(r),s=t(i[1]),p=babelHelpers.interopRequireDefault(s),l=t(i[2]),d=t(i[3]),u={timing:l.Animated.spring,tension:75,friction:25},h=(function(e){function t(){var e,n,a,i;babelHelpers.classCallCheck(this,t);for(var r=arguments.length,o=Array(r),s=0;s<r;s++)o[s]=arguments[s];return n=a=babelHelpers.possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),a._handleHandlerStateChange=function(e){var t=a.props.GestureHandler;if(e.nativeEvent.state===t.State.BEGIN)a.props.onSwipeStart&&a.props.onSwipeStart();else if(e.nativeEvent.state===t.State.END){a.props.onSwipeEnd&&a.props.onSwipeEnd();var n=a.props,i=n.navigationState,r=n.layout,o=n.swipeDistanceThreshold,s=void 0===o?r.width/1.75:o,p=n.swipeVelocityThreshold,l=void 0===p?150:p,d=e.nativeEvent,u=d.translationX,h=d.translationY,v=d.velocityX,b=d.velocityY,c='number'==typeof a._pendingIndex?a._pendingIndex:i.index,f=c;Math.abs(u)>Math.abs(h)&&Math.abs(v)>Math.abs(b)&&(Math.abs(u)>s||Math.abs(v)>l)&&(f=Math.round(Math.min(Math.max(0,c-u/Math.abs(u)),i.routes.length-1))),isFinite(f)&&a.props.canJumpToTab(a.props.navigationState.routes[f])||(f=c),a._transitionTo(f,v)}},a._transitionTo=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=-e*a.props.layout.width;if(!1===a.props.animationEnabled||!1===n)return a.props.panX.setValue(0),void a.props.offsetX.setValue(i);var r=u.timing,o=babelHelpers.objectWithoutProperties(u,["timing"]),s=a.props.useNativeDriver;l.Animated.parallel([r(a.props.panX,babelHelpers.extends({},o,{toValue:0,velocity:t,useNativeDriver:s})),r(a.props.offsetX,babelHelpers.extends({},o,{toValue:i,velocity:t,useNativeDriver:s}))]).start(function(t){if(t.finished){var n=a.props.navigationState.routes[e];a.props.jumpTo(n.key),a.props.onAnimationEnd&&a.props.onAnimationEnd(),a._pendingIndex=null}}),a._pendingIndex=e},i=n,babelHelpers.possibleConstructorReturn(a,i)}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"componentDidUpdate",value:function(e){e.navigationState.routes!==this.props.navigationState.routes||e.layout.width!==this.props.layout.width?this._transitionTo(this.props.navigationState.index,void 0,!1):e.navigationState.index!==this.props.navigationState.index&&this._transitionTo(this.props.navigationState.index)}},{key:"render",value:function(){var e=this.props,t=e.GestureHandler,n=e.panX,a=e.offsetX,i=e.layout,r=e.navigationState,s=e.swipeEnabled,p=e.children,d=i.width,u=r.routes,h=d*(u.length-1),b=l.Animated.add(n,a).interpolate({inputRange:[-h,0],outputRange:[-h,0],extrapolate:'clamp'});return o.createElement(t.PanGestureHandler,{enabled:0!==i.width&&!1!==s,minDeltaX:10,onGestureEvent:l.Animated.event([{nativeEvent:{translationX:this.props.panX}}],{useNativeDriver:this.props.useNativeDriver}),onHandlerStateChange:this._handleHandlerStateChange},o.createElement(l.Animated.View,{style:[v.sheet,d?{width:u.length*d,transform:[{translateX:b}]}:null]},o.Children.map(p,function(e,t){return o.createElement(l.View,{key:r.routes[t].key,testID:r.routes[t].testID,style:d?{width:d}:t===r.index?l.StyleSheet.absoluteFill:null},t===r.index||d?e:null)})))}}]),t})(o.Component);h.propTypes=babelHelpers.extends({},d.PagerRendererPropType,{swipeDistanceThreshold:p.default.number,swipeVelocityThreshold:p.default.number,GestureHandler:p.default.object}),h.defaultProps={GestureHandler:e.__expo&&e.__expo.DangerZone?e.__expo.DangerZone.GestureHandler:void 0,canJumpToTab:function(){return!0}},a.default=h;var v=l.StyleSheet.create({sheet:{flex:1,flexDirection:'row',alignItems:'stretch'}})},385,[102,109,12,381]);