// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/lang dojo/_base/html dojo/_base/array dojo/_base/declare dojo/Deferred ./BaseDijit moment/moment jimu/dijit/_chartDijitOption jimu/dijit/Chart jimu/DataSourceManager jimu/LayerInfos/LayerInfos ../utils".split(" "),function(e,g,h,k,l,m,f,n,p,q,r,t){window.makeTwix(f);return k([m],{templateString:'\x3cdiv\x3e\x3cdiv data-dojo-attach-point\x3d"noDataDiv" class\x3d"no-data-tip"\x3e${nls.noData}\x3c/div\x3e\x3cdiv class\x3d"chart-dom" data-dojo-attach-point\x3d"chartDomNode"\x3e\x3c/div\x3e\x3c /div\x3e',
type:"chart",baseClass:"infographic-chart-dijit",layerInfosObj:null,dataSourceManager:null,featuresCountForPreview:50,highLightColor:"#00ffff",dataSource:null,config:null,map:null,maxTimeIntervals:1E4,maxLabels:1E4,dataSourceType:"",featureLayer:null,constructor:function(a){this.config=a.config;this.layerInfosObj=r.getInstanceSync();this.dataSourceManager=q.getInstance()},postCreate:function(){this.inherited(arguments);this.DEFAULT_CONFIG={type:this.config.type||"column",theme:this._getChartTheme(),
labels:[],series:[{data:[]}]};this.domNode.style.width="100%";this.domNode.style.height="100%";this.chartDomNode.style.width="100%";this.chartDomNode.style.height="100%";var a={map:null};this.inSettingPage||(a.map=this.map);this.chartDijitOption=new n(a);this._initChart();this._updateBackgroundColor()},_getChartTheme:function(){return this.isDarkTheme()?"dark":"light"},clearChart:function(){this._showNodata()},startup:function(){this.inherited(arguments);setTimeout(e.hitch(this,function(){this.chart.resize();
this.inSettingPage?this._tryRenderChart():this.dataSource&&this.setDataSource(this.dataSource)}),200)},destroy:function(){this.chart&&this.chart.destroy();this.chart=null;this.inherited(arguments)},resize:function(){this.chart&&this.chart.resize()},setDataSource:function(a){this.dataSourceType="";this.featureLayer=null;this.inherited(arguments);if(a)if(a.layerId)this._setDataSourceForLayerId(a);else if(a.frameWorkDsId){var b=this._getDsTypeInfoAndDsMeta(a.frameWorkDsId),c=b.dsTypeInfo;this._getPopupInfoForExtralDS(c);
b=b.dsMeta;c&&b&&("Features"===b.type?this._setDataSourceForFrameworkFeatures(a,c,b):"FeatureStatistics"===b.type&&this._setDataSourceForFeatureStatistics(a,c,b))}},_getPopupInfoForExtralDS:function(a){a&&"map"===a.from&&"undefined"!==typeof a.layerId&&(a=this.layerInfosObj.getLayerInfoById(a.layerId))&&(this.popupFieldInfos=a.getPopupInfo())},_getDsTypeInfoAndDsMeta:function(a){var b={dsTypeInfo:null,dsMeta:null};b.dsTypeInfo=this.dataSourceManager.parseDataSourceId(a);var c=this.appConfig.dataSource&&
this.appConfig.dataSource.dataSources;c&&(b.dsMeta=c[a]);return b},_updateBackgroundColor:function(){this.config&&this.config.backgroundColor&&this.setBackgroundColor(this.config.backgroundColor)},setBackgroundColor:function(a){this.domNode.style.backgroundColor=a},setConfig:function(a){this.config=a;this._updateBackgroundColor();this._tryRenderChart()},onDataSourceDataUpdate:function(a){a&&"undefined"!==typeof a.features&&(this.data=a,this._hasStatisticsed=!!a.hasStatisticsed,this._tryRenderChart())},
_renderChartForStastistics:function(a){var b=a.config,c=a.statisticsFeatures;this.chartDijitOption.getLoadedLayerForSTD(a.dataSchema,b).then(function(d){d=this.chartDijitOption.getChartOption({featureLayer:d,features:c,chartConfig:b,popupFieldInfos:a.popupFieldInfos,featureLayerForChartSymbologyChart:a.featureLayerForChartSymbologyChart},this.chart,!0);this._checkIsTooManyLabels(d)||this.chart.updateConfig(d)}.bind(this))},_renderChart:function(a){this.chartDijitOption.getLoadedLayer(a.featureLayer).then(function(b){b=
this.chartDijitOption.getChartOption({featureLayer:b,features:a.features,filterByExtent:a.filterByExtent,chartConfig:a.config,popupFieldInfos:a.popupFieldInfos,featureLayerForChartSymbologyChart:a.featureLayerForChartSymbologyChart},this.chart,!1,this._hasStatisticsed);this._checkIsTooManyLabels(b)||this.chart.updateConfig(b)}.bind(this))},_initChart:function(){this.chart=new p({chartDom:this.chartDomNode,config:this.DEFAULT_CONFIG});this.chart.placeAt(this.chartDomNode);setTimeout(e.hitch(this,function(){this.chart.resize()}),
300)},_tryRenderChart:function(){this._hideNodata();var a=this._getChartConfigFromConfig();a?this.domNode.parentNode?this.data?(this.data.features||(this.data.features=[]),"CLIENT_FEATURES"===this.dataSourceType?this._tryRenderChartForClientFeatures(a):"FRAMEWORK_FEATURES"===this.dataSourceType?this._tryRenderChartForFrameworkFeatures(a):"FRAMEWORK_STATISTICS"===this.dataSourceType&&this._tryRenderChartForFrameworkStatistics(a)):this._showNodata():this._showNodata():this._showNodata()},_getNodataTextColor:function(){var a=
"";this.config&&(a="pie"===this.config.type?this.config.dataLabelColor:this.config.horizontalAxisTextColor||this.config.verticalAxisTextColor);a||(a="#666");return a},_getChartConfigFromConfig:function(){var a=null,b=null;this.config&&this.config.mode&&this.config.type&&(b=e.clone(this.config),b.highLightColor=this.highLightColor,a=t.getCleanChartConfig(b));this._specialSortOrder(a);return a},_specialSortOrder:function(a){if(a){var b=a.sortOrder;"feature"===a.mode&&b&&b.field===a.labelField&&(b.isLabelAxis=
!0)}},_hasFeatures:function(){return this.data&&this.data.features&&0<=this.data.features.length},showNoData:function(){this._showNodata()},_showNodata:function(a){g.addClass(this.domNode,"no-data");"timeInterval"===a?this.noDataDiv.innerHTML=this.nls.parsingperiodTip:"maxLabels"===a&&(this.noDataDiv.innerHTML=this.nls.manyCategoryTip);this.chart.clear()},_hideNodata:function(){g.removeClass(this.domNode,"no-data")},_showMockData:function(a){a=e.clone(a);var b=[];a.labelField&&b.push(a.labelField);
a.categoryField&&b.push(a.categoryField);a.valueFields&&(b=b.concat(a.valueFields));var c={fields:[]},d={attributes:{}};c.fields=h.map(b,e.hitch(this,function(a){d.attributes[a]=0;return{name:a,type:"esriFieldTypeInteger",alias:a}}));this.chart.resize();if(this._checkIsTooManyTimeInterval([d],a))return this._showNodata("timeInterval");this._renderChart({featureLayer:c,features:[d],config:a,popupFieldInfos:this.popupFieldInfos})},_setDataSourceForLayerId:function(a){this.dataSourceType="CLIENT_FEATURES";
this._getFeatureLayerAndPopupInfoForMapLayer(a.layerId).then(function(a){this.featureLayer=a;this._tryRenderChart()}.bind(this),function(){console.warn("invaild data source")})},_getFeatureLayerAndPopupInfoForMapLayer:function(a){var b=new l;a=this.layerInfosObj.getLayerInfoById(a);if(!a)return b.reject(),b;this.popupFieldInfos=a.getPopupInfo();return a.getLayerObject()},_tryRenderChartForClientFeatures:function(a){if(this.featureLayer){var b=this.data.features;b&&this.inSettingPage&&(b=b.slice(0,
this.featuresCountForPreview));this.chart.resize();if(this._checkIsTooManyTimeInterval(b,a))return this._showNodata("timeInterval");var c=this._getFeatureLayerForSymbolRenderChart();this._renderChart({featureLayer:this.featureLayer,features:b,config:a,popupFieldInfos:this.popupFieldInfos,featureLayerForChartSymbologyChart:c,filterByExtent:this.dataSource.filterByExtent})}else this._showNodata()},_setDataSourceForFrameworkFeatures:function(){this.dataSourceType="FRAMEWORK_FEATURES";this._tryRenderChart()},
_getFeatureLayerForSymbolRenderChart:function(a){var b=null;this.map&&"undefined"!==typeof a?b=this.map.getLayer(a):this.featureLayer&&(b=this.featureLayer);return b},_tryRenderChartForFrameworkFeatures:function(a){var b=this._getDsTypeInfoAndDsMeta(this.dataSource.frameWorkDsId).dsMeta;if(b){var c=this.data.features;c&&this.inSettingPage&&(c=c.slice(0,this.featuresCountForPreview));this.chart.resize();if(this._checkIsTooManyTimeInterval(c,a))return this._showNodata("timeInterval");var d=null;if(a.seriesStyle&&
"layerSymbol"===a.seriesStyle.type){var e=this.dataSourceManager.parseDataSourceId(b.id);"undefined"!==typeof e.layerId&&(d=this._getFeatureLayerForSymbolRenderChart(e.layerId))}this._renderChart({featureLayer:b.dataSchema,features:c,config:a,popupFieldInfos:this.popupFieldInfos,featureLayerForChartSymbologyChart:d})}else this._showNodata()},_setDataSourceForFeatureStatistics:function(){this.dataSourceType="FRAMEWORK_STATISTICS";this._tryRenderChart()},_tryRenderChartForFrameworkStatistics:function(a){var b=
this._getDsTypeInfoAndDsMeta(this.dataSource.frameWorkDsId).dsMeta;if(b){var c=null;if(a.seriesStyle&&"layerSymbol"===a.seriesStyle.type){var d=this.dataSourceManager.parseDataSourceId(b.id);"undefined"!==typeof d.layerId&&(c=this._getFeatureLayerForSymbolRenderChart(d.layerId))}this.chart.resize();if(this._checkIsTooManyTimeInterval(this.data.features,a))return this._showNodata("timeInterval");this._renderChartForStastistics({dataSchema:b.dataSchema,statisticsFeatures:this.data.features,config:a,
popupFieldInfos:this.popupFieldInfos,featureLayerForChartSymbologyChart:c})}else this._showNodata()},_checkIsTooManyLabels:function(a){return(a=a.labels)&&a.length>this.maxLabels?(this._showNodata("maxLabels"),!0):!1},_checkIsTooManyTimeInterval:function(a,b){var c=b.dateConfig;if(!c||"automatic"===c.minPeriod)return!1;var d=b.categoryField;b=a.map(e.hitch(this,function(a){return a.attributes[d]}));b=b.filter(function(a){return!!a});a=Math.min.apply(Math,b);b=Math.max.apply(Math,b);a=f(a).subtract(1,
"seconds").local();b=f(b).add(1,"seconds").local();return Math.round(b.diff(a,c.minPeriod,!0))>=this.maxTimeIntervals}})});