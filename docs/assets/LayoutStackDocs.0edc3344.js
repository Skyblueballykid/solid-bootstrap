import{h as b,m as v,u as y,c as e,e as N,D as S,t as i,i as n}from"./vendor.bb4e937c.js";import{C as t}from"./Card.de91c7f9.js";import{B as s}from"./Layout.75ee1a88.js";import{F as $}from"./Form.03006818.js";/* empty css               */import{G as x}from"./GithubSource.9ff4fec4.js";import"./FormControl.3722dd2e.js";const k=["xxl","xl","lg","md","sm","xs"];function C(d){const r=[];return Object.entries(d).forEach(([a,o])=>{o!=null&&(typeof o=="object"?k.forEach(u=>{const g=o[u];if(g!=null){const f=u!=="xs"?`-${u}`:"";r.push(`${a}${f}-${g}`)}}):r.push(`${a}-${o}`))}),r}const _={as:"div"},z=d=>{const[r,a]=b(v(_,d),["as","bsPrefix","className","direction","gap"]),o=y(r.bsPrefix,r.direction==="horizontal"?"hstack":"vstack");return e(S,v({get component(){return r.as}},a,{get className(){return N(r.className,o,...C({gap:r.gap}))},get children(){return a.children}}))};var c=z;const B=i(`<div class="mt-5"><h2>API</h2><h3>Stack</h3><code>import Stack from 'solid-bootstrap/Stack'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">gap </td><td class="font-monospace"><div>responsivePropType(PropTypes.number)</div></td><td></td><td><div><p>Sets the spacing between each item. Valid values are <code>0-5</code>.</p></div></td></tr><tr><td class="font-monospace">bsPrefix </td><td class="font-monospace"><div>string</div></td><td><code>'hstack | vstack'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix.<strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p><p>Defaults to <code>hstack</code> if direction is <code>horizontal</code> or <code>vstack</code> if direction is <code>vertical</code>.</p></div></td></tr></tbody></table></div></div>`),j=()=>B.cloneNode(!0),l=i('<div class="bg-light border">First item</div>'),p=i('<div class="bg-light border">Second item</div>'),h=i('<div class="bg-light border">Third item</div>'),H=i('<div class="bg-light border ms-auto">Second item</div>'),m=i('<div class="vr"></div>'),P=i('<div class="row gy-4"><div><h2>Stacks</h2><p class="lead">Shorthand helpers that build on top of our flexbox utilities to make component layout faster and easier than ever</p></div><div class="show-grid"></div></div>'),A=()=>(()=>{const d=P.cloneNode(!0),r=d.firstChild,a=r.firstChild,o=r.nextSibling;return n(r,e(x,{name:"LayoutStackDocs"}),a),n(o,e(t,{get children(){return[e(t.Header,{children:"Vertical"}),e(t.Body,{get children(){return e(c,{gap:3,get children(){return[l.cloneNode(!0),p.cloneNode(!0),h.cloneNode(!0)]}})}})]}}),null),n(o,e(t,{get children(){return[e(t.Header,{children:"Horizontal"}),e(t.Body,{get children(){return e(c,{direction:"horizontal",gap:3,get children(){return[l.cloneNode(!0),p.cloneNode(!0),h.cloneNode(!0)]}})}})]}}),null),n(o,e(t,{get children(){return[e(t.Header,{children:"Horizontal .ms-auto"}),e(t.Body,{get children(){return e(c,{direction:"horizontal",gap:3,get children(){return[l.cloneNode(!0),H.cloneNode(!0),h.cloneNode(!0)]}})}})]}}),null),n(o,e(t,{get children(){return[e(t.Header,{children:"Horizontal with vertical rules"}),e(t.Body,{get children(){return e(c,{direction:"horizontal",gap:3,get children(){return[l.cloneNode(!0),m.cloneNode(!0),p.cloneNode(!0),m.cloneNode(!0),h.cloneNode(!0)]}})}})]}}),null),n(o,e(t,{get children(){return[e(t.Header,{children:"Stack Buttons"}),e(t.Body,{get children(){return e(c,{gap:2,className:"col-md-5 mx-auto",get children(){return[e(s,{variant:"secondary",children:"Save changes"}),e(s,{variant:"outline-secondary",children:"Cancel"})]}})}})]}}),null),n(o,e(t,{get children(){return[e(t.Header,{children:"Inline form"}),e(t.Body,{get children(){return e(c,{direction:"horizontal",gap:3,get children(){return[e($.Control,{className:"me-auto",placeholder:"Add your item here..."}),e(s,{variant:"secondary",children:"Submit"}),m.cloneNode(!0),e(s,{variant:"outline-danger",children:"Reset"})]}})}})]}}),null),n(d,e(j,{}),null),d})();export{A as LayoutStackDocs,A as default};