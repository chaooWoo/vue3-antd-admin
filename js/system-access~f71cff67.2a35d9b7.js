(window.webpackJsonp=window.webpackJsonp||[]).push([["system-access~f71cff67"],{3876:function(e,t,n){},"5f9a":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a=Object(r.createTextVNode)(" 添加 "),c=Object(r.createTextVNode)(" 删除 ");n("d3b7"),n("25f0");var o,l=n("5530"),u=(n("96cf"),n("1da1")),i=n("ed3b"),d=n("3c7f"),s=n("1016"),m=(n("a15b"),n("a526")),f=n("3bb8");function b(e){return m.a.request({url:o.adminAccess,method:f.b.GET,params:e})}function p(e){return m.a.request({url:[o.adminAccess,e].join("/"),method:f.b.DELETE},{isTransformRequestResult:!1,successMessageText:"删除成功",errorMessageText:"删除失败"})}function O(e,t){return m.a.request({url:[o.adminAccess,e].join("/"),method:f.b.PATCH,params:t},{isTransformRequestResult:!1,successMessageText:"修改成功",errorMessageText:"修改失败"})}function j(e){return m.a.request({url:o.adminAccess,method:f.b.POST,params:e},{isTransformRequestResult:!1,successMessageText:"创建成功",errorMessageText:"创建失败"})}!function(e){e.adminAccess="/admin/access",e.adminAccessModule="/admin/access/module"}(o||(o={})),n("a9e3"),n("8ba4");var v=Object(r.withScopeId)("data-v-722a605e");Object(r.pushScopeId)("data-v-722a605e");var R=Object(r.createTextVNode)(" 模块 "),y=Object(r.createTextVNode)(" 菜单 ");Object(r.popScopeId)();var x,g=v((function(e,t,n,a,c,o){var l=Object(r.resolveComponent)("a-select-option"),u=Object(r.resolveComponent)("a-select"),i=Object(r.resolveComponent)("a-form-item"),d=Object(r.resolveComponent)("a-input"),s=Object(r.resolveComponent)("a-input-number"),m=Object(r.resolveComponent)("a-form"),f=Object(r.resolveComponent)("a-modal");return Object(r.openBlock)(),Object(r.createBlock)(f,{title:Number.isInteger(e.fields.id)?"编辑资源":"新增资源",visible:e.visible,"onUpdate:visible":t[8]||(t[8]=function(t){return e.visible=t}),"confirm-loading":e.confirmLoading,afterClose:e.remove,onOk:e.handleOk},{default:v((function(){return[Object(r.createVNode)(m,{ref:"formRef",model:e.modelRef,"label-col":e.labelCol,"wrapper-col":e.wrapperCol},{default:v((function(){return[Object(r.createVNode)(i,{label:"类别",rules:e.rules.type,name:"type"},{default:v((function(){return[Object(r.createVNode)(u,{value:e.modelRef.type,"onUpdate:value":t[1]||(t[1]=function(t){return e.modelRef.type=t}),disabled:Number.isInteger(e.fields.id),placeholder:"请选择类型"},{default:v((function(){return[Object(r.createVNode)(l,{value:1},{default:v((function(){return[R]})),_:1}),Object(r.createVNode)(l,{value:2},{default:v((function(){return[y]})),_:1})]})),_:1},8,["value","disabled"])]})),_:1},8,["rules"]),1==e.modelRef.type?(Object(r.openBlock)(),Object(r.createBlock)(i,{key:0,label:"模块名称",rules:e.rules.moduleName,name:"moduleName"},{default:v((function(){return[Object(r.createVNode)(d,{value:e.modelRef.moduleName,"onUpdate:value":t[2]||(t[2]=function(t){return e.modelRef.moduleName=t}),disabled:Number.isInteger(e.fields.id),placeholder:"请输入模块名称"},null,8,["value","disabled"])]})),_:1},8,["rules"])):Object(r.createCommentVNode)("",!0),2==e.modelRef.type?(Object(r.openBlock)(),Object(r.createBlock)(i,{key:1,label:"模块名称",rules:e.rules.moduleId,name:"moduleId"},{default:v((function(){return[Object(r.createVNode)(u,{value:e.modelRef.moduleId,"onUpdate:value":t[3]||(t[3]=function(t){return e.modelRef.moduleId=t}),disabled:Number.isInteger(e.fields.id),placeholder:"请选择模块"},{default:v((function(){return[(Object(r.openBlock)(!0),Object(r.createBlock)(r.Fragment,null,Object(r.renderList)(e.moduleList,(function(e){return Object(r.openBlock)(),Object(r.createBlock)(l,{key:e.id,value:e.id},{default:v((function(){return[Object(r.createTextVNode)(Object(r.toDisplayString)(e.moduleName),1)]})),_:2},1032,["value"])})),128))]})),_:1},8,["value","disabled"])]})),_:1},8,["rules"])):Object(r.createCommentVNode)("",!0),2==e.modelRef.type?(Object(r.openBlock)(),Object(r.createBlock)(i,{key:2,label:"菜单名称",rules:e.rules.actionName,name:"actionName"},{default:v((function(){return[Object(r.createVNode)(d,{value:e.modelRef.actionName,"onUpdate:value":t[4]||(t[4]=function(t){return e.modelRef.actionName=t}),placeholder:"请输入菜单名称"},null,8,["value"])]})),_:1},8,["rules"])):Object(r.createCommentVNode)("",!0),Object(r.createVNode)(i,{label:"路径",rules:e.rules.url,name:"url"},{default:v((function(){return[Object(r.createVNode)(d,{value:e.modelRef.url,"onUpdate:value":t[5]||(t[5]=function(t){return e.modelRef.url=t}),placeholder:"请输入路径"},null,8,["value"])]})),_:1},8,["rules"]),Object(r.createVNode)(i,{label:"小图标"},{default:v((function(){return[Object(r.createVNode)(d,{value:e.modelRef.icon,"onUpdate:value":t[6]||(t[6]=function(t){return e.modelRef.icon=t}),placeholder:"小图标"},null,8,["value"]),Object(r.createVNode)("a",{href:"".concat(e.prefix,"#/icons"),target:"_blank"},"可选图标",8,["href"])]})),_:1}),Object(r.createVNode)(i,{label:"排序"},{default:v((function(){return[Object(r.createVNode)(s,{value:e.modelRef.sort,"onUpdate:value":t[7]||(t[7]=function(t){return e.modelRef.sort=t}),min:1,placeholder:"排序"},null,8,["value"])]})),_:1})]})),_:1},8,["model","label-col","wrapper-col"])]})),_:1},8,["title","visible","confirm-loading","afterClose","onOk"])})),w=(n("4160"),n("b0c0"),n("b64b"),n("159b"),n("ade3")),N=n("3af3"),h=n("09d9"),k=n("b558"),I=n("9839"),C=Object(r.defineComponent)({name:"add-modal",components:(x={},Object(w.a)(x,i.a.name,i.a),Object(w.a)(x,N.a.name,N.a),Object(w.a)(x,N.a.Item.name,N.a.Item),Object(w.a)(x,h.a.name,h.a),Object(w.a)(x,k.a.name,k.a),Object(w.a)(x,I.b.name,I.b),Object(w.a)(x,"ASelectOption",I.b.Option),x),props:{remove:{type:Function},fields:{type:Object,default:function(){return{}}},callback:{type:Function}},setup:function(e){var t=Object(r.ref)(null),n=Object(r.reactive)({visible:!0,confirmLoading:!1,moduleList:[]}),a=Object(r.reactive)({moduleName:"",moduleId:void 0,actionName:"",type:void 0,url:"",icon:"",sort:1});return e.fields.moduleId&&(Object.keys(a).forEach((function(t){return a[t]=e.fields[t]})),a.type=-1==e.fields.moduleId?1:2),Object(r.onMounted)(Object(u.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,void 0,m.a.request({url:o.adminAccessModule,method:f.b.GET,params:void 0});case 2:n.moduleList=e.sent;case 3:case"end":return e.stop()}}),e)})))),Object(l.a)(Object(l.a)({},Object(r.toRefs)(n)),{},{formRef:t,rules:{moduleName:[{required:!0,message:"模块名称不能为空"}],moduleId:[{required:!0,message:"模块名称不能为空"}],actionName:[{required:!0,message:"请输入菜单名称"}],type:[{required:!0,message:"请选择类型"}],url:[{required:!0,message:"请输入url地址"}]},prefix:"/vue3-antd-admin/",labelCol:{span:6},wrapperCol:{span:18},modelRef:a,handleOk:function(c){c.preventDefault(),n.confirmLoading=!0,t.value.validate().then(Object(u.a)(regeneratorRuntime.mark((function t(){var c,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=e.fields.id,o=Object(r.toRaw)(a),c&&delete o.type,t.next=5,(c?O(c,o):j(o)).finally((function(){return n.confirmLoading=!1}));case 5:n.visible=!1,e.callback&&e.callback();case 7:case"end":return t.stop()}}),t)})))).catch((function(e){n.confirmLoading=!1}))}})}});C.render=g,C.__scopeId="data-v-722a605e";var V,T=C,_=n("7996"),A=n("48b8"),S=n("f64c"),q=n("7d88"),B=[{title:"名称",dataIndex:"moduleName",slots:{customRender:"moduleName"}},{title:"url地址",dataIndex:"url"},{title:"icon图标",dataIndex:"icon",slots:{customRender:"icon"},slotsType:"component",slotsFunc:function(e){return Object(r.createVNode)(q.a,{type:e.icon})}},{title:"排序",dataIndex:"sort"},{title:"创建时间",dataIndex:"createdAt",slots:{customRender:"createdAt"},slotsType:"format",slotsFunc:function(e){return Object(A.b)(e)}},{title:"最后更新时间",dataIndex:"updatedAt",slots:{customRender:"updatedAt"},slotsType:"format",slotsFunc:function(e){return Object(A.b)(e)}},{title:"操作",dataIndex:"action",width:200,slots:{customRender:"action"},actions:[{type:"popconfirm",text:"删除",permission:{action:"delete",effect:"disabled"},props:{type:"danger"},func:(V=Object(u.a)(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((r=t.record).id<6)){e.next=3;break}return e.abrupt("return",S.a.warn("系统预置菜单，不能删除！"));case 3:return e.next=5,p(r.id);case 5:return a=e.sent,n(),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)}))),function(e,t){return V.apply(this,arguments)})},{type:"button",text:"编辑",permission:{action:"update",effect:"disabled"},props:{type:"warning"},func:function(e,t){var n=e.record;return Object(_.a)(T,{fields:n,callback:t})}}]}],L=n("8fe6"),D=function(){var e=Object(u.a)(regeneratorRuntime.mark((function e(t){var n,a,c,o,l,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.expanded,a=t.record,c=t.expandItemEl,o=t.asyncFunc,l=t.params,!n||!a.children||Array.isArray(a.children)){e.next=8;break}return i=c.closest("td").querySelector(".ant-table-row-expand-icon"),Object(r.render)(Object(r.createVNode)(L.a),i),e.next=6,Object(r.nextTick)();case 6:return i.classList.add("loading-icon"),e.abrupt("return",o(l).finally(Object(u.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(r.render)(null,i),e.next=3,Object(r.nextTick)();case 3:i.classList.remove("loading-icon");case 4:case"end":return e.stop()}}),e)})))));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=Object(r.defineComponent)({name:"system-access",components:{DynamicTable:s.a},setup:function(){var e=Object(r.ref)(null),t=Object(r.reactive)({itemRefs:{},expandedRowKeys:[],tableLoading:!1,rowSelection:{onChange:function(e,n){t.rowSelection.selectedRowKeys=e},selectedRowKeys:[]}}),n=Object(r.computed)((function(){return 0==t.rowSelection.selectedRowKeys.length})),a=function(){var e=Object(u.a)(regeneratorRuntime.mark((function e(n,r){var a,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.itemRefs[r.id],e.next=3,D({expanded:n,record:r,expandItemEl:a,asyncFunc:b,params:{id:r.id,limit:100}});case 3:c=e.sent,o=c.data,r.children=o;case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(l.a)(Object(l.a)({},Object(r.toRefs)(t)),{},{columns:B,tableRef:e,expand:a,getAdminAccess:b,isDisabled:n,addItem:function(){Object(_.a)(T,{callback:function(){e.value.refreshTableData()}})},deleteItems:function(){var n;i.a.confirm({title:"提示",icon:Object(r.createVNode)(d.a),content:"您确定要删除所有选中吗？",onOk:(n=Object(u.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p(t.rowSelection.selectedRowKeys.toString());case 2:e.value.refreshTableData(),t.rowSelection.selectedRowKeys=[];case 4:case"end":return n.stop()}}),n)}))),function(){return n.apply(this,arguments)})})}})}});n("8017"),E.render=function(e,t,n,o,l,u){var i=Object(r.resolveComponent)("a-button"),d=Object(r.resolveComponent)("dynamic-table"),s=Object(r.resolveDirective)("permission");return Object(r.openBlock)(),Object(r.createBlock)(d,{ref:"tableRef",onExpand:e.expand,columns:e.columns,"get-list-func":e.getAdminAccess,rowKey:"id","row-selection":e.rowSelection},{title:Object(r.withCtx)((function(){return[Object(r.withDirectives)(Object(r.createVNode)(i,{onClick:e.addItem,type:"primary"},{default:Object(r.withCtx)((function(){return[a]})),_:1},8,["onClick"]),[[s,{action:"create",effect:"disabled"}]]),Object(r.withDirectives)(Object(r.createVNode)(i,{onClick:e.deleteItems,disabled:e.isDisabled,type:"primary"},{default:Object(r.withCtx)((function(){return[c]})),_:1},8,["onClick","disabled"]),[[s,{action:"delete"}]])]})),moduleName:Object(r.withCtx)((function(t){var n=t.record;return[Object(r.createVNode)("span",{ref:function(t){return e.itemRefs[n.id]=t}},Object(r.toDisplayString)(n.moduleName||n.actionName),513)]})),_:1},8,["onExpand","columns","get-list-func","row-selection"])},t.default=E},8017:function(e,t,n){"use strict";n("3876")}}]);