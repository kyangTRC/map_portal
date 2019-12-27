// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred ./RequestBuffer esri/layers/FeatureLayer esri/layers/RasterLayer esri/layers/StreamLayer esri/layers/ArcGISImageServiceLayer esri/layers/ArcGISImageServiceVectorLayer".split(" "),function(k,d,l,e,m,f,n,p,q,r){return k(null,{_layerInfo:null,_layerObjectBuffer:null,constructor:function(a){this._layerInfo=a;this._initLayerObjectBuffer()},_initLayerObjectBuffer:function(){this._layerObjectBuffer=new m(d.hitch(this,this._getLayerObject))},
getLayerObject:function(){var a=this._layerInfo.getUrl();return this._layerObjectBuffer.getRequest(this._layerInfo.subId).request(a)},getLayerObjectWithUrl:function(a){return this._layerObjectBuffer.getRequest(this._layerInfo.subId+"_url").request(a)},_getLayerObject:function(a){var b,c=new e;this._layerInfo.getLayerType().then(d.hitch(this,function(t){var g=d.mixin(this._getLayerOptionsForCreateLayerObject(),this._layerInfo.originOperLayer.options||{})||{};switch(t){case "FeatureLayer":b=new f(a,
g);break;case "RasterLayer":b=new n(a);break;case "StreamLayer":b=new p(a);break;case "ArcGISImageServiceLayer":b=new q(a);break;case "ArcGISImageServiceVectorLayer":b=new r(a);break;case "Table":if(this._layerInfo.layerObject&&this._layerInfo.layerObject.url)b=new f(a,g);else return this._layerInfo.layerObject&&this._layerInfo.layerObject.featureCollectionData?(b=new f(this._layerInfo.layerObject.featureCollectionData,g),this._setLayerObjectProperties(b),c.resolve(b)):c.resolve(null),c;break;case "GroupLayer":return c=
this._getGroupLayerObject();default:return c.resolve(null),c}var e=b.on("load",d.hitch(this,function(){this._setLayerObjectProperties(b);c.resolve(b);e.remove&&e.remove()})),h=b.on("error",d.hitch(this,function(a){c.reject(a);h.remove&&h.remove()}))}),d.hitch(this,function(){c.reject()}));return c},_getGroupLayerObject:function(){var a=new e;this._layerInfo._getServiceDefinition().then(d.hitch(this,function(b){if(null===b)a.reject();else{var c=this._layerInfo.getUrl();b.url=c;b.id=this._layerInfo.id;
a.resolve(b)}}));return a},_getLayerOptionsForCreateLayerObject:function(){var a={},b=[],c=this._layerInfo.getInfoTemplate();c&&c.info&&c.info.fieldInfos?l.forEach(c.info.fieldInfos,function(a){a.visible&&b.push(a.fieldName)},this):b=["*"];a.outFields=b;return a},_setLayerObjectProperties:function(a){a.name&&!d.getObject("_wabProperties.originalLayerName",!1,a)&&(d.setObject("_wabProperties.originalLayerName",a.name,a),a.name=this._layerInfo.title);a.id=this._layerInfo.id;this._layerInfo.loadInfoTemplate().then(d.hitch(this,
function(b){a.infoTemplate=b}))}})});