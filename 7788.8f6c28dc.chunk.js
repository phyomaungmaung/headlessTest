"use strict";(self.webpackChunkheadlesscms=self.webpackChunkheadlesscms||[]).push([[7788],{62482:(Y,I,s)=>{s.d(I,{F:()=>g});var t=s(92132),A=s(21272),U=s(94061),v=s(85963),m=s(2129),B=s(28604),L=s(54894);const g=({displayedFilters:C})=>{const[p,R]=A.useState(!1),{formatMessage:y}=(0,L.A)(),u=A.useRef(null),h=()=>{R(K=>!K)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(U.a,{paddingTop:1,paddingBottom:1,children:[(0,t.jsx)(v.$,{variant:"tertiary",ref:u,startIcon:(0,t.jsx)(B.A,{}),onClick:h,size:"S",children:y({id:"app.utils.filters",defaultMessage:"Filters"})}),p&&(0,t.jsx)(m.LC,{displayedFilters:C,isVisible:p,onToggle:h,source:u})]}),(0,t.jsx)(m.cZ,{filtersSchema:C})]})}},97788:(Y,I,s)=>{s.d(I,{ProtectedListPage:()=>Es});var t=s(92132),A=s(61485),U=s(99248),v=s(6239),m=s(83997),B=s(43064),L=s(94061),g=s(30893),C=s(90151),p=s(82166),R=s(25641),y=s(90361),u=s(33363),h=s(88353),K=s(76517),H=s(80782),J=s(42455),N=s(4198),X=s(38413),Z=s(55356),b=s(74773),_=s(2129),c=s(54894),f=s(44347),k=s(62482),W=s(21272),w=s(37679),q=s(60043),ss=s(62490),ts=s(83925),j=s(33544),ms=s(15126),gs=s(63299),Ms=s(67014),Ds=s(59080),Ps=s(79275),Os=s(14718),Ls=s(82437),us=s(61535),cs=s(5790),As=s(12083),Cs=s(35223),ps=s(5409),hs=s(74930),fs=s(2600),Ts=s(48940),Is=s(41286),Us=s(56336),vs=s(13426),Bs=s(84624),Rs=s(77965),ys=s(54257),Ks=s(71210),Ws=s(51187),js=s(39404),xs=s(58692),Ss=s(501),Fs=s(57646),Ns=s(23120),$s=s(44414),Vs=s(25962),zs=s(14664),Gs=s(42588),Qs=s(90325),Ys=s(62785),Hs=s(87443),Js=s(41032),Xs=s(22957),Zs=s(93179),bs=s(73055),ks=s(15747),ws=s(85306),qs=s(26509),st=s(32058),tt=s(81185),et=s(82261);const es=f.n.injectEndpoints({endpoints:e=>({getAuditLogs:e.query({query:i=>({url:"/admin/audit-logs",config:{params:i}})}),getAuditLog:e.query({query:i=>`/admin/audit-logs/${i}`})}),overrideExisting:!1}),{useGetAuditLogsQuery:as,useGetAuditLogQuery:ns}=es,$=()=>{const{formatDate:e}=(0,c.A)();return r=>{const a=(0,ss.A)(r),d=e(a,{dateStyle:"long"}),n=e(a,{timeStyle:"medium",hourCycle:"h24"});return`${d}, ${n}`}},V={"entry.create":"Create entry{model, select, undefined {} other { ({model})}}","entry.update":"Update entry{model, select, undefined {} other { ({model})}}","entry.delete":"Delete entry{model, select, undefined {} other { ({model})}}","entry.publish":"Publish entry{model, select, undefined {} other { ({model})}}","entry.unpublish":"Unpublish entry{model, select, undefined {} other { ({model})}}","media.create":"Create media","media.update":"Update media","media.delete":"Delete media","media-folder.create":"Create media folder","media-folder.update":"Update media folder","media-folder.delete":"Delete media folder","user.create":"Create user","user.update":"Update user","user.delete":"Delete user","admin.auth.success":"Admin login","admin.logout":"Admin logout","content-type.create":"Create content type","content-type.update":"Update content type","content-type.delete":"Delete content type","component.create":"Create component","component.update":"Update component","component.delete":"Delete component","role.create":"Create role","role.update":"Update role","role.delete":"Delete role","permission.create":"Create permission","permission.update":"Update permission","permission.delete":"Delete permission"},x=e=>V[e]||e,is=({handleClose:e,logId:i})=>{const r=(0,_.hN)(),{_unstableFormatAPIError:a}=(0,_.wq)(),{data:d,error:n,isLoading:o}=ns(i);W.useEffect(()=>{n&&(r({type:"warning",message:a(n)}),e())},[n,a,e,r]);const l=$(),E=d&&"date"in d?l(d.date):"";return(0,t.jsxs)(A.k,{onClose:e,labelledBy:"title",children:[(0,t.jsx)(U.r,{children:(0,t.jsx)(w.B,{label:E,id:"title",children:(0,t.jsx)(q.m,{isCurrent:!0,children:E})})}),(0,t.jsx)(v.c,{children:(0,t.jsx)(os,{isLoading:o,data:d,formattedDate:E})})]})},os=({isLoading:e,data:i,formattedDate:r})=>{const{formatMessage:a}=(0,c.A)();if(e)return(0,t.jsx)(m.s,{padding:7,justifyContent:"center",alignItems:"center",children:(0,t.jsx)(B.a,{children:"Loading content..."})});const{action:d,user:n,payload:o}=i;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(L.a,{marginBottom:3,children:(0,t.jsx)(g.o,{variant:"delta",id:"title",children:a({id:"Settings.permissions.auditLogs.details",defaultMessage:"Log Details"})})}),(0,t.jsxs)(C.x,{gap:4,gridCols:2,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,marginBottom:4,background:"neutral100",hasRadius:!0,children:[(0,t.jsx)(T,{actionLabel:a({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),actionName:a({id:`Settings.permissions.auditLogs.${d}`,defaultMessage:x(d)},{model:o?.model})}),(0,t.jsx)(T,{actionLabel:a({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"}),actionName:r}),(0,t.jsx)(T,{actionLabel:a({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),actionName:n?.displayName||"-"}),(0,t.jsx)(T,{actionLabel:a({id:"Settings.permissions.auditLogs.userId",defaultMessage:"User ID"}),actionName:n?.id.toString()||"-"})]}),(0,t.jsx)(p.j,{value:JSON.stringify(o,null,2),disabled:!0,label:a({id:"Settings.permissions.auditLogs.payload",defaultMessage:"Payload"})})]})},T=({actionLabel:e,actionName:i})=>(0,t.jsxs)(m.s,{direction:"column",alignItems:"baseline",gap:1,children:[(0,t.jsx)(g.o,{textColor:"neutral600",variant:"sigma",children:e}),(0,t.jsx)(g.o,{textColor:"neutral600",children:i})]}),ds=({pagination:e}={pagination:{page:1,pageCount:0,pageSize:50,total:0}})=>(0,t.jsx)(L.a,{paddingTop:4,children:(0,t.jsxs)(m.s,{alignItems:"flex-end",justifyContent:"space-between",children:[(0,t.jsx)(_._u,{}),(0,t.jsx)(_.W7,{pagination:e})]})}),S=({headers:e,rows:i,onOpenModal:r})=>{const{formatMessage:a}=(0,c.A)(),d=$(),n=({type:o,value:l,model:E})=>o==="date"?d(l):o==="action"?a({id:`Settings.permissions.auditLogs.${l}`,defaultMessage:x(l)},{model:E}):l||"-";return(0,t.jsx)(R.N,{children:i.map(o=>(0,t.jsxs)(y.Tr,{...(0,_.qM)({fn:()=>r(o.id)}),children:[e?.map(({key:l,name:E,cellFormatter:M})=>{const D=o[E];return(0,t.jsx)(u.Td,{children:(0,t.jsx)(g.o,{textColor:"neutral800",children:n({type:l,value:M?M(D):D,model:o.payload?.model})})},l)}),(0,t.jsx)(u.Td,{..._.dG,children:(0,t.jsx)(m.s,{justifyContent:"end",children:(0,t.jsx)(h.K,{onClick:()=>r(o.id),"aria-label":a({id:"app.component.table.view",defaultMessage:"{target} details"},{target:`${o.action} action`}),noBorder:!0,icon:(0,t.jsx)(ts.A,{})})})})]},o.id))})};S.defaultProps={rows:[]},S.propTypes={headers:j.array.isRequired,rows:j.array,onOpenModal:j.func.isRequired};const rs=({canReadAuditLogs:e,canReadUsers:i})=>{const r=(0,_.hN)(),{_unstableFormatAPIError:a}=(0,_.wq)(),[{query:d}]=(0,_.sq)(),{data:n,error:o,isError:l,isLoading:E}=(0,f.k)({},{skip:!i,refetchOnMountOrArgChange:!0});W.useEffect(()=>{o&&r({type:"warning",message:a(o)})},[o,r,a]);const{data:M,isLoading:D,isError:F,error:P}=as(d,{refetchOnMountOrArgChange:!0,skip:!e});return W.useEffect(()=>{P&&r({type:"warning",message:a(P)})},[P,r,a]),{auditLogs:M,users:n?.users??[],isLoading:E||D,hasError:F||l}},z=({value:e,options:i,onChange:r}={value:void 0})=>{const{formatMessage:a}=(0,c.A)(),d=a({id:"Settings.permissions.auditLogs.filter.aria-label",defaultMessage:"Search and select an option to filter"});return(0,t.jsx)(K.G3,{"aria-label":d,value:e,onChange:r,children:i?.map(({label:n,customValue:o})=>(0,t.jsx)(H.j,{value:o,children:n},o))})},G=[{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"},value:"$eq"},{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"},value:"$ne"}],_s=({formatMessage:e,users:i,canReadUsers:r})=>{const a=[{name:"action",metadatas:{customOperators:G,label:e({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),customInput:z,options:Object.keys(V).map(d=>({label:e({id:`Settings.permissions.auditLogs.${d}`,defaultMessage:x(d)},{model:void 0}),customValue:d}))},fieldSchema:{type:"enumeration"}},{name:"date",metadatas:{label:e({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"})},fieldSchema:{type:"datetime"}}];if(r&&i){const d=n=>n.username?n.username:n.firstname&&n.lastname?e({id:"Settings.permissions.auditLogs.user.fullname",defaultMessage:"{firstname} {lastname}"},{firstname:n.firstname,lastname:n.lastname}):n.email;return[...a,{name:"user",metadatas:{customOperators:G,label:e({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),options:i.map(n=>({label:d(n),customValue:n.id.toString()})),customInput:z},fieldSchema:{type:"relation",mainField:{name:"id"}}}]}return a},ls=()=>{const{formatMessage:e}=(0,c.A)(),i=(0,f.j)(O=>O.admin_app.permissions.settings),{allowedActions:{canRead:r,canReadUsers:a},isLoading:d}=(0,_.ec)({...i?.auditLogs,readUsers:i?.users.read||[]}),[{query:n},o]=(0,_.sq)(),{auditLogs:l,users:E,isLoading:M,hasError:D}=rs({canReadAuditLogs:r,canReadUsers:a});(0,_.L4)();const F=_s({formatMessage:e,users:E,canReadUsers:a}),P=[{name:"action",key:"action",metadatas:{label:e({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),sortable:!0}},{name:"date",key:"date",metadatas:{label:e({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"}),sortable:!0}},{key:"user",name:"user",metadatas:{label:e({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),sortable:!1},cellFormatter:O=>O?O.displayName:""}];if(D)return(0,t.jsx)(J.P,{children:(0,t.jsx)(N.s,{children:(0,t.jsx)(L.a,{paddingTop:8,children:(0,t.jsx)(_.hH,{})})})});const Q=M||d;return(0,t.jsxs)(X.g,{"aria-busy":Q,children:[(0,t.jsx)(_.x7,{name:e({id:"global.auditLogs",defaultMessage:"Audit Logs"})}),(0,t.jsx)(Z.Q,{title:e({id:"global.auditLogs",defaultMessage:"Audit Logs"}),subtitle:e({id:"Settings.permissions.auditLogs.listview.header.subtitle",defaultMessage:"Logs of all the activities that happened in your environment"})}),(0,t.jsx)(b.B,{startActions:(0,t.jsx)(k.F,{displayedFilters:F})}),(0,t.jsxs)(N.s,{children:[(0,t.jsx)(_.Ee,{contentType:"Audit logs",headers:P,rows:l?.results||[],withBulkActions:!0,isLoading:Q,children:(0,t.jsx)(S,{headers:P,rows:l?.results||[],onOpenModal:O=>o({id:`${O}`})})}),l?.pagination&&(0,t.jsx)(ds,{pagination:l.pagination})]}),n?.id&&(0,t.jsx)(is,{handleClose:()=>o({id:null},"remove"),logId:n.id})]})},Es=()=>{const e=(0,f.j)(i=>i.admin_app.permissions.settings?.auditLogs?.main);return(0,t.jsx)(_.kz,{permissions:e,children:(0,t.jsx)(ls,{})})}}}]);
