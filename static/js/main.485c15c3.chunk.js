(this.webpackJsonptabs=this.webpackJsonptabs||[]).push([[0],{11:function(e,t,a){e.exports=a(21)},16:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(5),o=a.n(s),c=(a(16),a(9)),r=a(1),u=a(6),l=a(7),d=a(10),b=a(8),m=(a(17),a(20),function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={tabs:[{id:1,name:"Tab 1",content:"this is tab 1 loremAt vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."},{id:2,name:"Tab 2",content:"this is Tab 2"},{id:3,name:"Tab 3",content:"this is Tab 3"}],currentTab:{id:1,name:"Tab 1",content:"this is tab 1"},editMode:!1,editTabNameMode:!1,hoveredtab:null},e.handleDoubleClick=function(){e.setState({editTabNameMode:!0})},e.handleEditTabName=function(t){var a=e.state,n=a.currentTab,i=a.tabs.map((function(e){return e.id===n.id?Object(r.a)(Object(r.a)({},e),{},{name:t.target.value}):e}));e.setState({tabs:i,currentTab:Object(r.a)(Object(r.a)({},n),{},{name:t.target.value})})},e.handleOnBlur=function(){e.setState({editTabNameMode:!1})},e.createTabs=function(){var t=e.state,a=t.tabs,n=t.currentTab,s=t.editTabNameMode,o=t.hoveredtab,c=a.map((function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement("li",null,s&&n.id===t.id?i.a.createElement("input",{value:t.name,onBlur:e.handleOnBlur,onChange:e.handleEditTabName}):i.a.createElement("button",{className:n.id===t.id?"tab active":"tab",onClick:function(){return e.handleSelectTab(t)},onDoubleClick:function(){return e.handleDoubleClick(t)},onMouseEnter:function(){t.id>3&&e.setState({hoveredtab:t.id})},onMouseLeave:function(){t.id>3&&e.setState({hoveredtab:null})}},t.name,o&&o===t.id?i.a.createElement("span",{className:"deletebutton",onClick:function(){return e.handleDeleteTab(n)}},"x"):null)))}));return i.a.createElement("ul",{className:"nav nav-tabs"},c)},e.handleSelectTab=function(t){e.setState({currentTab:t,editMode:!1,editTabNameMode:!1})},e.handleAddTab=function(){var t=e.state.tabs,a={id:t[t.length-1].id+1,name:"Tab ".concat(t[t.length-1].id+1),content:"This is Tab ".concat(t[t.length-1].id+1)};e.setState({tabs:[].concat(Object(c.a)(t),[a]),currentTab:a,editMode:!1,editTabNameMode:!1})},e.handleDeleteTab=function(t){var a=e.state.tabs,n=a.findIndex((function(e){return e.id===t.id})),i=a.filter((function(e,t){return t!==n})),s=a[n-1]||a[n+1]||{};e.setState({tabs:i,editMode:!1,editTabNameMode:!1,currentTab:s})},e.setEditMode=function(){e.setState({editMode:!e.state.editMode})},e.handleContentChange=function(t){var a=e.state,n=a.tabs,i=a.currentTab,s=n.map((function(e){return e.name===i.name?Object(r.a)(Object(r.a)({},e),{},{content:t.target.value}):e}));e.setState({tabs:s,currentTab:Object(r.a)(Object(r.a)({},i),{},{content:t.target.value})})},e.handleChev=function(){var t=e.state,a=t.currentTab,n=t.tabs,i=n.findIndex((function(e){return e.id==a.id}));i!=n.length-1&&e.setState({currentTab:n[i+1]})},e.handleminusChev=function(){var t=e.state,a=t.currentTab,n=t.tabs,i=n.findIndex((function(e){return e.id==a.id}));0!=i&&e.setState({currentTab:n[i-1]})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.currentTab,a=e.editMode,n=e.tabs;return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"well"},i.a.createElement("div",{className:"header-container"},i.a.createElement("div",null,i.a.createElement("button",{className:"add-tab-button",onClick:this.handleAddTab,disabled:10==n.length},"+"),i.a.createElement("button",{className:"chevadd",disabled:n[n.length-1].id==t.id,onClick:this.handleChev},">")),i.a.createElement("div",{className:"ul-container"},i.a.createElement("button",{className:"chevsub",disabled:1==t.id,onClick:this.handleminusChev},"<"),this.createTabs())),i.a.createElement("div",{className:"tab-content"},a?i.a.createElement("div",null,i.a.createElement("textarea",{onChange:this.handleContentChange,value:this.state.currentTab.content}),i.a.createElement("button",{className:"save-button",onClick:this.setEditMode},"Done")):i.a.createElement("div",{className:"content"},i.a.createElement("p",null,t.content),t.id?i.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},i.a.createElement("button",{className:"edit-mode-button",onClick:this.setEditMode},"Edit")):""))))}}]),a}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.485c15c3.chunk.js.map