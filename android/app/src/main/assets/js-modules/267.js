__d(function(e,t,n,s,o){'use strict';var i,a=t(o[0]),r=t(o[1]),l=t(o[2]),c=t(o[3]),u=(t(o[4]),t(o[5])),p=t(o[6]),h=t(o[7]),d=t(o[8]),f=t(o[9]),b=t(o[10]),g=t(o[11]),y=t(o[12]),v=t(o[13]),_=t(o[14]),S=t(o[15]),C=t(o[16]).ViewContextTypes,x=t(o[17]),m=t(o[18]),T=t(o[19]);t(o[20]);i=T('AndroidTextInput',null);var I=['phoneNumber','link','address','calendarEvent','none','all'],F=p({displayName:'TextInput',statics:{State:g},propTypes:babelHelpers.extends({},S,{autoCapitalize:h.oneOf(['none','sentences','words','characters']),autoCorrect:h.bool,spellCheck:h.bool,autoFocus:h.bool,allowFontScaling:h.bool,editable:h.bool,keyboardType:h.oneOf(['default','email-address','numeric','phone-pad','ascii-capable','numbers-and-punctuation','url','number-pad','name-phone-pad','decimal-pad','twitter','web-search','visible-password']),keyboardAppearance:h.oneOf(['default','light','dark']),returnKeyType:h.oneOf(['done','go','next','search','send','none','previous','default','emergency-call','google','join','route','yahoo']),returnKeyLabel:h.string,maxLength:h.number,numberOfLines:h.number,disableFullscreenUI:h.bool,enablesReturnKeyAutomatically:h.bool,multiline:h.bool,textBreakStrategy:h.oneOf(['simple','highQuality','balanced']),onBlur:h.func,onFocus:h.func,onChange:h.func,onChangeText:h.func,onContentSizeChange:h.func,onEndEditing:h.func,onSelectionChange:h.func,onSubmitEditing:h.func,onKeyPress:h.func,onLayout:h.func,onScroll:h.func,placeholder:h.string,placeholderTextColor:a,secureTextEntry:h.bool,selectionColor:a,selectionState:h.instanceOf(r),selection:h.shape({start:h.number.isRequired,end:h.number}),value:h.string,defaultValue:h.string,clearButtonMode:h.oneOf(['never','while-editing','unless-editing','always']),clearTextOnFocus:h.bool,selectTextOnFocus:h.bool,blurOnSubmit:h.bool,style:b.propTypes.style,underlineColorAndroid:a,inlineImageLeft:h.string,inlineImagePadding:h.number,dataDetectorTypes:h.oneOfType([h.oneOf(I),h.arrayOf(h.oneOf(I))]),caretHidden:h.bool,contextMenuHidden:h.bool,inputAccessoryViewID:h.string}),getDefaultProps:function(){return{allowFontScaling:!0}},mixins:[c,y],isFocused:function(){return g.currentlyFocusedField()===d.findNodeHandle(this._inputRef)},_inputRef:void 0,_focusSubscription:void 0,_lastNativeText:void 0,_lastNativeSelection:void 0,componentDidMount:function(){var e=this;this._lastNativeText=this.props.value,this.context.focusEmitter?(this._focusSubscription=this.context.focusEmitter.addListener('focus',function(t){e===t?e.requestAnimationFrame(e.focus):e.isFocused()&&e.blur()}),this.props.autoFocus&&this.context.onFocusRequested(this)):this.props.autoFocus&&this.requestAnimationFrame(this.focus)},componentWillUnmount:function(){this._focusSubscription&&this._focusSubscription.remove(),this.isFocused()&&this.blur()},getChildContext:function(){return{isInAParentText:!0}},childContextTypes:C,contextTypes:babelHelpers.extends({},C,{onFocusRequested:h.func,focusEmitter:h.instanceOf(l)}),clear:function(){this.setNativeProps({text:''})},render:function(){return this._renderAndroid()},_getText:function(){return'string'==typeof this.props.value?this.props.value:'string'==typeof this.props.defaultValue?this.props.defaultValue:''},_setNativeRef:function(e){this._inputRef=e},_renderIOSLegacy:function(){var e=void 0,t=babelHelpers.extends({},this.props);if(t.style=[this.props.style],t.selection&&null==t.selection.end&&(t.selection={start:t.selection.start,end:t.selection.start}),t.multiline){var n=t.children,s=0;u.Children.forEach(n,function(){return++s}),m(!(t.value&&s),'Cannot specify both value and children.'),s>=1&&(n=u.createElement(b,{style:t.style,allowFontScaling:t.allowFontScaling},n)),t.inputView&&(n=[n,t.inputView]),t.style.unshift(R.multilineInput),e=u.createElement(void 0,babelHelpers.extends({ref:this._setNativeRef},t,{children:n,onFocus:this._onFocus,onBlur:this._onBlur,onChange:this._onChange,onContentSizeChange:this.props.onContentSizeChange,onSelectionChange:this._onSelectionChange,onTextInput:this._onTextInput,onSelectionChangeShouldSetResponder:x.thatReturnsTrue,text:this._getText(),dataDetectorTypes:this.props.dataDetectorTypes,onScroll:this._onScroll}))}else e=u.createElement(void 0,babelHelpers.extends({ref:this._setNativeRef},t,{onFocus:this._onFocus,onBlur:this._onBlur,onChange:this._onChange,onSelectionChange:this._onSelectionChange,onSelectionChangeShouldSetResponder:x.thatReturnsTrue,text:this._getText()}));return u.createElement(v,{onLayout:t.onLayout,onPress:this._onPress,rejectResponderTermination:!0,accessible:t.accessible,accessibilityLabel:t.accessibilityLabel,accessibilityTraits:t.accessibilityTraits,nativeID:this.props.nativeID,testID:t.testID},e)},_renderIOS:function(){var e=babelHelpers.extends({},this.props);e.style=[this.props.style],e.selection&&null==e.selection.end&&(e.selection={start:e.selection.start,end:e.selection.start});var t=void e.multiline;e.multiline&&e.style.unshift(R.multilineInput);var n=u.createElement(t,babelHelpers.extends({ref:this._setNativeRef},e,{onFocus:this._onFocus,onBlur:this._onBlur,onChange:this._onChange,onContentSizeChange:this.props.onContentSizeChange,onSelectionChange:this._onSelectionChange,onTextInput:this._onTextInput,onSelectionChangeShouldSetResponder:x.thatReturnsTrue,text:this._getText(),dataDetectorTypes:this.props.dataDetectorTypes,onScroll:this._onScroll}));return u.createElement(v,{onLayout:e.onLayout,onPress:this._onPress,rejectResponderTermination:!0,accessible:e.accessible,accessibilityLabel:e.accessibilityLabel,accessibilityTraits:e.accessibilityTraits,nativeID:this.props.nativeID,testID:e.testID},n)},_renderAndroid:function(){var e=babelHelpers.extends({},this.props);e.style=[this.props.style],e.autoCapitalize=_.AndroidTextInput.Constants.AutoCapitalizationType[e.autoCapitalize||'sentences'];var t=this.props.children,n=0;u.Children.forEach(t,function(){return++n}),m(!(this.props.value&&n),'Cannot specify both value and children.'),n>1&&(t=u.createElement(b,null,t)),e.selection&&null==e.selection.end&&(e.selection={start:e.selection.start,end:e.selection.start});var s=u.createElement(i,babelHelpers.extends({ref:this._setNativeRef},e,{mostRecentEventCount:0,onFocus:this._onFocus,onBlur:this._onBlur,onChange:this._onChange,onSelectionChange:this._onSelectionChange,onTextInput:this._onTextInput,text:this._getText(),children:t,disableFullscreenUI:this.props.disableFullscreenUI,textBreakStrategy:this.props.textBreakStrategy,onScroll:this._onScroll}));return u.createElement(v,{onLayout:e.onLayout,onPress:this._onPress,accessible:this.props.accessible,accessibilityLabel:this.props.accessibilityLabel,accessibilityComponentType:this.props.accessibilityComponentType,nativeID:this.props.nativeID,testID:this.props.testID},s)},_onFocus:function(e){this.props.onFocus&&this.props.onFocus(e),this.props.selectionState&&this.props.selectionState.focus()},_onPress:function(e){(this.props.editable||void 0===this.props.editable)&&this.focus()},_onChange:function(e){this._inputRef&&this._inputRef.setNativeProps({mostRecentEventCount:e.nativeEvent.eventCount});var t=e.nativeEvent.text;this.props.onChange&&this.props.onChange(e),this.props.onChangeText&&this.props.onChangeText(t),this._inputRef&&(this._lastNativeText=t,this.forceUpdate())},_onSelectionChange:function(e){this.props.onSelectionChange&&this.props.onSelectionChange(e),this._inputRef&&(this._lastNativeSelection=e.nativeEvent.selection,(this.props.selection||this.props.selectionState)&&this.forceUpdate())},componentDidUpdate:function(){var e={};this._lastNativeText!==this.props.value&&'string'==typeof this.props.value&&(e.text=this.props.value);var t=this.props.selection;this._lastNativeSelection&&t&&(this._lastNativeSelection.start!==t.start||this._lastNativeSelection.end!==t.end)&&(e.selection=this.props.selection),Object.keys(e).length>0&&this._inputRef&&this._inputRef.setNativeProps(e),this.props.selectionState&&t&&this.props.selectionState.update(t.start,t.end)},_onBlur:function(e){this.blur(),this.props.onBlur&&this.props.onBlur(e),this.props.selectionState&&this.props.selectionState.blur()},_onTextInput:function(e){this.props.onTextInput&&this.props.onTextInput(e)},_onScroll:function(e){this.props.onScroll&&this.props.onScroll(e)}}),R=f.create({multilineInput:{paddingTop:5}});n.exports=F},267,[36,268,31,38,23,112,156,109,39,151,165,98,176,175,96,113,155,28,13,128,27]);