__d(function(e,t,r,l,s){Object.defineProperty(l,"__esModule",{value:!0});var i=t(s[0]),n=babelHelpers.interopRequireWildcard(i),a=t(s[1]),o=t(s[2]),b=(function(e){function t(){return babelHelpers.classCallCheck(this,t),babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"render",value:function(){if(o.screensEnabled&&(0,o.screensEnabled)()){var e=this.props,t=e.isVisible,r=babelHelpers.objectWithoutProperties(e,["isVisible"]);return n.createElement(o.Screen,babelHelpers.extends({active:t?1:0},r))}var l=this.props,s=l.isVisible,i=l.children,b=l.style,p=babelHelpers.objectWithoutProperties(l,["isVisible","children","style"]);return n.createElement(a.View,babelHelpers.extends({style:[c.container,b],collapsable:!1,removeClippedSubviews:!0,pointerEvents:s?'auto':'none'},p),n.createElement(a.View,{style:s?c.attached:c.detached},i))}}]),t})(n.Component);l.default=b;var c=a.StyleSheet.create({container:{flex:1,overflow:'hidden'},attached:{flex:1},detached:{flex:1,top:3e3}})},399,[102,12,337]);