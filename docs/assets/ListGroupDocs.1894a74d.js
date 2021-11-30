import{t as u,i,c as e}from"./vendor.c00eff94.js";import{B as c}from"./Badge.4b01c662.js";import{C as t}from"./Card.e559dbf2.js";import{T as l}from"./Tab.1359fcd3.js";import{R as I,C as h}from"./Layout.8f115a67.js";import{L as r}from"./ListGroup.ee79911a.js";import{G as b}from"./GithubSource.3f40a295.js";import"./Tabs.1d92c382.js";import"./ssr.9c861c6c.js";const a=u('<div class="ms-2 me-auto"><div class="fw-bold">Subheading</div>Cras justo odio</div>'),p=u('<div class="row gy-4"><div><h2>List groups</h2></div><div></div></div>'),G=()=>{function m(){alert("You clicked the third ListGroupItem")}return(()=>{const s=p.cloneNode(!0),d=s.firstChild,g=d.firstChild,n=d.nextSibling;return i(d,e(b,{name:"ListGroupDocs"}),g),i(n,e(t,{get children(){return[e(t.Header,{children:"Basic Example"}),e(t.Body,{get children(){return e(r,{get children(){return[e(r.Item,{children:"Cras justo odio"}),e(r.Item,{children:"Dapibus ac facilisis in"}),e(r.Item,{children:"Morbi leo risus"}),e(r.Item,{children:"Porta ac consectetur ac"}),e(r.Item,{children:"Vestibulum at eros"})]}})}})]}}),null),i(n,e(t,{get children(){return[e(t.Header,{children:"Active items"}),e(t.Body,{get children(){return e(r,{as:"ul",get children(){return[e(r.Item,{as:"li",active:!0,children:"Cras justo odio"}),e(r.Item,{as:"li",children:"Dapibus ac facilisis in"}),e(r.Item,{as:"li",disabled:!0,children:"Morbi leo risus"}),e(r.Item,{as:"li",children:"Porta ac consectetur ac"})]}})}})]}}),null),i(n,e(t,{get children(){return[e(t.Header,{children:"Disabled items"}),e(t.Body,{get children(){return e(r,{get children(){return[e(r.Item,{disabled:!0,children:"Cras justo odio"}),e(r.Item,{children:"Dapibus ac facilisis in"}),e(r.Item,{children:"Morbi leo risus"}),e(r.Item,{children:"Porta ac consectetur ac"})]}})}})]}}),null),i(n,e(t,{get children(){return[e(t.Header,{children:"Actionable items"}),e(t.Body,{get children(){return e(r,{defaultActiveKey:"#link1",get children(){return[e(r.Item,{action:!0,eventKey:"#link1",children:"Link 1"}),e(r.Item,{action:!0,eventKey:"#link2",disabled:!0,children:"Link 2"}),e(r.Item,{action:!0,onClick:m,children:"This one is a button"})]}})}})]}}),null),i(n,e(t,{get children(){return[e(t.Header,{children:"Flush"}),e(t.Body,{get children(){return e(r,{variant:"flush",get children(){return[e(r.Item,{children:"Cras justo odio"}),e(r.Item,{children:"Dapibus ac facilisis in"}),e(r.Item,{children:"Morbi leo risus"}),e(r.Item,{children:"Porta ac consectetur ac"})]}})}})]}}),null),i(n,e(t,{get children(){return[e(t.Header,{children:"Numbered"}),e(t.Body,{get children(){return e(r,{as:"ol",numbered:!0,get children(){return[e(r.Item,{as:"li",children:"Cras justo odio"}),e(r.Item,{as:"li",children:"Cras justo odio"}),e(r.Item,{as:"li",children:"Cras justo odio"})]}})}})]}}),null),i(n,e(t,{get children(){return[e(t.Header,{children:"Custom content"}),e(t.Body,{class:"col-md-4",get children(){return e(r,{as:"ol",numbered:!0,get children(){return[e(r.Item,{as:"li",className:"d-flex justify-content-between align-items-start",get children(){return[a.cloneNode(!0),e(c,{bg:"primary",pill:!0,children:"14"})]}}),e(r.Item,{as:"li",className:"d-flex justify-content-between align-items-start",get children(){return[a.cloneNode(!0),e(c,{bg:"primary",pill:!0,children:"14"})]}}),e(r.Item,{as:"li",className:"d-flex justify-content-between align-items-start",get children(){return[a.cloneNode(!0),e(c,{bg:"primary",pill:!0,children:"14"})]}})]}})}})]}}),null),i(n,e(t,{get children(){return[e(t.Header,{children:"Horizontal"}),e(t.Body,{get children(){return e(r,{horizontal:!0,get children(){return[e(r.Item,{children:"This"}),e(r.Item,{children:"ListGroup"}),e(r.Item,{children:"renders"}),e(r.Item,{children:"horizontally!"})]}})}})]}}),null),i(n,e(t,{get children(){return[e(t.Header,{children:"Horizontal responsive with breakpoints"}),e(t.Body,{get children(){return["sm","md","lg","xl","xxl"].map((o,y)=>e(r,{horizontal:o,className:"my-2",get children(){return[e(r.Item,{children:"This ListGroup"}),e(r.Item,{children:"renders horizontally"}),e(r.Item,{get children(){return["on ",o]}}),e(r.Item,{children:"and above!"})]}}))}})]}}),null),i(n,e(t,{get children(){return[e(t.Header,{children:"Contextual classes"}),e(t.Body,{get children(){return e(r,{get children(){return[e(r.Item,{children:"No style"}),e(r.Item,{variant:"primary",children:"Primary"}),e(r.Item,{variant:"secondary",children:"Secondary"}),e(r.Item,{variant:"success",children:"Success"}),e(r.Item,{variant:"danger",children:"Danger"}),e(r.Item,{variant:"warning",children:"Warning"}),e(r.Item,{variant:"info",children:"Info"}),e(r.Item,{variant:"light",children:"Light"}),e(r.Item,{variant:"dark",children:"Dark"})]}})}})]}}),null),i(n,e(t,{get children(){return[e(t.Header,{children:"Tabbed Interfaces"}),e(t.Body,{get children(){return e(l.Container,{id:"list-group-tabs-example",defaultActiveKey:"#link1",get children(){return e(I,{get children(){return[e(h,{sm:4,get children(){return e(r,{get children(){return[e(r.Item,{action:!0,eventKey:"#link1",children:"Link 1"}),e(r.Item,{action:!0,eventKey:"#link2",children:"Link 2"})]}})}}),e(h,{sm:8,get children(){return e(l.Content,{get children(){return[e(l.Pane,{eventKey:"#link1",children:"Pane 1 content"}),e(l.Pane,{eventKey:"#link2",children:"Pane 2 content"})]}})}})]}})}})}})]}}),null),s})()};export{G as ListGroupDocs,G as default};