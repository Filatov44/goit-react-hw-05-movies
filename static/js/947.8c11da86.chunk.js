"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[947],{947:function(n,t,e){e.r(t),e.d(t,{default:function(){return H}});var r,c,o=e(861),a=e(885),i=e(757),s=e.n(i),u=e(791),p=e(739),l=e(390),f=e(692),d=e(168),g=e(444),h=g.ZP.button(r||(r=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  padding: 5px;\n  margin-bottom: 25px;\n"]))),x=g.ZP.span(c||(c=(0,d.Z)(["\n  margin-left: 10px;\n  padding: 5px;\n  color: blue;\n"]))),v=e(184);function m(n){var t=n.onClick,e=n.label,r=n.arrow;return(0,v.jsxs)(h,{type:"button",onClick:t,children:[r,(0,v.jsx)(x,{children:e})]})}var w,Z,b,j,y,k,P,_,S,z,C,B,F=e(731),U=g.ZP.div(w||(w=(0,d.Z)(["\n    display: flex;\n    margin-bottom: 30px;\n"]))),D=g.ZP.div(Z||(Z=(0,d.Z)(["\n    display: flex;\n    flex-direction: column;\n"]))),Y=g.ZP.div(b||(b=(0,d.Z)(["\n    \n"]))),A=g.ZP.div(j||(j=(0,d.Z)(["\n    margin-right: 25px;\n"]))),O=g.ZP.h2(y||(y=(0,d.Z)(["\n    font-size: 24px;\n    text-align: center;\n    color: blue;\n"]))),T=g.ZP.p(k||(k=(0,d.Z)(["\n  font-weight: 500;\n  margin-top: 25px;\n  margin-bottom: 0;\n"]))),V=g.ZP.p(P||(P=(0,d.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n"]))),E=g.ZP.p(_||(_=(0,d.Z)(["\n    font-size: 20px;\n    font-weight: 500;\n"]))),G=g.ZP.p(S||(S=(0,d.Z)(["\n    font-size: 16px;\n    margin-top: 0;\n    margin-bottom: 0;\n"]))),R=g.ZP.p(z||(z=(0,d.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 20px;\n"]))),$=(0,g.ZP)(F.OL)(C||(C=(0,d.Z)(["\n  text-decoration: none;\n  font-size: 24px;\n  margin-left: 50px;\n  padding-bottom: 20px;\n  color: blue;\n\n  &.active {\n    color: red;\n    /* box-shadow: 0 0 10px 1px #fcbf30; */\n  }\n\n  :hover:not(.active),\n  :focus-visible:not(.active) {\n    color: orange;\n  }\n"]))),q=g.ZP.div(B||(B=(0,d.Z)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    /* justify-content: center; */\n    \n"])));function H(){var n,t=(0,u.useState)({}),e=(0,a.Z)(t,2),r=e[0],c=e[1],i=(0,p.s0)(),d=(0,p.TH)(),g=(0,p.UO)().movieId,h=(null===(n=d.state)||void 0===n?void 0:n.from)||"/";(0,u.useEffect)((function(){var n=function(){var n=(0,o.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,l.gY)(g);case 3:t=n.sent,c(t),console.log(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[g]);var x=r.original_title,w=r.overview,Z=r.genres,b=r.vote_average,j=r.poster_path;return(0,v.jsxs)("div",{children:[(0,v.jsx)(m,{onClick:function(){return i(h)},label:"Go Back",arrow:(0,v.jsx)(f.YiX,{fill:"#FF7F50",size:"24"})}),(0,v.jsxs)(U,{children:[(0,v.jsx)(A,{children:(0,v.jsx)("img",{src:j?"".concat(l.DT).concat(j):"https://www.wikihow.com/images/thumb/f/f7/Be-a-Film-Director-Step-16-Version-2.jpg/aid960853-v4-1200px-Be-a-Film-Director-Step-16-Version-2.jpg",alt:x,width:"300"})}),(0,v.jsxs)(D,{children:[(0,v.jsxs)(O,{children:[x," "]}),(0,v.jsxs)(T,{children:["User Score: ","".concat(function(n){return 10*n+"%"}(b))," "]}),(0,v.jsx)(V,{children:"Overview"}),(0,v.jsx)(G,{children:w}),(0,v.jsx)(E,{children:"Genres:"}),(0,v.jsx)(G,{children:"".concat(function(n){if(n)return n.map((function(n){return n.name})).join(", ")}(Z))})]})]}),(0,v.jsxs)(Y,{children:[(0,v.jsx)(R,{children:"Additional information"}),(0,v.jsxs)(q,{children:[(0,v.jsx)($,{state:h,to:"cast",children:"Cast"}),(0,v.jsx)($,{state:h,to:"reviews",children:"Rewiews"})]})]}),(0,v.jsx)(p.j3,{})]})}},390:function(n,t,e){e.d(t,{$C:function(){return k},$f:function(){return p},DT:function(){return l},Ei:function(){return f},Pd:function(){return _},R8:function(){return Z},YQ:function(){return u},gY:function(){return j},oV:function(){return m}});var r=e(861),c=e(757),o=e.n(c),a=e(44),i="https://api.themoviedb.org/3",s="b2e346a99b15e55caecd14435e9b588f",u="https://image.tmdb.org/t/p/w342/",p="https://image.tmdb.org/t/p/w185/",l="https://image.tmdb.org/t/p/w500/",f="https://www.wikihow.com/images/thumb/f/fb/Become-an-Actor-Step-23.jpg/aid117991-v4-1200px-Become-an-Actor-Step-23.jpg",d="".concat(i,"/trending/movie/day"),g="".concat(i,"/search/movie"),h="".concat(i,"/movie/"),x="".concat(i,"/movie/"),v="".concat(i,"/movie/");function m(){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.ZP.get("".concat(d,"?api_key=").concat(s));case 3:return t=n.sent,console.log(t),n.abrupt("return",t.data.results);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function Z(n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.ZP.get("".concat(g,"?api_key=").concat(s,"&query=").concat(t,"&include_adult=false"));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function j(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.ZP.get("".concat(h).concat(t,"?api_key=").concat(s,"&language=en-US"));case 3:return e=n.sent,console.log(e),n.abrupt("return",e.data);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function k(n){return P.apply(this,arguments)}function P(){return(P=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.ZP.get("".concat(x).concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return e=n.sent,console.log(e),n.abrupt("return",e.data.cast);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function _(n){return S.apply(this,arguments)}function S(){return(S=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a.ZP.get("".concat(v).concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 3:return e=n.sent,console.log(e),n.abrupt("return",e.data.results);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=947.8c11da86.chunk.js.map