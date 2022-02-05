import{t as h,c as e,m as U,i as a,F as l,B as F}from"./vendor.7bd60469.js";import{x}from"./index.eef2e268.js";import{E as n}from"./Example.fb60cff4.js";import{G as X}from"./GithubSource.027acbf3.js";import"./BadgeApi.fd796b6e.js";const Y=h('<p class="lead"></p>'),y=h("<option>Disabled select</option>"),q=h("<fieldset disabled></fieldset>"),J=h('<div class="row gy-5 pt-3"><div></div><div></div></div>'),K=h(`<table class="bg-white mb-5 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>ref </td><td><div></div></td><td></td><td><div><p>The Form <code>ref</code> will be forwarded to the underlying element, which means, unless it's rendered <code>as</code> a composite component, it will be a DOM node, when resolved.</p></div></td></tr>
<tr><td>as </td><td><div>elementType</div></td><td><code></code></td><td><div><p>You can use a custom element type for this component.</p></div></td></tr>
<tr><td>validated </td><td><div>boolean</div></td><td></td><td><div><p>Mark a form as having been validated. Setting it to <code>true</code> will toggle any validation styles on the forms elements.</p></div></td></tr></tbody></table>`),Q=h(`<table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>ref </td><td><div></div></td><td></td><td><div><p>The FormLabel <code>ref</code> will be forwarded to the underlying element. Unless the FormLabel is rendered <code>as</code> a composite component, it will be a DOM node, when resolved.</p></div></td></tr>
<tr><td>as </td><td><div>elementType</div></td><td><code></code></td><td><div><p>Set a custom element for this component</p></div></td></tr>
<tr><td>column </td><td><div>boolean | <span><code>'sm'</code><span> | </span><code>'lg'</code></span></div></td><td><code>false</code></td><td><div><p>Renders the FormLabel as a <code></code> component (accepting all the same props), as well as adding additional styling for horizontal forms.</p></div></td></tr>
<tr><td>htmlFor </td><td><div>string</div></td><td></td><td><div><p>Uses <code>controlId</code> from <code></code> if not explicitly specified.</p></div></td></tr>
<tr><td>visuallyHidden </td><td><div>boolean</div></td><td><code>false</code></td><td><div><p>Hides the label visually while still allowing it to be read by assistive technologies.</p></div></td></tr>
<tr><td>bsPrefix </td><td><div>string</div></td><td><code>'form-label'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table>`);function ae(o={}){const{wrapper:m}=Object.assign({},x(),o.components);return m?e(m,U(o,{get children(){return e(f,{})}})):f();function f(){const s=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",span:"span",h2:"h2",h3:"h3"},x(),o.components);return n||t("Example",!1),n.Code||t("Example.Code",!0),n.Intro||t("Example.Intro",!0),n.Preview||t("Example.Preview",!0),l||t("Form",!1),l.Check||t("Form.Check",!0),l.Control||t("Form.Control",!0),l.Group||t("Form.Group",!0),l.Label||t("Form.Label",!0),l.Select||t("Form.Select",!0),l.Text||t("Form.Text",!0),[e(X,{name:"FormOverviewDocs.mdx"}),`
`,e(s.h1,{children:"Forms"}),`
`,(()=>{const r=Y.cloneNode(!0);return a(r,e(s.p,{children:`Examples and usage guidelines for form control styles, layout options, and\r
custom components for creating a wide variety of forms.`})),r})(),`
`,(()=>{const r=J.cloneNode(!0),c=r.firstChild,d=c.nextSibling;return a(r,e(n,{title:"Overview",get children(){return[e(n.Intro,{get children(){return e(s.p,{get children(){return["The ",e(s.code,{children:"<FormControl>"}),` component renders a form control with Bootstrap styling.\r
The `,e(s.code,{children:"<FormGroup>"}),` component wraps a form control with proper spacing, along\r
with support for a label, help text, and validation state. To ensure\r
accessibility, set `,e(s.code,{children:"controlId"})," on ",e(s.code,{children:"<FormGroup>"}),", and use ",e(s.code,{children:"<FormLabel>"}),` for\r
the label.`]}})}}),e(n.Preview,{get children(){return e(l,{get children(){return[e(l.Group,{className:"mb-3",controlId:"formBasicEmail",get children(){return[e(l.Label,{children:"Email address"}),e(l.Control,{type:"email",placeholder:"Enter email"}),e(l.Text,{className:"text-muted",get children(){return e(s.p,{children:"We'll never share your email with anyone else."})}})]}}),e(l.Group,{className:"mb-3",controlId:"formBasicPassword",get children(){return[e(l.Label,{children:"Password"}),e(l.Control,{type:"password",placeholder:"Password"})]}}),e(l.Group,{className:"mb-3",controlId:"formBasicCheckbox",get children(){return e(l.Check,{type:"checkbox",label:"Check me out"})}}),e(F,{variant:"primary",type:"submit",children:"Submit"})]}})}}),e(n.Code,{get children(){return e(s.pre,{get children(){return e(s.code,{className:"hljs language-js",get children(){return["<",e(s.span,{className:"hljs-title hljs-class",children:"Form"}),`>\r
  `,e(s.span,{className:"xml",get children(){return[e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Form.Group"})," ",e(s.span,{className:"hljs-attr",children:"className"}),"=",e(s.span,{className:"hljs-string",children:'"mb-3"'})," ",e(s.span,{className:"hljs-attr",children:"controlId"}),"=",e(s.span,{className:"hljs-string",children:'"formBasicEmail"'}),">"]}}),`\r
    `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Form.Label"}),">"]}}),"Email address",e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Form.Label"}),">"]}}),`\r
    `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Form.Control"})," ",e(s.span,{className:"hljs-attr",children:"type"}),"=",e(s.span,{className:"hljs-string",children:'"email"'})," ",e(s.span,{className:"hljs-attr",children:"placeholder"}),"=",e(s.span,{className:"hljs-string",children:'"Enter email"'})," />"]}}),`\r
    `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Form.Text"})," ",e(s.span,{className:"hljs-attr",children:"className"}),"=",e(s.span,{className:"hljs-string",children:'"text-muted"'}),">"]}}),`\r
      We'll never share your email with anyone else.\r
    `,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Form.Text"}),">"]}}),`\r
  `,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Form.Group"}),">"]}})]}}),`\r
\r
  `,e(s.span,{className:"xml",get children(){return[e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Form.Group"})," ",e(s.span,{className:"hljs-attr",children:"className"}),"=",e(s.span,{className:"hljs-string",children:'"mb-3"'})," ",e(s.span,{className:"hljs-attr",children:"controlId"}),"=",e(s.span,{className:"hljs-string",children:'"formBasicPassword"'}),">"]}}),`\r
    `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Form.Label"}),">"]}}),"Password",e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Form.Label"}),">"]}}),`\r
    `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Form.Control"})," ",e(s.span,{className:"hljs-attr",children:"type"}),"=",e(s.span,{className:"hljs-string",children:'"password"'})," ",e(s.span,{className:"hljs-attr",children:"placeholder"}),"=",e(s.span,{className:"hljs-string",children:'"Password"'})," />"]}}),`\r
  `,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Form.Group"}),">"]}})]}}),`\r
\r
  `,e(s.span,{className:"xml",get children(){return[e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Form.Group"})," ",e(s.span,{className:"hljs-attr",children:"className"}),"=",e(s.span,{className:"hljs-string",children:'"mb-3"'})," ",e(s.span,{className:"hljs-attr",children:"controlId"}),"=",e(s.span,{className:"hljs-string",children:'"formBasicCheckbox"'}),">"]}}),`\r
    `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Form.Check"})," ",e(s.span,{className:"hljs-attr",children:"type"}),"=",e(s.span,{className:"hljs-string",children:'"checkbox"'})," ",e(s.span,{className:"hljs-attr",children:"label"}),"=",e(s.span,{className:"hljs-string",children:'"Check me out"'})," />"]}}),`\r
  `,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Form.Group"}),">"]}})]}}),`\r
\r
  `,e(s.span,{className:"xml",get children(){return[e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Button"})," ",e(s.span,{className:"hljs-attr",children:"variant"}),"=",e(s.span,{className:"hljs-string",children:'"primary"'})," ",e(s.span,{className:"hljs-attr",children:"type"}),"=",e(s.span,{className:"hljs-string",children:'"submit"'}),">"]}}),"Submit",e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Button"}),">"]}})]}}),`\r
</`,e(s.span,{className:"hljs-title hljs-class",children:"Form"}),`>
`]}})}})}})]}}),c),a(c,e(s.p,{get children(){return["The ",e(s.code,{children:"<FormControl>"})," component directly renders the ",e(s.code,{children:"<input>"}),` or other specified\r
component. If you need to access the value of an uncontrolled `,e(s.code,{children:"<FormControl>"}),`,\r
attach a `,e(s.code,{children:"ref"}),` to it as you would with an uncontrolled input. You can then interact with that\r
node as you would with any other uncontrolled input.`]}}),null),a(c,e(s.p,{children:`If your application contains a large number of form groups, we recommend\r
building a higher-level component encapsulating a complete field group\r
that renders the label, the control, and any other necessary components.\r
We don't provide this out-of-the-box, because the composition of those\r
field groups is too specific to an individual application to admit a\r
good one-size-fits-all solution.`}),null),a(r,e(n,{title:"Disabled fields",get children(){return[e(n.Intro,{get children(){return e(s.p,{get children(){return["Add the ",e(s.code,{children:"disabled"})," boolean attribute on an input to prevent user interactions and make it appear lighter."]}})}}),e(n.Preview,{get children(){return[e(l.Group,{className:"mb-3",get children(){return[e(l.Label,{children:"Disabled input"}),e(l.Control,{placeholder:"Disabled input",disabled:!0})]}}),e(l.Group,{className:"mb-3",get children(){return[e(l.Label,{children:"Disabled select menu"}),e(l.Select,{disabled:!0,get children(){return y.cloneNode(!0)}})]}}),e(l.Group,{className:"mb-3",get children(){return e(l.Check,{type:"checkbox",label:"Can't check this",disabled:!0})}})]}}),e(n.Code,{get children(){return e(s.pre,{get children(){return e(s.code,{className:"hljs language-js",get children(){return["<",e(s.span,{className:"hljs-title hljs-class",children:"Form"}),".",e(s.span,{className:"hljs-property",children:"Group"})," className=",e(s.span,{className:"hljs-string",children:'"mb-3"'}),`>\r
  `,e(s.span,{className:"xml",get children(){return[e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Form.Label"}),">"]}}),"Disabled input",e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Form.Label"}),">"]}})]}}),`\r
  `,e(s.span,{className:"xml",get children(){return e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Form.Control"})," ",e(s.span,{className:"hljs-attr",children:"placeholder"}),"=",e(s.span,{className:"hljs-string",children:'"Disabled input"'})," ",e(s.span,{className:"hljs-attr",children:"disabled"})," />"]}})}}),`\r
</`,e(s.span,{className:"hljs-title hljs-class",children:"Form"}),".",e(s.span,{className:"hljs-property",children:"Group"}),`>\r
\r
`,e(s.span,{className:"xml",get children(){return[e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Form.Group"})," ",e(s.span,{className:"hljs-attr",children:"className"}),"=",e(s.span,{className:"hljs-string",children:'"mb-3"'}),">"]}}),`\r
  `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Form.Label"}),">"]}}),"Disabled select menu",e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Form.Label"}),">"]}}),`\r
  `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Form.Select"})," ",e(s.span,{className:"hljs-attr",children:"disabled"}),">"]}}),`\r
    `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"option"}),">"]}}),"Disabled select",e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"option"}),">"]}}),`\r
  `,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Form.Select"}),">"]}}),`\r
`,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Form.Group"}),">"]}})]}}),`\r
\r
`,e(s.span,{className:"xml",get children(){return[e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Form.Group"})," ",e(s.span,{className:"hljs-attr",children:"className"}),"=",e(s.span,{className:"hljs-string",children:'"mb-3"'}),">"]}}),`\r
  `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Form.Check"})," ",e(s.span,{className:"hljs-attr",children:"type"}),"=",e(s.span,{className:"hljs-string",children:'"checkbox"'})," ",e(s.span,{className:"hljs-attr",children:"label"}),"=",e(s.span,{className:"hljs-string",children:`"Can't check this"`})," ",e(s.span,{className:"hljs-attr",children:"disabled"})," />"]}}),`\r
`,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Form.Group"}),">"]}})]}}),`
`]}})}})}})]}}),d),a(r,e(n,{title:"Disabled fieldsets",get children(){return[e(n.Intro,{get children(){return e(s.p,{get children(){return["Add the ",e(s.code,{children:"disabled"})," attribute to a ",e(s.code,{children:"<fieldset>"})," to disable all the controls within."]}})}}),e(n.Preview,{get children(){return e(l,{get children(){const i=q.cloneNode(!0);return a(i,e(l.Group,{className:"mb-3",get children(){return[e(l.Label,{htmlFor:"disabledTextInput",children:"Disabled input"}),e(l.Control,{id:"disabledTextInput",placeholder:"Disabled input"})]}}),null),a(i,e(l.Group,{className:"mb-3",get children(){return[e(l.Label,{htmlFor:"disabledSelect",children:"Disabled select menu"}),e(l.Select,{id:"disabledSelect",get children(){return y.cloneNode(!0)}})]}}),null),a(i,e(l.Group,{className:"mb-3",get children(){return e(l.Check,{type:"checkbox",id:"disabledFieldsetCheck",label:"Can't check this"})}}),null),a(i,e(F,{type:"submit",children:"Submit"}),null),i}})}}),e(n.Code,{get children(){return e(s.pre,{get children(){return e(s.code,{className:"hljs language-js",get children(){return["<",e(s.span,{className:"hljs-title hljs-class",children:"Form"}),`>\r
  `,e(s.span,{className:"xml",get children(){return[e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"fieldset"})," ",e(s.span,{className:"hljs-attr",children:"disabled"}),">"]}}),`\r
    `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Form.Group"})," ",e(s.span,{className:"hljs-attr",children:"className"}),"=",e(s.span,{className:"hljs-string",children:'"mb-3"'}),">"]}}),`\r
      `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Form.Label"})," ",e(s.span,{className:"hljs-attr",children:"htmlFor"}),"=",e(s.span,{className:"hljs-string",children:'"disabledTextInput"'}),">"]}}),"Disabled input",e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Form.Label"}),">"]}}),`\r
      `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Form.Control"})," ",e(s.span,{className:"hljs-attr",children:"id"}),"=",e(s.span,{className:"hljs-string",children:'"disabledTextInput"'})," ",e(s.span,{className:"hljs-attr",children:"placeholder"}),"=",e(s.span,{className:"hljs-string",children:'"Disabled input"'})," />"]}}),`\r
    `,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Form.Group"}),">"]}}),`\r
\r
    `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Form.Group"})," ",e(s.span,{className:"hljs-attr",children:"className"}),"=",e(s.span,{className:"hljs-string",children:'"mb-3"'}),">"]}}),`\r
      `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Form.Label"})," ",e(s.span,{className:"hljs-attr",children:"htmlFor"}),"=",e(s.span,{className:"hljs-string",children:'"disabledSelect"'}),">"]}}),"Disabled select menu",e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Form.Label"}),">"]}}),`\r
      `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Form.Select"})," ",e(s.span,{className:"hljs-attr",children:"id"}),"=",e(s.span,{className:"hljs-string",children:'"disabledSelect"'}),">"]}}),`\r
        `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"option"}),">"]}}),"Disabled select",e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"option"}),">"]}}),`\r
      `,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Form.Select"}),">"]}}),`\r
    `,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Form.Group"}),">"]}}),`\r
\r
    `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Form.Group"})," ",e(s.span,{className:"hljs-attr",children:"className"}),"=",e(s.span,{className:"hljs-string",children:'"mb-3"'}),">"]}}),`\r
      `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Form.Check"}),`\r
        `,e(s.span,{className:"hljs-attr",children:"type"}),"=",e(s.span,{className:"hljs-string",children:'"checkbox"'}),`\r
        `,e(s.span,{className:"hljs-attr",children:"id"}),"=",e(s.span,{className:"hljs-string",children:'"disabledFieldsetCheck"'}),`\r
        `,e(s.span,{className:"hljs-attr",children:"label"}),"=",e(s.span,{className:"hljs-string",children:`"Can't check this"`}),`\r
      />`]}}),`\r
    `,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Form.Group"}),">"]}}),`\r
\r
    `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Button"})," ",e(s.span,{className:"hljs-attr",children:"type"}),"=",e(s.span,{className:"hljs-string",children:'"submit"'}),">"]}}),"Submit",e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Button"}),">"]}}),`\r
  `,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"fieldset"}),">"]}})]}}),`\r
</`,e(s.span,{className:"hljs-title hljs-class",children:"Form"}),`>
`]}})}})}})]}}),d),a(d,e(s.p,{get children(){return["Browsers treat all native form controls (",e(s.code,{children:"<input>"}),", ",e(s.code,{children:"<select>"})," and ",e(s.code,{children:"<button>"}),` elements)\r
inside `,e(s.code,{children:"<fieldset disabled>"}),` as disabled, preventing both keyboard and mouse interactions\r
on them.`]}}),null),a(d,e(s.p,{get children(){return[`However, if your form also includes custom button-like elements such as\r
`,e(s.code,{children:'<a ... class="btn btn-*">'}),", these will only be given a style of ",e(s.code,{children:"pointer-events: none"}),`,\r
meaning they are still focusable and operable using the keyboard. In this case, you must\r
manually modify these controls by adding `,e(s.code,{children:'tabindex="-1"'}),` to prevent them from receiving\r
focus and `,e(s.code,{children:'aria-disabled="disabled"'})," to signal their state to assistive technologies."]}}),null),r})(),`
`,e(s.h2,{children:"Api"}),`
`,e(s.h3,{children:"Form"}),`
`,e(s.p,{get children(){return e(s.code,{children:`import { Form } from "solid-bootstrap"'`})}}),`
`,(()=>{const r=K.cloneNode(!0),c=r.firstChild,d=c.nextSibling,i=d.firstChild,u=i.nextSibling,p=u.nextSibling,g=p.firstChild,N=g.nextSibling,b=N.nextSibling,j=b.firstChild;return a(j,e(s.code,{children:"<form>"})),r})(),`
`,e(s.h3,{children:"Form.Label"}),`
`,e(s.p,{get children(){return e(s.code,{children:`import { Form } from "solid-bootstrap"'`})}}),`
`,(()=>{const r=Q.cloneNode(!0),c=r.firstChild,d=c.nextSibling,i=d.firstChild,u=i.nextSibling,p=u.nextSibling,g=p.firstChild,N=g.nextSibling,b=N.nextSibling,j=b.firstChild,C=p.nextSibling,v=C.nextSibling,_=v.firstChild,w=_.nextSibling,$=w.nextSibling,S=$.nextSibling,G=S.firstChild,k=G.firstChild,D=k.firstChild,L=D.nextSibling,I=v.nextSibling,T=I.nextSibling,E=T.firstChild,B=E.nextSibling,P=B.nextSibling,M=P.nextSibling,O=M.firstChild,A=O.firstChild,z=A.firstChild,H=z.nextSibling,W=H.nextSibling,R=W.nextSibling;return a(j,e(s.code,{children:"<label>"})),a(L,e(s.code,{children:"<Col>"})),a(R,e(s.code,{children:"<FormGroup>"})),r})()]}}function t(o,m){throw new Error("Expected "+(m?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{ae as default};