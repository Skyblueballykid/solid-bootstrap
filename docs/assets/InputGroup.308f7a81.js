import{a3 as c,c as e,m as s,g as u,u as m,D as l,d as x}from"./vendor.c00eff94.js";import{a as n}from"./FormControl.38aeebc0.js";import{I as d}from"./InputGroupContext.46a09259.js";const r=c("input-group-text",{Component:"span"}),f=o=>e(r,{get children(){return e(n,s({type:"checkbox"},o))}}),h=o=>e(r,{get children(){return e(n,s({type:"radio"},o))}}),g={as:"div"},I=o=>{const[t,p]=u(s(g,o),["as","bsPrefix","size","hasValidation","className"]),a=m(t.bsPrefix,"input-group"),i={};return e(d.Provider,{value:i,get children(){return e(l,s({get component(){return t.as}},p,{get className(){return x(t.className,a,t.size&&`${a}-${t.size}`,t.hasValidation&&"has-validation")}}))}})};var G=Object.assign(I,{Text:r,Radio:h,Checkbox:f});export{G as I};