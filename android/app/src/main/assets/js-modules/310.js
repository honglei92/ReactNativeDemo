__d(function(a,e,t,i,n){Object.defineProperty(i,"__esModule",{value:!0});var r='Navigation/BACK',o='Navigation/INIT';i.default={BACK:r,INIT:o,NAVIGATE:"Navigation/NAVIGATE",SET_PARAMS:"Navigation/SET_PARAMS",back:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:r,key:a.key,immediate:a.immediate}},init:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={type:o};return a.params&&(e.params=a.params),e},navigate:function(a){var e={type:"Navigation/NAVIGATE",routeName:a.routeName};return a.params&&(e.params=a.params),a.action&&(e.action=a.action),a.key&&(e.key=a.key),e},setParams:function(a){return{type:"Navigation/SET_PARAMS",key:a.key,params:a.params}}}},310,[]);