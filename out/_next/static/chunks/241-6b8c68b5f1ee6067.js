(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[241],{1657:function(e,t,o){"use strict";o.d(t,{Z:function(){return e7}});var r,n,i,a,s,l=o(3366),p=o(7462),u=o(7294),c=o(6010),f=o(4780),d=o(238),m=o(1796),h=o(3562),v=o(2097),g=o(5959),y=o(6622),b=o(1760),w=o(432),x=o(6600),O=o(7094);function T(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Z(e){var t=T(e).Element;return e instanceof t||e instanceof Element}function P(e){var t=T(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function E(e){if("undefined"==typeof ShadowRoot)return!1;var t=T(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var R=Math.max,M=Math.min,j=Math.round;function k(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function L(){return!/^((?!chrome|android).)*safari/i.test(k())}function C(e,t,o){void 0===t&&(t=!1),void 0===o&&(o=!1);var r=e.getBoundingClientRect(),n=1,i=1;t&&P(e)&&(n=e.offsetWidth>0&&j(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&j(r.height)/e.offsetHeight||1);var a=(Z(e)?T(e):window).visualViewport,s=!L()&&o,l=(r.left+(s&&a?a.offsetLeft:0))/n,p=(r.top+(s&&a?a.offsetTop:0))/i,u=r.width/n,c=r.height/i;return{width:u,height:c,top:p,right:l+u,bottom:p+c,left:l,x:l,y:p}}function S(e){var t=T(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function D(e){return e?(e.nodeName||"").toLowerCase():null}function A(e){return((Z(e)?e.ownerDocument:e.document)||window.document).documentElement}function B(e){return C(A(e)).left+S(e).scrollLeft}function W(e){return T(e).getComputedStyle(e)}function _(e){var t=W(e),o=t.overflow,r=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(o+n+r)}function H(e){var t=C(e),o=e.offsetWidth,r=e.offsetHeight;return 1>=Math.abs(t.width-o)&&(o=t.width),1>=Math.abs(t.height-r)&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:o,height:r}}function I(e){return"html"===D(e)?e:e.assignedSlot||e.parentNode||(E(e)?e.host:null)||A(e)}function N(e,t){void 0===t&&(t=[]);var o,r=function e(t){return["html","body","#document"].indexOf(D(t))>=0?t.ownerDocument.body:P(t)&&_(t)?t:e(I(t))}(e),n=r===(null==(o=e.ownerDocument)?void 0:o.body),i=T(r),a=n?[i].concat(i.visualViewport||[],_(r)?r:[]):r,s=t.concat(a);return n?s:s.concat(N(I(a)))}function U(e){return P(e)&&"fixed"!==W(e).position?e.offsetParent:null}function F(e){for(var t=T(e),o=U(e);o&&["table","td","th"].indexOf(D(o))>=0&&"static"===W(o).position;)o=U(o);return o&&("html"===D(o)||"body"===D(o)&&"static"===W(o).position)?t:o||function(e){var t=/firefox/i.test(k());if(/Trident/i.test(k())&&P(e)&&"fixed"===W(e).position)return null;var o=I(e);for(E(o)&&(o=o.host);P(o)&&0>["html","body"].indexOf(D(o));){var r=W(o);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return o;o=o.parentNode}return null}(e)||t}var q="bottom",V="right",$="left",z="auto",K=["top",q,V,$],X="start",Y="viewport",G="popper",J=K.reduce(function(e,t){return e.concat([t+"-"+X,t+"-end"])},[]),Q=[].concat(K,[z]).reduce(function(e,t){return e.concat([t,t+"-"+X,t+"-end"])},[]),ee=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"],et={placement:"bottom",modifiers:[],strategy:"absolute"};function eo(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}var er={passive:!0};function en(e){return e.split("-")[0]}function ei(e){return e.split("-")[1]}function ea(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function es(e){var t,o=e.reference,r=e.element,n=e.placement,i=n?en(n):null,a=n?ei(n):null,s=o.x+o.width/2-r.width/2,l=o.y+o.height/2-r.height/2;switch(i){case"top":t={x:s,y:o.y-r.height};break;case q:t={x:s,y:o.y+o.height};break;case V:t={x:o.x+o.width,y:l};break;case $:t={x:o.x-r.width,y:l};break;default:t={x:o.x,y:o.y}}var p=i?ea(i):null;if(null!=p){var u="y"===p?"height":"width";switch(a){case X:t[p]=t[p]-(o[u]/2-r[u]/2);break;case"end":t[p]=t[p]+(o[u]/2-r[u]/2)}}return t}var el={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ep(e){var t,o,r,n,i,a,s=e.popper,l=e.popperRect,p=e.placement,u=e.variation,c=e.offsets,f=e.position,d=e.gpuAcceleration,m=e.adaptive,h=e.roundOffsets,v=e.isFixed,g=c.x,y=void 0===g?0:g,b=c.y,w=void 0===b?0:b,x="function"==typeof h?h({x:y,y:w}):{x:y,y:w};y=x.x,w=x.y;var O=c.hasOwnProperty("x"),Z=c.hasOwnProperty("y"),P=$,E="top",R=window;if(m){var M=F(s),k="clientHeight",L="clientWidth";M===T(s)&&"static"!==W(M=A(s)).position&&"absolute"===f&&(k="scrollHeight",L="scrollWidth"),("top"===p||(p===$||p===V)&&"end"===u)&&(E=q,w-=(v&&M===R&&R.visualViewport?R.visualViewport.height:M[k])-l.height,w*=d?1:-1),(p===$||("top"===p||p===q)&&"end"===u)&&(P=V,y-=(v&&M===R&&R.visualViewport?R.visualViewport.width:M[L])-l.width,y*=d?1:-1)}var C=Object.assign({position:f},m&&el),S=!0===h?(o=(t={x:y,y:w}).x,r=t.y,{x:j(o*(n=window.devicePixelRatio||1))/n||0,y:j(r*n)/n||0}):{x:y,y:w};return(y=S.x,w=S.y,d)?Object.assign({},C,((a={})[E]=Z?"0":"",a[P]=O?"0":"",a.transform=1>=(R.devicePixelRatio||1)?"translate("+y+"px, "+w+"px)":"translate3d("+y+"px, "+w+"px, 0)",a)):Object.assign({},C,((i={})[E]=Z?w+"px":"",i[P]=O?y+"px":"",i.transform="",i))}var eu={left:"right",right:"left",bottom:"top",top:"bottom"};function ec(e){return e.replace(/left|right|bottom|top/g,function(e){return eu[e]})}var ef={start:"end",end:"start"};function ed(e){return e.replace(/start|end/g,function(e){return ef[e]})}function em(e,t){var o=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(o&&E(o)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function eh(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ev(e,t,o){var r,n,i,a,s,l,p,u,c,f;return t===Y?eh(function(e,t){var o=T(e),r=A(e),n=o.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,l=0;if(n){i=n.width,a=n.height;var p=L();(p||!p&&"fixed"===t)&&(s=n.offsetLeft,l=n.offsetTop)}return{width:i,height:a,x:s+B(e),y:l}}(e,o)):Z(t)?((r=C(t,!1,"fixed"===o)).top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r):eh((n=A(e),a=A(n),s=S(n),l=null==(i=n.ownerDocument)?void 0:i.body,p=R(a.scrollWidth,a.clientWidth,l?l.scrollWidth:0,l?l.clientWidth:0),u=R(a.scrollHeight,a.clientHeight,l?l.scrollHeight:0,l?l.clientHeight:0),c=-s.scrollLeft+B(n),f=-s.scrollTop,"rtl"===W(l||a).direction&&(c+=R(a.clientWidth,l?l.clientWidth:0)-p),{width:p,height:u,x:c,y:f}))}function eg(){return{top:0,right:0,bottom:0,left:0}}function ey(e){return Object.assign({},eg(),e)}function eb(e,t){return t.reduce(function(t,o){return t[o]=e,t},{})}function ew(e,t){void 0===t&&(t={});var o,r,n,i,a,s,l,p=t,u=p.placement,c=void 0===u?e.placement:u,f=p.strategy,d=void 0===f?e.strategy:f,m=p.boundary,h=p.rootBoundary,v=p.elementContext,g=void 0===v?G:v,y=p.altBoundary,b=p.padding,w=void 0===b?0:b,x=ey("number"!=typeof w?w:eb(w,K)),O=e.rects.popper,T=e.elements[void 0!==y&&y?g===G?"reference":G:g],E=(o=Z(T)?T:T.contextElement||A(e.elements.popper),s=(a=[].concat("clippingParents"===(r=void 0===m?"clippingParents":m)?(n=N(I(o)),Z(i=["absolute","fixed"].indexOf(W(o).position)>=0&&P(o)?F(o):o)?n.filter(function(e){return Z(e)&&em(e,i)&&"body"!==D(e)}):[]):[].concat(r),[void 0===h?Y:h]))[0],(l=a.reduce(function(e,t){var r=ev(o,t,d);return e.top=R(r.top,e.top),e.right=M(r.right,e.right),e.bottom=M(r.bottom,e.bottom),e.left=R(r.left,e.left),e},ev(o,s,d))).width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l),j=C(e.elements.reference),k=es({reference:j,element:O,strategy:"absolute",placement:c}),L=eh(Object.assign({},O,k)),S=g===G?L:j,B={top:E.top-S.top+x.top,bottom:S.bottom-E.bottom+x.bottom,left:E.left-S.left+x.left,right:S.right-E.right+x.right},_=e.modifiersData.offset;if(g===G&&_){var H=_[c];Object.keys(B).forEach(function(e){var t=[V,q].indexOf(e)>=0?1:-1,o=["top",q].indexOf(e)>=0?"y":"x";B[e]+=H[o]*t})}return B}function ex(e,t,o){return R(e,M(t,o))}function eO(e,t,o){return void 0===o&&(o={x:0,y:0}),{top:e.top-t.height-o.y,right:e.right-t.width+o.x,bottom:e.bottom-t.height+o.y,left:e.left-t.width-o.x}}function eT(e){return["top",V,q,$].some(function(t){return e[t]>=0})}var eZ=(i=void 0===(n=(r={defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,o=e.instance,r=e.options,n=r.scroll,i=void 0===n||n,a=r.resize,s=void 0===a||a,l=T(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&p.forEach(function(e){e.addEventListener("scroll",o.update,er)}),s&&l.addEventListener("resize",o.update,er),function(){i&&p.forEach(function(e){e.removeEventListener("scroll",o.update,er)}),s&&l.removeEventListener("resize",o.update,er)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,o=e.name;t.modifiersData[o]=es({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,o=e.options,r=o.gpuAcceleration,n=o.adaptive,i=o.roundOffsets,a=void 0===i||i,s={placement:en(t.placement),variation:ei(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:void 0===r||r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ep(Object.assign({},s,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:void 0===n||n,roundOffsets:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ep(Object.assign({},s,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var o=t.styles[e]||{},r=t.attributes[e]||{},n=t.elements[e];P(n)&&D(n)&&(Object.assign(n.style,o),Object.keys(r).forEach(function(e){var t=r[e];!1===t?n.removeAttribute(e):n.setAttribute(e,!0===t?"":t)}))})},effect:function(e){var t=e.state,o={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,o.popper),t.styles=o,t.elements.arrow&&Object.assign(t.elements.arrow.style,o.arrow),function(){Object.keys(t.elements).forEach(function(e){var r=t.elements[e],n=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:o[e]).reduce(function(e,t){return e[t]="",e},{});P(r)&&D(r)&&(Object.assign(r.style,i),Object.keys(n).forEach(function(e){r.removeAttribute(e)}))})}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,o=e.options,r=e.name,n=o.offset,i=void 0===n?[0,0]:n,a=Q.reduce(function(e,o){var r,n,a,s,l,p;return e[o]=(r=t.rects,a=[$,"top"].indexOf(n=en(o))>=0?-1:1,l=(s="function"==typeof i?i(Object.assign({},r,{placement:o})):i)[0],p=s[1],l=l||0,p=(p||0)*a,[$,V].indexOf(n)>=0?{x:p,y:l}:{x:l,y:p}),e},{}),s=a[t.placement],l=s.x,p=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=p),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,o=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var n=o.mainAxis,i=void 0===n||n,a=o.altAxis,s=void 0===a||a,l=o.fallbackPlacements,p=o.padding,u=o.boundary,c=o.rootBoundary,f=o.altBoundary,d=o.flipVariations,m=void 0===d||d,h=o.allowedAutoPlacements,v=t.options.placement,g=en(v),y=[v].concat(l||(g!==v&&m?function(e){if(en(e)===z)return[];var t=ec(e);return[ed(e),t,ed(t)]}(v):[ec(v)])).reduce(function(e,o){var r,n,i,a,s,l,f,d,v,g,y,b;return e.concat(en(o)===z?(n=(r={placement:o,boundary:u,rootBoundary:c,padding:p,flipVariations:m,allowedAutoPlacements:h}).placement,i=r.boundary,a=r.rootBoundary,s=r.padding,l=r.flipVariations,d=void 0===(f=r.allowedAutoPlacements)?Q:f,0===(y=(g=(v=ei(n))?l?J:J.filter(function(e){return ei(e)===v}):K).filter(function(e){return d.indexOf(e)>=0})).length&&(y=g),Object.keys(b=y.reduce(function(e,o){return e[o]=ew(t,{placement:o,boundary:i,rootBoundary:a,padding:s})[en(o)],e},{})).sort(function(e,t){return b[e]-b[t]})):o)},[]),b=t.rects.reference,w=t.rects.popper,x=new Map,O=!0,T=y[0],Z=0;Z<y.length;Z++){var P=y[Z],E=en(P),R=ei(P)===X,M=["top",q].indexOf(E)>=0,j=M?"width":"height",k=ew(t,{placement:P,boundary:u,rootBoundary:c,altBoundary:f,padding:p}),L=M?R?V:$:R?q:"top";b[j]>w[j]&&(L=ec(L));var C=ec(L),S=[];if(i&&S.push(k[E]<=0),s&&S.push(k[L]<=0,k[C]<=0),S.every(function(e){return e})){T=P,O=!1;break}x.set(P,S)}if(O)for(var D=m?3:1,A=function(e){var t=y.find(function(t){var o=x.get(t);if(o)return o.slice(0,e).every(function(e){return e})});if(t)return T=t,"break"},B=D;B>0&&"break"!==A(B);B--);t.placement!==T&&(t.modifiersData[r]._skip=!0,t.placement=T,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,o=e.options,r=e.name,n=o.mainAxis,i=o.altAxis,a=o.boundary,s=o.rootBoundary,l=o.altBoundary,p=o.padding,u=o.tether,c=void 0===u||u,f=o.tetherOffset,d=void 0===f?0:f,m=ew(t,{boundary:a,rootBoundary:s,padding:p,altBoundary:l}),h=en(t.placement),v=ei(t.placement),g=!v,y=ea(h),b="x"===y?"y":"x",w=t.modifiersData.popperOffsets,x=t.rects.reference,O=t.rects.popper,T="function"==typeof d?d(Object.assign({},t.rects,{placement:t.placement})):d,Z="number"==typeof T?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),P=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,E={x:0,y:0};if(w){if(void 0===n||n){var j,k="y"===y?"top":$,L="y"===y?q:V,C="y"===y?"height":"width",S=w[y],D=S+m[k],A=S-m[L],B=c?-O[C]/2:0,W=v===X?x[C]:O[C],_=v===X?-O[C]:-x[C],I=t.elements.arrow,N=c&&I?H(I):{width:0,height:0},U=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:eg(),z=U[k],K=U[L],Y=ex(0,x[C],N[C]),G=g?x[C]/2-B-Y-z-Z.mainAxis:W-Y-z-Z.mainAxis,J=g?-x[C]/2+B+Y+K+Z.mainAxis:_+Y+K+Z.mainAxis,Q=t.elements.arrow&&F(t.elements.arrow),ee=Q?"y"===y?Q.clientTop||0:Q.clientLeft||0:0,et=null!=(j=null==P?void 0:P[y])?j:0,eo=ex(c?M(D,S+G-et-ee):D,S,c?R(A,S+J-et):A);w[y]=eo,E[y]=eo-S}if(void 0!==i&&i){var er,es,el=w[b],ep="y"===b?"height":"width",eu=el+m["x"===y?"top":$],ec=el-m["x"===y?q:V],ef=-1!==["top",$].indexOf(h),ed=null!=(er=null==P?void 0:P[b])?er:0,em=ef?eu:el-x[ep]-O[ep]-ed+Z.altAxis,eh=ef?el+x[ep]+O[ep]-ed-Z.altAxis:ec,ev=c&&ef?(es=ex(em,el,eh))>eh?eh:es:ex(c?em:eu,el,c?eh:ec);w[b]=ev,E[b]=ev-el}t.modifiersData[r]=E}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,o,r=e.state,n=e.name,i=e.options,a=r.elements.arrow,s=r.modifiersData.popperOffsets,l=en(r.placement),p=ea(l),u=[$,V].indexOf(l)>=0?"height":"width";if(a&&s){var c=ey("number"!=typeof(t="function"==typeof(t=i.padding)?t(Object.assign({},r.rects,{placement:r.placement})):t)?t:eb(t,K)),f=H(a),d=r.rects.reference[u]+r.rects.reference[p]-s[p]-r.rects.popper[u],m=s[p]-r.rects.reference[p],h=F(a),v=h?"y"===p?h.clientHeight||0:h.clientWidth||0:0,g=c["y"===p?"top":$],y=v-f[u]-c["y"===p?q:V],b=v/2-f[u]/2+(d/2-m/2),w=ex(g,b,y);r.modifiersData[n]=((o={})[p]=w,o.centerOffset=w-b,o)}},effect:function(e){var t=e.state,o=e.options.element,r=void 0===o?"[data-popper-arrow]":o;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&em(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,o=e.name,r=t.rects.reference,n=t.rects.popper,i=t.modifiersData.preventOverflow,a=ew(t,{elementContext:"reference"}),s=ew(t,{altBoundary:!0}),l=eO(a,r),p=eO(s,n,i),u=eT(l),c=eT(p);t.modifiersData[o]={referenceClippingOffsets:l,popperEscapeOffsets:p,isReferenceHidden:u,hasPopperEscaped:c},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":c})}}]}).defaultModifiers)?[]:n,s=void 0===(a=r.defaultOptions)?et:a,function(e,t,o){void 0===o&&(o=s);var r,n={placement:"bottom",orderedModifiers:[],options:Object.assign({},et,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],l=!1,p={state:n,setOptions:function(o){var r,l,c,f,d,m="function"==typeof o?o(n.options):o;u(),n.options=Object.assign({},s,n.options,m),n.scrollParents={reference:Z(e)?N(e):e.contextElement?N(e.contextElement):[],popper:N(t)};var h=(l=Object.keys(r=[].concat(i,n.options.modifiers).reduce(function(e,t){var o=e[t.name];return e[t.name]=o?Object.assign({},o,t,{options:Object.assign({},o.options,t.options),data:Object.assign({},o.data,t.data)}):t,e},{})).map(function(e){return r[e]}),c=new Map,f=new Set,d=[],l.forEach(function(e){c.set(e.name,e)}),l.forEach(function(e){f.has(e.name)||function e(t){f.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){if(!f.has(t)){var o=c.get(t);o&&e(o)}}),d.push(t)}(e)}),ee.reduce(function(e,t){return e.concat(d.filter(function(e){return e.phase===t}))},[]));return n.orderedModifiers=h.filter(function(e){return e.enabled}),n.orderedModifiers.forEach(function(e){var t=e.name,o=e.options,r=e.effect;if("function"==typeof r){var i=r({state:n,name:t,instance:p,options:void 0===o?{}:o}),s=function(){};a.push(i||s)}}),p.update()},forceUpdate:function(){if(!l){var e,t,o,r,i,a,s,u,c,f,d,m,h=n.elements,v=h.reference,g=h.popper;if(eo(v,g)){n.rects={reference:(t=F(g),o="fixed"===n.options.strategy,r=P(t),u=P(t)&&(a=j((i=t.getBoundingClientRect()).width)/t.offsetWidth||1,s=j(i.height)/t.offsetHeight||1,1!==a||1!==s),c=A(t),f=C(v,u,o),d={scrollLeft:0,scrollTop:0},m={x:0,y:0},(r||!r&&!o)&&(("body"!==D(t)||_(c))&&(d=(e=t)!==T(e)&&P(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:S(e)),P(t)?(m=C(t,!0),m.x+=t.clientLeft,m.y+=t.clientTop):c&&(m.x=B(c))),{x:f.left+d.scrollLeft-m.x,y:f.top+d.scrollTop-m.y,width:f.width,height:f.height}),popper:H(g)},n.reset=!1,n.placement=n.options.placement,n.orderedModifiers.forEach(function(e){return n.modifiersData[e.name]=Object.assign({},e.data)});for(var y=0;y<n.orderedModifiers.length;y++){if(!0===n.reset){n.reset=!1,y=-1;continue}var b=n.orderedModifiers[y],w=b.fn,x=b.options,O=void 0===x?{}:x,Z=b.name;"function"==typeof w&&(n=w({state:n,options:O,name:Z,instance:p})||n)}}}},update:function(){return r||(r=new Promise(function(e){Promise.resolve().then(function(){r=void 0,e(new Promise(function(e){p.forceUpdate(),e(n)}))})})),r},destroy:function(){u(),l=!0}};if(!eo(e,t))return p;function u(){a.forEach(function(e){return e()}),a=[]}return p.setOptions(o).then(function(e){!l&&o.onFirstUpdate&&o.onFirstUpdate(e)}),p}),eP=o(8385),eE=o(7621),eR=o(1588);function eM(e){return(0,eE.Z)("MuiPopperUnstyled",e)}(0,eR.Z)("MuiPopperUnstyled",["root"]);var ej=o(8793),ek=o(5893);let eL=["anchorEl","children","component","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","slotProps","slots","TransitionProps"],eC=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function eS(e){return"function"==typeof e?e():e}let eD=()=>(0,f.Z)({root:["root"]},eM,{}),eA={},eB=u.forwardRef(function(e,t){var o;let{anchorEl:r,children:n,component:i,direction:a,disablePortal:s,modifiers:c,open:f,ownerState:d,placement:m,popperOptions:h,popperRef:v,slotProps:g={},slots:y={},TransitionProps:b}=e,O=(0,l.Z)(e,eL),T=u.useRef(null),Z=(0,w.Z)(T,t),P=u.useRef(null),E=(0,w.Z)(P,v),R=u.useRef(E);(0,x.Z)(()=>{R.current=E},[E]),u.useImperativeHandle(v,()=>P.current,[]);let M=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(m,a),[j,k]=u.useState(M);u.useEffect(()=>{P.current&&P.current.forceUpdate()}),(0,x.Z)(()=>{if(!r||!f)return;let e=e=>{k(e.placement)};eS(r);let t=[{name:"preventOverflow",options:{altBoundary:s}},{name:"flip",options:{altBoundary:s}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn({state:t}){e(t)}}];null!=c&&(t=t.concat(c)),h&&null!=h.modifiers&&(t=t.concat(h.modifiers));let o=eZ(eS(r),T.current,(0,p.Z)({placement:M},h,{modifiers:t}));return R.current(o),()=>{o.destroy(),R.current(null)}},[r,s,c,f,h,M]);let L={placement:j};null!==b&&(L.TransitionProps=b);let C=eD(),S=null!=(o=null!=i?i:y.root)?o:"div",D=(0,ej.Z)({elementType:S,externalSlotProps:g.root,externalForwardedProps:O,additionalProps:{role:"tooltip",ref:Z},ownerState:(0,p.Z)({},e,d),className:C.root});return(0,ek.jsx)(S,(0,p.Z)({},D,{children:"function"==typeof n?n(L):n}))}),eW=u.forwardRef(function(e,t){let{anchorEl:o,children:r,container:n,direction:i="ltr",disablePortal:a=!1,keepMounted:s=!1,modifiers:c,open:f,placement:d="bottom",popperOptions:m=eA,popperRef:h,style:v,transition:g=!1}=e,y=(0,l.Z)(e,eC),[b,w]=u.useState(!0),x=()=>{w(!1)},T=()=>{w(!0)};if(!s&&!f&&(!g||b))return null;let Z=n||(o?(0,O.Z)(eS(o)).body:void 0);return(0,ek.jsx)(eP.Z,{disablePortal:a,container:Z,children:(0,ek.jsx)(eB,(0,p.Z)({anchorEl:o,direction:i,disablePortal:a,modifiers:c,ref:t,open:g?!b:f,placement:d,popperOptions:m,popperRef:h},y,{style:(0,p.Z)({position:"fixed",top:0,left:0,display:!f&&s&&(!g||b)?"none":null},v),TransitionProps:g?{in:f,onEnter:x,onExited:T}:null,children:r}))})});var e_=o(433);let eH=["components","componentsProps","slots","slotProps"],eI=(0,h.ZP)(eW,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),eN=u.forwardRef(function(e,t){var o;let r=(0,e_.Z)(),n=(0,g.Z)({props:e,name:"MuiPopper"}),{components:i,componentsProps:a,slots:s,slotProps:u}=n,c=(0,l.Z)(n,eH),f=null!=(o=null==s?void 0:s.root)?o:null==i?void 0:i.Root;return(0,ek.jsx)(eI,(0,p.Z)({direction:null==r?void 0:r.direction,slots:{root:f},slotProps:null!=u?u:a},c,{ref:t}))});var eU=o(6432),eF=o(4771),eq=o(7579).Z,eV=o(1625),e$=o(4591);function ez(e){return(0,eE.Z)("MuiTooltip",e)}let eK=(0,eR.Z)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),eX=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"],eY=e=>{let{classes:t,disableInteractive:o,arrow:r,touch:n,placement:i}=e,a={popper:["popper",!o&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",n&&"touch",`tooltipPlacement${(0,y.Z)(i.split("-")[0])}`],arrow:["arrow"]};return(0,f.Z)(a,ez,t)},eG=(0,h.ZP)(eN,{name:"MuiTooltip",slot:"Popper",overridesResolver(e,t){let{ownerState:o}=e;return[t.popper,!o.disableInteractive&&t.popperInteractive,o.arrow&&t.popperArrow,!o.open&&t.popperClose]}})(({theme:e,ownerState:t,open:o})=>(0,p.Z)({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!o&&{pointerEvents:"none"},t.arrow&&{[`&[data-popper-placement*="bottom"] .${eK.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${eK.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${eK.arrow}`]:(0,p.Z)({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${eK.arrow}`]:(0,p.Z)({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),eJ=(0,h.ZP)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver(e,t){let{ownerState:o}=e;return[t.tooltip,o.touch&&t.touch,o.arrow&&t.tooltipArrow,t[`tooltipPlacement${(0,y.Z)(o.placement.split("-")[0])}`]]}})(({theme:e,ownerState:t})=>(0,p.Z)({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:(0,m.Fq)(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${Math.round(1e5*(16/14))/1e5}em`,fontWeight:e.typography.fontWeightRegular},{[`.${eK.popper}[data-popper-placement*="left"] &`]:(0,p.Z)({transformOrigin:"right center"},t.isRtl?(0,p.Z)({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):(0,p.Z)({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[`.${eK.popper}[data-popper-placement*="right"] &`]:(0,p.Z)({transformOrigin:"left center"},t.isRtl?(0,p.Z)({marginRight:"14px"},t.touch&&{marginRight:"24px"}):(0,p.Z)({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[`.${eK.popper}[data-popper-placement*="top"] &`]:(0,p.Z)({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[`.${eK.popper}[data-popper-placement*="bottom"] &`]:(0,p.Z)({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})})),eQ=(0,h.ZP)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:(0,m.Fq)(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}})),e0=!1,e1=null;function e2(e,t){return o=>{t&&t(o),e(o)}}let e4=u.forwardRef(function(e,t){var o,r,n,i,a,s,f,m,h,y,w,x,O,T,Z,P,E,R,M;let j=(0,g.Z)({props:e,name:"MuiTooltip"}),{arrow:k=!1,children:L,components:C={},componentsProps:S={},describeChild:D=!1,disableFocusListener:A=!1,disableHoverListener:B=!1,disableInteractive:W=!1,disableTouchListener:_=!1,enterDelay:H=100,enterNextDelay:I=0,enterTouchDelay:N=700,followCursor:U=!1,id:F,leaveDelay:q=0,leaveTouchDelay:V=1500,onClose:$,onOpen:z,open:K,placement:X="bottom",PopperComponent:Y,PopperProps:G={},slotProps:J={},slots:Q={},title:ee,TransitionComponent:et=b.Z,TransitionProps:eo}=j,er=(0,l.Z)(j,eX),en=(0,v.Z)(),ei="rtl"===en.direction,[ea,es]=u.useState(),[el,ep]=u.useState(null),eu=u.useRef(!1),ec=W||U,ef=u.useRef(),ed=u.useRef(),em=u.useRef(),eh=u.useRef(),[ev,eg]=(0,e$.Z)({controlled:K,default:!1,name:"Tooltip",state:"open"}),ey=ev,eb=eq(F),ew=u.useRef(),ex=u.useCallback(()=>{void 0!==ew.current&&(document.body.style.WebkitUserSelect=ew.current,ew.current=void 0),clearTimeout(eh.current)},[]);u.useEffect(()=>()=>{clearTimeout(ef.current),clearTimeout(ed.current),clearTimeout(em.current),ex()},[ex]);let eO=e=>{clearTimeout(e1),e0=!0,eg(!0),z&&!ey&&z(e)},eT=(0,eU.Z)(e=>{clearTimeout(e1),e1=setTimeout(()=>{e0=!1},800+q),eg(!1),$&&ey&&$(e),clearTimeout(ef.current),ef.current=setTimeout(()=>{eu.current=!1},en.transitions.duration.shortest)}),eZ=e=>{eu.current&&"touchstart"!==e.type||(ea&&ea.removeAttribute("title"),clearTimeout(ed.current),clearTimeout(em.current),H||e0&&I?ed.current=setTimeout(()=>{eO(e)},e0?I:H):eO(e))},eP=e=>{clearTimeout(ed.current),clearTimeout(em.current),em.current=setTimeout(()=>{eT(e)},q)},{isFocusVisibleRef:eE,onBlur:eR,onFocus:eM,ref:ej}=(0,eV.Z)(),[,eL]=u.useState(!1),eC=e=>{eR(e),!1===eE.current&&(eL(!1),eP(e))},eS=e=>{ea||es(e.currentTarget),eM(e),!0===eE.current&&(eL(!0),eZ(e))},eD=e=>{eu.current=!0;let t=L.props;t.onTouchStart&&t.onTouchStart(e)},eA=e=>{eD(e),clearTimeout(em.current),clearTimeout(ef.current),ex(),ew.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",eh.current=setTimeout(()=>{document.body.style.WebkitUserSelect=ew.current,eZ(e)},N)},eB=e=>{L.props.onTouchEnd&&L.props.onTouchEnd(e),ex(),clearTimeout(em.current),em.current=setTimeout(()=>{eT(e)},V)};u.useEffect(()=>{if(ey)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){("Escape"===e.key||"Esc"===e.key)&&eT(e)}},[eT,ey]);let eW=(0,eF.Z)(L.ref,ej,es,t);ee||0===ee||(ey=!1);let e_=u.useRef({x:0,y:0}),eH=u.useRef(),eI=e=>{let t=L.props;t.onMouseMove&&t.onMouseMove(e),e_.current={x:e.clientX,y:e.clientY},eH.current&&eH.current.update()},ez={},eK="string"==typeof ee;D?(ez.title=ey||!eK||B?null:ee,ez["aria-describedby"]=ey?eb:null):(ez["aria-label"]=eK?ee:null,ez["aria-labelledby"]=ey&&!eK?eb:null);let e4=(0,p.Z)({},ez,er,L.props,{className:(0,c.Z)(er.className,L.props.className),onTouchStart:eD,ref:eW},U?{onMouseMove:eI}:{}),e7={};_||(e4.onTouchStart=eA,e4.onTouchEnd=eB),B||(e4.onMouseOver=e2(eZ,e4.onMouseOver),e4.onMouseLeave=e2(eP,e4.onMouseLeave),ec||(e7.onMouseOver=eZ,e7.onMouseLeave=eP)),A||(e4.onFocus=e2(eS,e4.onFocus),e4.onBlur=e2(eC,e4.onBlur),ec||(e7.onFocus=eS,e7.onBlur=eC));let e6=u.useMemo(()=>{var e;let t=[{name:"arrow",enabled:Boolean(el),options:{element:el,padding:4}}];return null!=(e=G.popperOptions)&&e.modifiers&&(t=t.concat(G.popperOptions.modifiers)),(0,p.Z)({},G.popperOptions,{modifiers:t})},[el,G]),e5=(0,p.Z)({},j,{isRtl:ei,arrow:k,disableInteractive:ec,placement:X,PopperComponentProp:Y,touch:eu.current}),e9=eY(e5),e3=null!=(o=null!=(r=Q.popper)?r:C.Popper)?o:eG,e8=null!=(n=null!=(i=null!=(a=Q.transition)?a:C.Transition)?i:et)?n:b.Z,te=null!=(s=null!=(f=Q.tooltip)?f:C.Tooltip)?s:eJ,tt=null!=(m=null!=(h=Q.arrow)?h:C.Arrow)?m:eQ,to=(0,d.Z)(e3,(0,p.Z)({},G,null!=(y=J.popper)?y:S.popper,{className:(0,c.Z)(e9.popper,null==G?void 0:G.className,null==(w=null!=(x=J.popper)?x:S.popper)?void 0:w.className)}),e5),tr=(0,d.Z)(e8,(0,p.Z)({},eo,null!=(O=J.transition)?O:S.transition),e5),tn=(0,d.Z)(te,(0,p.Z)({},null!=(T=J.tooltip)?T:S.tooltip,{className:(0,c.Z)(e9.tooltip,null==(Z=null!=(P=J.tooltip)?P:S.tooltip)?void 0:Z.className)}),e5),ti=(0,d.Z)(tt,(0,p.Z)({},null!=(E=J.arrow)?E:S.arrow,{className:(0,c.Z)(e9.arrow,null==(R=null!=(M=J.arrow)?M:S.arrow)?void 0:R.className)}),e5);return(0,ek.jsxs)(u.Fragment,{children:[u.cloneElement(L,e4),(0,ek.jsx)(e3,(0,p.Z)({as:null!=Y?Y:eN,placement:X,anchorEl:U?{getBoundingClientRect:()=>({top:e_.current.y,left:e_.current.x,right:e_.current.x,bottom:e_.current.y,width:0,height:0})}:ea,popperRef:eH,open:!!ea&&ey,id:eb,transition:!0},e7,to,{popperOptions:e6,children:({TransitionProps:e})=>(0,ek.jsx)(e8,(0,p.Z)({timeout:en.transitions.duration.shorter},e,tr,{"data-foo":"bar",children:(0,ek.jsxs)(te,(0,p.Z)({},tn,{children:[ee,k?(0,ek.jsx)(tt,(0,p.Z)({},ti,{ref:ep})):null]}))}))}))]})});var e7=e4},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(2648).Z,n=o(7273).Z,i=r(o(7294)),a=o(1003),s=o(7795),l=o(4465),p=o(2692),u=o(8245),c=o(9246),f=o(227),d=o(3468);let m=new Set;function h(e,t,o,r){if(a.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let n=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,i=t+"%"+o+"%"+n;if(m.has(i))return;m.add(i)}Promise.resolve(e.prefetch(t,o,r)).catch(e=>{})}}function v(e){return"string"==typeof e?e:s.formatUrl(e)}let g=i.default.forwardRef(function(e,t){let o,r;let{href:s,as:m,children:g,prefetch:y,passHref:b,replace:w,shallow:x,scroll:O,locale:T,onClick:Z,onMouseEnter:P,onTouchStart:E,legacyBehavior:R=!0!==Boolean(!0)}=e,M=n(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=g,R&&("string"==typeof o||"number"==typeof o)&&(o=i.default.createElement("a",null,o));let j=!1!==y,k=i.default.useContext(p.RouterContext),L=i.default.useContext(u.AppRouterContext),C=null!=k?k:L,S=!k,{href:D,as:A}=i.default.useMemo(()=>{if(!k){let e=v(s);return{href:e,as:m?v(m):e}}let[t,o]=a.resolveHref(k,s,!0);return{href:t,as:m?a.resolveHref(k,m):o||t}},[k,s,m]),B=i.default.useRef(D),W=i.default.useRef(A);R&&(r=i.default.Children.only(o));let _=R?r&&"object"==typeof r&&r.ref:t,[H,I,N]=c.useIntersection({rootMargin:"200px"}),U=i.default.useCallback(e=>{(W.current!==A||B.current!==D)&&(N(),W.current=A,B.current=D),H(e),_&&("function"==typeof _?_(e):"object"==typeof _&&(_.current=e))},[A,_,D,N,H]);i.default.useEffect(()=>{C&&I&&j&&h(C,D,A,{locale:T})},[A,D,I,T,j,null==k?void 0:k.locale,C]);let F={ref:U,onClick(e){R||"function"!=typeof Z||Z(e),R&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),C&&!e.defaultPrevented&&function(e,t,o,r,n,s,l,p,u,c){let{nodeName:f}=e.currentTarget,d="A"===f.toUpperCase();if(d&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(o)))return;e.preventDefault();let m=()=>{"beforePopState"in t?t[n?"replace":"push"](o,r,{shallow:s,locale:p,scroll:l}):t[n?"replace":"push"](r||o,{forceOptimisticNavigation:!c})};u?i.default.startTransition(m):m()}(e,C,D,A,w,x,O,T,S,j)},onMouseEnter(e){R||"function"!=typeof P||P(e),R&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),C&&(j||!S)&&h(C,D,A,{locale:T,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){R||"function"!=typeof E||E(e),R&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),C&&(j||!S)&&h(C,D,A,{locale:T,priority:!0,bypassPrefetchedCheck:!0})}};if(!R||b||"a"===r.type&&!("href"in r.props)){let q=void 0!==T?T:null==k?void 0:k.locale,V=(null==k?void 0:k.isLocaleDomain)&&f.getDomainLocale(A,q,null==k?void 0:k.locales,null==k?void 0:k.domainLocales);F.href=V||d.addBasePath(l.addLocale(A,q,null==k?void 0:k.defaultLocale))}return R?i.default.cloneElement(r,F):i.default.createElement("a",Object.assign({},M,F),o)});t.default=g,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:o,disabled:l}=e,p=l||!i,[u,c]=r.useState(!1),[f,d]=r.useState(null);r.useEffect(()=>{if(i){if(!p&&!u&&f&&f.tagName){let e=function(e,t,o){let{id:r,observer:n,elements:i}=function(e){let t;let o={root:e.root||null,margin:e.rootMargin||""},r=s.find(e=>e.root===o.root&&e.margin===o.margin);if(r&&(t=a.get(r)))return t;let n=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e);return t={id:o,observer:i,elements:n},s.push(o),a.set(o,t),t}(o);return i.set(e,t),n.observe(e),function(){if(i.delete(e),n.unobserve(e),0===i.size){n.disconnect(),a.delete(r);let t=s.findIndex(e=>e.root===r.root&&e.margin===r.margin);t>-1&&s.splice(t,1)}}}(f,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:o});return e}}else if(!u){let r=n.requestIdleCallback(()=>c(!0));return()=>n.cancelIdleCallback(r)}},[f,p,o,t,u]);let m=r.useCallback(()=>{c(!1)},[]);return[d,u,m]};var r=o(7294),n=o(4686);let i="function"==typeof IntersectionObserver,a=new Map,s=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,o){e.exports=o(1551)}}]);