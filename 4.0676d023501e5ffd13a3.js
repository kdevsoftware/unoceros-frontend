(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{tePd:function(n,t,e){"use strict";e.r(t);var l=e("CcnG"),o=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),i=function(){return function(){}}(),s=e("pMnS"),a=e("Ip0R"),r=e("tZre"),c=function(){function n(n){this.messageService=n}return n.prototype.ngOnInit=function(){},n.prototype.onDblDesktopItem=function(n){this.messageService.detectMessage(n)},n}(),u=l.mb({encapsulation:0,styles:[[".desktop-item[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;min-height:105px;-webkit-box-align:center;align-items:center;-webkit-box-pack:end;justify-content:flex-end}.desktop-item[_ngcontent-%COMP%]   .icon-section[_ngcontent-%COMP%]{cursor:pointer}.desktop-item[_ngcontent-%COMP%]   .icon-section[_ngcontent-%COMP%]   .icon-image[_ngcontent-%COMP%]{margin:auto}.desktop-item[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]{background:#f5f5f5;margin-top:4px;padding:1px 10px 2px;min-width:86px;box-sizing:border-box;word-break:break-all;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;cursor:pointer}.desktop-item[_ngcontent-%COMP%]   .title-section[_ngcontent-%COMP%]   .title-text[_ngcontent-%COMP%]{margin:0;font-size:14px}.trash-item[_ngcontent-%COMP%]{position:absolute;right:50px;bottom:50px}"]],data:{}});function p(n){return l.yb(0,[(n()(),l.ob(0,0,null,null,6,"div",[["class","desktop-item"]],null,[[null,"touchend"]],function(n,t,e){var l=!0,o=n.component;return"touchend"===t&&(l=!1!==o.onDblDesktopItem(o.message)&&l),l},null,null)),l.nb(1,278528,null,0,a.l,[l.t,l.k,l.D],{ngStyle:[0,"ngStyle"]},null),(n()(),l.ob(2,0,null,null,1,"div",[["class","icon-section"]],null,[[null,"dblclick"]],function(n,t,e){var l=!0,o=n.component;return"dblclick"===t&&(l=!1!==o.onDblDesktopItem(o.message)&&l),l},null,null)),(n()(),l.ob(3,0,null,null,0,"img",[["class","icon-image"]],[[8,"src",4]],null,null,null,null)),(n()(),l.ob(4,0,null,null,2,"div",[["class","title-section"]],null,[[null,"dblclick"]],function(n,t,e){var l=!0,o=n.component;return"dblclick"===t&&(l=!1!==o.onDblDesktopItem(o.message)&&l),l},null,null)),(n()(),l.ob(5,0,null,null,1,"p",[["class","title-text"]],null,null,null,null,null)),(n()(),l.xb(6,null,["",""]))],function(n,t){n(t,1,0,t.component.options)},function(n,t){var e=t.component;n(t,3,0,e.icon),n(t,6,0,e.title)})}var b=[{id:"blogs",icon:"assets/image/icons/blogs.svg",title:"Blogs",message:"blogs"},{id:"company",icon:"assets/image/icons/company.svg",title:"Company",message:"company"},{id:"projects",icon:"assets/image/icons/projects.svg",title:"Projects",message:"projects"},{id:"products",icon:"assets/image/icons/products.svg",title:"Products",message:"products"},{id:"legal",icon:"assets/image/icons/legal.svg",title:"legal",message:"legal"},{id:"trash",icon:"assets/image/icons/trash.svg",title:"Trash",message:"trash"}],g=e("uj+0"),d=e("LiVn"),m=function(){function n(n,t){this.uWindowsService=n,this.globals=t,this.desktopItems=b,this.tabletWidth=768}return n.prototype.ngOnInit=function(){},n.prototype.getOptions=function(n,t){return"trash"==t[n].id?{position:$(window).width()<=this.tabletWidth?"relative":"absolute",right:"0px",bottom:"0px"}:{"margin-bottom":"36px","margin-right":"36px"}},n.prototype.onResize=function(n){$(window).width()<=this.tabletWidth&&this.globals.setFullScreen(!0),this.uWindowsService.updateDragAreaOfUWindows()},n}(),f=l.mb({encapsulation:0,styles:[["#desktop[_ngcontent-%COMP%]{width:100%;height:calc(100vh - 40px);background:-webkit-gradient(linear,left bottom,left top,color-stop(50%,transparent),color-stop(51%,rgba(255,255,255,.2)),color-stop(55%,rgba(255,255,255,.09)),color-stop(56%,transparent),to(transparent)) top left/35px 35px,-webkit-gradient(linear,left top,right top,color-stop(50%,transparent),color-stop(51%,rgba(255,255,255,.2)),color-stop(55%,rgba(255,255,255,.09)),color-stop(56%,transparent),to(transparent)) top left/35px 35px,#0592ff;background:linear-gradient(0deg,transparent 50%,rgba(255,255,255,.2) 51%,rgba(255,255,255,.09) 55%,transparent 56%,transparent) top left/35px 35px,linear-gradient(90deg,transparent 50%,rgba(255,255,255,.2) 51%,rgba(255,255,255,.09) 55%,transparent 56%,transparent) top left/35px 35px,#0592ff;padding:50px;box-sizing:border-box;position:relative;top:40px}#desktop[_ngcontent-%COMP%]   .desktop-item-list[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:baseline;align-items:baseline;align-content:baseline;width:100%;height:100%;position:relative;flex-wrap:wrap}"]],data:{}});function x(n){return l.yb(0,[(n()(),l.ob(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),l.ob(1,0,null,null,1,"desktop-item",[],null,null,null,p,u)),l.nb(2,114688,null,0,c,[r.a],{id:[0,"id"],icon:[1,"icon"],title:[2,"title"],message:[3,"message"],options:[4,"options"]},null)],function(n,t){var e=t.component;n(t,2,0,t.context.$implicit.id,t.context.$implicit.icon,t.context.$implicit.title,t.context.$implicit.message,e.getOptions(t.context.index,e.desktopItems))},null)}function k(n){return l.yb(0,[(n()(),l.ob(0,0,null,null,3,"div",[["id","desktop"]],null,[["window","resize"]],function(n,t,e){var l=!0;return"window:resize"===t&&(l=!1!==n.component.onResize(e)&&l),l},null,null)),(n()(),l.ob(1,0,null,null,2,"div",[["class","desktop-item-list"]],null,null,null,null,null)),(n()(),l.fb(16777216,null,null,1,null,x)),l.nb(3,278528,null,0,a.h,[l.O,l.L,l.s],{ngForOf:[0,"ngForOf"]},null)],function(n,t){n(t,3,0,t.component.desktopItems)},null)}var h=l.mb({encapsulation:0,styles:[[""]],data:{}});function v(n){return l.yb(0,[(n()(),l.ob(0,0,null,null,1,"desktop",[],null,null,null,k,f)),l.nb(1,114688,null,0,m,[g.a,d.a],null,null)],function(n,t){n(t,1,0)},null)}function w(n){return l.yb(0,[(n()(),l.ob(0,0,null,null,1,"app-home",[],null,null,null,v,h)),l.nb(1,114688,null,0,o,[],null,null)],function(n,t){n(t,1,0)},null)}var y=l.kb("app-home",o,w,{},{},[]),O=e("ZYCi"),P=e("j1ZV");e.d(t,"PagesModuleNgFactory",function(){return C});var C=l.lb(i,[],function(n){return l.ub([l.vb(512,l.j,l.ab,[[8,[s.a,y]],[3,l.j],l.x]),l.vb(4608,a.k,a.j,[l.u,[2,a.r]]),l.vb(4608,r.a,r.a,[g.a,d.a]),l.vb(1073742336,O.l,O.l,[[2,O.r],[2,O.k]]),l.vb(1073742336,a.b,a.b,[]),l.vb(1073742336,P.a,P.a,[]),l.vb(1073742336,i,i,[]),l.vb(1024,O.i,function(){return[[{path:"",component:o}]]},[])])})}}]);