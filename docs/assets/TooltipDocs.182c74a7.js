import{t as h,s as _,m as x,u as w,G as P,i as g,v as i,w as S,b as C,X as T,a as e}from"./vendor.e0c45427.js";import{C as o}from"./Card.15a13ebb.js";import{u as j}from"./index.9731a100.js";import{O as N,a as y}from"./OverlayTrigger.55d19010.js";import{B as O}from"./Layout.a6d7eb3b.js";import{G as A}from"./GithubSource.928bc2dd.js";import"./Overlay.569d4118.js";import"./store.b4ef7dcb.js";const B=h('<div role="tooltip"><div class="tooltip-arrow"></div><div></div></div>'),k={arrowProps:{},placement:"right"},$=l=>{const[t,b]=_(x(k,l),["bsPrefix","placement","className","style","children","arrowProps","popper","show"]),s=j(t.bsPrefix,"tooltip"),[a]=t.placement?.split("-")||[],d=w(N);return(()=>{const r=B.cloneNode(!0),m=r.firstChild,c=m.nextSibling;return P(r,"x-placement",a),g(r,b,!1,!0),g(r,()=>d?.wrapperProps,!1,!0),g(m,()=>d?.arrowProps,!1,!1),c.className=`${s}-inner`,i(c,()=>t.children),S(n=>{const p=C(t.className,s,"bs-tooltip-auto"),f=Object.assign({},t.style,d?.wrapperProps.style);return p!==n._v$&&(r.className=n._v$=p),n._v$2=T(r,f,n._v$2),n},{_v$:void 0,_v$2:void 0}),r})()},G=h("<p>Tight pants next level keffiyeh <!> haven't heard of them. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel <!> terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney's cleanse vegan chambray. A really ironic artisan <!>, scenester farm-to-table banksy Austin <!> freegan cred raw denim single-origin coffee viral.</p>"),D=h('<div class="row gy-4"><div><h3>Tooltips</h3><p class="lead">A tooltip component for a more stylish alternative to that anchor tag title attribute.</p></div><div></div></div>'),H=h('<a href="#"></a>'),J=()=>(()=>{const l=D.cloneNode(!0),t=l.firstChild,b=t.firstChild,s=t.nextSibling;return i(t,e(A,{name:"TooltipDocs"}),b),i(s,e(o,{get children(){return[e(o.Header,{children:"Examples"}),e(o.Body,{get children(){const a=G.cloneNode(!0),d=a.firstChild,r=d.nextSibling,m=r.nextSibling,c=m.nextSibling,n=c.nextSibling,p=n.nextSibling,f=p.nextSibling,v=f.nextSibling;return v.nextSibling,i(a,e(u,{title:"Default title",id:"t-1",children:"you probably"}),r),i(a,e(u,{id:"t-2",title:"Another one",children:"have a"}),c),i(a,e(u,{title:"Another one here too",id:"t-3",children:"whatever keytar"}),p),i(a,e(u,{title:"The last tip!",id:"t-4",children:"twitter handle"}),v),a}})]}}),null),i(s,e(o,{get children(){return[e(o.Header,{children:"OverlayTrigger (delayed hide)"}),e(o.Body,{get children(){return e(y,{placement:"right",delay:{show:250,hide:400},get overlay(){return e($,{id:"button-tooltip",children:"Simple tooltip"})},get children(){return e(O,{variant:"success",children:"Hover me to see"})}})}})]}}),null),l})(),u=l=>e(y,{get overlay(){return e($,{get id(){return l.id},get children(){return l.title}})},get children(){const t=H.cloneNode(!0);return i(t,()=>l.children),t}});export{J as TooltipDocs,J as default};