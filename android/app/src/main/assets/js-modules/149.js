__d(function(e,r,t,n,s){'use strict';function a(e){switch(e){case.75:return'ldpi';case 1:return'mdpi';case 1.5:return'hdpi';case 2:return'xhdpi';case 3:return'xxhdpi';case 4:return'xxxhdpi'}throw new Error('no such scale')}var i=new Set(['gif','jpeg','jpg','png','svg','webp','xml']);function o(e){var r=e.httpServerLocation;return'/'===r[0]&&(r=r.substr(1)),r}t.exports={getAndroidAssetSuffix:a,getAndroidResourceFolderName:function(e,r){if(!i.has(e.type))return'raw';var t=a(r);if(!t)throw new Error('Don\'t know which android drawable suffix to use for asset: '+JSON.stringify(e));return'drawable-'+t},getAndroidResourceIdentifier:function(e){return(o(e)+'/'+e.name).toLowerCase().replace(/\//g,'_').replace(/([^a-z0-9_])/g,'').replace(/^assets_/,'')},getBasePath:o}},149,[]);