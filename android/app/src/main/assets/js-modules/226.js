__d(function(e,t,o,n,s){'use strict';var r=t(s[0]),i=(t(s[1]),t(s[2])),l=t(s[3]),d=t(s[4]),a=t(s[5]).ScrollViewManager,h=t(s[6]),c=t(s[7]),p=t(s[8]),u=t(s[9]),R=t(s[10]),g=t(s[11]),S=t(s[12]),w=t(s[13]),m=t(s[14]),f=S({displayName:'ListView',_childFrames:[],_sentEndForContentLength:null,_scrollComponent:null,_prevRenderedRowsCount:0,_visibleRows:{},scrollProperties:{},mixins:[c.Mixin,u],statics:{DataSource:r},propTypes:babelHelpers.extends({},h.propTypes,{dataSource:l.instanceOf(r).isRequired,renderSeparator:l.func,renderRow:l.func.isRequired,initialListSize:l.number.isRequired,onEndReached:l.func,onEndReachedThreshold:l.number.isRequired,pageSize:l.number.isRequired,renderFooter:l.func,renderHeader:l.func,renderSectionHeader:l.func,renderScrollComponent:l.func.isRequired,scrollRenderAheadDistance:l.number.isRequired,onChangeVisibleRows:l.func,removeClippedSubviews:l.bool,stickySectionHeadersEnabled:l.bool,stickyHeaderIndices:l.arrayOf(l.number).isRequired,enableEmptySections:l.bool}),getMetrics:function(){return{contentLength:this.scrollProperties.contentLength,totalRows:this.props.enableEmptySections?this.props.dataSource.getRowAndSectionCount():this.props.dataSource.getRowCount(),renderedRows:this.state.curRenderedRowsCount,visibleRows:Object.keys(this._visibleRows).length}},getScrollResponder:function(){if(this._scrollComponent&&this._scrollComponent.getScrollResponder)return this._scrollComponent.getScrollResponder()},getScrollableNode:function(){return this._scrollComponent&&this._scrollComponent.getScrollableNode?this._scrollComponent.getScrollableNode():d.findNodeHandle(this._scrollComponent)},scrollTo:function(){var e;this._scrollComponent&&this._scrollComponent.scrollTo&&(e=this._scrollComponent).scrollTo.apply(e,arguments)},scrollToEnd:function(e){this._scrollComponent&&(this._scrollComponent.scrollToEnd?this._scrollComponent.scrollToEnd(e):console.warn("The scroll component used by the ListView does not support scrollToEnd. Check the renderScrollComponent prop of your ListView."))},flashScrollIndicators:function(){this._scrollComponent&&this._scrollComponent.flashScrollIndicators&&this._scrollComponent.flashScrollIndicators()},setNativeProps:function(e){this._scrollComponent&&this._scrollComponent.setNativeProps(e)},getDefaultProps:function(){return{initialListSize:10,pageSize:1,renderScrollComponent:function(e){return i.createElement(h,e)},scrollRenderAheadDistance:1e3,onEndReachedThreshold:1e3,stickySectionHeadersEnabled:!1,stickyHeaderIndices:[]}},getInitialState:function(){return{curRenderedRowsCount:this.props.initialListSize,highlightedRow:{}}},getInnerViewNode:function(){return this._scrollComponent.getInnerViewNode()},UNSAFE_componentWillMount:function(){this.scrollProperties={visibleLength:null,contentLength:null,offset:0},this._childFrames=[],this._visibleRows={},this._prevRenderedRowsCount=0,this._sentEndForContentLength=null},componentDidMount:function(){var e=this;this.requestAnimationFrame(function(){e._measureAndUpdateScrollProps()})},UNSAFE_componentWillReceiveProps:function(e){var t=this;this.props.dataSource===e.dataSource&&this.props.initialListSize===e.initialListSize||this.setState(function(e,o){return t._prevRenderedRowsCount=0,{curRenderedRowsCount:Math.min(Math.max(e.curRenderedRowsCount,o.initialListSize),o.enableEmptySections?o.dataSource.getRowAndSectionCount():o.dataSource.getRowCount())}},function(){return t._renderMoreRowsIfNeeded()})},componentDidUpdate:function(){var e=this;this.requestAnimationFrame(function(){e._measureAndUpdateScrollProps()})},_onRowHighlighted:function(e,t){this.setState({highlightedRow:{sectionID:e,rowID:t}})},render:function(){for(var e=[],o=this.props.dataSource,n=o.rowIdentities,r=0,l=[],d=this.props.renderSectionHeader,a=this.props.renderHeader&&this.props.renderHeader(),h=this.props.renderFooter&&this.props.renderFooter(),c=a?1:0,u=0;u<n.length;u++){var S=o.sectionIdentities[u],w=n[u];if(0===w.length){if(void 0===this.props.enableEmptySections){t(s[15])(!1,"In next release empty section headers will be rendered. In this release you can use 'enableEmptySections' flag to render empty section headers.");continue}t(s[16])(this.props.enableEmptySections,"In next release 'enableEmptySections' flag will be deprecated, empty section headers will always be rendered. If empty section headers are not desirable their indices should be excluded from sectionIDs object. In this release 'enableEmptySections' may only have value 'true' to allow empty section headers rendering.")}if(d){var m=d(o.getSectionHeaderData(u),S);m&&(e.push(i.cloneElement(m,{key:'s_'+S})),this.props.stickySectionHeadersEnabled&&l.push(c),c++)}for(var f=0;f<w.length;f++){var C=w[f],_=S+'_'+C,b=r>=this._prevRenderedRowsCount&&o.rowShouldUpdate(u,f),v=i.createElement(p,{key:'r_'+_,shouldUpdate:!!b,render:this.props.renderRow.bind(null,o.getRowData(u,f),S,C,this._onRowHighlighted)});if(e.push(v),c++,this.props.renderSeparator&&(f!==w.length-1||u===n.length-1)){var y=this.state.highlightedRow.sectionID===S&&(this.state.highlightedRow.rowID===C||this.state.highlightedRow.rowID===w[f+1]),E=this.props.renderSeparator(S,C,y);E&&(e.push(i.createElement(R,{key:'s_'+_},E)),c++)}if(++r===this.state.curRenderedRowsCount)break}if(r>=this.state.curRenderedRowsCount)break}var L=this.props,I=L.renderScrollComponent,P=babelHelpers.objectWithoutProperties(L,["renderScrollComponent"]);return P.scrollEventThrottle||(P.scrollEventThrottle=50),void 0===P.removeClippedSubviews&&(P.removeClippedSubviews=!0),babelHelpers.extends(P,{onScroll:this._onScroll,stickyHeaderIndices:this.props.stickyHeaderIndices.concat(l),onKeyboardWillShow:void 0,onKeyboardWillHide:void 0,onKeyboardDidShow:void 0,onKeyboardDidHide:void 0}),g(I(P),{ref:this._setScrollComponentRef,onContentSizeChange:this._onContentSizeChange,onLayout:this._onLayout,DEPRECATED_sendUpdatedChildFrames:void 0!==typeof P.onChangeVisibleRows},a,e,h)},_measureAndUpdateScrollProps:function(){var e=this.getScrollResponder();e&&e.getInnerViewNode&&a&&a.calculateChildFrames&&a.calculateChildFrames(d.findNodeHandle(e),this._updateVisibleRows)},_setScrollComponentRef:function(e){this._scrollComponent=e},_onContentSizeChange:function(e,t){var o=this.props.horizontal?e:t;o!==this.scrollProperties.contentLength&&(this.scrollProperties.contentLength=o,this._updateVisibleRows(),this._renderMoreRowsIfNeeded()),this.props.onContentSizeChange&&this.props.onContentSizeChange(e,t)},_onLayout:function(e){var t=e.nativeEvent.layout,o=t.width,n=t.height,s=this.props.horizontal?o:n;s!==this.scrollProperties.visibleLength&&(this.scrollProperties.visibleLength=s,this._updateVisibleRows(),this._renderMoreRowsIfNeeded()),this.props.onLayout&&this.props.onLayout(e)},_maybeCallOnEndReached:function(e){return!!(this.props.onEndReached&&this.scrollProperties.contentLength!==this._sentEndForContentLength&&this._getDistanceFromEnd(this.scrollProperties)<this.props.onEndReachedThreshold&&this.state.curRenderedRowsCount===(this.props.enableEmptySections?this.props.dataSource.getRowAndSectionCount():this.props.dataSource.getRowCount()))&&(this._sentEndForContentLength=this.scrollProperties.contentLength,this.props.onEndReached(e),!0)},_renderMoreRowsIfNeeded:function(){null!==this.scrollProperties.contentLength&&null!==this.scrollProperties.visibleLength&&this.state.curRenderedRowsCount!==(this.props.enableEmptySections?this.props.dataSource.getRowAndSectionCount():this.props.dataSource.getRowCount())?this._getDistanceFromEnd(this.scrollProperties)<this.props.scrollRenderAheadDistance&&this._pageInNewRows():this._maybeCallOnEndReached()},_pageInNewRows:function(){var e=this;this.setState(function(t,o){var n=Math.min(t.curRenderedRowsCount+o.pageSize,o.enableEmptySections?o.dataSource.getRowAndSectionCount():o.dataSource.getRowCount());return e._prevRenderedRowsCount=t.curRenderedRowsCount,{curRenderedRowsCount:n}},function(){e._measureAndUpdateScrollProps(),e._prevRenderedRowsCount=e.state.curRenderedRowsCount})},_getDistanceFromEnd:function(e){return e.contentLength-e.visibleLength-e.offset},_updateVisibleRows:function(e){var t=this;if(this.props.onChangeVisibleRows){e&&e.forEach(function(e){t._childFrames[e.index]=m(e)});for(var o=!this.props.horizontal,n=this.props.dataSource,s=this.scrollProperties.offset,r=s+this.scrollProperties.visibleLength,i=n.rowIdentities,l=this.props.renderHeader&&this.props.renderHeader()?1:0,d=!1,a={},h=0;h<i.length;h++){var c=i[h];if(0!==c.length){var p=n.sectionIdentities[h];this.props.renderSectionHeader&&l++;var u=this._visibleRows[p];u||(u={});for(var R=0;R<c.length;R++){var g=c[R],S=this._childFrames[l];if(l++,!this.props.renderSeparator||R===c.length-1&&h!==i.length-1||l++,!S)break;var f=u[g],C=o?S.y:S.x,_=C+(o?S.height:S.width);if(!C&&!_||C===_)break;C>r||_<s?f&&(d=!0,delete u[g],a[p]||(a[p]={}),a[p][g]=!1):f||(d=!0,u[g]=!0,a[p]||(a[p]={}),a[p][g]=!0)}w(u)?this._visibleRows[p]&&delete this._visibleRows[p]:this._visibleRows[p]=u}}d&&this.props.onChangeVisibleRows(this._visibleRows,a)}},_onScroll:function(e){var t=!this.props.horizontal;this.scrollProperties.visibleLength=e.nativeEvent.layoutMeasurement[t?'height':'width'],this.scrollProperties.contentLength=e.nativeEvent.contentSize[t?'height':'width'],this.scrollProperties.offset=e.nativeEvent.contentOffset[t?'y':'x'],this._updateVisibleRows(e.nativeEvent.updatedChildFrames),this._maybeCallOnEndReached(e)||this._renderMoreRowsIfNeeded(),this.props.onEndReached&&this._getDistanceFromEnd(this.scrollProperties)>this.props.onEndReachedThreshold&&(this._sentEndForContentLength=null),this.props.onScroll&&this.props.onScroll(e)}});o.exports=f},226,[227,23,112,109,39,15,208,210,229,176,153,230,156,228,116,27,13]);