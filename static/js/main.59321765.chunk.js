(this["webpackJsonpproject-react-library"]=this["webpackJsonpproject-react-library"]||[]).push([[0],[,,function(e,t,a){e.exports={NewBookSection:"NewBookModal_NewBookSection__2n-h7",Show:"NewBookModal_Show__2ioBX",NewBookFormContainer:"NewBookModal_NewBookFormContainer__1OVSZ",TextField:"NewBookModal_TextField__2RhRW",CheckboxField:"NewBookModal_CheckboxField__16yDm",CheckboxLabel:"NewBookModal_CheckboxLabel__2qmwJ",CloseModal:"NewBookModal_CloseModal__1yniD"}},,function(e,t,a){e.exports={Book:"Book_Book__2Z9qP",BookGradient:"Book_BookGradient__3Rpa5",RemoveBook:"Book_RemoveBook__36460",BookClassics:"Book_BookClassics__3aMmx",BookInfo:"Book_BookInfo__OA16O",BookAuthor:"Book_BookAuthor__1kPC4",BookTitle:"Book_BookTitle__6RfFm",PagesBlock:"Book_PagesBlock__c2AHe"}},,,,function(e,t,a){e.exports={ReadButton:"UtilityButton_ReadButton__1Rbbe",Not:"UtilityButton_Not__joup1"}},,,,,,,function(e,t,a){e.exports={headerSection:"Header_headerSection__2Xk_l"}},function(e,t,a){e.exports={Button:"Button_Button__3gFiX"}},,function(e,t,a){e.exports={BookGrid:"Books_BookGrid__ATdYW"}},function(e,t,a){e.exports=a.p+"static/media/kangaroo.d03651bc.png"},,,,function(e,t,a){e.exports=a(36)},,,,,function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(5),l=a.n(r),c=(a(28),a(13)),i=a(14),u=a(22),s=a(20),d=a(15),k=a.n(d),m=function(e){return n.a.createElement("div",{className:k.a.headerSection},n.a.createElement("div",{className:"container"},n.a.createElement("h1",null,"My Library"),n.a.createElement("h4",null,"The Odin Project")))},B=a(16),_=a.n(B),E=function(e){return n.a.createElement("button",{className:_.a.Button,onClick:e.clicked},e.children)},b=a(3),h=Object(b.b)((function(e){return{}}),(function(e){return{showModal:function(){return e({type:"OPEN_MODAL"})}}}))((function(e){return n.a.createElement("div",{className:"section"},n.a.createElement("div",{className:"container"},n.a.createElement("div",null,n.a.createElement("h1",null,"Books"),n.a.createElement(E,{clicked:e.showModal},"Add New Book"))))})),f=a(2),p=a.n(f),O=Object(b.b)((function(e){return{modal:e.showModal,newBook:e.newBook}}),(function(e){return{closeModal:function(){return e({type:"CLOSE_MODAL"})},inputChangeHandler:function(t,a){return e(function(e,t){return{type:"INPUT_CHANGED_HANDLER",input:e,bookType:t}}(t,a))},checkboxChangeHandler:function(){return e({type:"CHECKBOX_CHANGED_HANDLER"})},addBookHandler:function(){return e({type:"ADD_BOOK"})}}}))((function(e){var t=p.a.NewBookSection;e.modal&&(t=[p.a.NewBookSection,p.a.Show].join(" "));return n.a.createElement("div",{className:t},n.a.createElement("div",{className:p.a.NewBookFormContainer},n.a.createElement("h1",null,"New Book"),n.a.createElement("div",null,n.a.createElement("form",{onSubmit:function(t){return function(t){t.preventDefault(),e.addBookHandler()}(t)}},n.a.createElement("label",null,"Title"),n.a.createElement("input",{type:"text",className:p.a.TextField,placeholder:"Book Title",value:e.newBook.title,onChange:function(t){return e.inputChangeHandler(t.target.value,"title")},required:!0}),n.a.createElement("label",null,"Author"),n.a.createElement("input",{type:"text",className:p.a.TextField,placeholder:"Author",value:e.newBook.author,onChange:function(t){return e.inputChangeHandler(t.target.value,"author")},required:!0}),n.a.createElement("label",null,"Pages"),n.a.createElement("input",{type:"number",className:p.a.TextField,placeholder:"0",value:e.newBook.pages,onChange:function(t){return e.inputChangeHandler(t.target.value,"pages")},required:!0}),n.a.createElement("div",{className:p.a.CheckboxField},n.a.createElement("label",null,n.a.createElement("input",{type:"checkbox",checked:e.newBook.read,onChange:e.checkboxChangeHandler}),n.a.createElement("span",{className:p.a.CheckboxLabel},"Finished Reading"))),n.a.createElement("div",null,n.a.createElement(E,null,"Submit"))))),n.a.createElement("div",{className:p.a.CloseModal,onClick:e.closeModal},n.a.createElement("div",null,"X")))})),N=a(18),g=a.n(N),v=a(4),w=a.n(v),C=a(19),j=a.n(C),y=a(8),x=a.n(y),M=function(e){var t=e.read?x.a.ReadButton:[x.a.ReadButton,x.a.Not].join(" ");return n.a.createElement("button",{className:t,onClick:e.clicked},e.read?"Finished":"Reading")},T=function(e){return n.a.createElement("div",{className:w.a.Book},n.a.createElement("div",{className:w.a.BookGradient},n.a.createElement("div",{className:w.a.RemoveBook,onClick:e.delete},"x")),n.a.createElement("div",{className:w.a.BookClassics},n.a.createElement("span",null,"Kelly"),n.a.createElement("img",{src:j.a,width:"40",alt:"Kangaroo Icon"}),n.a.createElement("span",null,"Classics")),n.a.createElement("div",{className:w.a.BookInfo},n.a.createElement("div",{className:w.a.BookAuthor},e.author),n.a.createElement("div",{className:w.a.BookTitle},e.title)),n.a.createElement("div",{className:w.a.PagesBlock},n.a.createElement("div",null,e.pages," pages"),n.a.createElement(M,{read:e.read,clicked:e.toggle})))},D=Object(b.b)((function(e){return{books:e.books}}),(function(e){return{delete:function(t){return e(function(e){return{type:"DELETE_BOOK",index:e}}(t))},toggle:function(t){return e(function(e){return{type:"TOGGLE_BOOK",index:e}}(t))}}}))((function(e){var t=e.books.map((function(t,a){return n.a.createElement(T,{title:t.title,author:t.author,pages:t.pages,read:t.read,delete:function(){return e.delete(a)},toggle:function(){return e.toggle(a)},key:t.title+a})}));return n.a.createElement("div",{className:"section"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:g.a.BookGrid},t)))})),S=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(h,null),n.a.createElement(O,null),n.a.createElement(D,null))},A=(a(35),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.getLocalBooks()}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(m,null),n.a.createElement(S,null))}}]),a}(o.Component)),L=Object(b.b)((function(e){return{}}),(function(e){return{getLocalBooks:function(){return e({type:"GET_BOOKS"})}}}))(A);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=a(6),R=a(21),F=a(7),G=a(1),K={books:[{title:"This book is full of yarns of Ballarat",author:"Big Kev",pages:123,read:!0},{title:"Byron bay, where it all started with emma",author:"Harry Mcallister",pages:234,read:!1},{title:"Why I won't drive to Newport",author:"Jack Penny",pages:523,read:!1}],newBook:{title:"",author:"",pages:"",read:!0},showModal:!1},I=function(e){return Object(G.a)(Object(G.a)({},e),{},{showModal:!0})},P=function(e){return Object(G.a)(Object(G.a)({},e),{},{showModal:!1,newBook:{title:"",author:"",pages:"",read:!0}})},X=function(e,t){var a=Object(G.a)(Object(G.a)({},e.newBook),{},Object(F.a)({},t.bookType,t.input));return Object(G.a)(Object(G.a)({},e),{},{newBook:a})},J=function(e){var t=Object(G.a)(Object(G.a)({},e.newBook),{},{read:!e.newBook.read});return Object(G.a)(Object(G.a)({},e),{},{newBook:t})},U=function(e){var t=JSON.stringify(e);localStorage.setItem("books",t)},q=function(e){var t=e.books.concat(e.newBook),a=Object(G.a)(Object(G.a)({},e),{},{books:t,showModal:!1,newBook:{title:"",author:"",pages:"",read:!0}});return U(t),a},W=function(e,t){var a=e.books.filter((function(e,a){return a!==t.index})),o=Object(G.a)(Object(G.a)({},e),{},{books:a});return U(a),o},V=function(e,t){var a=Object(G.a)({},e.books[t.index]);a.read=!a.read;var o=Object(R.a)(e.books);o[t.index]=a;var n=Object(G.a)(Object(G.a)({},e),{},{books:o});return U(o),n},Z=function(e){var t=localStorage.getItem("books"),a=JSON.parse(t);if(t&&e.books!==a)return Object(G.a)(Object(G.a)({},e),{},{books:a})},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_MODAL":return I(e);case"CLOSE_MODAL":return P(e);case"INPUT_CHANGED_HANDLER":return X(e,t);case"CHECKBOX_CHANGED_HANDLER":return J(e);case"ADD_BOOK":return q(e);case"DELETE_BOOK":return W(e,t);case"TOGGLE_BOOK":return V(e,t);case"GET_BOOKS":return Z(e);default:return e}},$=Object(H.b)(Y,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(n.a.createElement(b.a,{store:$},n.a.createElement(n.a.StrictMode,null,n.a.createElement(L,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[23,1,2]]]);
//# sourceMappingURL=main.59321765.chunk.js.map