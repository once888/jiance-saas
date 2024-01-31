import{useSolutionSetup as D}from"./hooks.8190836e.js";import{p as P,aj as M,ak as j,O as F,f as B,ao as z,ap as q,ar as N,as as O,P as U,R as Y,h as $,aH as X,U as E,r as l,m as G,aT as J,aV as K,E as Q,aU as W,H as y,ax as Z,aX as ee,V as te,a_ as ae,j as ne,k as se,ba as oe,o as h,l as g,q as o,w as b,F as le,s as ie,x as V,A as re,B as ce,C as de}from"./entry.db0d2505.js";import{f as ue,V as me}from"./VCard.eef2b132.js";import"./useRequest.cde6ea3c.js";import"./cloneDeep.bd3abae2.js";const pe={actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, heading","card-avatar":"image, list-item-avatar",chip:"chip","date-picker":"list-item, heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",divider:"divider",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",ossein:"ossein",paragraph:"text@3",sentences:"text@2",subtitle:"text",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"chip, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"text@6","table-tfoot":"text@2, avatar@2",text:"text"};function ve(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return l("div",{class:["v-skeleton-loader__bone",`v-skeleton-loader__${e}`]},[n])}function L(e){const[n,t]=e.split("@");return Array.from({length:t}).map(()=>k(n))}function k(e){let n=[];if(!e)return n;const t=pe[e];if(e!==t){if(e.includes(","))return C(e);if(e.includes("@"))return L(e);t.includes(",")?n=C(t):t.includes("@")?n=L(t):t&&n.push(k(t))}return[ve(e,n)]}function C(e){return e.replace(/\s/g,"").split(",").map(k)}const he=P({boilerplate:Boolean,color:String,loading:Boolean,loadingText:{type:String,default:"$vuetify.loading"},type:{type:[String,Array],default:"ossein"},...M(),...j(),...F()},"VSkeletonLoader"),ge=B()({name:"VSkeletonLoader",props:he(),setup(e,n){let{slots:t}=n;const{backgroundColorClasses:u,backgroundColorStyles:m}=z(q(e,"color")),{dimensionStyles:f}=N(e),{elevationClasses:i}=O(e),{themeClasses:c}=U(e),{t:d}=Y(),a=$(()=>k(X(e.type).join(",")));return E(()=>{var v;const p=!t.default||e.loading;return l("div",{class:["v-skeleton-loader",{"v-skeleton-loader--boilerplate":e.boilerplate},c.value,u.value,i.value],style:[m.value,p?f.value:{}],"aria-busy":e.boilerplate?void 0:p,"aria-live":e.boilerplate?void 0:"polite","aria-label":e.boilerplate?void 0:d(e.loadingText),role:e.boilerplate?void 0:"alert"},[p?a.value:(v=t.default)==null?void 0:v.call(t)])}),{}}});function fe(e){return Math.floor(Math.abs(e))*Math.sign(e)}const _e=P({scale:{type:[Number,String],default:.5},...G()},"VParallax"),be=B()({name:"VParallax",props:_e(),setup(e,n){let{slots:t}=n;const{intersectionRef:u,isIntersecting:m}=ue(),{resizeRef:f,contentRect:i}=J(),{height:c}=K(),d=Q();W(()=>{var s;u.value=f.value=(s=d.value)==null?void 0:s.$el});let a;y(m,s=>{s?(a=ae(u.value),a=a===document.scrollingElement?document:a,a.addEventListener("scroll",r,{passive:!0}),r()):a.removeEventListener("scroll",r)}),Z(()=>{a==null||a.removeEventListener("scroll",r)}),y(c,r),y(()=>{var s;return(s=i.value)==null?void 0:s.height},r);const p=$(()=>1-ee(+e.scale));let v=-1;function r(){m.value&&(cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var w;const s=((w=d.value)==null?void 0:w.$el).querySelector(".v-img__img");if(!s)return;const x=a instanceof Document?document.documentElement.clientHeight:a.clientHeight,S=a instanceof Document?window.scrollY:a.scrollTop,I=u.value.getBoundingClientRect().top+S,_=i.value.height,A=I+(_-x)/2,H=fe((S-A)*p.value),R=Math.max(1,(p.value*(x-_)+_)/_);s.style.setProperty("transform",`translateY(${H}px) scale(${R})`)}))}return E(()=>l(te,{class:["v-parallax",{"v-parallax--active":m.value},e.class],style:e.style,ref:d,cover:!0,onLoadstart:r,onLoad:r},t)),{}}}),ke=se({name:"Solution",components:{VSkeletonLoader:ge},setup(){return{...D()}}}),T=e=>(ce("data-v-db94f89c"),e=e(),de(),e),ye={class:"content"},xe={class:"content-top"},Se=T(()=>o("div",{class:"d-flex flex-column fill-height justify-center align-center text-white"},[o("p",{class:"font-weight-thin mb-4"},"高效检测 SAAS 解决方案"),o("p",{class:"font-weight-thin mb-4"},"科技驱动的创新服务")],-1)),we={class:"content-list"},Ve={key:0,class:"content-list-item"},Le={class:"title py-md-9"},Ce={class:"subtitle"},Pe=["innerHTML"],Be={key:2,class:"content-list-item"},$e=T(()=>o("p",{style:{"text-align":"center"}},"暂无数据",-1)),Ee=[$e];function Te(e,n,t,u,m,f){const i=oe("v-skeleton-loader");return h(),g("div",ye,[o("section",xe,[l(be,{src:"https://bd-res.oss-cn-hangzhou.aliyuncs.com/saas/workspace/images/jiance/solution-bg.png"},{default:b(()=>[Se]),_:1})]),o("div",we,[e.loading?(h(),g("div",Ve,[l(i,{type:"article"}),l(i,{type:"article"}),l(i,{type:"article"})])):e.items.length?(h(!0),g(le,{key:1},ie(e.items,(c,d)=>(h(),g("div",{class:"content-list-item",key:d},[l(me,{width:"100%",elevation:"2"},{title:b(()=>[o("h1",Le,V(c.name),1)]),subtitle:b(()=>[o("div",Ce,[l(re,{icon:"mdi-calendar-range"}),o("span",null,V(c.createTime),1)])]),text:b(()=>[o("div",{class:"detail",innerHTML:c.detail},null,8,Pe)]),_:2},1024)]))),128)):(h(),g("div",Be,Ee))])])}const Me=ne(ke,[["render",Te],["__scopeId","data-v-db94f89c"]]);export{Me as default};