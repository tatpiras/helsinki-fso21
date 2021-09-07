(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(16),o=n.n(a),r=n(7),u=n(17),c=n(3),s=n(1),i=n(4),l=n.n(i),b="/api/persons",m={getAll:function(){return l.a.get(b).then((function(e){return e.data}))},getOne:function(e){return l.a.get(b,{params:{name:e}}).then((function(e){return e.data}))},create:function(e){return l.a.post(b,e).then((function(e){return e.data}))},update:function(e,t){return l.a.put("".concat(b,"/").concat(e),t).then((function(e){return e.data}))},deleteOne:function(e){return l.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.status}))}},d=n(0),p=function(e){var t=e.headerName;return Object(d.jsx)("h2",{children:t})},j=function(e){var t=e.buttonType,n=e.buttonText,a=e.buttonClassName;return Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:a,type:t,children:n})})},h=function(e){var t=e.inputName,n=e.inputValue,a=e.inputOnchange;return Object(d.jsxs)("div",{children:[t,": ",Object(d.jsx)("input",{style:{marginBottom:"5px"},value:n,onChange:a})]})},f=function(e){var t=e.onsubmit,n=e.nameInputValue,a=e.handleNameChange,o=e.numberInputValue,r=e.handleNumberChange,u=e.buttonType,c=e.buttonText,s=e.buttonClassName;return Object(d.jsxs)("form",{onSubmit:t,children:[Object(d.jsx)(h,{inputName:"name",inputValue:n,inputOnchange:a}),Object(d.jsx)(h,{inputName:"number",inputValue:o,inputOnchange:r}),Object(d.jsx)(j,{type:u,buttonText:c,buttonClassName:s})]})},O=function(e){var t=e.name,n=e.number,a=e.onClickDelete,o=e.id,r=e.buttonClassName;return Object(d.jsxs)("li",{id:o,name:t,style:{marginBottom:"5px"},children:[t," ",n," ",Object(d.jsx)("button",{className:r,onClick:a,children:"delete"})]})},g=function(e){var t=e.entriesToShow,n=e.onClickDelete,a=e.buttonClassName;return 0===t.length?Object(d.jsx)("p",{children:"No matching contacts."}):Object(d.jsx)("div",{children:Object(d.jsx)("ul",{style:{listStyleType:"none",padding:"0"},children:t.map((function(e){return Object(d.jsx)(O,{id:e.id,name:e.name,number:e.number,onClickDelete:n,buttonClassName:a},e.id)}))})})},x=function(e){var t=e.searchbarText,n=e.searchbarInputValue,a=e.searchbarInputOnchange;return Object(d.jsx)("div",{children:Object(d.jsx)(h,{inputName:t,inputValue:n,inputOnchange:a})})},v=function(e){var t=e.message,n=e.type;return null===t?null:Object(d.jsx)("div",{className:n,children:t})},C=(n(41),function(){var e=Object(s.useState)(""),t=Object(c.a)(e,2),n=t[0],a=t[1],o=Object(s.useState)(""),i=Object(c.a)(o,2),l=i[0],b=i[1],j=Object(s.useState)(""),h=Object(c.a)(j,2),O=h[0],C=h[1],y=Object(s.useState)(!0),N=Object(c.a)(y,2),w=N[0],T=N[1],k=Object(s.useState)([]),S=Object(c.a)(k,2),I=S[0],V=S[1],L=Object(s.useState)(!0),D=Object(c.a)(L,2),E=D[0],A=D[1],B=Object(s.useState)({message:null,type:null}),U=Object(c.a)(B,2),J=U[0],P=U[1];Object(s.useEffect)((function(){m.getAll().then((function(e){V(e),A(!1)}))}),[]);var G=w?I:I.filter((function(e){return e.name.toLowerCase().includes(O.toLowerCase())}));return E?Object(d.jsx)("div",{children:"Loading..."}):Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(v,{message:J.message,type:J.type}),Object(d.jsx)(p,{headerName:"Phonebook"}),Object(d.jsx)(x,{searchbarText:"Search any name",searchbarInputValue:O,searchbarInputOnchange:function(e){""!==e.target.value&&T(!1),C(e.target.value)}}),Object(d.jsx)(p,{headerName:"Add new"}),Object(d.jsx)(f,{onsubmit:function(e){if(e.preventDefault(),function(e){var t,n,a,o=Object(u.a)(I);try{for(o.s();!(t=o.n()).done;){if(n=t.value.name.trim(),a=e.trim(),n.toLowerCase()===a.toLowerCase())return!0}}catch(r){o.e(r)}finally{o.f()}}(n)&&""!==l){if(window.confirm("".concat(n.toUpperCase().trim()," is already in phonebook. Replace number with new one?"))){var t=I.find((function(e){return e.name.toLowerCase()===n.toLowerCase()})),o=t.id,c=Object(r.a)(Object(r.a)({},t),{},{number:l});return m.update(o,c).then((function(e){V(I.map((function(t){return t.id!==o?t:e}))),P({message:"".concat(n.toUpperCase(),"'s number updated!"),type:"update"})})).catch((function(e){console.log(e),P({message:e.response.data.error,type:"delete"}),setTimeout((function(){P({message:null,type:null}),window.location.reload()}),2500)})),void setTimeout((function(){P({message:null,type:null}),window.location.reload()}),2500)}return a(""),void b("")}if(""!==n&&""!==l){var s={name:n,number:l};m.create(s).then((function(e){V(I.concat(e)),a(""),b(""),P({message:"".concat(s.name.toUpperCase()," added to phonebook!"),type:"add"})})).catch((function(e){P({message:e.response.data.error,type:"delete"}),console.log(e.response.data)})),setTimeout((function(){P({message:null,type:null})}),2500)}else alert("Cannot add an incomplete entry. Please provide both a name and a number")},nameInputValue:n,handleNameChange:function(e){return a(e.target.value)},numberInputValue:l,handleNumberChange:function(e){return b(e.target.value)},buttonType:"submit",buttonText:"add",buttonClassName:"addButton"}),Object(d.jsx)(p,{headerName:"Numbers"}),Object(d.jsx)(g,{entriesToShow:G,onClickDelete:function(e){var t=e.target.parentElement.getAttribute("name");if(window.confirm("Delete ".concat(t.toUpperCase()," from phonebook?"))){var n=e.target.parentElement.getAttribute("id");m.deleteOne(n).then(P({message:"".concat(t.toUpperCase()," deleted from phonebook!"),type:"delete"})).catch((function(e){return console.log("Something went wrong DELETING item: ",e)})),setTimeout((function(){P({message:null,type:null}),window.location.reload()}),2500),V(I.filter((function(e){return e.id!==+n})))}},buttonClassName:"deleteButton"})]})});o.a.render(Object(d.jsx)(C,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.b5b91738.chunk.js.map