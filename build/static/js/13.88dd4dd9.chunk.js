(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[13],{304:function(e,t,n){},309:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={baseURL:"http://111.229.226.139:9277",testBaseURL:"http://localhost:9277",IP:"111.229.226.139:9277",testIP:"localhost:9277"}},316:function(e,t,n){"use strict";var a=n(331),r=n.n(a),o=n(332),s=n.n(o),c=n(341),i=n.n(c),l=n(309),u=s.a.create({baseURL:l.a.baseURL,timeout:3e4});u.interceptors.request.use((function(e){return"post"!==e.method&&"put"!==e.method&&"delete"!==e.method||"string"!==typeof e.data&&"multipart/form-data"!==e.headers["Content-Type"]&&(e.data=i.a.stringify(e.data)),e}),(function(e){Promise.reject(e)})),u.interceptors.response.use((function(e){return r.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return 200!==e.data.code&&layer.msg(e.data.msg),t.abrupt("return",e.data);case 2:case"end":return t.stop()}}))}),(function(e){return e.response?(500===e.response.status&&console.log("\u670d\u52a1\u5668\u9519\u8bef\uff0c\u8bf7\u8054\u7cfb\u7ba1\u7406\u5458\u5904\u7406"),Promise.reject(e.response.data)):Promise.reject(e)})),t.a=u},473:function(e,t){},506:function(e,t,n){"use strict";n.r(t);var a=n(12),r=n(13),o=n(14),s=n(15),c=n(16),i=n(0),l=n.n(i),u=n(448),h=n.n(u),d=n(328),p=n(494),m=n(316);var f=n(309),v=n(90),b=(n(304),JSON.parse(localStorage.getItem("kmr_userInfo")).account),y=20,k=20;function w(e){return l.a.createElement("button",{className:"square ".concat(e.name),onClick:function(){return e.onClick()}},"board-line"===e.name?l.a.createElement("span",{className:"piece ".concat(e.value)}):"")}var j=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"renderSquare",value:function(e,t){var n=this;return l.a.createElement(w,{key:"square".concat(e),name:t,value:this.props.square[e],onClick:function(){n.props.onClick(e)}})}},{key:"renderRow",value:function(e,t,n){var a=n+1;"board-line"===e&&(a=n);for(var r=[],o=0,s=0;s<t+1;s++){for(var c=[],i=0;i<a;i++)c.push(this.renderSquare(o,e)),o++;r.push(l.a.createElement("div",{className:"board-row",key:"row".concat(s)},c))}return r}},{key:"render",value:function(){return l.a.createElement("div",{className:"board-container"},l.a.createElement("div",{className:"board-border"}),l.a.createElement("div",{className:"board-foundation-container"},this.renderRow("",this.props.column,this.props.row)),l.a.createElement("div",{className:"board-line-container"},this.renderRow("board-line",this.props.column,this.props.row)))}}]),t}(i.Component);var g,O=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(s.a)(t).call(this,e))).ready=function(){n.props.socket.emit("ready",b)},n.beginGame=function(e){b===e.upperHand?n.setState(Object(v.a)({role:"piece-black",otherRole:"piece-white",nextPlayer:e.upperHand,selfIsNext:!0,canPlay:!0,reset:!1},e)):n.setState(Object(v.a)({role:"piece-white",otherRole:"piece-black",nextPlayer:e.upperHand,selfIsNext:!1,canPlay:!1,reset:!1},e)),console.log(n.state)},n.state={winner:null,column:k,row:y,square:new Array(k*y),selfIsNext:!1,role:"",otherRole:"",nextPlayer:"",canPlay:!1,reset:!0,upperHand:"",defensive:""},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){this.handleSocket()}},{key:"hanldClick",value:function(e){var t=this.props.socket;this.state.canPlay&&(this.setSquare(e,!1),t.emit("finish",{nextPlayer:this.state.nextPlayer,squareIndex:e}))}},{key:"handleSocket",value:function(){var e=this,t=this.props.socket;t.on("finish",(function(t){e.setSquare(t.squareIndex,!0)})),t.on("beginGame",(function(t){e.beginGame(t)})),t.on("reset",(function(){e.setState({winner:null,column:k,row:y,square:new Array(k*y),selfIsNext:!1,role:"",otherRole:"",nextPlayer:"",canPlay:!1,reset:!0,upperHand:"",defensive:""})}))}},{key:"setSquare",value:function(e,t){var n=this.state.square;if(!n[e]){n[e]=this.state.selfIsNext?this.state.role:this.state.otherRole;var a="";if(!this.state.winner){if(a=function(e,t,n){var a=null;return[[t,t+1,t+2,t+3,t+4],[t-1,t,t+1,t+2,t+3],[t-2,t-1,t,t+1,t+2],[t-3,t-2,t-1,t,t+1],[t-4,t-3,t-2,t-1,t],[t,t+n,t+n*2,t+n*3,t+n*4],[t-n,t,t+n,t+n*2,t+n*3],[t-n*2,t-n,t,t+n,t+n*2],[t-n*3,t-n*2,t-n,t,t+n],[t-n*4,t-n*3,t-n*2,t-n,t],[t,t+n+1,t+2*(n+1),t+(n+1)*3,t+(n+1)*4],[t-(n+1),t,t+n+1,t+2*(n+1),t+(n+1)*3],[t-(n+1)*2,t-(n+1),t,t+n+1,t+2*(n+1)],[t-(n+1)*3,t-(n+1)*2,t-(n+1),t,t+n+1],[t-(n+1)*4,t-(n+1)*3,t-(n+1)*2,t-(n+1),t],[t,t+n-1,t+2*(n-1),t+(n-1)*3,t+(n-1)*4],[t-(n-1),t,t+n-1,t+2*(n-1),t+(n-1)*3],[t-(n-1)*2,t-(n-1),t,t+n-1,t+2*(n-1)],[t-(n-1)*3,t-(n-1)*2,t-(n-1),t,t+n-1],[t-(n-1)*4,t-(n-1)*3,t-(n-1)*2,t-(n-1),t]].forEach((function(n){var r=n.map((function(t){return e[t]}));""===(r.join(",")+",").replace(new RegExp(r[0]+",","gi"),"")&&(a={winner:e[t],member:n})})),a}(n,e,this.state.row))a.member.forEach((function(e){n[e]="piece-winner"}));else{var r=this.state.nextPlayer===this.state.upperHand?this.state.defensive:this.state.upperHand;this.setState({nextPlayer:r})}this.setState({winner:a,reset:!!a,square:n,canPlay:t,selfIsNext:!this.state.selfIsNext})}}}},{key:"render",value:function(){var e,t=this,n=this.state.winner;return e=n?"winner --- "+n.winner:this.state.reset?"":"\u4e0b\u4e00\u6b65 --- "+(this.state.nextPlayer===b?"\u6211":this.state.nextPlayer),l.a.createElement("div",null,l.a.createElement("p",null,e),this.state.reset?l.a.createElement("p",{className:"text-center"},l.a.createElement(d.a,{inverted:!0,color:"violet",onClick:this.ready},"\u8fdb\u5165\u623f\u95f4",n?"\u91cd\u65b0\u5f00\u59cb":"\u5f00\u59cb")):null,l.a.createElement(j,{square:this.state.square,column:this.state.column,row:this.state.row,onClick:function(e){return t.hanldClick(e)}}))}}]),t}(i.Component),S=JSON.parse(localStorage.getItem("kmr_userInfo")),E=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.createElement("div",null,i.createElement("div",{className:"flex-between"},i.createElement(d.a,{inverted:!0,color:"violet",onClick:function(){return e.props.search()}},"\u8fdb\u5165\u623f\u95f4"),i.createElement(d.a,{inverted:!0,color:"purple",onClick:function(){return e.props.add()}},"\u521b\u5efa\u623f\u95f4")),i.createElement(p.a,{icon:"hand point left outline",iconPosition:"left",label:{tag:!0,content:"Go Fight !"},labelPosition:"right",placeholder:"\u623f\u95f4\u53f7",value:this.props.sendValue,onChange:function(t){return e.props.handelChage(t)}}),i.createElement("p",null,this.props.errorStatus))}}]),t}(i.Component),I=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(s.a)(t).call(this,e))).initSocket=function(e){(g=h()("ws://"+f.a.IP+"/"+e)).on("enter",(function(){n.setState({connectStatus:!0,roomId:e}),g.emit("enter",S.account)}))},n.search=function(){var e,t=n.state.sendValue;t&&(e={roomName:t,defensive:S.account},Object(m.a)({url:"/api/chat/into_room",method:"post",data:e})).then((function(e){200===e.code?n.initSocket(e.data.roomId):console.log(e)}))},n.add=function(){var e,t=n.state.sendValue;t&&(e={upperHand:S.account,roomName:t,roomId:(new Date).getTime()},Object(m.a)({url:"/api/chat/add_room",method:"post",data:e})).then((function(e){200===e.code?n.initSocket(e.data.roomId):console.log(e)}))},n.handelChage=function(e){n.setState({sendValue:e.target.value})},n.state={sendValue:"",errorStatus:"",connectStatus:!1,roomId:""},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return this.state.connectStatus?i.createElement(O,{userInfo:S,roomId:this.state.roomId,socket:g}):i.createElement(E,Object.assign({},this.state,{handelChage:this.handelChage,search:this.search,add:this.add}))}}]),t}(i.Component);t.default=I}}]);
//# sourceMappingURL=13.88dd4dd9.chunk.js.map