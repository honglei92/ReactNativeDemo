__d(function(t,r,e,a,n){'use strict';var i=r(n[0]);function s(t,r,e){for(var a=[],n=0,s=0;s<r;s++)for(var f=e(s),l=f.offset+f.length,o=0;o<t.length;o++)if(null==a[o]&&l>=t[o]&&(a[o]=s,n++,o===t.length-1))return i(n===t.length,'bad offsets input, should be in increasing order: %s',JSON.stringify(t)),a;return a}function f(t,r){return r.last-r.first+1-Math.max(0,1+Math.min(r.last,t.last)-Math.max(r.first,t.first))}var l={computeWindowedRenderLimits:function(t,r,e,a){var n=t.data,i=t.getItemCount,l=t.maxToRenderPerBatch,o=t.windowSize,u=i(n);if(0===u)return r;var h=a.offset,m=a.velocity,v=a.visibleLength,c=Math.max(0,h),d=c+v,g=(o-1)*v,b=m>1?'after':m<-1?'before':'none',x=Math.max(0,c-.5*g),M=Math.max(0,d+.5*g);if(e(u-1).offset<x)return{first:Math.max(0,u-1-l),last:u-1};var w=s([x,c,d,M],t.getItemCount(t.data),e),p=babelHelpers.slicedToArray(w,4),y=p[0],C=p[1],O=p[2],L=p[3];y=null==y?0:y,C=null==C?Math.max(0,y):C,L=null==L?u-1:L;for(var R={first:C,last:O=null==O?Math.min(L,C+l-1):O},S=f(r,R);!(C<=y&&O>=L);){var T=S>=l,B=C<=r.first||C>r.last,I=C>y&&(!T||!B),J=O>=r.last||O<r.first,N=O<L&&(!T||!J);if(T&&!I&&!N)break;!I||'after'===b&&N&&J||(B&&S++,C--),!N||'before'===b&&I&&B||(J&&S++,O++)}if(!(O>=C&&C>=0&&O<u&&C>=y&&O<=L&&C<=R.first&&O>=R.last))throw new Error('Bad window calculation '+JSON.stringify({first:C,last:O,itemCount:u,overscanFirst:y,overscanLast:L,visible:R}));return{first:C,last:O}},elementsThatOverlapOffsets:s,newRangeCount:f};e.exports=l},236,[13]);