__d(function(i,e,r,s,n){'use strict';var o=e(n[0]),E=e(n[1]),d=(function(){function i(){babelHelpers.classCallCheck(this,i),this.PERMISSIONS={READ_CALENDAR:'android.permission.READ_CALENDAR',WRITE_CALENDAR:'android.permission.WRITE_CALENDAR',CAMERA:'android.permission.CAMERA',READ_CONTACTS:'android.permission.READ_CONTACTS',WRITE_CONTACTS:'android.permission.WRITE_CONTACTS',GET_ACCOUNTS:'android.permission.GET_ACCOUNTS',ACCESS_FINE_LOCATION:'android.permission.ACCESS_FINE_LOCATION',ACCESS_COARSE_LOCATION:'android.permission.ACCESS_COARSE_LOCATION',RECORD_AUDIO:'android.permission.RECORD_AUDIO',READ_PHONE_STATE:'android.permission.READ_PHONE_STATE',CALL_PHONE:'android.permission.CALL_PHONE',READ_CALL_LOG:'android.permission.READ_CALL_LOG',WRITE_CALL_LOG:'android.permission.WRITE_CALL_LOG',ADD_VOICEMAIL:'com.android.voicemail.permission.ADD_VOICEMAIL',USE_SIP:'android.permission.USE_SIP',PROCESS_OUTGOING_CALLS:'android.permission.PROCESS_OUTGOING_CALLS',BODY_SENSORS:'android.permission.BODY_SENSORS',SEND_SMS:'android.permission.SEND_SMS',RECEIVE_SMS:'android.permission.RECEIVE_SMS',READ_SMS:'android.permission.READ_SMS',RECEIVE_WAP_PUSH:'android.permission.RECEIVE_WAP_PUSH',RECEIVE_MMS:'android.permission.RECEIVE_MMS',READ_EXTERNAL_STORAGE:'android.permission.READ_EXTERNAL_STORAGE',WRITE_EXTERNAL_STORAGE:'android.permission.WRITE_EXTERNAL_STORAGE'},this.RESULTS={GRANTED:'granted',DENIED:'denied',NEVER_ASK_AGAIN:'never_ask_again'}}return babelHelpers.createClass(i,[{key:"checkPermission",value:function(i){return console.warn('"PermissionsAndroid.checkPermission" is deprecated. Use "PermissionsAndroid.check" instead'),E.PermissionsAndroid.checkPermission(i)}},{key:"check",value:function(i){return E.PermissionsAndroid.checkPermission(i)}},{key:"requestPermission",value:function(i,e){var r;return o.async(function(s){for(;;)switch(s.prev=s.next){case 0:return console.warn('"PermissionsAndroid.requestPermission" is deprecated. Use "PermissionsAndroid.request" instead'),s.next=3,o.awrap(this.request(i,e));case 3:return r=s.sent,s.abrupt("return",r===this.RESULTS.GRANTED);case 5:case"end":return s.stop()}},null,this)}},{key:"request",value:function(i,e){return o.async(function(r){for(;;)switch(r.prev=r.next){case 0:if(!e){r.next=6;break}return r.next=3,o.awrap(E.PermissionsAndroid.shouldShowRequestPermissionRationale(i));case 3:if(!r.sent){r.next=6;break}return r.abrupt("return",new Promise(function(r,s){E.DialogManagerAndroid.showAlert(e,function(){return s(new Error('Error showing rationale'))},function(){return r(E.PermissionsAndroid.requestPermission(i))})}));case 6:return r.abrupt("return",E.PermissionsAndroid.requestPermission(i));case 7:case"end":return r.stop()}},null,this)}},{key:"requestMultiple",value:function(i){return E.PermissionsAndroid.requestMultiplePermissions(i)}}]),i})();d=new d,r.exports=d},88,[86,15]);