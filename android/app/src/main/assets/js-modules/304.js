__d(function(e,t,r,n,s){'use strict';var a=t(s[0]),c=t(s[1]),o=t(s[2]).SourceCode,u=void 0;r.exports=function(r){var n,i,d,f,p;return a.async(function(l){for(;;)switch(l.prev=l.next){case 0:if(u||(u=e.fetch||t(s[3]).fetch),(n=c()).bundleLoadedFromServer){l.next=4;break}throw new Error('Bundle was not loaded from the packager');case 4:return i=r,o.scriptURL&&(d=!1,i=r.map(function(e){return d||(t=e.file,/^http/.test(t)||!/[\\/]/.test(t))?(d=!0,e):babelHelpers.extends({},e,{file:o.scriptURL});var t})),l.next=8,a.awrap(u(n.url+'symbolicate',{method:'POST',body:JSON.stringify({stack:i})}));case 8:return f=l.sent,l.next=11,a.awrap(f.json());case 11:return p=l.sent,l.abrupt("return",p.stack);case 13:case"end":return l.stop()}},null,this)}},304,[86,303,15,76]);