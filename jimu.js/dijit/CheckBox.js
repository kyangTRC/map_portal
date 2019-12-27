// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://@sbaseurl@/jsapi/jsapi/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dijit/_WidgetBase dojo/_base/lang dojo/_base/html dojo/dom-class dojo/on dojo/Evented dojo/keys".split(" "),function(f,g,c,a,e,d,h,k){return f([g,h],{baseClass:"jimu-checkbox",declaredClass:"jimu.dijit.CheckBox",checked:!1,status:!0,label:"",postCreate:function(){this.checkNode=a.create("div",{"class":"checkbox jimu-float-leading jimu-icon jimu-icon-checkbox"},this.domNode);this.labelNode=a.create("div",{"class":"label jimu-float-leading",innerHTML:this.label||""},this.domNode);
this.checked&&(a.addClass(this.checkNode,"checked"),a.addClass(this.checkNode,"jimu-icon-checked"));this.status||(a.addClass(this.domNode,"jimu-state-disabled"),a.addClass(this.checkNode,"jimu-state-disabled"));this.own(d(this.checkNode,"click",c.hitch(this,function(){this.status&&(this.checked?this.uncheck():this.check())})));this.own(d(this.labelNode,"click",c.hitch(this,function(){this.checked&&this.status?this.uncheck():this.status&&this.check()})));this._udpateLabelClass();this._initSection508()},
setLabel:function(a){this.label=a;this.labelNode.innerHTML=this.label;this._udpateLabelClass()},_udpateLabelClass:function(){this.labelNode&&(this.labelNode.innerHTML?a.removeClass(this.labelNode,"not-visible"):a.addClass(this.labelNode,"not-visible"))},_initSection508:function(){"undefined"!==typeof this.tabindex&&(a.setAttr(this.checkNode,"tabindex",this.tabindex),this.own(d(this.checkNode,"focus",c.hitch(this,function(){a.addClass(this.checkNode,"dijitCheckBoxFocused")}))),this.own(d(this.checkNode,
"blur",c.hitch(this,function(){a.removeClass(this.checkNode,"dijitCheckBoxFocused")}))),this.own(d(this.checkNode,"keypress",c.hitch(this,function(b){b=b.charCode||b.keyCode;a.hasClass(this.checkNode,"dijitCheckBoxFocused")&&k.SPACE===b&&this.status&&(this.checked?this.uncheck():this.check())}))))},setValue:function(a){this.status&&(!0===a?this.check():this.uncheck())},getValue:function(){return this.checked},setStatus:function(b){b=!!b;var c=this.status!==b;(this.status=b)?(e.remove(this.domNode,
"jimu-state-disabled"),a.removeClass(this.checkNode,"jimu-state-disabled")):(e.add(this.domNode,"jimu-state-disabled"),a.addClass(this.checkNode,"jimu-state-disabled"));c&&this.emit("status-change",b)},getStatus:function(){return this.status},check:function(b){if(this.status&&(this.checked=!0,a.addClass(this.checkNode,"checked jimu-icon-checked"),a.removeClass(this.checkNode,"checked jimu-icon-checkbox"),!b))this.onStateChange()},uncheck:function(b){if(this.status&&(this.checked=!1,a.removeClass(this.checkNode,
"checked"),a.removeClass(this.checkNode,"jimu-icon-checked"),a.addClass(this.checkNode,"jimu-icon-checkbox"),!b))this.onStateChange()},onStateChange:function(){if(this.onChange&&c.isFunction(this.onChange))this.onChange(this.checked);this.emit("change",this.checked)},focus:function(){this.checkNode&&this.checkNode.focus&&this.checkNode.focus()}})});