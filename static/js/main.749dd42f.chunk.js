(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),l=n(3),i=n.n(l);n(15),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(1),s=n(4),u=n(5),r=n(7),d=n(6),h=n(8),m=function(e){function t(){var e,n;Object(s.a)(this,t);for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l];return(n=Object(r.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={todos:[{value:1,text:"111",done:!1,isVisible:!0},{value:2,text:"222",done:!0,isVisible:!0},{value:3,text:"333",done:!1,isVisible:!0}],oldTodos:[],showOld:!1,newItemText:"",checkAll:!1},n.onNewItemTextChange=function(e){n.setState({newItemText:e})},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"onItemAdded",value:function(e){""!==this.state.newItemText&&"Enter"===e.key&&this.setState(function(e){var t=e.todos,n=e.newItemText,o={value:t.length+1,text:n,done:!1,isVisible:!0};return{todos:[].concat(Object(c.a)(t),[o]),newItemText:""}})}},{key:"onButtonAdded",value:function(){""!==this.state.newItemText&&this.setState(function(e){var t=e.todos,n=e.newItemText,o={value:t.length+1,text:n,done:!1,isVisible:!0};return{todos:[].concat(Object(c.a)(t),[o]),newItemText:""}})}},{key:"onCheckedChange",value:function(e){var t=e;t.done=!t.done,this.setState({todoChecked:t})}},{key:"onAllItemsCheck",value:function(){var e=this.state;e.checkAll=!e.checkAll;var t=e.checkAll;e.todos.map(function(e){e.done=t}),this.setState({todo:e})}},{key:"onDeleteItem",value:function(e){var t=this.state.todos.filter(function(t){return t!==e}),n=this.state.oldTodos;n.push(e),this.setState({todos:t,oldTodos:n})}},{key:"onButtonAll",value:function(){var e=this.state.todos;e.map(function(e){e.isVisible=!0}),this.setState({todos:e})}},{key:"onButtonDone",value:function(){var e=this.state.todos;e.map(function(e){e.done||(e.isVisible=!1)}),this.setState({todos:e})}},{key:"onButtonActive",value:function(){var e=this.state.todos;e.map(function(e){e.done&&(e.isVisible=!1)}),this.setState({todos:e})}},{key:"onButtonClearDone",value:function(){var e=this.state.todos.filter(function(e){return!e.done}),t=this.state.todos.filter(function(e){return e.done});this.setState({todos:e,oldTodos:t})}},{key:"onButtonShowOld",value:function(){this.setState({showOld:!0})}},{key:"render",value:function(){var e=this,n=this.state.todos.filter(function(e){return!0===e.isVisible});return a.a.createElement("div",{className:"Todo"},a.a.createElement("h2",{className:"Todo__title"},"My Todo"),a.a.createElement("input",{type:"checkbox",name:"chackAll",checked:n.checkAll,onChange:function(){return e.onAllItemsCheck()}}),a.a.createElement("input",{type:"text",className:"Todo__new-item-text",value:n.newItemText,onChange:function(t){e.onNewItemTextChange(t.target.value)},onKeyPress:function(t){e.onItemAdded(t)}}),a.a.createElement("button",{className:"Todo__add-button",onClick:function(){return e.onButtonAdded()}},"Add"),a.a.createElement("ul",{className:"Todo__list"},n.map(function(n){return a.a.createElement(t.Item,{key:n.value,value:n.value,checked:n.done,onChange:function(){return e.onCheckedChange(n)},onDelete:function(){return e.onDeleteItem(n)}},n.text)})),a.a.createElement("br",null),a.a.createElement("button",{className:"Todo__add-button",onClick:function(){return e.onButtonAll()}},"All"),a.a.createElement("button",{className:"Todo__add-button",onClick:function(){return e.onButtonDone()}},"Done"),a.a.createElement("button",{className:"Todo__add-button",onClick:function(){return e.onButtonActive()}},"Active"),a.a.createElement("button",{className:"Todo__add-button",onClick:function(){return e.onButtonClearDone()}},"Clear done"),a.a.createElement("button",{className:"Todo__add-button",onClick:function(){return e.onButtonShowOld()}},"Show cleared todo"),a.a.createElement("p",null,n.length," has left"),a.a.createElement(t.Old,{showStatus:this.state.showOld,value:this.state.oldTodos}))}}]),t}(a.a.Component);m.Item=function(e){e.value;var t=e.children,n=e.checked,o=e.onChange,l=e.onDelete,i=n?"Todo__item Todo__item_done":"Todo__item";return a.a.createElement("div",null,a.a.createElement("input",{type:"checkbox",name:"todoItem",checked:n,onChange:function(){return o()}}),a.a.createElement("li",{className:i},t,a.a.createElement("button",{onClick:function(){return l()}},"x")))},m.Old=function(e){var t=e.showStatus,n=e.value;if(!t)return a.a.createElement("div",null,"Clear todo what you done");if(0===n.length)return a.a.createElement("div",null,"No done todos, make clear");if(1===n.length)return console.log(n[0]),a.a.createElement("div",null,n[0].text);if(n.length>1){var o="";return n.map(function(e){o+=" --- "+e.text}),a.a.createElement("div",null,o)}return a.a.createElement("div",null,"Work with smile =^_^= ")};var v=m;i.a.render(a.a.createElement(function(){return a.a.createElement("div",{className:"App"},a.a.createElement(v,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.749dd42f.chunk.js.map