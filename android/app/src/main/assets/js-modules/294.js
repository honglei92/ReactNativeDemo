__d(function(e,t,i,o,n){'use strict';var a=t(n[0]),c=t(n[1]).PushNotificationManager,r=t(n[2]),l=new a(c),s=new Map,u=(function(){function e(t){var i=this;babelHelpers.classCallCheck(this,e),this._data={},this._remoteNotificationCompleteCallbackCalled=!1,this._isRemote=t.remote,this._isRemote&&(this._notificationId=t.notificationId),t.remote?Object.keys(t).forEach(function(e){var o=t[e];'aps'===e?(i._alert=o.alert,i._sound=o.sound,i._badgeCount=o.badge,i._category=o.category,i._contentAvailable=o['content-available'],i._threadID=o['thread-id']):i._data[e]=o}):(this._badgeCount=t.applicationIconBadgeNumber,this._sound=t.soundName,this._alert=t.alertBody,this._data=t.userInfo,this._category=t.category)}return babelHelpers.createClass(e,null,[{key:"presentLocalNotification",value:function(e){c.presentLocalNotification(e)}},{key:"scheduleLocalNotification",value:function(e){c.scheduleLocalNotification(e)}},{key:"cancelAllLocalNotifications",value:function(){c.cancelAllLocalNotifications()}},{key:"removeAllDeliveredNotifications",value:function(){c.removeAllDeliveredNotifications()}},{key:"getDeliveredNotifications",value:function(e){c.getDeliveredNotifications(e)}},{key:"removeDeliveredNotifications",value:function(e){c.removeDeliveredNotifications(e)}},{key:"setApplicationIconBadgeNumber",value:function(e){c.setApplicationIconBadgeNumber(e)}},{key:"getApplicationIconBadgeNumber",value:function(e){c.getApplicationIconBadgeNumber(e)}},{key:"cancelLocalNotifications",value:function(e){c.cancelLocalNotifications(e)}},{key:"getScheduledLocalNotifications",value:function(e){c.getScheduledLocalNotifications(e)}},{key:"addEventListener",value:function(t,i){var o;r('notification'===t||'register'===t||'registrationError'===t||'localNotification'===t,'PushNotificationIOS only supports `notification`, `register`, `registrationError`, and `localNotification` events'),'notification'===t?o=l.addListener("remoteNotificationReceived",function(t){i(new e(t))}):'localNotification'===t?o=l.addListener("localNotificationReceived",function(t){i(new e(t))}):'register'===t?o=l.addListener("remoteNotificationsRegistered",function(e){i(e.deviceToken)}):'registrationError'===t&&(o=l.addListener("remoteNotificationRegistrationError",function(e){i(e)})),s.set(t,o)}},{key:"removeEventListener",value:function(e,t){r('notification'===e||'register'===e||'registrationError'===e||'localNotification'===e,'PushNotificationIOS only supports `notification`, `register`, `registrationError`, and `localNotification` events');var i=s.get(e);i&&(i.remove(),s.delete(e))}},{key:"requestPermissions",value:function(e){var t={};return t=e?{alert:!!e.alert,badge:!!e.badge,sound:!!e.sound}:{alert:!0,badge:!0,sound:!0},c.requestPermissions(t)}},{key:"abandonPermissions",value:function(){c.abandonPermissions()}},{key:"checkPermissions",value:function(e){r('function'==typeof e,'Must provide a valid callback'),c.checkPermissions(e)}},{key:"getInitialNotification",value:function(){return c.getInitialNotification().then(function(t){return t&&new e(t)})}}]),babelHelpers.createClass(e,[{key:"finish",value:function(e){this._isRemote&&this._notificationId&&!this._remoteNotificationCompleteCallbackCalled&&(this._remoteNotificationCompleteCallbackCalled=!0,c.onFinishRemoteNotification(this._notificationId,e))}},{key:"getMessage",value:function(){return this._alert}},{key:"getSound",value:function(){return this._sound}},{key:"getCategory",value:function(){return this._category}},{key:"getAlert",value:function(){return this._alert}},{key:"getContentAvailable",value:function(){return this._contentAvailable}},{key:"getBadgeCount",value:function(){return this._badgeCount}},{key:"getData",value:function(){return this._data}},{key:"getThreadID",value:function(){return this._threadID}}]),e})();u.FetchResult={NewData:'UIBackgroundFetchResultNewData',NoData:'UIBackgroundFetchResultNoData',ResultFailed:'UIBackgroundFetchResultFailed'},i.exports=u},294,[68,15,13]);