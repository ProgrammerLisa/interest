(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[13],{298:function(e,t,n){},454:function(e,t,n){"use strict";n.r(t);var a=n(12),r=n(13),c=n(14),i=n(15),s=n(16),o=n(0),l=n.n(o);n(298);function u(e){return l.a.createElement("button",{className:"square ".concat(e.name),onClick:function(){return e.onClick()}},"board-line"===e.name?l.a.createElement("span",{className:"piece ".concat(e.value)}):"")}var h=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"renderSquare",value:function(e,t){var n=this;return l.a.createElement(u,{key:"square".concat(e),name:t,value:this.props.square[e],onClick:function(){n.props.onClick(e)}})}},{key:"renderRow",value:function(e,t,n){var a=n+1;"board-line"===e&&(a=n);for(var r=[],c=0,i=0;i<t+1;i++){for(var s=[],o=0;o<a;o++)s.push(this.renderSquare(c,e)),c++;r.push(l.a.createElement("div",{className:"board-row",key:"row".concat(i)},s))}return r}},{key:"render",value:function(){return l.a.createElement("div",{className:"board-container"},l.a.createElement("div",{className:"board-border"}),l.a.createElement("div",{className:"board-foundation-container"},this.renderRow("",this.props.column,this.props.row)),l.a.createElement("div",{className:"board-line-container"},this.renderRow("board-line",this.props.column,this.props.row)))}}]),t}(o.Component),m=function(e){function t(e){var n;Object(a.a)(this,t);return(n=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={winner:null,column:20,row:20,square:new Array(400),balckIsNext:!1},n}return Object(s.a)(t,e),Object(r.a)(t,[{key:"hanldClick",value:function(e){var t=this.state.square;if(!t[e]){t[e]=this.state.balckIsNext?"piece-black":"piece-white";var n="";this.state.winner||((n=function(e,t,n){var a=null;return[[t,t+1,t+2,t+3,t+4],[t-1,t,t+1,t+2,t+3],[t-2,t-1,t,t+1,t+2],[t-3,t-2,t-1,t,t+1],[t-4,t-3,t-2,t-1,t],[t,t+n,t+n*2,t+n*3,t+n*4],[t-n,t,t+n,t+n*2,t+n*3],[t-n*2,t-n,t,t+n,t+n*2],[t-n*3,t-n*2,t-n,t,t+n],[t-n*4,t-n*3,t-n*2,t-n,t],[t,t+n+1,t+2*(n+1),t+(n+1)*3,t+(n+1)*4],[t-(n+1),t,t+n+1,t+2*(n+1),t+(n+1)*3],[t-(n+1)*2,t-(n+1),t,t+n+1,t+2*(n+1)],[t-(n+1)*3,t-(n+1)*2,t-(n+1),t,t+n+1],[t-(n+1)*4,t-(n+1)*3,t-(n+1)*2,t-(n+1),t],[t,t+n-1,t+2*(n-1),t+(n-1)*3,t+(n-1)*4],[t-(n-1),t,t+n-1,t+2*(n-1),t+(n-1)*3],[t-(n-1)*2,t-(n-1),t,t+n-1,t+2*(n-1)],[t-(n-1)*3,t-(n-1)*2,t-(n-1),t,t+n-1],[t-(n-1)*4,t-(n-1)*3,t-(n-1)*2,t-(n-1),t]].forEach((function(n){var r=n.map((function(t){return e[t]}));""===(r.join(",")+",").replace(new RegExp(r[0]+",","gi"),"")&&(a={winner:e[t],member:n})})),a}(t,e,this.state.row))&&(console.log(n.member),n.member.forEach((function(e){t[e]="piece-winner"}))),this.setState({winner:n,square:t,balckIsNext:!this.state.balckIsNext}))}}},{key:"render",value:function(){var e,t=this,n=this.state.winner;return e=n?"winner --- "+n.winner:"Next Player --- "+(this.state.balckIsNext?"\u9ed1\u5b50":"\u767d\u5b50"),l.a.createElement("div",null,l.a.createElement("p",null,e),l.a.createElement(h,{square:this.state.square,column:this.state.column,row:this.state.row,onClick:function(e){return t.hanldClick(e)}}))}}]),t}(o.Component);t.default=m}}]);
//# sourceMappingURL=13.c50b2f59.chunk.js.map