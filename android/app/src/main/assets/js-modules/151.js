__d(function(e,t,r,o,i){'use strict';var l=t(i[0]),n=t(i[1]),s=t(i[2]),a=t(i[3]),u=t(i[4]),c=l.roundToNearestPixel(.4);0===c&&(c=1/l.get());var f={position:'absolute',left:0,right:0,top:0,bottom:0},b=n.register(f);r.exports={hairlineWidth:c,absoluteFill:b,absoluteFillObject:f,compose:function(e,t){return null!=e&&null!=t?[e,t]:null!=e?e:t},flatten:u,setStyleAttributePreprocessor:function(e,t){var r=void 0;if('string'==typeof s[e])r={};else{if('object'!=typeof s[e])return void console.error(e+" is not a valid style attribute");r=s[e]}s[e]=babelHelpers.extends({},r,{process:t})},create:function(e){var t={};for(var r in e)a.validateStyle(r,e),t[r]=e[r]&&n.register(e[r]);return t}}},151,[146,101,130,152,100]);