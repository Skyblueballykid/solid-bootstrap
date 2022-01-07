import{t as d,c as e,m as p,i as l,a2 as n}from"./vendor.16cab1e8.js";import{x as h,E as r}from"./Example.f7adee0f.js";import{G as m}from"./GithubSource.74c2eee9.js";import{H as u}from"./utils.ae03bcb5.js";const g=d(`<div class="mt-5"><h2>API</h2><h3>Figure</h3><code>import { Figure } from 'solid-bootstrap'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">as </td><td class="font-monospace"><div>elementType</div></td><td><code>&lt;figure&gt;</code></td><td><div><p>You can use a custom element type for this component.</p></div></td></tr><tr><td class="font-monospace">bsPrefix <sup class="text-danger">required</sup></td><td class="font-monospace"><div>string</div></td><td><code>'figure'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div><h3>FigureImage</h3><code>import { FigureImage } from 'solid-bootstrap'</code><h3 class="mt-5">FigureCaption</h3><code>import { FigureCaption } from 'solid-bootstrap'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">as </td><td class="font-monospace"><div>elementType</div></td><td><code>&lt;figcaption&gt;</code></td><td><div><p>You can use a custom element type for this component.</p></div></td></tr><tr><td class="font-monospace">bsPrefix <sup class="text-danger">required</sup></td><td class="font-monospace"><div>string</div></td><td><code>'figure-caption'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div></div>`),f=()=>g.cloneNode(!0),b=d('<p class="lead"></p>'),v=d('<div class="row gy-5 pt-3"></div>');function F(i={}){const{wrapper:o}=Object.assign({},h(),i.components);return o?e(o,p(i,{get children(){return e(c,{})}})):c();function c(){const t=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",span:"span"},h(),i.components);return r||a("Example",!1),r.Code||a("Example.Code",!0),r.Intro||a("Example.Intro",!0),r.Preview||a("Example.Preview",!0),n||a("Figure",!1),n.Caption||a("Figure.Caption",!0),n.Image||a("Figure.Image",!0),[e(m,{name:"FigureDocs.mdx"}),`
`,e(t.h1,{children:"Figures"}),`
`,(()=>{const s=b.cloneNode(!0);return l(s,e(t.p,{get children(){return[`Anytime you need to display a piece of content, like an image with an\r
optional caption, consider using a `,e(t.code,{children:"Figure"}),"."]}})),s})(),`
`,(()=>{const s=v.cloneNode(!0);return l(s,e(u,{}),null),l(s,e(r,{title:"Figure",get children(){return[e(r.Intro,{get children(){return e(t.p,{children:"Displaying related images and text with the Figure component."})}}),e(r.Preview,{get children(){return e(n,{get children(){return[e(n.Image,{width:171,height:180,alt:"171x180",src:"holder.js/171x180"}),e(n.Caption,{get children(){return e(t.p,{children:"Nulla vitae elit libero, a pharetra augue mollis interdum."})}})]}})}}),e(r.Code,{get children(){return e(t.pre,{get children(){return e(t.code,{className:"hljs language-js",get children(){return["<",e(t.span,{className:"hljs-title hljs-class",children:"Figure"}),`>\r
  `,e(t.span,{className:"xml",get children(){return e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Figure.Image"}),`\r
    `,e(t.span,{className:"hljs-attr",children:"width"}),"=",e(t.span,{className:"hljs-string",children:"{171}"}),`\r
    `,e(t.span,{className:"hljs-attr",children:"height"}),"=",e(t.span,{className:"hljs-string",children:"{180}"}),`\r
    `,e(t.span,{className:"hljs-attr",children:"alt"}),"=",e(t.span,{className:"hljs-string",children:'"171x180"'}),`\r
    `,e(t.span,{className:"hljs-attr",children:"src"}),"=",e(t.span,{className:"hljs-string",children:'"holder.js/171x180"'}),`\r
  />`]}})}}),`\r
  `,e(t.span,{className:"xml",get children(){return[e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Figure.Caption"}),">"]}}),`\r
    Nulla vitae elit libero, a pharetra augue mollis interdum.\r
  `,e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Figure.Caption"}),">"]}})]}}),`\r
</`,e(t.span,{className:"hljs-title hljs-class",children:"Figure"}),`>
`]}})}})}})]}}),null),l(s,e(f,{}),null),s})()]}}function a(i,o){throw new Error("Expected "+(o?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{F as default};