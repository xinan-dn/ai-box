(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[751],{7694:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tool/[name]",function(){return l(6159)}])},712:function(e,t,l){"use strict";var a,s,n,i,r,c,o,d,x,u;l.d(t,{EA:function(){return i},HY:function(){return a},SN:function(){return r},WA:function(){return s}}),(c=a||(a={})).WechatPayH5="WECHAT_PAY_H5",c.WechatPayJSAPI="WECHAT_PAY_JSAPI",c.WechatPayNative="WECHAT_PAY_NATIVE",(o=s||(s={})).Pending="pending",o.Completed="completed",o.Error="error",o.Expired="expired",o.Refunded="refunded",(d=n||(n={})).Active="active",d.Expired="expired",(x=i||(i={})).Free="free",x.Basic="basic",(u=r||(r={})).Subscription="subscription",u.Quota="quota"},5365:function(e,t,l){"use strict";var a=l(7458),s=l(8194),n=l(2181),i=l(4039),r=l(3419),c=l(8651),o=l.n(c),d=l(2983),x=l(3355);let u=()=>{var e;let t=(0,n.S)(),l=(0,r.Dv)(x.Rx),{hidePayment:c}=(0,i.Z)();return c?null:l.id&&(!t.isFetched||(null===(e=t.data)||void 0===e?void 0:e.subscription))?null:(0,a.jsxs)(o(),{className:"mx-auto flex w-fit max-w-[283px] items-center rounded-full bg-white py-1 px-2 shadow-xl shadow-black/5 ring-1 ring-slate-700/10",href:"/payment",children:[(0,a.jsx)("span",{className:"ml-1 text-sm font-medium",children:"升级会员享8项权益"}),(0,a.jsx)("div",{className:"ml-2 rounded-full bg-white py-1 px-2 ring-1 ring-slate-700/10",children:(0,a.jsx)(s.LZ3,{})})]})};t.Z=(0,d.memo)(u)},4617:function(e,t,l){"use strict";l.d(t,{Z:function(){return d}});var a=l(7458),s=l(8194),n=l(7608),i=l.n(n),r=l(3419);l(2983);var c=l(1911),o=l(3355);function d(e){let{name:t,className:l,hoverShow:n}=e,d=(0,c.Ek)("toggleFavoriteTemplate"),[x,u]=(0,r.KO)(o.JW),m=(0,r.Dv)(o.Rx),p=e=>{e.preventDefault();let l=!!(x.favoriteTemplates&&x.favoriteTemplates[t]);d({templateName:t,isFavorite:!l}).then(e=>{"success"in e||u(e)})};return m.id?x.favoriteTemplates&&x.favoriteTemplates[t]?(0,a.jsx)(s.e0l,{onClick:p,color:"#fbbf24",className:i()(l,"scale-150")}):(0,a.jsx)(s.r7p,{onClick:p,color:"#fbbf24",className:i()(l,"scale-150",n&&"hidden md:group-hover:block")}):null}},2122:function(e,t,l){"use strict";var a=l(7458),s=l(2983);let n=()=>(0,a.jsx)("footer",{className:"mt-auto flex w-full justify-center py-4",children:(0,a.jsx)("a",{href:"https://beian.miit.gov.cn/",className:"text-sm text-gray-400",children:"沪ICP备19036898号-2"})});t.Z=(0,s.memo)(n)},4038:function(e,t,l){"use strict";l.d(t,{Z:function(){return y}});var a=l(7458),s=l(8194),n=l(712),i=l(6161),r=l(3474),c=l.n(r),o=l(40),d=l(2181),x=l(4039),u=l(741),m=l(3419),p=l(8651),h=l.n(p),f=l(6862),b=l(2983),g=l(3355),v=l(1411),j=l(7608),N=l.n(j);let w=e=>{let{children:t,onClick:l}=e;return(0,a.jsx)(v.ck,{disabled:void 0===l,onClick:l,className:"group relative flex h-[35px] cursor-pointer select-none items-center rounded-[3px] px-2 text-[16px] leading-none text-black outline-none data-[highlighted]:bg-black data-[highlighted]:text-white",children:t})},k=e=>{let{trigger:t,children:l,className:n,onOpenChange:r}=e;return(0,a.jsxs)(v.fC,{onOpenChange:r,children:[(0,a.jsx)(v.xz,{asChild:!0,children:(0,a.jsxs)(i.Z,{className:N()(n,"flex flex-row items-center gap-2"),children:[t,(0,a.jsx)(s.RYk,{})]})}),(0,a.jsx)(v.Uv,{children:(0,a.jsx)(v.VY,{className:"data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade min-w-[180px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform]",sideOffset:10,children:l})})]})},C=()=>{var e,t,l;let[r,p]=(0,m.KO)(g.Rx),[v,j]=(0,m.KO)(g.gr),N=(0,f.useRouter)(),C=(0,d.S)(),{openLoginDialog:y}=(0,u.Z)(),{openBindDialog:E}=(0,o.Z)(),{hideWechatLogin:_,hidePayment:A}=(0,x.Z)(),S=(0,b.useMemo)(()=>{var e;return(null===(e=C.data)||void 0===e?void 0:e.plan)!==n.EA.Free},[null===(e=C.data)||void 0===e?void 0:e.plan]),T=(0,b.useMemo)(()=>"绑定".concat(r.phoneNumber?"微信":"手机号"),[r.phoneNumber]),Z=(0,b.useCallback)(()=>{j({}),p({})},[j,p]),O=(0,b.useCallback)(()=>{E(r.phoneNumber?"wechat":"mobile")},[E,r.phoneNumber]),D=(0,b.useCallback)(e=>{if(e){N.push("/payment?itemType=".concat(e));return}N.push("/payment")},[N]);return(0,a.jsx)("nav",{className:"sticky top-0 left-0 z-10 w-full flex-none border-b border-slate-900/10 bg-white/80 backdrop-blur",children:(0,a.jsx)("div",{className:"max-w-8xl mx-auto",children:(0,a.jsx)("div",{className:"py-2 px-4",children:(0,a.jsxs)("div",{className:"relative flex h-10 items-center",children:[(0,a.jsx)(h(),{href:"/",className:"font-semibold text-black",children:(0,a.jsx)("img",{src:"/icon.png",width:140,height:40,alt:"icon"})}),(0,a.jsx)("div",{className:"ml-auto flex",children:v.accessToken&&(null==r?void 0:r.id)?(0,a.jsxs)(k,{onOpenChange:e=>e&&C.refetch(),className:S?"!bg-amber-400":"bg-black",trigger:(0,a.jsxs)("div",{className:"flex items-center truncate",children:[S&&(0,a.jsx)(s.$2U,{className:"mr-2"}),S?"会员":"用户",r.id.slice(16)]}),children:[S?(0,a.jsx)(w,{onClick:()=>D("quota"),children:(0,a.jsx)("div",{className:"plausible-event-name=NAV+PAYMENT+QUOTA",children:"购买次数包"})}):null,A?null:(0,a.jsx)(w,{onClick:()=>D(),children:(0,a.jsx)("div",{className:"plausible-event-name=NAV+PAYMENT",children:S?"续费会员时长":"升级会员"})}),S?(0,a.jsx)(w,{children:(0,a.jsxs)("span",{className:"text-xs text-gray-500",children:["剩余次数：",null===(t=C.data)||void 0===t?void 0:t.quotaAvailable]})}):null,S?(0,a.jsx)(w,{children:(0,a.jsxs)("div",{className:"text-xs text-gray-500",children:["会员到期：",(0,a.jsx)("span",{className:"text-xs",children:"".concat(c()(null===(l=C.data)||void 0===l?void 0:l.subscription.endsAt).format("YYYY/MM/DD"))})]})}):null,r.phoneNumber&&r.wechatUnionId||_?null:(0,a.jsx)(w,{onClick:O,children:T}),(0,a.jsx)(w,{onClick:Z,children:"退出登录"})]}):(0,a.jsx)(i.Z,{className:"plausible-event-name=LoginTrigger",onClick:()=>y("wechat"),children:"登录/注册"})})]})})})})};var y=(0,b.memo)(C)},1608:function(e,t,l){"use strict";var a=l(7458),s=l(2983),n=l(7018),i=l(8194),r=l(3419),c=l(3355);let o=e=>{let{text:t}=e,[l,s]=(0,r.KO)(c.tV);return(0,a.jsxs)(n.fC,{open:l,onOpenChange:s,children:[(0,a.jsx)(n.xz,{asChild:!0,className:"mt-5",children:(0,a.jsx)("div",{className:"mx-auto cursor-pointer text-center text-sm text-gray-500",children:t})}),(0,a.jsxs)(n.h_,{children:[(0,a.jsx)(n.aV,{className:"data-[state=open]:animate-overlayShow fixed inset-0 bg-black/50"}),(0,a.jsxs)(n.VY,{className:"data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-[25px] focus:outline-none",children:[(0,a.jsx)(n.Dx,{className:"m-0 text-[17px] font-medium text-black",children:"扫描二维码"}),(0,a.jsxs)(n.dk,{children:[(0,a.jsx)("span",{className:"mt-[10px] mb-5 text-[15px] leading-normal text-gray-500",children:"关注公众号，了解更多玩法和后续更新"}),(0,a.jsx)("img",{src:"/qrcode_gh.jpg",alt:"qrcode",width:400,height:400})]}),(0,a.jsx)(n.x8,{asChild:!0,children:(0,a.jsx)("button",{className:"absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full text-black focus:outline-none","aria-label":"Close",children:(0,a.jsx)(i.Pxu,{})})})]})]})]})};t.Z=(0,s.memo)(o)},40:function(e,t,l){"use strict";var a=l(3419),s=l(2983),n=l(3355);let i=()=>{let e=(0,a.b9)(n.l),t=(0,s.useCallback)(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"wechat";e({open:!0,method:t})},[e]),l=(0,s.useCallback)(()=>{e({open:!1,method:"wechat"})},[e]);return{openBindDialog:t,closeBindDialog:l,setBindDialogOpen:e}};t.Z=i},2181:function(e,t,l){"use strict";l.d(t,{S:function(){return o}});var a=l(2797),s=l(3419),n=l(2983),i=l(1911),r=l(3355),c=l(3121);function o(){let e=(0,s.Dv)(r.Rx),t=(0,i.Ek)("currentSubscription"),l=(0,c.Z)(),o=(0,n.useCallback)(async()=>{let e=await t();if(e.success)return e.membership;l({title:"获取订阅信息失败",description:e.toast},"fail")},[t,l]),d=(0,a.a)(["currentSubscription"],o,{staleTime:1/0,enabled:!!e.id});return d}},741:function(e,t,l){"use strict";var a=l(3419),s=l(2983),n=l(3355);let i=()=>{let e=(0,a.b9)(n.Sj),t=(0,s.useCallback)(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"wechat";e({open:!0,method:t})},[e]),l=(0,s.useCallback)(()=>{e({open:!1,method:void 0})},[e]);return{openLoginDialog:t,closeLoginDialog:l,setLoginDialogOpen:e}};t.Z=i},6159:function(e,t,l){"use strict";l.r(t),l.d(t,{__N_SSG:function(){return W},default:function(){return K}});var a=l(7458),s=l(8194),n=l(8331),i=l(7382),r=l(6161),c=l(5365),o=l(2122),d=l(2983);let x=e=>{let{loading:t,children:l,...n}=e;return(0,a.jsx)(r.Z,{disabled:t,...n,children:(0,a.jsxs)("div",{className:"flex items-center justify-center gap-x-1",children:[t&&(0,a.jsx)(s.T39,{}),l]})})};var u=(0,d.memo)(x),m=l(1608),p=l(3184),h=l(7608),f=l.n(h),b=l(8651),g=l.n(b);let v=e=>{let{isMember:t,checked:l,onCheckedChange:n,disabled:i}=e,r=!t||i;return(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(p.fC,{className:"h-[18px] w-[18px] appearance-none rounded bg-[#F0F0F0]",id:"batch-generate",checked:l,onCheckedChange:n,disabled:r,children:(0,a.jsx)(p.z$,{className:f()(r?"text-gray-400":"text-black"),children:(0,a.jsx)(s.nQG,{width:18,height:18})})}),(0,a.jsxs)("label",{className:f()("ml-2 text-sm",r?"text-gray-500":""),htmlFor:"batch-generate",children:["批量生成",t?(0,a.jsx)("span",{className:"text-gray-400",children:"（一次生成3个结果）"}):(0,a.jsxs)("span",{children:["（",(0,a.jsx)(g(),{className:"text-black underline",href:"/payment",children:"付费开通"}),"）"]})]})]})};var j=(0,d.memo)(v),N=l(3121),w=l(232),k=l(9075),C=l(5464);let y=e=>{let{output:t,generating:l}=e,[s,n]=(0,d.useState)(!1),i=(0,N.Z)(),r=(0,d.useCallback)(()=>{try{let e=(0,C.Hw)(t);if(!e)return i({title:"复制失败",description:"请尝试手动复制"},"fail");n(!0)}catch(e){i({title:"复制失败",description:"请尝试手动复制"},"fail")}},[t,i]),c=(0,k.useClipboard)({copiedTimeout:2e3,selectOnError:!0,onError:r}),o=c.copied||s;return(0,a.jsxs)("div",{className:"flex w-full flex-col gap-y-4",children:[(0,a.jsx)(w.Z,{readOnly:!0,value:t,placeholder:"生成的结果将在这里显示",className:"w-full resize-none appearance-none rounded-lg p-2 ring-1 ring-slate-900/10 focus:ring-2 focus:ring-black",minRows:3,ref:c.target}),(0,a.jsx)(u,{loading:l,onClick:()=>{c.copy()},secondary:!o,success:o,children:l?"生成中":o?"已复制":"全部复制"})]})};var E=(0,d.memo)(y),_=l(3419),A=l(8642),S=l(4755),T=l(1911),Z=l(3355),O=l(4039),D=l(9312),P=l(2181),F=l(8665),Y=l.n(F),R=l(6862),I=l(4038);let U=e=>{let{toolDef:t,onClickHistoryItem:l,onClose:n,visible:i}=e,r=(0,T.Ek)("getPromptHistory"),c=(0,_.Dv)(Z.Rx),[o,x]=d.useState([]),[u,m]=(0,d.useState)(null),[p,h]=(0,d.useState)(0),[b,g]=(0,d.useState)(!1),v=(0,d.useCallback)(e=>{if(c.id)return r({page:e,pageSize:10,templateName:t.name,userId:c.id})},[r,t.name,c.id]);(0,d.useEffect)(()=>{var e;null===(e=v(0))||void 0===e||e.then(e=>{"success"in e||(e.total>e.data.length?h(1):g(!0),x(e.data))})},[v,i]);let j=()=>{var e;null===(e=v(p))||void 0===e||e.then(e=>{if("success"in e)return;let t=[...o,...e.data];h(p+1),t.length>=e.total&&g(!0),x(t)})},N=e=>{(null==u?void 0:u.id)===e.id?(m(null),l(null)):(m(e),l(e)),(0,C.UK)()&&n()};return(0,a.jsxs)("div",{className:f()("absolute left-0 z-10 h-screen overflow-scroll bg-white md:static md:transition-all xl:absolute xl:top-0",i?"w-full px-6 pb-20 md:w-80 md:translate-x-0":"w-0 md:-translate-x-full"),children:[(0,a.jsxs)("div",{className:"sticky top-0 left-0 flex justify-between bg-white/80 py-4 backdrop-blur",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"text-xs text-gray-400",children:t.title}),(0,a.jsx)("div",{className:"text-xl font-semibold",children:"历史记录"})]}),(0,a.jsx)("button",{onClick:n,className:"inline-flex h-10 w-10 appearance-none items-center justify-center rounded-full bg-gray-100 text-black focus:outline-none","aria-label":"Close",children:(0,a.jsx)(s.Pxu,{width:25,height:25})})]}),o.length>0?o.map((e,t)=>{var l;return(0,a.jsxs)("button",{onClick:()=>N(e),className:f()("mt-2 cursor-pointer rounded-lg border px-4 py-6 text-start transition-all md:hover:border-blue-300 ",(null==u?void 0:u.id)===e.id&&"border-blue-500 md:focus:border-blue-500"),children:[(0,a.jsx)("div",{className:"line-clamp-2 mb-2 text-lg font-medium",children:e.promptText}),(0,a.jsx)("div",{className:"line-clamp-3 whitespace-pre-line text-gray-400",children:null===(l=e.responseTexts)||void 0===l?void 0:l.join("")})]},t)}):(0,a.jsx)("div",{className:"mt-2 text-gray-400",children:"暂无历史记录"}),!b&&c.id&&(0,a.jsx)("button",{onClick:j,className:"mt-2 w-full text-center text-blue-400",children:"加载更多"})]})};var V=l(712),M=l(4617),z=l(741);let H=e=>{var t;let{toolDef:l}=e,[x,p]=(0,d.useState)(""),[h,f]=(0,d.useState)([""]),[b,v]=(0,d.useState)(!1),[k,C]=(0,d.useState)(!1),[y,F]=(0,d.useState)("0"),[H]=(0,_.KO)(Z.d_),[W]=(0,_.KO)(Z.Rx),{hideOfficialAccountQRCode:K,hidePayment:Q}=(0,O.Z)(),q=(0,N.Z)(),X=(0,_.b9)(Z.tV),[B,J]=(0,_.KO)(Z.xI),L=function(e){let{templateName:t,setOutputs:l}=e,a=(0,T.Ek)("createCompletion"),s=(0,N.Z)(),n=(0,_.b9)(Z.d_),i=(0,D.Z)(),{hidePayment:r}=(0,O.Z)();return(0,d.useCallback)(async e=>{let{input:c,outputCount:o}=e,d=await a({templateName:t,input:c,stream:!0,outputCount:o,deviceInfo:{platform:i}});if(d&&"success"in d)return s({title:"请求失败",description:r?"请求失败":d.toast},"fail"),d;if(d)for(;;){let{done:e,value:t}=await d.read(),a=new TextDecoder().decode(t);if(a.startsWith("{")){let e=(0,A.U)((0,S.o)(a.split("\n")),e=>JSON.parse(e));for(let t of e)l(e=>e.map((e,l)=>l===t.index?"".concat(e).concat(t.text).trimStart():e))}else l(e=>e.map((e,t)=>0===t?"".concat(e).concat(a).trimStart():e));if(e){n(e=>e+1);break}}},[a,r,i,l,n,t,s])}({templateName:l.name,setOutputs:f}),[G,$]=(0,d.useState)(!1),[ee,et]=(0,d.useState)(!1),[el,ea]=(0,d.useState)(!1),{openLoginDialog:es}=(0,z.Z)(),en=(0,R.useRouter)(),{data:ei}=(0,P.S)(),er=(0,d.useMemo)(()=>!!ei&&(null==ei?void 0:ei.plan)!==V.EA.Free,[ei]),ec=(0,d.useCallback)(async()=>{let e=x;if(!x){if(!l.inputExample)return q({title:"请输入内容",description:"请输入关键词或问题"},"fail");p(e=l.inputExample)}if(!(H>1)||W.id||B||(X(!0),J(!0)),H>=3&&!W.id){q({title:"额度已用完",description:"试用额度已用完，请免费注册以继续使用"},"fail"),es();return}v(!0),f(G?["","",""]:[""]);try{let t=await L({input:e,outputCount:G?3:1});(null==t?void 0:t.code)===i.O1.FREE_QUOTA_EXCEEDED?et(!0):(null==t?void 0:t.code)===i.O1.PAID_QUOTA_EXCEEDED&&ea(!0)}finally{v(!1)}},[B,G,L,x,es,X,J,q,l.inputExample,H,W.id]),eo=(0,d.useCallback)(e=>{if(e){p(e.promptText);let t=e.responseTexts.length>1;F("0"),$(t),f(e.responseTexts)}else p(""),f([""])},[]),ed=(0,d.useCallback)(()=>{if(er)return C(!k);en.push("/payment")},[k,er,en]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Y(),{children:(0,a.jsx)("title",{children:"AI帮个忙 | 多功能AI小帮手"})}),(0,a.jsxs)("div",{className:"flex h-screen w-screen flex-col overflow-hidden bg-slate-50 text-black",children:[(0,a.jsx)(I.Z,{}),(0,a.jsxs)("div",{className:"relative flex min-h-full w-screen",children:[(0,a.jsx)(U,{visible:k,onClose:()=>C(!1),toolDef:l,onClickHistoryItem:eo}),(0,a.jsxs)("div",{className:"container mx-auto h-screen flex-1 overflow-y-scroll pb-10 pt-4 transition-all xl:absolute xl:right-0 xl:pr-[200px]",children:[(0,a.jsx)(c.Z,{}),(0,a.jsxs)("div",{className:"mx-auto flex w-11/12 max-w-[600px] flex-col gap-y-2 py-4 sm:w-4/5",children:[(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsx)(g(),{className:"w-24",href:"/",children:(0,a.jsxs)("div",{className:"flex w-24 flex-row items-center rounded-lg bg-gray-200 py-2 pl-2 text-sm",children:[(0,a.jsx)(s.wyc,{width:20,height:20}),(0,a.jsx)("div",{className:"-ml-[4px]",children:"返回列表"})]})}),er||!Q?(0,a.jsxs)("button",{onClick:ed,className:"rounded-lg bg-gray-200 p-2 px-4 text-sm ",children:["历史记录",!er&&"(付费开通)"]}):null]}),(0,a.jsxs)("h2",{className:"mt-4 flex items-center text-xl font-semibold",children:[(0,a.jsx)("span",{className:"mr-2",children:l.title}),(0,a.jsx)(M.Z,{name:l.name,className:"cursor-pointer"})]}),(0,a.jsx)("span",{className:"text-sm text-gray-500",children:l.description}),(0,a.jsxs)("div",{className:"mt-5 flex flex-col gap-y-2 rounded-xl bg-white p-4 ring-1 ring-slate-900/10",children:[(0,a.jsxs)("div",{className:"flex w-full flex-col gap-y-4",children:[(0,a.jsx)(w.Z,{value:x,onChange:e=>p(e.target.value),placeholder:null!==(t=l.inputExample)&&void 0!==t?t:"输入要求",className:"w-full resize-none appearance-none rounded-lg p-2 ring-1 ring-slate-900/10 focus:ring-2 focus:ring-black",minRows:3,maxRows:6}),Q?null:(0,a.jsx)(j,{checked:G,onCheckedChange:$,isMember:null!=er&&er,disabled:b}),ee&&!Q?(0,a.jsx)(r.Z,{className:"plausible-event-name=QUOTA+EXCEED+PAYMENT border-[1px] border-black bg-white ",onClick:()=>en.push("/payment"),children:(0,a.jsx)("span",{className:"font-normal text-black",children:"免费次数已用完，点击开通会员"})}):el&&!Q?(0,a.jsx)(r.Z,{className:"plausible-event-name=QUOTA+EXCEED+PAYMENT border-[1px] border-black bg-white ",onClick:()=>en.push("/payment?item=quota"),children:(0,a.jsx)("span",{className:"font-normal text-black",children:"次数已用完，点击再次购买"})}):(0,a.jsx)(u,{className:"plausible-event-name=Generate",loading:b,onClick:ec,children:b?"生成中":"提交"})]}),(0,a.jsxs)(n.fC,{value:y,onValueChange:e=>F(e),className:"flex flex-col gap-y-2",children:[G&&(0,a.jsx)(n.aV,{className:"flex items-center gap-x-[5px]",children:h.filter(e=>e.length>0).map((e,t)=>(0,a.jsxs)(n.xz,{className:"h-9 w-[100px] rounded-md border-slate-900/10 bg-white text-sm data-[state=inactive]:border data-[state=active]:bg-slate-900/10",value:t.toString(),children:["结果",t+1]},"Trigger-".concat(t)))}),h.map((e,t)=>(0,a.jsx)(n.VY,{value:t.toString(),children:!!e&&(0,a.jsx)(E,{output:e,generating:b})},"Content-".concat(t)))]})]}),K?null:(0,a.jsx)(m.Z,{text:"使用过程中遇到问题？点击这里反馈"})]}),(0,a.jsx)(o.Z,{})]})]})]})]})};var W=!0,K=(0,d.memo)(H)}},function(e){e.O(0,[848,335,156,774,888,179],function(){return e(e.s=7694)}),_N_E=e.O()}]);