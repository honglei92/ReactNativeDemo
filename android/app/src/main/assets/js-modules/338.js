__d(function(e,t,n,r,a){Object.defineProperty(r,"__esModule",{value:!0});var l=t(a[0]),s=babelHelpers.interopRequireDefault(l),o=t(a[1]),i=t(a[2]),p=t(a[3]),u=babelHelpers.interopRequireDefault(p);function b(e){return{importantForAccessibility:e?'yes':'no-hide-descendants'}}var c=(function(e){function t(){return babelHelpers.classCallCheck(this,t),babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.pointerEvents,r=e.style,a=e.position,l=e.transparent,o=e.scene,p=o.index,u=o.isActive,c=l||u?1:a.interpolate({inputRange:[p,p+1-1e-5,p+1],outputRange:[1,1,0],extrapolate:'clamp'});return s.default.createElement(i.Screen,babelHelpers.extends({pointerEvents:n,onComponentRef:this.props.onComponentRef,style:[l?d.transparent:d.main,r],active:c},b(u)),t)}}]),t})(s.default.Component),d=o.StyleSheet.create({main:babelHelpers.extends({},o.StyleSheet.absoluteFillObject,{backgroundColor:'#E9E9EF',shadowColor:'black',shadowOffset:{width:0,height:0},shadowOpacity:.2,shadowRadius:5}),transparent:babelHelpers.extends({},o.StyleSheet.absoluteFillObject,{backgroundColor:'transparent'})});r.default=(0,u.default)(c)},338,[102,12,337,339]);