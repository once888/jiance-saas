import{b as V,a as w,p as J,m as Y,e as z,f as G,h as O,i as R,j as H,k as T,o as m,l as A,q as t,r as s,w as a,F as _,s as I,V as g,t as Q,v as h,x as y,y as B,z as M,A as $,B as ee,C as te}from"./entry.db0d2505.js";import{useDeploySetup as se}from"./hooks.d75976ec.js";import{V as ne}from"./VSheet.e83d21a4.js";import{V as v}from"./VBtn.ba43fd7c.js";import{V as le}from"./VDialog.fc9e0ecc.js";import{V as E}from"./VForm.9fef5c37.js";import{V as p}from"./VTextField.75bc6400.js";import{V as oe,a as ae,b as ie}from"./VCard.eef2b132.js";import"./useRequest.cde6ea3c.js";const de="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAfCAYAAADwbH0HAAAABHNCSVQICAgIfAhkiAAAAX5JREFUSInll9+K2kAUxn8Tg8E/MDGLN8LKPs9Coe/R0hdo8aK0T+boa9QqXq7JQFQyIKcX3YRY7Z0zLux3lZlz8YMh3znfUcaYZ+C7UuqBABKRF2CmFovFLxF5CgGtpZRaxW1olmX0ej0Ajscju93OC1hEnuL6MBwOmUwmTXE0GuGcoyxLL/Co/uj3+xfFa3c3B1dVhXOuKTjnqKrKG7h5amstURSRpikARVFgrfUK3gCPAHmek+e5N1hLmziKoi+n0+lnSB93Op2vIVhvS2o+n38AfgRumd+UMeY3MA0BbWkdt6FpmqK1Bv7aqygKX+Bp42OtNePxmCRJAOh2u4iINy83nStJkgZ67ewNfDgcLorX7m6l5qnLsmS73TIYDADY7/feJlMNXvP6gwVsmetYRD5zBx+HYL0tqeVy+fEe00kZY9a8zuOA2sRtaJZlZ3bylTKBx/+mTK31O0iZ7VT57/nWOkuZQLiUqZRa1WuMtdYrrFa9O30i8LYoIrM/aefF/DMM8NEAAAAASUVORK5CYII=",ce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAApCAYAAAClfnCxAAAABHNCSVQICAgIfAhkiAAABKVJREFUWIXtmc9v3EQUx7/f8dpJdxu1Ef0JElJWiIqkQKX+OFSA4EIR16pXrnurVKnqoZdM/oXcFjj11DYXhFJVQj0EaDnAIk6pVFShgNSytKiULGs3u/Z8Oaw3pMFJseumF76SJcv2e/PxeN6bN2OioE6dOuUdOXLkVZIfAdgJgABiAB0AfwB4KGnFGDMqaQeAcQBjACoAlN6/0Gq1fpybm0uKMJgiRpJ49OjR3SRPplCUtALgFsnPnXPNMAw/PXfu3IVut/uJ7/sfA5gHcCt9jgDGSZ48fvz4HkkswlHEiLOzs0EYhieNMW9h0AE9kj94nvfF8vLyr9ZaYdC7qzbWWvq+vzcIgg8AHJI0AsBJuhFF0Zy1tr/O5onK3fOS0O1293uedyi1dySXJF09c+bMXWuty4CQtdadP3++LekqgJ8BuNT+9Uqlsl/KxV0MHgBITkkaTc/7zrmvwjC8R3JTApIKw/Cec+46yX56rRoEwVQRDq8AuPF9/32SezEY679HUfSZtbb3X+wXFhZ04sSJh5IOA9iOwdDtX7t2rbWwsPBsh83k5CSNMeNrbO8BeJTHR7fbjQC01zC8MDk5mTv+csO32+2KpACDHhMGqTG3SHZSewLw2+12Ja+P3PBxHJu0cQGAMaZQjsYgYFf9DP3mUaGABQZZpww9jZ+ik5QkiaRTwdbX2hf1kRu+VqvFAFoAridJciOO45+mp6dzNT49Pa0kSW4nSXIDwHUArdRvLuWGbzQa/VardWViYuJivV6/1Ov1vntSfl8vklpZWfm+Xq9fmpiYuNhqta40Go1+XpYnpSdaawkMUmRe50V18+ZNAUBGmfGYNgWanZ0d6fV6YwBqzrkgjuMteQGSPd/3/wqCoHP69OmVDZ/LuiiJMzMztWq1epjkOwD24CkyUwE5SfcBfEmydfbs2TBraGaWBySDWq12iOSHkvamz5ktPDwMav8XJT1cXFz8bX5+3q3nzOzNIAjGnHN1ScNFxvM6xo0x9W63O5bFmQkvKSBZQ7F6v0xR0naSI1k3M+Gr1Sqcc08DPswSbs15IZHckGPDYsjzvEJTtyQH4E9jzF0AkaQqgH0AdqBACb6Zcldym4lkLOkXSV+TvFOpVB5FUbTN87yXALwN4GWU+AJlwkvSMslvoij61lq7Ot03m807nU7Hc84NdxFKiaWyc3fH9/3b1trHyuRGoxEnSXIbBWv/jVQmvAC4OI4z6/skSfr4J4BLUZnwBLCN5K7MhozZlwZvaem31GFDcqekN5rN5mOxdPnyZd/zvDdJ7iyzvVJ7Pt1IOvDgwYODw10wa61ZWlo66Jx7BcBw7VuKyg5YSgo8z6vOzMyshdxG0kfJM/ZWVoql63/456XS4dNA3ZJOKb0RDlRqAbaRngm8MWZ9VjFFfyBsplKrSgBwzhnnXGVxcXEVNk2TpX+N0uGNMSOSdh07dmx0amoqAjAqabek0U3WFYVUOrykQNIBAO/VarX7KfhrJIOy2yodHoNhvwfAu865kGSVZKkF2VAbwidJAmOK/fVBunVBMnPVn0dJkqBSycbMpAvDEJ7n/Wuf5HnI8zwXhmHmvb8ByV4JV74+VcAAAAAASUVORK5CYII=",re=""+new URL("e-icon3.8a381584.png",import.meta.url).href,ue="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGsAAABmCAYAAADMIW/SAAAABHNCSVQICAgIfAhkiAAABLVJREFUeJzt3E1PG1cUxvHz3DvjsWGMQyKSpqZpk6KKoHZTNVSqaIubVkiV+p3yNfIVWEVCAYEAk01WZBG1UjeRWqS+pE3SWgIT1557Txd1JCoZxy834APnt0T4+mj+HtvYlyFSSimllFJKKaWUUioYnPYAvWJmPHr0qPDixYsbuVzuAjNftNZ2/F3vvTfGHGZZVnPOPY3j+M9KpZKd8MjBiYj18OHDQpZl17Ms+5CI3gcwTkQpM3ecH4AH0PTe1wH8YYz5vtFoPF5aWqqf7ORhRac9wOusrKyMNRqNmwC+NsZcoyMzA10fa2PGmAve+7eYuRzHcYGZdwC4Nz70G2JOe4BulpeXbZqmbxPRVwBu0AAPLmOMZebLABZ3dnauh5/y5Ix0rKmpqQIzf0BE7w2zDgAwc8l7/3mYyU7HqD8NpsaYMgWYE0AMoMzMBoAPMNuJG+kzyzk3xswTIdYCYIiotLGxUQix3mkY6VhxHFsKe/ajWCwmAdc7USMdS/2fxhJEYwmisQTRWIJoLEE0liAaSxCNJYjGEkRjCaKxBNFYgmgsQTSWIBpLEI0liMYSpK+vzKvVauScKznnuu6LyOVyrWaz+bf0TZWjpqdYm5ubl6Iommfmj621eWNM533LbQA4SZL6gwcPfrDW7i4sLPwWZtzzrWus1dXVZGJiYqbZbH7JzNeJKAVgXrMTloiImPkiEV3KsuzK1tbWxu3bt/cCzXxudX3NKhQKN1ut1nfGmFkAE+3tXD1p/25KRLMAPqlWq6O+R3HkHXvwd3d3S8aYOQDvENHA27eYeRzAjHPu2qBrqP8cG+vly5dXmHno3bDtrcuXjDGzw6yjusRqtVpTzFwKcScACgCuhljrPDs2FoCYwu2GjYioGGitc+tE/ihuv9nQNxhD0k8wBNFYgmgsQTSWIBpLEI0liMYSRGMJorEE0ViCaCxB9PO6Ady9ezeem5u72mq1ikSUR4evzq213jl3SES1SqXyNMT9aqw+MDPW19cn8/n8p865GWNMSkRxp6uzZVnGAJpE9Hx7e/tHAI8rlcrBMPevsXrEzHZ7e3s6SZIFZr5FR86oTntSXv2Mmd8FMENEU9VqdXdxcfFXADzIDPqa1QNmxv379yeiKFpi5i/aX6b2dK3G9gajSQDfENHS2tpa8bjrJL6OxurBkydPcmmaznrvPzJm4EMWEdGtfD5/a21tLTfIAhqrB3t7eykzfwZgoIP8SvuM+rZUKpXu3LnT97HXWD3I5/MJDXnNQyIiYwwZY9Isy2bm5+fjvm8/7ABn3fLysmXmdNiz6ijv/WVrbf9XJQ01wFk1PT2dc85dCbxsvtFo6NPgWaaxBNFYgmgsQTSWIBpLEI0liMYSRGMJorEE0ViCaCxBNJYgGksQjSWIxhJEYwmisQTRWIJoLEE0liAaSxCNJYjGEqTbrtADIvrdex/kosQAnvV7m2az+Y+19hkzh9oNW6/X666fG9RqNZ8kSR3AL4FmIAC1crnc1xxEXWKNjY39VK/X951zQQ6U977vfySLougv59wOM4+HmIGIssnJycN+bnBwcJAZY3621t4LNAMlSfJ8f3+/GWo9pZRSSimllFJKqdHxL+BkWmGnPe4hAAAAAElFTkSuQmCC";const Z=(()=>V.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}))(),j=(()=>V.reduce((e,n)=>{const o="offset"+w(n);return e[o]={type:[String,Number],default:null},e},{}))(),K=(()=>V.reduce((e,n)=>{const o="order"+w(n);return e[o]={type:[String,Number],default:null},e},{}))(),P={col:Object.keys(Z),offset:Object.keys(j),order:Object.keys(K)};function fe(e,n,o){let d=e;if(!(o==null||o===!1)){if(n){const i=n.replace(e,"");d+=`-${i}`}return e==="col"&&(d="v-"+d),e==="col"&&(o===""||o===!0)||(d+=`-${o}`),d.toLowerCase()}}const me=["auto","start","end","center","baseline","stretch"],Ae=J({cols:{type:[Boolean,String,Number],default:!1},...Z,offset:{type:[String,Number],default:null},...j,order:{type:[String,Number],default:null},...K,alignSelf:{type:String,default:null,validator:e=>me.includes(e)},...Y(),...z()},"VCol"),u=G()({name:"VCol",props:Ae(),setup(e,n){let{slots:o}=n;const d=O(()=>{const i=[];let f;for(f in P)P[f].forEach(r=>{const S=e[r],N=fe(f,r,S);N&&i.push(N)});const l=i.some(r=>r.startsWith("v-col-"));return i.push({"v-col":!l||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),i});return()=>{var i;return R(e.tag,{class:[d.value,e.class],style:e.style},(i=o.default)==null?void 0:i.call(o))}}}),b=["start","end","center"],L=["space-between","space-around","space-evenly"];function C(e,n){return V.reduce((o,d)=>{const i=e+w(d);return o[i]=n(),o},{})}const ge=[...b,"baseline","stretch"],q=e=>ge.includes(e),W=C("align",()=>({type:String,default:null,validator:q})),he=[...b,...L],x=e=>he.includes(e),X=C("justify",()=>({type:String,default:null,validator:x})),ve=[...b,...L,"stretch"],U=e=>ve.includes(e),D=C("alignContent",()=>({type:String,default:null,validator:U})),F={align:Object.keys(W),justify:Object.keys(X),alignContent:Object.keys(D)},pe={align:"align",justify:"justify",alignContent:"align-content"};function Se(e,n,o){let d=pe[e];if(o!=null){if(n){const i=n.replace(e,"");d+=`-${i}`}return d+=`-${o}`,d.toLowerCase()}}const Ve=J({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:q},...W,justify:{type:String,default:null,validator:x},...X,alignContent:{type:String,default:null,validator:U},...D,...Y(),...z()},"VRow"),k=G()({name:"VRow",props:Ve(),setup(e,n){let{slots:o}=n;const d=O(()=>{const i=[];let f;for(f in F)F[f].forEach(l=>{const r=e[l],S=Se(f,l,r);S&&i.push(S)});return i.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),i});return()=>{var i;return R(e.tag,{class:["v-row",d.value,e.class],style:e.style},(i=o.default)==null?void 0:i.call(o))}}}),ye=T({name:"Deploy",setup(){return{eIcon1:de,eIcon2:ce,eIcon3:re,eIcon4:ue,...se()}}}),c=e=>(ee("data-v-a1554174"),e=e(),te(),e),ke={class:"content"},we={class:"content-a"},be=c(()=>t("div",{class:"content-a-left"},[t("div",null,[t("p",null,[h("检测SaaS"),t("span",null,"私有化部署")]),t("p",null,"快捷高效的私有化填单平台，值得信赖"),t("p",null,"专属服务器、数据加密，更安全稳定, 独享云资源，速度更快。")])],-1)),Ce={class:"content-a-right"},Ne=c(()=>t("div",{class:"block"},null,-1)),_e={class:"content-b"},Ie=c(()=>t("p",null,[t("span",null,"为什么选择"),t("span",null,"私有化部署？")],-1)),Be={class:"info-list"},Me={class:"info-list-item"},Ee={class:"content-c"},Pe={class:"info"},Fe=c(()=>t("p",null,"详细了解检测SaaS私有化部署，出具报告更方便",-1)),Je={class:"content-d"},Ye=c(()=>t("p",null,[t("span",null,"为什么选择"),t("span",null,"私有化部署？")],-1)),ze={class:"info-list"},Ge={class:"info-list-item"},Oe={key:0,class:"screen-divider"},Re={key:1,class:"mobile-divider"},Ze={class:"content-e"},je={class:"content-e-group"},Ke={class:"row1"},Le={class:"row1-item"},qe={class:"icon"},We={class:"icon-side"},xe=c(()=>t("div",{class:"chip"},[t("div",{class:"item"},"内网部署"),t("div",{class:"item"},"自建云部署"),t("div",{class:"item"},"私有云部署")],-1)),Xe=c(()=>t("p",{class:"title"},"多种部署方式",-1)),Ue=c(()=>t("p",{class:"text"},"支持单体和集群部署，提供完善的内网、自建云、私有云等多种部署方案",-1)),De={class:"row1-item"},He={class:"icon",style:{"margin-top":"10px"}},Te={class:"icon-side"},Qe=c(()=>t("p",{class:"title"},"国产化需要",-1)),$e=c(()=>t("p",{class:"text"},"系统不但支持 windows，也支持国产系统，无论是公有云还是私有云，都能顺畅的运行",-1)),et={class:"row2"},tt={class:"row2-item"},st=c(()=>t("p",{class:"title"},"数据可交付",-1)),nt=c(()=>t("p",{class:"text"},"我们提供离线的数据交付，如果你使用我们的企业版，即可享受离线数据全交付，无论是委托单、试验数据还是报告都可一键下载到本地",-1)),lt={style:{display:"flex","justify-content":"center","align-items":"center"}},ot={class:"row2-item"},at=c(()=>t("p",{class:"title"},"参数可定制",-1)),it=c(()=>t("p",{class:"text"},"检测报告的参数非常多，导致很多软件无法有效的进行定制参数，我们的产品可进行参数的可定制。",-1)),dt={class:"content-f"},ct=c(()=>t("p",null,"获取检测 SaaS解决方案",-1)),rt=c(()=>t("p",null,"请点击下方按钮咨询私有化部署详情，检测标点云团队将在1个工作日内响应您的需求",-1)),ut={class:"dialog-title"},ft=c(()=>t("span",{class:"text-h5"},"联系电话",-1)),mt={class:"phone-input"},At={class:"dialog-bottom"};function gt(e,n,o,d,i,f){return m(),A("div",ke,[t("section",we,[be,t("div",Ce,[Ne,s(ne,{rounded:"",elevation:4,height:420,"min-width":390,class:"pa-6"},{default:a(()=>[s(E,{onSubmit:Q(e.handleSubmit,["prevent"])},{default:a(()=>[s(p,{modelValue:e.form.name,"onUpdate:modelValue":n[0]||(n[0]=l=>e.form.name=l),label:"您的姓名",rules:e.formRules.name,variant:"outlined"},null,8,["modelValue","rules"]),s(p,{modelValue:e.form.phone,"onUpdate:modelValue":n[1]||(n[1]=l=>e.form.phone=l),label:"手机号码",rules:e.formRules.phone,variant:"outlined"},null,8,["modelValue","rules"]),s(p,{modelValue:e.form.company,"onUpdate:modelValue":n[2]||(n[2]=l=>e.form.company=l),label:"企业名称",rules:e.formRules.company,variant:"outlined"},null,8,["modelValue","rules"]),s(p,{modelValue:e.form.num,"onUpdate:modelValue":n[3]||(n[3]=l=>e.form.num=l),label:"使用人数",rules:e.formRules.num,variant:"outlined"},null,8,["modelValue","rules"]),s(v,{loading:e.loadingBtn,type:"submit",color:"rgb(67, 110, 206)",block:"",class:"mt-2",size:"large"},{default:a(()=>[h("获取报价方案")]),_:1},8,["loading"])]),_:1},8,["onSubmit"])]),_:1})])]),t("section",_e,[Ie,t("div",Be,[(m(!0),A(_,null,I(e.infoListB,(l,r)=>(m(),A("div",{key:r},[t("div",Me,[t("div",null,[s(g,{"max-width":100,"max-height":100,src:l.icon},null,8,["src"]),t("p",null,y(l.title),1)])])]))),128))])]),t("section",Ee,[t("div",Pe,[Fe,s(v,{color:"rgb(67, 110, 206)",width:"200",rounded:"",onClick:e.handlePhone},{default:a(()=>[h("预约讲解")]),_:1},8,["onClick"])])]),t("section",Je,[Ye,t("div",ze,[(m(!0),A(_,null,I(e.infoListD,(l,r)=>(m(),A("div",{key:r},[t("div",Ge,[s(g,{"max-width":79,"max-height":78,src:l.icon,style:{margin:"0 auto 20px auto"}},null,8,["src"]),t("p",null,y(l.title),1),t("p",null,y(l.text),1),r<2?(m(),A("div",Oe,[s(B,{thickness:2,vertical:""})])):M("",!0),r<2?(m(),A("div",Re,[s(B,{thickness:2,inset:"",length:"100"})])):M("",!0)])]))),128))])]),t("section",Ze,[t("div",je,[t("div",Ke,[t("div",Le,[s(k,{"no-gutters":""},{default:a(()=>[s(u,{cols:"6","align-self":"center"},{default:a(()=>[t("div",qe,[t("div",We,[s(g,{"max-width":"30","max-height":"30",cover:"",src:e.eIcon1},null,8,["src"])])])]),_:1}),s(u,{cols:"6","align-self":"center",style:{height:"110px"}},{default:a(()=>[xe]),_:1}),s(u,{cols:"12","align-self":"center",style:{margin:"20px 0"}},{default:a(()=>[Xe]),_:1}),s(u,{cols:"12","align-self":"center"},{default:a(()=>[Ue]),_:1})]),_:1})]),t("div",De,[s(k,{"no-gutters":""},{default:a(()=>[s(u,{cols:"12","align-self":"center"},{default:a(()=>[t("div",He,[t("div",Te,[s(g,{"max-width":"30","max-height":"30",cover:"",src:e.eIcon2},null,8,["src"])])])]),_:1}),s(u,{cols:"12","align-self":"center",style:{margin:"20px 0"}},{default:a(()=>[Qe]),_:1}),s(u,{cols:"12","align-self":"center"},{default:a(()=>[$e]),_:1})]),_:1})])]),t("div",et,[t("div",tt,[s(k,{"no-gutters":""},{default:a(()=>[s(u,{cols:"6","align-self":"center"},{default:a(()=>[st,nt]),_:1}),s(u,{cols:"6","align-self":"center"},{default:a(()=>[t("div",lt,[s(g,{"max-width":"100","max-height":"100",cover:"",src:e.eIcon3},null,8,["src"])])]),_:1})]),_:1})]),t("div",ot,[s(g,{style:{width:"100%"},"max-width":"80","max-height":"80",cover:"",src:e.eIcon4},null,8,["src"]),at,it])])])]),t("section",dt,[ct,rt,s(v,{color:"rgb(67, 110, 206)",width:"200",rounded:"",size:"x-large",onClick:e.handlePhone},{default:a(()=>[h("一键获取")]),_:1},8,["onClick"])]),s(le,{modelValue:e.visiblePhone,"onUpdate:modelValue":n[7]||(n[7]=l=>e.visiblePhone=l),width:"500"},{default:a(()=>[s(oe,null,{default:a(()=>[s(ae,null,{default:a(()=>[t("div",ut,[ft,s($,{icon:"mdi-close",onClick:n[4]||(n[4]=l=>e.visiblePhone=!1)})])]),_:1}),t("div",mt,[s(E,{ref:"formRef"},{default:a(()=>[s(p,{modelValue:e.formPhone.phone,"onUpdate:modelValue":n[5]||(n[5]=l=>e.formPhone.phone=l),label:"请输入手机号码",rules:[e.rules.phone],clearable:"",variant:"outlined"},null,8,["modelValue","rules"])]),_:1},512)]),s(ie,null,{default:a(()=>[t("div",At,[s(v,{variant:"tonal",onClick:n[6]||(n[6]=l=>e.visiblePhone=!1)},{default:a(()=>[h("关闭")]),_:1}),s(v,{class:"text-none text-subtitle-1",color:"blue",variant:"flat",loading:e.loadingBtn,onClick:e.handlePhoneConfirm},{default:a(()=>[h("确认")]),_:1},8,["loading","onClick"])])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}const Ct=H(ye,[["render",gt],["__scopeId","data-v-a1554174"]]);export{Ct as default};
