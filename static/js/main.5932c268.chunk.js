(window.webpackJsonprobofriends=window.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),i=(n(13),n(3)),l=n(4),s=n(6),u=n(5),m=n(7),h=function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"tc dib br3 pa3 ma2 mb3 grow bw2 shadow-5 card"},r.a.createElement("img",{alt:"Profile",src:"https://robohash.org/".concat(a,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},d=function(e){var t=e.displayRobots;return r.a.createElement("div",null," ",t.map(function(e,t){return r.a.createElement(h,{key:t,id:e.id,name:e.name,email:e.email})}))},b=function(e){var t=e.searchChange;return r.a.createElement("div",null,r.a.createElement("input",{className:"bg-lightest-blue b--green pa3 mb4 ba",type:"search",placeholder:"Search Bots",onChange:t}))},f=(n(14),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).onSearch=function(t){e.setState({searchField:t.target.value})},e.state={searchField:"",robots:[]},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({robots:t})})}},{key:"render",value:function(){var e=this,t=this.state.robots.filter(function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())});return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(b,{searchChange:this.onSearch}),r.a.createElement(d,{displayRobots:t}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(15);c.a.render(r.a.createElement("div",null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.5932c268.chunk.js.map