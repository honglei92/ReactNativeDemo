__d(function(e,n,t,c,r){'use strict';var u=[],i={name:'default'},f={setActiveScene:function(e){i=e,u.forEach(function(e){return e(i)})},getActiveScene:function(){return i},addActiveSceneChangedListener:function(e){return u.push(e),{remove:function(){u=u.filter(function(n){return e!==n})}}}};t.exports=f},282,[]);