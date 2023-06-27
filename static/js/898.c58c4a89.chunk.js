"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[898],{3898:function(n,e,r){r.r(e),r.d(e,{default:function(){return D}});var t,a,o,i,s,c,d,l,u,x=r(2791),p=r(3855),b=r(8355),m=r(168),f=r(7686),h=f.Z.label(t||(t=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 20px;\n"]))),g=f.Z.form(a||(a=(0,m.Z)(["\n  padding: 50px;\n  display: flex;\n  flex-direction: column;\n  border-bottom: 3px solid #cbeaed;\n"]))),j=f.Z.h3(o||(o=(0,m.Z)(["\n  margin: 0;\n  margin-bottom: 15px;\n"]))),v=f.Z.input(i||(i=(0,m.Z)(["\n  width: 350px;\n  height: 35px;\n  border-radius: 10px;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n\n  &:hover, :focus {\n    transform: scale(1.05);\n    background: #cbeaed;\n    box-shadow: 5px 3px 10px 1px;\n    color: black;\n  }\n"]))),Z=f.Z.button(s||(s=(0,m.Z)(["\n  display: block;\n  margin: 0px auto;\n  padding: 8px;\n  border: 2px solid rgb(8, 41, 17);\n  border-radius: 4px;\n  cursor: pointer;\n  color: black;\n  background-color:#81dee8e1;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n\n  &:hover {\n    transform: scale(1.05);\n    background: green;\n    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);\n    color: #fff;\n  }\n"]))),y=r(5984),k=r(1686),w=r.n(k),z=r(184),C=function(){var n=(0,p.v9)((function(n){return n.contacts.items})),e=(0,p.I0)(),r=(0,y.x0)(),t=(0,y.x0)();return(0,z.jsxs)(g,{onSubmit:function(r){r.preventDefault();var t={name:r.target.name.value,phone:r.target.number.value};n.find((function(n){return n.name===t.name}))?w().Notify.warning("Such a contact already exists! Try again."):(e((0,b.uK)(t)),w().Notify.success(" Add contact"),r.target.reset())},children:[(0,z.jsxs)(h,{htmlFor:r,children:[(0,z.jsx)(j,{children:"Name"}),(0,z.jsx)(v,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,id:r})]}),(0,z.jsxs)(h,{htmlFor:t,children:[(0,z.jsx)(j,{children:"Number"}),(0,z.jsx)(v,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,id:t})]}),(0,z.jsx)(Z,{type:"submit",children:"Add contact"})]})},F=f.Z.li(c||(c=(0,m.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 20px;\n  margin-bottom: 20px;\n"]))),A=f.Z.ul(d||(d=(0,m.Z)(["\n  width: 400px;\n"]))),N=f.Z.button(l||(l=(0,m.Z)(["\n  padding: 4px;\n  border: 2px solid #bfe7e5f8;\n  border-radius: 5px;\n  cursor: pointer;\n  color: black;\n  background-color: #1cc3d6;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n  &:hover {\n    transform: scale(1.05);\n    background: red;\n    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);\n    color: #FFF;\n    border: 2px solid red;\n"]))),q=f.Z.div(u||(u=(0,m.Z)(["\nmargin: 0 ;\ntop: 553px;\nleft:540px;\ncolor: #cbeaed;\nfont-size: 25px;\n"]))),I=function(){var n=(0,p.v9)((function(n){return n.contacts.items})),e=(0,p.v9)((function(n){return n.filters.filter})),r=(0,p.v9)((function(n){return n.contacts.isLoading})),t=(0,p.I0)(),a=n.filter((function(n){return n.name.toLowerCase().includes(e)}));return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(q,{children:r&&(0,z.jsx)("p",{children:"Loading..."})}),(0,z.jsx)(A,{children:a.map((function(n){var e=n.id,r=n.name,a=n.phone;return(0,z.jsxs)(F,{children:[r,": ",a,(0,z.jsx)(N,{type:"button",onClick:function(){return function(n){w().Notify.failure("Contact delet"),t((0,b.GK)(n))}(e)},children:"Delete"})]},e)}))})]})},L=r(1634),_=function(){var n=(0,p.I0)();return(0,z.jsxs)(h,{children:[(0,z.jsx)("h3",{children:"Find contacts by name"}),(0,z.jsx)(v,{onChange:function(e){n((0,L.xO)(e.target.value))},name:"filter"})]})},B=r(6907);function D(){var n=(0,p.I0)(),e=(0,p.v9)((function(n){return n.contacts.isLoading}));return(0,x.useEffect)((function(){n((0,b.NJ)())}),[n]),(0,z.jsxs)(B.B6,{children:[(0,z.jsx)(B.ql,{children:(0,z.jsx)("title",{children:"My phonebook"})}),(0,z.jsx)("div",{children:e&&"Request in progress..."}),(0,z.jsx)(C,{}),(0,z.jsx)(_,{}),(0,z.jsx)(I,{})]})}}}]);
//# sourceMappingURL=898.c58c4a89.chunk.js.map