import{Z as k,h as y,m as h,ae as P,k as v,c as w,F as M,A as T,a6 as R,ab as $}from"./vendor.bb4e937c.js";import{O as j}from"./Overlay.bc71386a.js";const F=k();var N=F;const A={transition:P,rootClose:!1,show:!1,placement:"top",popperConfig:{}},H=r=>{const[t,u]=y(h(A,r),["children","transition","popperConfig","ref"]),a=t.transition===!0?P:t.transition||void 0,[s,o]=v(),[i,l]=v(),[f,n]=v(),c={get wrapperProps(){return s()?.()},get arrowProps(){return i()?.()},get metadata(){return f()?.()}};return w(N.Provider,{value:c,get children(){return w(j,h(u,{get popperConfig(){return t.popperConfig},transition:a,children:(g,p,m)=>{M(()=>{o(()=>g),l(()=>p),n(()=>m)});let d=T(()=>t.children)();for(;typeof d=="function";)d=d();return d}}))}})};var z=H;function B(r){return r&&typeof r=="object"?r:{show:r,hide:r}}function x(r,t,u){const[a]=t,s=a.currentTarget,o=a.relatedTarget;(!o||o!==s)&&!$(s,o)&&r(...t)}const D={defaultShow:!1,trigger:["hover","focus"],popperConfig:{}};function G(r){const[t,u]=y(h(D,{flip:r.placement&&r.placement.indexOf("auto")!==-1},r),["trigger","overlay","children","popperConfig","show","defaultShow","onToggle","delay","placement","flip"]);let[a,s]=v();const o=e=>{s(e),t.children.ref?.(e)};let i,l="";const[f,n]=R(()=>t.show,()=>t.defaultShow,t.onToggle),c=B(t.delay),g=()=>{if(window.clearTimeout(i),l="show",!c.show){n(!0);return}i=window.setTimeout(()=>{l==="show"&&n(!0)},c.show)},p=()=>{if(window.clearTimeout(i),l="hide",!c.hide){n(!1);return}i=window.setTimeout(()=>{l==="hide"&&n(!1)},c.hide)},m=(...e)=>{g()},O=(...e)=>{p()},d=(...e)=>{n(!f())},b=(...e)=>{x(g,e)},S=(...e)=>{x(p,e)},L=e=>{const C=t.trigger==null?[]:[].concat(t.trigger);C.indexOf("click")!==-1&&e.addEventListener("click",d),C.indexOf("focus")!==-1&&(e.addEventListener("focus",m),e.addEventListener("blur",O)),C.indexOf("hover")!==-1&&(e.addEventListener("mouseover",b),e.addEventListener("mouseout",S))};let E=T(()=>t.children);return[w(()=>{let e=E();for(;typeof e=="function";)e=e();return o(e),L(e),e},{}),w(z,h(u,{get show(){return f()},onHide:p,get flip(){return t.flip},get placement(){return t.placement},get popperConfig(){return t.popperConfig},target:a,get children(){return t.overlay}}))]}export{N as O,G as a};