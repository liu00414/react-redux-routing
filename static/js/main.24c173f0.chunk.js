(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(40)},31:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(22),s=n.n(r),c=(n(31),n(4)),l=n(5),i=n(7),u=n(6),p=n(8),m=n(44),d=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("nav",null,o.a.createElement(m.a,{to:"/",exact:!0},"Users"),o.a.createElement(m.a,{to:"/to-dos",exact:!0},"To Dos"),o.a.createElement(m.a,{to:"/posts",exact:!0},"Posts"))}}]),t}(a.Component),h=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,this.props.page),o.a.createElement(d,null))}}]),t}(a.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("p",{className:"loader"},"Loading . . .")}}]),t}(a.Component),f=n(10),b=n(11),O=n(12),j="user:updateUser";var g="todo:updateToDo";var y="todo:updatePosts";var v=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).handleData=function(t){e.setState({name:"Fred",error:null,isLoading:!1}),e.props.onUpdateUser(t)},e.state={error:null,isLoading:!1},e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(!this.props.users){this.setState({isLoading:!0,error:null});fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(this.handleData).catch(function(t){e.setState({error:t.message,isLoading:!1})})}}},{key:"render",value:function(){return console.log(this.props.users),o.a.createElement(o.a.Fragment,null,o.a.createElement(h,{page:"Users"}),this.state.isLoading&&o.a.createElement(E,null),this.state.error&&o.a.createElement("h3",null,this.state.error),o.a.createElement("ul",null,this.props.users&&this.props.users.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(b.a,{icon:f.d}),"  ",e.name,o.a.createElement("button",null,o.a.createElement(m.a,{to:"/to-dos/"+e.id+"/"+e.name},"To Do")),o.a.createElement("button",null,o.a.createElement(m.a,{to:"/posts/"+e.id+"/"+e.name},"Posts")))})))}}]),t}(a.Component),D={onUpdateUser:function(e){return{type:j,payload:{user:e}}}},k=Object(O.b)(function(e){return{users:e.users}},D)(v),w=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).handleData=function(t){e.setState({name:"Fred",error:null,isLoading:!1}),e.props.onUpdateToDo(t)},e.state={error:null,isLoading:!1},e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(!this.props.todo){this.setState({isLoading:!0});fetch("https://jsonplaceholder.typicode.com/todos/").then(function(e){return e.json()}).then(this.handleData).catch(function(t){e.setState({error:t})})}}},{key:"render",value:function(){var e=this.props.match.params.userID,t=this.props.match.params.userName;return o.a.createElement(o.a.Fragment,null,o.a.createElement(h,{page:"To Dos"}),this.state.isLoading&&o.a.createElement(E,null),o.a.createElement("ul",null,!e&&this.props.todo&&this.props.todo.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement("h3",null,o.a.createElement(b.a,{icon:f.a})," ",e.title),o.a.createElement("p",null,"Status: ",!0===e.completed?"Done":"Pending"))}),e&&this.props.todo&&this.props.todo.map(function(n){return n.userId==e&&o.a.createElement("li",{key:n.id},o.a.createElement("h3",null,o.a.createElement(b.a,{icon:f.a}),"  ",t,": ",n.title),o.a.createElement("p",null,"Status: ",!0===n.completed?"Done":"Pending"))})))}}]),t}(a.Component),S={onUpdateToDo:function(e){return{type:g,payload:{todo:e}}}},L=Object(O.b)(function(e){return{todo:e.todo}},S)(w),U=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).handleData=function(t){console.log(JSON.stringify(t),null,"\t"),console.log(t),e.setState({name:"Fred",posts:t,error:null,isLoading:!1}),e.props.onUpdatePosts(t)},e.state={posts:[],error:null,isLoading:!1},e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(!this.props.posts){this.setState({isLoading:!0});fetch("https://jsonplaceholder.typicode.com/posts/").then(function(e){return e.json()}).then(this.handleData).catch(function(t){e.setState({error:t})})}}},{key:"render",value:function(){var e=this.props.match.params.userID,t=this.props.match.params.userName;return o.a.createElement(o.a.Fragment,null,o.a.createElement(h,{page:"Posts"}),this.state.isLoading&&o.a.createElement(E,null),o.a.createElement("ul",null,!e&&this.props.posts&&this.props.posts.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement("h3",null,o.a.createElement(b.a,{icon:f.b}),"  ",e.title),o.a.createElement("p",null,e.body))}),e&&this.props.posts&&this.props.posts.map(function(n){return n.userId==e&&o.a.createElement("li",{key:n.id},o.a.createElement("h3",null,o.a.createElement(b.a,{icon:f.b})," ",n.title),o.a.createElement("p",null,n.body),o.a.createElement("p",null,"From: ",t))})))}}]),t}(a.Component),_={onUpdatePosts:function(e){return{type:y,payload:{posts:e}}}},N=Object(O.b)(function(e){return{posts:e.posts}},_)(U),F=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(h,{page:"No Such Page"}),o.a.createElement("h1",null,"Sorry, page not found."))}}]),t}(a.Component),T=n(42),I=n(43),P=n(41);n(38);n(14).b.add(f.c);var x=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(T.a,{basename:"/react-redux-routing"},o.a.createElement(I.a,null,o.a.createElement(P.a,{exact:!0,path:"/",component:k}),o.a.createElement(P.a,{exact:!0,path:"/to-dos",component:L}),o.a.createElement(P.a,{path:"/to-dos/:userID/:userName",component:L}),o.a.createElement(P.a,{exact:!0,path:"/posts",component:N}),o.a.createElement(P.a,{path:"/posts/:userID/:userName",component:N}),o.a.createElement(P.a,{component:F}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=n(13);var X=Object(C.b)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case j:return a.user;default:return e}},todo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case g:return a.todo;default:return e}},posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case y:return a.posts;default:return e}}}),J=Object(C.c)(X,{users:null,todo:null,posts:null},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());console.log(J.getState()),s.a.render(o.a.createElement(O.a,{store:J},o.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.24c173f0.chunk.js.map