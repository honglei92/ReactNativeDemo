__d(function(e,r,t,a,n){'use strict';var o=r(n[0]),i=r(n[1]),l=r(n[2]).BlobModule;var u=(function(){function r(){babelHelpers.classCallCheck(this,r)}return babelHelpers.createClass(r,null,[{key:"createFromParts",value:function(t,a){var n='xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(e){var r=16*Math.random()|0;return('x'==e?r:3&r|8).toString(16)}),i=t.map(function(r){if(r instanceof ArrayBuffer||e.ArrayBufferView&&r instanceof e.ArrayBufferView)throw new Error("Creating blobs from 'ArrayBuffer' and 'ArrayBufferView' are not supported");return r instanceof o?{data:r.data,type:'blob'}:{data:String(r),type:'string'}}),u=i.reduce(function(r,t){return'string'===t.type?r+e.unescape(encodeURI(t.data)).length:r+t.data.size},0);return l.createFromParts(i,n),r.createFromOptions({blobId:n,offset:0,size:u,type:a?a.type:'',lastModified:a?a.lastModified:Date.now()})}},{key:"createFromOptions",value:function(e){return i.register(e.blobId),babelHelpers.extends(Object.create(o.prototype),{data:e})}},{key:"release",value:function(e){i.unregister(e),i.has(e)||l.release(e)}},{key:"addNetworkingHandler",value:function(){l.addNetworkingHandler()}},{key:"addWebSocketHandler",value:function(e){l.addWebSocketHandler(e)}},{key:"removeWebSocketHandler",value:function(e){l.removeWebSocketHandler(e)}},{key:"sendOverSocket",value:function(e,r){l.sendOverSocket(e.data,r)}}]),r})();u.isAvailable=!!l,t.exports=u},73,[72,74,15]);