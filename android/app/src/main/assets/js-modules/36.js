__d(function(n,r,f,e,i){'use strict';var a=r(i[0]),l=function(n,r,f,e,i,l){var o=r[f];return void 0===o||null===o?n?new Error('Required '+i+' `'+(l||f)+'` was not specified in `'+e+'`.'):void 0:'number'!=typeof o&&null===a(o)?new Error('Invalid '+i+' `'+(l||f)+'` supplied to `'+e+'`: '+o+"\nValid color formats are\n  - '#f0f' (#rgb)\n  - '#f0fc' (#rgba)\n  - '#ff00ff' (#rrggbb)\n  - '#ff00ff00' (#rrggbbaa)\n  - 'rgb(255, 255, 255)'\n  - 'rgba(255, 255, 255, 1.0)'\n  - 'hsl(360, 100%, 100%)'\n  - 'hsla(360, 100%, 100%, 1.0)'\n  - 'transparent'\n  - 'red'\n  - 0xff00ff00 (0xrrggbbaa)\n"):void 0},o=l.bind(null,!1);o.isRequired=l.bind(null,!0),f.exports=o},36,[37]);