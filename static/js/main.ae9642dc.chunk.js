(window.webpackJsonprobofriends=window.webpackJsonprobofriends||[]).push([[0],{13:function(e,a,n){},15:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(2),o=n.n(i),l=(n(13),n(3)),m=n(4),c=n(6),s=n(5),u=n(7),h=function(e){var a=e.name,n=e.email,t=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"Profile",src:"https://robohash.org/".concat(t+Math.random(),"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,n)))},d=function(e){var a=e.displayRobots;return r.a.createElement("div",null," ",a.map(function(e,a){return r.a.createElement(h,{key:a,id:e.id,name:e.name,email:e.email})}))},b=function(e){var a=e.searchChange;return r.a.createElement("div",null,r.a.createElement("input",{className:"bg-lightest-blue b--green pa3 ba",type:"search",placeholder:"Search Bots",onChange:a}))},g=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],p=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(c.a)(this,Object(s.a)(a).call(this))).onSearch=function(a){e.setState({searchField:a.target.value})},e.state={searchField:""},e}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=g.filter(function(a){return a.name.toLowerCase().includes(e.state.searchField.toLowerCase())});return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"RoboFriends"),r.a.createElement(b,{searchChange:this.onSearch}),r.a.createElement(d,{displayRobots:a}))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(14);o.a.render(r.a.createElement("div",null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.ae9642dc.chunk.js.map