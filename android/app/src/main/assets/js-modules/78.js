__d(function(e,t,s,i,r){'use strict';var o=t(r[0]),n=t(r[1]),a=t(r[2]),c=t(r[3]),d=t(r[4]),l=(t(r[5]),t(r[6])),b=t(r[7]),u=t(r[8]),h=t(r[9]),y=d.WebSocketModule,p=0,f=1,_=2,v=3,k=0,E=(function(e){function t(e,s,i){babelHelpers.classCallCheck(this,t);var r=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));r.CONNECTING=p,r.OPEN=f,r.CLOSING=_,r.CLOSED=v,r.readyState=p,'string'==typeof s&&(s=[s]);var o=i||{},n=o.headers,c=void 0===n?{}:n,d=babelHelpers.objectWithoutProperties(o,["headers"]);if(d&&'string'==typeof d.origin&&(console.warn('Specifying `origin` as a WebSocket connection option is deprecated. Include it under `headers` instead.'),c.origin=d.origin,delete d.origin),Object.keys(d).length>0&&console.warn('Unrecognized WebSocket connection option(s) `'+Object.keys(d).join('`, `')+"`. Did you mean to put these under `headers`?"),Array.isArray(s)||(s=null),!t.isAvailable)throw new Error("Cannot initialize WebSocket module. Native module WebSocketModule is missing.");return r._eventEmitter=new a(y),r._socketId=k++,r._registerEvents(),y.connect(e,s,{headers:c},r._socketId),r}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"close",value:function(e,t){this.readyState!==this.CLOSING&&this.readyState!==this.CLOSED&&(this.readyState=this.CLOSING,this._close(e,t))}},{key:"send",value:function(e){if(this.readyState===this.CONNECTING)throw new Error('INVALID_STATE_ERR');if(e instanceof o)return h(c.isAvailable,'Native module BlobModule is required for blob support'),void c.sendOverSocket(e,this._socketId);if('string'!=typeof e){if(!(e instanceof ArrayBuffer||ArrayBuffer.isView(e)))throw new Error('Unsupported data type');y.sendBinary(u(e),this._socketId)}else y.send(e,this._socketId)}},{key:"ping",value:function(){if(this.readyState===this.CONNECTING)throw new Error('INVALID_STATE_ERR');y.ping(this._socketId)}},{key:"_close",value:function(e,t){var s='number'==typeof e?e:1e3,i='string'==typeof t?t:'';y.close(s,i,this._socketId),c.isAvailable&&'blob'===this._binaryType&&c.removeWebSocketHandler(this._socketId)}},{key:"_unregisterEvents",value:function(){this._subscriptions.forEach(function(e){return e.remove()}),this._subscriptions=[]}},{key:"_registerEvents",value:function(){var e=this;this._subscriptions=[this._eventEmitter.addListener('websocketMessage',function(t){if(t.id===e._socketId){var s=t.data;switch(t.type){case'binary':s=b.toByteArray(t.data).buffer;break;case'blob':s=c.createFromOptions(t.data)}e.dispatchEvent(new l('message',{data:s}))}}),this._eventEmitter.addListener('websocketOpen',function(t){t.id===e._socketId&&(e.readyState=e.OPEN,e.dispatchEvent(new l('open')))}),this._eventEmitter.addListener('websocketClosed',function(t){t.id===e._socketId&&(e.readyState=e.CLOSED,e.dispatchEvent(new l('close',{code:t.code,reason:t.reason})),e._unregisterEvents(),e.close())}),this._eventEmitter.addListener('websocketFailed',function(t){t.id===e._socketId&&(e.readyState=e.CLOSED,e.dispatchEvent(new l('error',{message:t.message})),e.dispatchEvent(new l('close',{message:t.message})),e._unregisterEvents(),e.close())})]}},{key:"binaryType",get:function(){return this._binaryType},set:function(e){if('blob'!==e&&'arraybuffer'!==e)throw new Error('binaryType must be either \'blob\' or \'arraybuffer\'');'blob'!==this._binaryType&&'blob'!==e||(h(c.isAvailable,'Native module BlobModule is required for blob support'),'blob'===e?c.addWebSocketHandler(this._socketId):c.removeWebSocketHandler(this._socketId)),this._binaryType=e}}]),t})(n.apply(void 0,['close','error','message','open']));E.CONNECTING=p,E.OPEN=f,E.CLOSING=_,E.CLOSED=v,E.isAvailable=!!y,s.exports=E},78,[72,62,68,73,15,23,79,71,70,13]);