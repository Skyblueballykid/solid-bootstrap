import{t as m,g as _,m as x,u as w,O as P,K as S,s as v,i,b as T,d as C,P as N,c as e}from"./vendor.c4e83590.js";import{C as o}from"./Card.59ccb8c1.js";import{O as j,a as y}from"./OverlayTrigger.95d06ed4.js";import{B as O}from"./Layout.321f2b74.js";import{G as A}from"./GithubSource.50cc8195.js";import"./Overlay.99737e50.js";import"./store.5f99833d.js";const B=m('<div role="tooltip"><div class="tooltip-arrow"></div><div></div></div>'),k={arrowProps:{},placement:"right"},D=l=>{const[t,g]=_(x(k,l),["bsPrefix","placement","className","style","children","arrowProps","popper","show"]),s=w(t.bsPrefix,"tooltip"),[n]=t.placement?.split("-")||[],c=P(j);return(()=>{const r=B.cloneNode(!0),h=r.firstChild,d=h.nextSibling;return S(r,"x-placement",n),v(r,g,!1,!0),v(r,()=>c?.wrapperProps,!1,!0),v(h,()=>c?.arrowProps,!1,!1),d.className=`${s}-inner`,i(d,()=>t.children),T(a=>{const p=C(t.className,s,"bs-tooltip-auto"),f=Object.assign({},t.style,c?.wrapperProps.style);return p!==a._v$&&(r.className=a._v$=p),a._v$2=N(r,f,a._v$2),a},{_v$:void 0,_v$2:void 0}),r})()};var $=D;const G=m("<p>Tight pants next level keffiyeh <!> haven't heard of them. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel <!> terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney's cleanse vegan chambray. A really ironic artisan <!>, scenester farm-to-table banksy Austin <!> freegan cred raw denim single-origin coffee viral.</p>"),H=m('<div class="row gy-4"><div><h2>Tooltips</h2><p class="lead">A tooltip component for a more stylish alternative to that anchor tag title attribute.</p></div><div></div></div>'),E=m('<a href="#"></a>'),J=()=>(()=>{const l=H.cloneNode(!0),t=l.firstChild,g=t.firstChild,s=t.nextSibling;return i(t,e(A,{name:"TooltipDocs"}),g),i(s,e(o,{get children(){return[e(o.Header,{children:"Examples"}),e(o.Body,{get children(){const n=G.cloneNode(!0),c=n.firstChild,r=c.nextSibling,h=r.nextSibling,d=h.nextSibling,a=d.nextSibling,p=a.nextSibling,f=p.nextSibling,b=f.nextSibling;return b.nextSibling,i(n,e(u,{title:"Default title",id:"t-1",children:"you probably"}),r),i(n,e(u,{id:"t-2",title:"Another one",children:"have a"}),d),i(n,e(u,{title:"Another one here too",id:"t-3",children:"whatever keytar"}),p),i(n,e(u,{title:"The last tip!",id:"t-4",children:"twitter handle"}),b),n}})]}}),null),i(s,e(o,{get children(){return[e(o.Header,{children:"OverlayTrigger (delayed hide)"}),e(o.Body,{get children(){return e(y,{placement:"right",delay:{show:250,hide:400},get overlay(){return e($,{id:"button-tooltip",children:"Simple tooltip"})},get children(){return e(O,{variant:"success",children:"Hover me to see"})}})}})]}}),null),l})(),u=l=>e(y,{get overlay(){return e($,{get id(){return l.id},get children(){return l.title}})},get children(){const t=E.cloneNode(!0);return i(t,()=>l.children),t}});export{J as TooltipDocs,J as default};