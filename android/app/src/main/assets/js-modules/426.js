__d(function(e,t,l,r,n){Object.defineProperty(r,"__esModule",{value:!0});var o=t(n[0]),a=babelHelpers.interopRequireDefault(o),s=t(n[1]),i=(function(e){function t(){return babelHelpers.classCallCheck(this,t),babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"render",value:function(){return a.default.createElement(s.View,{style:{alignItems:'center'}},a.default.createElement(s.Text,null,"Hello ",this.props.name))}}]),t})(o.Component),u=(function(e){function t(e){babelHelpers.classCallCheck(this,t);var l=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.state={showText:!0},setInterval(function(){l.setState(function(e){return{showText:!e.showText}})},1e3),l}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"render",value:function(){var e=this.state.showText?this.props.text:' ';return a.default.createElement(s.Text,null,e)}}]),t})(o.Component),c=(function(e){function t(){return babelHelpers.classCallCheck(this,t),babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"_onPressButton",value:function(){s.Alert.alert('You tabed the button')}},{key:"render",value:function(){return a.default.createElement(s.View,{style:f.container},a.default.createElement(u,{text:"bling bling",style:f.hello}),a.default.createElement(s.ScrollView,{style:{marginBottom:50}},a.default.createElement(s.Text,{style:f.hello},"Hello World!"),a.default.createElement(s.Text,{style:f.instructions},"To get started, edit App.js"),a.default.createElement(s.Text,{style:f.instructions},"Double tap R on your keyboard to reload,\nShake or press menu button for dev menu"),a.default.createElement(s.Image,{source:{uri:'https://wx2.sinaimg.cn/mw690/5fe93731gy1fw98zcemqlj20ku0ku76e.jpg'},style:{width:190,height:200}}),a.default.createElement(s.FlatList,{data:[{key:'java'},{key:'\u8ba1\u7b97\u673a\u7f51\u7edc'},{key:'\u6570\u636e\u673a\u6784\u548c\u7b97\u6cd5'},{key:'\u6570\u636e\u5e93'},{key:'Android'}],renderItem:function(e){var t=e.item;return a.default.createElement(s.Text,{style:f.item},t.key)}}),a.default.createElement(i,{name:"liuqiang"}),a.default.createElement(s.View,{style:{height:50,flexDirection:'row'}},a.default.createElement(s.View,{style:{flex:1,height:50,backgroundColor:'#ff0000'}}),a.default.createElement(s.View,{style:{flex:2,height:50,backgroundColor:'#00ff00'}})),a.default.createElement(s.TextInput,{style:{height:40,width:200,flexDirection:'row'},placeholder:"\u5199\u70b9\u4ec0\u4e48\u5427..."}),a.default.createElement(s.Button,{title:"\u63d0\u4ea4",onPress:this._onPressButton,style:{marginBottom:50}})))}}]),t})(o.Component);r.default=c;var f=s.StyleSheet.create({hello:{color:'#ff0000',fontWeight:'bold',textAlign:'center',fontSize:28},container:{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#F5FCFF'},welcome:{fontSize:20,textAlign:'center',margin:10},instructions:{textAlign:'center',color:'#333333',marginBottom:5},item:{textAlign:'center',color:'#333333',padding:10,fontSize:20,marginBottom:5}})},426,[102,12]);