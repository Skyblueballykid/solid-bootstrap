import{g as d,m as t,u as i,c as n,d as l,D as m,a1 as u,a2 as p,a3 as a,w as b}from"./vendor.c00eff94.js";const x={as:"img"},C=s=>{const[e,o]=d(t(x,s),["as","bsPrefix","className","variant"]),r=i(e.bsPrefix,"card-img");return n(m,t({get component(){return e.as},get className(){return l(e.variant?`${r}-${e.variant}`:r,e.className)}},o))};var f=C;const v={as:"div"},P=s=>{const[e,o]=d(t(v,s),["as","bsPrefix","className"]),r=i(e.bsPrefix,"card-header"),c={get cardHeaderBsPrefix(){return r}};return n(u.Provider,{value:c,get children(){return n(m,t({get component(){return e.as}},o,{get className(){return l(e.className,r)}}))}})};var y=P;const h=p("h5"),N=p("h6"),g=a("card-body"),$=a("card-title",{Component:h}),H=a("card-subtitle",{Component:N}),B=a("card-link",{Component:"a"}),I=a("card-text",{Component:"p"}),D=a("card-footer"),S=a("card-img-overlay"),T={as:"div",body:!1},k=s=>{const[e,o]=d(t(T,s),["as","bsPrefix","className","bg","text","border","body","children"]),r=i(e.bsPrefix,"card");return n(m,t({get component(){return e.as}},o,{get className(){return l(e.className,r,e.bg&&`bg-${e.bg}`,e.text&&`text-${e.text}`,e.border&&`border-${e.border}`)},get children(){const c=b(()=>!!e.body,!0);return()=>c()?n(g,{get children(){return e.children}}):e.children}}))};var j=Object.assign(k,{Img:f,Title:$,Subtitle:H,Body:g,Link:B,Text:I,Header:y,Footer:D,ImgOverlay:S});export{j as C};