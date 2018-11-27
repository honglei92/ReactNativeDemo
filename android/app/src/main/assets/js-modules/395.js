__d(function(e,t,r,a,o){Object.defineProperty(a,"__esModule",{value:!0});var n=t(o[0]),l=babelHelpers.interopRequireDefault(n),i=t(o[1]),s=t(o[2]),c=t(o[3]),u=babelHelpers.interopRequireDefault(c),b=t(o[4]),p=babelHelpers.interopRequireDefault(b),f=parseInt(i.Platform.Version,10)>=11&&!1,d=125,h=(function(e){function t(){return babelHelpers.classCallCheck(this,t),babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"render",value:function(){var e=this.props,t=e.onPress,r=e.testID,a=e.accessibilityLabel,o=babelHelpers.objectWithoutProperties(e,["onPress","testID","accessibilityLabel"]);return l.default.createElement(i.TouchableWithoutFeedback,{onPress:t,testID:r,accessibilityLabel:a},l.default.createElement(i.View,o))}}]),t})(l.default.Component),v=(function(e){function t(){var e,r,a,o;babelHelpers.classCallCheck(this,t);for(var n=arguments.length,s=Array(n),c=0;c<n;c++)s[c]=arguments[c];return r=a=babelHelpers.possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),a._renderLabel=function(e){var t=e.route,r=e.focused,o=a.props,n=o.activeTintColor,s=o.inactiveTintColor,c=o.labelStyle,u=o.showLabel,b=o.showIcon,p=o.allowFontScaling;if(!1===u)return null;var f=a.props.getLabelText({route:t}),d=r?n:s;return'string'==typeof f?l.default.createElement(i.Animated.Text,{numberOfLines:1,style:[g.label,{color:d},b&&a._shouldUseHorizontalLabels()?g.labelBeside:g.labelBeneath,c],allowFontScaling:p},f):'function'==typeof f?f({route:t,focused:r,tintColor:d}):f},a._renderIcon=function(e){var t=e.route,r=e.focused,o=a.props,n=o.navigation,i=o.activeTintColor,s=o.inactiveTintColor,c=o.renderIcon,b=o.showIcon,p=o.showLabel;if(!1===b)return null;var f=a._shouldUseHorizontalLabels(),d=r?1:0,h=r?0:1;return l.default.createElement(u.default,{route:t,horizontal:f,navigation:n,activeOpacity:d,inactiveOpacity:h,activeTintColor:i,inactiveTintColor:s,renderIcon:c,style:[g.iconWithExplicitHeight,!1===p&&!f&&g.iconWithoutLabel,!1!==p&&!f&&g.iconWithLabel]})},a._shouldUseHorizontalLabels=function(){var e=a.props.navigation.state.routes,t=a.props,r=t.isLandscape,o=t.dimensions,n=t.adaptive,l=t.tabStyle;if(!n)return!1;if(i.Platform.isPad){var s=d,c=i.StyleSheet.flatten(l);return c&&('number'==typeof c.width?s=c.width:'number'==typeof c.maxWidth&&(s=c.maxWidth)),e.length*s<=o.width}return r},o=r,babelHelpers.possibleConstructorReturn(a,o)}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"render",value:function(){var e=this,t=this.props,r=t.navigation,a=t.activeBackgroundColor,o=t.inactiveBackgroundColor,n=t.onTabPress,c=t.safeAreaInset,u=t.style,b=t.tabStyle,p=r.state.routes,f=[g.tabBar,this._shouldUseHorizontalLabels()&&!i.Platform.isPad?g.tabBarCompact:g.tabBarRegular,u];return l.default.createElement(s.SafeAreaView,{style:f,forceInset:c},p.map(function(t,i){var s=i===r.state.index,c={route:t,focused:s},u=e.props.getAccessibilityLabel({route:t}),p=e.props.getTestID({route:t}),f=s?a:o,d=e.props.getButtonComponent({route:t})||h;return l.default.createElement(d,{key:t.key,onPress:function(){return n({route:t})},testID:p,accessibilityLabel:u,style:[g.tab,{backgroundColor:f},e._shouldUseHorizontalLabels()?g.tabLandscape:g.tabPortrait,b]},e._renderIcon(c),e._renderLabel(c))}))}}]),t})(l.default.Component);v.defaultProps={activeTintColor:'#3478f6',activeBackgroundColor:'transparent',inactiveTintColor:'#929292',inactiveBackgroundColor:'transparent',showLabel:!0,showIcon:!0,allowFontScaling:!0,adaptive:f,safeAreaInset:{bottom:'always',top:'never'}};var g=i.StyleSheet.create({tabBar:{backgroundColor:'#fff',borderTopWidth:i.StyleSheet.hairlineWidth,borderTopColor:'rgba(0, 0, 0, .3)',flexDirection:'row'},tabBarCompact:{height:29},tabBarRegular:{height:49},tab:{flex:1,alignItems:'stretch'},tabPortrait:{justifyContent:'flex-end',flexDirection:'column'},tabLandscape:{justifyContent:'center',flexDirection:'row'},iconWithoutLabel:{flex:1},iconWithLabel:{flex:1},iconWithExplicitHeight:{height:i.Platform.isPad?49:29},label:{textAlign:'center',backgroundColor:'transparent'},labelBeneath:{fontSize:11,marginBottom:1.5},labelBeside:{fontSize:12,marginLeft:15}});a.default=(0,p.default)(v)},395,[102,12,307,396,397]);