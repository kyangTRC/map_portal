// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","dojo/_base/html","jimu/dijit/SimpleTable"],function(d,e,f){return d(f,{_onRowMoved:null,constructor:function(a){},deleteRow:function(a){var b,c;a&&(b=this.getRowData(a),c=a.rowIndex,e.destroy(a),this.updateUI(),this._onDeleteRow(a,b,c))},_onDeleteRow:function(a,b,c){this.emit("row-delete",a,b,c)}})});