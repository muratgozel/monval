define(["exports","basekits"],(function(e,n){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(e){var n={exports:{}};return e(n,n.exports),n.exports}var o=function(e){return e&&e.Math==Math&&e},i=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof t&&t)||function(){return this}()||Function("return this")(),c=function(e){try{return!!e()}catch(e){return!0}},a=!c((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),u={}.propertyIsEnumerable,l=Object.getOwnPropertyDescriptor,f={f:l&&!u.call({1:2},1)?function(e){var n=l(this,e);return!!n&&n.enumerable}:u},s=function(e,n){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:n}},d={}.toString,p=function(e){return d.call(e).slice(8,-1)},h="".split,m=c((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==p(e)?h.call(e,""):Object(e)}:Object,g=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},v=function(e){return m(g(e))},y=function(e){return"object"==typeof e?null!==e:"function"==typeof e},b=function(e,n){if(!y(e))return e;var t,r;if(n&&"function"==typeof(t=e.toString)&&!y(r=t.call(e)))return r;if("function"==typeof(t=e.valueOf)&&!y(r=t.call(e)))return r;if(!n&&"function"==typeof(t=e.toString)&&!y(r=t.call(e)))return r;throw TypeError("Can't convert object to primitive value")},S={}.hasOwnProperty,x=function(e,n){return S.call(e,n)},E=i.document,L=y(E)&&y(E.createElement),w=!a&&!c((function(){return 7!=Object.defineProperty((e="div",L?E.createElement(e):{}),"a",{get:function(){return 7}}).a;var e})),A=Object.getOwnPropertyDescriptor,O={f:a?A:function(e,n){if(e=v(e),n=b(n,!0),w)try{return A(e,n)}catch(e){}if(x(e,n))return s(!f.f.call(e,n),e[n])}},C=function(e){if(!y(e))throw TypeError(String(e)+" is not an object");return e},R=Object.defineProperty,P={f:a?R:function(e,n,t){if(C(e),n=b(n,!0),C(t),w)try{return R(e,n,t)}catch(e){}if("get"in t||"set"in t)throw TypeError("Accessors not supported");return"value"in t&&(e[n]=t.value),e}},N=a?function(e,n,t){return P.f(e,n,s(1,t))}:function(e,n,t){return e[n]=t,e},I=function(e,n){try{N(i,e,n)}catch(t){i[e]=n}return n},F="__core-js_shared__",k=i[F]||I(F,{}),D=Function.toString;"function"!=typeof k.inspectSource&&(k.inspectSource=function(e){return D.call(e)});var T,j,M,U,B=k.inspectSource,_=i.WeakMap,K="function"==typeof _&&/native code/.test(B(_)),$=r((function(e){(e.exports=function(e,n){return k[e]||(k[e]=void 0!==n?n:{})})("versions",[]).push({version:"3.8.1",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),G=0,X=Math.random(),z=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++G+X).toString(36)},Y=$("keys"),W={},Z=i.WeakMap;if(K){var H=k.state||(k.state=new Z),q=H.get,V=H.has,J=H.set;T=function(e,n){return n.facade=e,J.call(H,e,n),n},j=function(e){return q.call(H,e)||{}},M=function(e){return V.call(H,e)}}else{var Q=Y[U="state"]||(Y[U]=z(U));W[Q]=!0,T=function(e,n){return n.facade=e,N(e,Q,n),n},j=function(e){return x(e,Q)?e[Q]:{}},M=function(e){return x(e,Q)}}var ee,ne,te={set:T,get:j,has:M,enforce:function(e){return M(e)?j(e):T(e,{})},getterFor:function(e){return function(n){var t;if(!y(n)||(t=j(n)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return t}}},re=r((function(e){var n=te.get,t=te.enforce,r=String(String).split("String");(e.exports=function(e,n,o,c){var a,u=!!c&&!!c.unsafe,l=!!c&&!!c.enumerable,f=!!c&&!!c.noTargetGet;"function"==typeof o&&("string"!=typeof n||x(o,"name")||N(o,"name",n),(a=t(o)).source||(a.source=r.join("string"==typeof n?n:""))),e!==i?(u?!f&&e[n]&&(l=!0):delete e[n],l?e[n]=o:N(e,n,o)):l?e[n]=o:I(n,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&n(this).source||B(this)}))})),oe=i,ie=function(e){return"function"==typeof e?e:void 0},ce=function(e,n){return arguments.length<2?ie(oe[e])||ie(i[e]):oe[e]&&oe[e][n]||i[e]&&i[e][n]},ae=Math.ceil,ue=Math.floor,le=function(e){return isNaN(e=+e)?0:(e>0?ue:ae)(e)},fe=Math.min,se=function(e){return e>0?fe(le(e),9007199254740991):0},de=Math.max,pe=Math.min,he=function(e){return function(n,t,r){var o,i=v(n),c=se(i.length),a=function(e,n){var t=le(e);return t<0?de(t+n,0):pe(t,n)}(r,c);if(e&&t!=t){for(;c>a;)if((o=i[a++])!=o)return!0}else for(;c>a;a++)if((e||a in i)&&i[a]===t)return e||a||0;return!e&&-1}},me={includes:he(!0),indexOf:he(!1)},ge=me.indexOf,ve=function(e,n){var t,r=v(e),o=0,i=[];for(t in r)!x(W,t)&&x(r,t)&&i.push(t);for(;n.length>o;)x(r,t=n[o++])&&(~ge(i,t)||i.push(t));return i},ye=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],be=ye.concat("length","prototype"),Se={f:Object.getOwnPropertyNames||function(e){return ve(e,be)}},xe={f:Object.getOwnPropertySymbols},Ee=ce("Reflect","ownKeys")||function(e){var n=Se.f(C(e)),t=xe.f;return t?n.concat(t(e)):n},Le=function(e,n){for(var t=Ee(n),r=P.f,o=O.f,i=0;i<t.length;i++){var c=t[i];x(e,c)||r(e,c,o(n,c))}},we=/#|\.prototype\./,Ae=function(e,n){var t=Ce[Oe(e)];return t==Pe||t!=Re&&("function"==typeof n?c(n):!!n)},Oe=Ae.normalize=function(e){return String(e).replace(we,".").toLowerCase()},Ce=Ae.data={},Re=Ae.NATIVE="N",Pe=Ae.POLYFILL="P",Ne=Ae,Ie=O.f,Fe=function(e,n){var t,r,o,c,a,u=e.target,l=e.global,f=e.stat;if(t=l?i:f?i[u]||I(u,{}):(i[u]||{}).prototype)for(r in n){if(c=n[r],o=e.noTargetGet?(a=Ie(t,r))&&a.value:t[r],!Ne(l?r:u+(f?".":"#")+r,e.forced)&&void 0!==o){if(typeof c==typeof o)continue;Le(c,o)}(e.sham||o&&o.sham)&&N(c,"sham",!0),re(t,r,c,e)}},ke=function(e,n,t){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===n)return e;switch(t){case 0:return function(){return e.call(n)};case 1:return function(t){return e.call(n,t)};case 2:return function(t,r){return e.call(n,t,r)};case 3:return function(t,r,o){return e.call(n,t,r,o)}}return function(){return e.apply(n,arguments)}},De=function(e){return Object(g(e))},Te=Array.isArray||function(e){return"Array"==p(e)},je=!!Object.getOwnPropertySymbols&&!c((function(){return!String(Symbol())})),Me=je&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Ue=$("wks"),Be=i.Symbol,_e=Me?Be:Be&&Be.withoutSetter||z,Ke=function(e){return x(Ue,e)||(je&&x(Be,e)?Ue[e]=Be[e]:Ue[e]=_e("Symbol."+e)),Ue[e]},$e=Ke("species"),Ge=function(e,n){var t;return Te(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!Te(t.prototype)?y(t)&&null===(t=t[$e])&&(t=void 0):t=void 0),new(void 0===t?Array:t)(0===n?0:n)},Xe=[].push,ze=function(e){var n=1==e,t=2==e,r=3==e,o=4==e,i=6==e,c=7==e,a=5==e||i;return function(u,l,f,s){for(var d,p,h=De(u),g=m(h),v=ke(l,f,3),y=se(g.length),b=0,S=s||Ge,x=n?S(u,y):t||c?S(u,0):void 0;y>b;b++)if((a||b in g)&&(p=v(d=g[b],b,h),e))if(n)x[b]=p;else if(p)switch(e){case 3:return!0;case 5:return d;case 6:return b;case 2:Xe.call(x,d)}else switch(e){case 4:return!1;case 7:Xe.call(x,d)}return i?-1:r||o?o:x}},Ye={forEach:ze(0),map:ze(1),filter:ze(2),some:ze(3),every:ze(4),find:ze(5),findIndex:ze(6),filterOut:ze(7)},We=ce("navigator","userAgent")||"",Ze=i.process,He=Ze&&Ze.versions,qe=He&&He.v8;qe?ne=(ee=qe.split("."))[0]+ee[1]:We&&(!(ee=We.match(/Edge\/(\d+)/))||ee[1]>=74)&&(ee=We.match(/Chrome\/(\d+)/))&&(ne=ee[1]);var Ve,Je=ne&&+ne,Qe=Ke("species"),en=Object.defineProperty,nn={},tn=function(e){throw e},rn=function(e,n){if(x(nn,e))return nn[e];n||(n={});var t=[][e],r=!!x(n,"ACCESSORS")&&n.ACCESSORS,o=x(n,0)?n[0]:tn,i=x(n,1)?n[1]:void 0;return nn[e]=!!t&&!c((function(){if(r&&!a)return!0;var e={length:-1};r?en(e,1,{enumerable:!0,get:tn}):e[1]=1,t.call(e,o,i)}))},on=Ye.filter,cn=(Ve="filter",Je>=51||!c((function(){var e=[];return(e.constructor={})[Qe]=function(){return{foo:1}},1!==e[Ve](Boolean).foo}))),an=rn("filter");Fe({target:"Array",proto:!0,forced:!cn||!an},{filter:function(e){return on(this,e,arguments.length>1?arguments[1]:void 0)}});var un=me.indexOf,ln=[].indexOf,fn=!!ln&&1/[1].indexOf(1,-0)<0,sn=function(e,n){var t=[][e];return!!t&&c((function(){t.call(null,n||function(){throw 1},1)}))}("indexOf"),dn=rn("indexOf",{ACCESSORS:!0,1:0});Fe({target:"Array",proto:!0,forced:fn||!sn||!dn},{indexOf:function(e){return fn?ln.apply(this,arguments)||0:un(this,e,arguments.length>1?arguments[1]:void 0)}});var pn=P.f,hn=Function.prototype,mn=hn.toString,gn=/^\s*function ([^ (]*)/,vn="name";a&&!(vn in hn)&&pn(hn,vn,{configurable:!0,get:function(){try{return mn.call(this).match(gn)[1]}catch(e){return""}}});var yn="".repeat||function(e){var n=String(g(this)),t="",r=le(e);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(n+=n))1&r&&(t+=n);return t},bn=1..toFixed,Sn=Math.floor,xn=function(e,n,t){return 0===n?t:n%2==1?xn(e,n-1,t*e):xn(e*e,n/2,t)};Fe({target:"Number",proto:!0,forced:bn&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){bn.call({})}))},{toFixed:function(e){var n,t,r,o,i=function(e){if("number"!=typeof e&&"Number"!=p(e))throw TypeError("Incorrect invocation");return+e}(this),c=le(e),a=[0,0,0,0,0,0],u="",l="0",f=function(e,n){for(var t=-1,r=n;++t<6;)r+=e*a[t],a[t]=r%1e7,r=Sn(r/1e7)},s=function(e){for(var n=6,t=0;--n>=0;)t+=a[n],a[n]=Sn(t/e),t=t%e*1e7},d=function(){for(var e=6,n="";--e>=0;)if(""!==n||0===e||0!==a[e]){var t=String(a[e]);n=""===n?t:n+yn.call("0",7-t.length)+t}return n};if(c<0||c>20)throw RangeError("Incorrect fraction digits");if(i!=i)return"NaN";if(i<=-1e21||i>=1e21)return String(i);if(i<0&&(u="-",i=-i),i>1e-21)if(t=(n=function(e){for(var n=0,t=e;t>=4096;)n+=12,t/=4096;for(;t>=2;)n+=1,t/=2;return n}(i*xn(2,69,1))-69)<0?i*xn(2,-n,1):i/xn(2,n,1),t*=4503599627370496,(n=52-n)>0){for(f(0,t),r=c;r>=7;)f(1e7,0),r-=7;for(f(xn(10,r,1),0),r=n-1;r>=23;)s(1<<23),r-=23;s(1<<r),f(1,1),s(2),l=d()}else f(0,t),f(1<<-n,0),l=d()+yn.call("0",c);return l=c>0?u+((o=l.length)<=c?"0."+yn.call("0",c-o)+l:l.slice(0,o-c)+"."+l.slice(o-c)):u+l}});var En=Object.keys||function(e){return ve(e,ye)},Ln=Object.assign,wn=Object.defineProperty,An=!Ln||c((function(){if(a&&1!==Ln({b:1},Ln(wn({},"a",{enumerable:!0,get:function(){wn(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},n={},t=Symbol(),r="abcdefghijklmnopqrst";return e[t]=7,r.split("").forEach((function(e){n[e]=e})),7!=Ln({},e)[t]||En(Ln({},n)).join("")!=r}))?function(e,n){for(var t=De(e),r=arguments.length,o=1,i=xe.f,c=f.f;r>o;)for(var u,l=m(arguments[o++]),s=i?En(l).concat(i(l)):En(l),d=s.length,p=0;d>p;)u=s[p++],a&&!c.call(l,u)||(t[u]=l[u]);return t}:Ln;Fe({target:"Object",stat:!0,forced:Object.assign!==An},{assign:An});var On={};On[Ke("toStringTag")]="z";var Cn="[object z]"===String(On),Rn=Ke("toStringTag"),Pn="Arguments"==p(function(){return arguments}()),Nn=Cn?p:function(e){var n,t,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(t=function(e,n){try{return e[n]}catch(e){}}(n=Object(e),Rn))?t:Pn?p(n):"Object"==(r=p(n))&&"function"==typeof n.callee?"Arguments":r},In=Cn?{}.toString:function(){return"[object "+Nn(this)+"]"};Cn||re(Object.prototype,"toString",In,{unsafe:!0});var Fn="\t\n\v\f\r                　\u2028\u2029\ufeff",kn="["+Fn+"]",Dn=RegExp("^"+kn+kn+"*"),Tn=RegExp(kn+kn+"*$"),jn=function(e){return function(n){var t=String(g(n));return 1&e&&(t=t.replace(Dn,"")),2&e&&(t=t.replace(Tn,"")),t}},Mn={start:jn(1),end:jn(2),trim:jn(3)},Un=Mn.trim,Bn=i.parseFloat,_n=1/Bn(Fn+"-0")!=-1/0?function(e){var n=Un(String(e)),t=Bn(n);return 0===t&&"-"==n.charAt(0)?-0:t}:Bn;Fe({global:!0,forced:parseFloat!=_n},{parseFloat:_n});var Kn=Mn.trim,$n=i.parseInt,Gn=/^[+-]?0[Xx]/,Xn=8!==$n(Fn+"08")||22!==$n(Fn+"0x16")?function(e,n){var t=Kn(String(e));return $n(t,n>>>0||(Gn.test(t)?16:10))}:$n;Fe({global:!0,forced:parseInt!=Xn},{parseInt:Xn});var zn=function(){var e=C(this),n="";return e.global&&(n+="g"),e.ignoreCase&&(n+="i"),e.multiline&&(n+="m"),e.dotAll&&(n+="s"),e.unicode&&(n+="u"),e.sticky&&(n+="y"),n};function Yn(e,n){return RegExp(e,n)}var Wn,Zn,Hn={UNSUPPORTED_Y:c((function(){var e=Yn("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),BROKEN_CARET:c((function(){var e=Yn("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},qn=RegExp.prototype.exec,Vn=String.prototype.replace,Jn=qn,Qn=(Wn=/a/,Zn=/b*/g,qn.call(Wn,"a"),qn.call(Zn,"a"),0!==Wn.lastIndex||0!==Zn.lastIndex),et=Hn.UNSUPPORTED_Y||Hn.BROKEN_CARET,nt=void 0!==/()??/.exec("")[1];(Qn||nt||et)&&(Jn=function(e){var n,t,r,o,i=this,c=et&&i.sticky,a=zn.call(i),u=i.source,l=0,f=e;return c&&(-1===(a=a.replace("y","")).indexOf("g")&&(a+="g"),f=String(e).slice(i.lastIndex),i.lastIndex>0&&(!i.multiline||i.multiline&&"\n"!==e[i.lastIndex-1])&&(u="(?: "+u+")",f=" "+f,l++),t=new RegExp("^(?:"+u+")",a)),nt&&(t=new RegExp("^"+u+"$(?!\\s)",a)),Qn&&(n=i.lastIndex),r=qn.call(c?t:i,f),c?r?(r.input=r.input.slice(l),r[0]=r[0].slice(l),r.index=i.lastIndex,i.lastIndex+=r[0].length):i.lastIndex=0:Qn&&r&&(i.lastIndex=i.global?r.index+r[0].length:n),nt&&r&&r.length>1&&Vn.call(r[0],t,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r});var tt=Jn;Fe({target:"RegExp",proto:!0,forced:/./.exec!==tt},{exec:tt});var rt="toString",ot=RegExp.prototype,it=ot.toString,ct=c((function(){return"/a/b"!=it.call({source:"a",flags:"b"})})),at=it.name!=rt;(ct||at)&&re(RegExp.prototype,rt,(function(){var e=C(this),n=String(e.source),t=e.flags;return"/"+n+"/"+String(void 0===t&&e instanceof RegExp&&!("flags"in ot)?zn.call(e):t)}),{unsafe:!0});var ut=Ke("species"),lt=!c((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),ft="$0"==="a".replace(/./,"$0"),st=Ke("replace"),dt=!!/./[st]&&""===/./[st]("a","$0"),pt=!c((function(){var e=/(?:)/,n=e.exec;e.exec=function(){return n.apply(this,arguments)};var t="ab".split(e);return 2!==t.length||"a"!==t[0]||"b"!==t[1]})),ht=function(e){return function(n,t){var r,o,i=String(g(n)),c=le(t),a=i.length;return c<0||c>=a?e?"":void 0:(r=i.charCodeAt(c))<55296||r>56319||c+1===a||(o=i.charCodeAt(c+1))<56320||o>57343?e?i.charAt(c):r:e?i.slice(c,c+2):o-56320+(r-55296<<10)+65536}},mt={codeAt:ht(!1),charAt:ht(!0)}.charAt,gt=function(e,n,t){return n+(t?mt(e,n).length:1)},vt=function(e,n){var t=e.exec;if("function"==typeof t){var r=t.call(e,n);if("object"!=typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==p(e))throw TypeError("RegExp#exec called on incompatible receiver");return tt.call(e,n)},yt=Math.max,bt=Math.min,St=Math.floor,xt=/\$([$&'`]|\d\d?|<[^>]*>)/g,Et=/\$([$&'`]|\d\d?)/g;!function(e,n,t,r){var o=Ke(e),i=!c((function(){var n={};return n[o]=function(){return 7},7!=""[e](n)})),a=i&&!c((function(){var n=!1,t=/a/;return"split"===e&&((t={}).constructor={},t.constructor[ut]=function(){return t},t.flags="",t[o]=/./[o]),t.exec=function(){return n=!0,null},t[o](""),!n}));if(!i||!a||"replace"===e&&(!lt||!ft||dt)||"split"===e&&!pt){var u=/./[o],l=t(o,""[e],(function(e,n,t,r,o){return n.exec===tt?i&&!o?{done:!0,value:u.call(n,t,r)}:{done:!0,value:e.call(t,n,r)}:{done:!1}}),{REPLACE_KEEPS_$0:ft,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:dt}),f=l[0],s=l[1];re(String.prototype,e,f),re(RegExp.prototype,o,2==n?function(e,n){return s.call(e,this,n)}:function(e){return s.call(e,this)})}r&&N(RegExp.prototype[o],"sham",!0)}("replace",2,(function(e,n,t,r){var o=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,i=r.REPLACE_KEEPS_$0,c=o?"$":"$0";return[function(t,r){var o=g(this),i=null==t?void 0:t[e];return void 0!==i?i.call(t,o,r):n.call(String(o),t,r)},function(e,r){if(!o&&i||"string"==typeof r&&-1===r.indexOf(c)){var u=t(n,e,this,r);if(u.done)return u.value}var l=C(e),f=String(this),s="function"==typeof r;s||(r=String(r));var d=l.global;if(d){var p=l.unicode;l.lastIndex=0}for(var h=[];;){var m=vt(l,f);if(null===m)break;if(h.push(m),!d)break;""===String(m[0])&&(l.lastIndex=gt(f,se(l.lastIndex),p))}for(var g,v="",y=0,b=0;b<h.length;b++){m=h[b];for(var S=String(m[0]),x=yt(bt(le(m.index),f.length),0),E=[],L=1;L<m.length;L++)E.push(void 0===(g=m[L])?g:String(g));var w=m.groups;if(s){var A=[S].concat(E,x,f);void 0!==w&&A.push(w);var O=String(r.apply(void 0,A))}else O=a(S,f,x,E,w,r);x>=y&&(v+=f.slice(y,x)+O,y=x+S.length)}return v+f.slice(y)}];function a(e,t,r,o,i,c){var a=r+e.length,u=o.length,l=Et;return void 0!==i&&(i=De(i),l=xt),n.call(c,l,(function(n,c){var l;switch(c.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(a);case"<":l=i[c.slice(1,-1)];break;default:var f=+c;if(0===f)return n;if(f>u){var s=St(f/10);return 0===s?n:s<=u?void 0===o[s-1]?c.charAt(1):o[s-1]+c.charAt(1):n}l=o[f-1]}return void 0===l?"":l}))}}));var Lt=[{name:"Afgaanse afgani",code:"AFN",num:"971",deciLen:2},{name:"Euro",code:"EUR",num:"978",deciLen:2},{name:"ཨཱལ་ཇི་རི་ཡ་གི་དངུལ་ ཌའི་ནར",code:"DZD",num:"012",deciLen:2},{name:"US Dollar",code:"USD",num:"840",deciLen:2},{name:"East Caribbean Dollar",code:"XCD",num:"951",deciLen:2},{name:"بيزو أرجنتيني",code:"ARS",num:"032",deciLen:2},{name:"የአርመን ድራም",code:"AMD",num:"051",deciLen:2},{name:"Australian Dollar",code:"AUD",num:"036",deciLen:2},{name:"Azərbaycan Manatı",code:"AZN",num:"944",deciLen:2},{name:"Bahamski dolar",code:"BSD",num:"044",deciLen:2},{name:"West African CFA Franc",code:"XOF",num:"952",deciLen:0},{code:"BMD",num:"060",deciLen:2},{code:"BOB",num:"068",deciLen:2},{name:"Norwegian Krone",code:"NOK",num:"578",deciLen:2},{name:"real Brazil",code:"BRL",num:"986",deciLen:2},{name:"ব্রুনেই ডলার",code:"BND",num:"096",deciLen:2},{name:"Български лев",code:"BGN",num:"975",deciLen:2},{name:"Central African CFA Franc",code:"XAF",num:"950",deciLen:0},{name:"dòlar canadenc",code:"CAD",num:"124",deciLen:2},{name:"кайман доллары",code:"KYD",num:"136",deciLen:2},{name:"ហ្វ្រង់​កូម័រ",code:"KMF",num:"174",deciLen:0},{name:"New Zealand Dollar",code:"NZD",num:"554",deciLen:2},{name:"hrvatska kuna",code:"HRK",num:"191",deciLen:2},{name:"Netherlands Antillean Guilder",code:"ANG",num:"532",deciLen:2},{name:"Danish Krone",code:"DKK",num:"208",deciLen:2},{name:"Etioopia birr",code:"ETB",num:"230",deciLen:2},{name:"CFP Franc",code:"XPF",num:"953",deciLen:0},{name:"British Pound",code:"GBP",num:"826",deciLen:2},{name:"magyar forint",code:"HUF",num:"348",deciLen:2},{name:"íslensk króna",code:"ISK",num:"352",deciLen:0},{name:"Rupiah Indonesia",code:"IDR",num:"360",deciLen:2},{name:"Israeli New Shekel",code:"ILS",num:"376",deciLen:2},{code:"KWD",num:"414",deciLen:3},{name:"Libanesescht Pond",code:"LBP",num:"422",deciLen:2},{name:"South African Rand",code:"ZAR",num:"710",deciLen:2},{name:"Swiss Franc",code:"CHF",num:"756",deciLen:2},{name:"Македонски денар",code:"MKD",num:"807",deciLen:2},{name:"Ariary",code:"MGA",num:"969",deciLen:2},{name:"မလေးရှား ရင်းဂစ်",code:"MYR",num:"458",deciLen:2},{name:"मॉरिटानियन ओगिया",code:"MRU",num:"929",deciLen:2},{name:"Монгол төгрөг",code:"MNT",num:"496",deciLen:2},{name:"Moroccan Dirham",code:"MAD",num:"504",deciLen:2},{code:"OMR",num:"512",deciLen:3},{name:"ਪਨਾਮੇਨੀਅਨ ਬਾਲਬੋਆ",code:"PAB",num:"590",deciLen:2},{name:"złoty polski",code:"PLN",num:"985",deciLen:2},{name:"leu românesc",code:"RON",num:"946",deciLen:2},{name:"российский рубль",code:"RUB",num:"643",deciLen:2},{name:null,code:"RWF",num:"646",deciLen:0},{code:"SAR",num:"682",deciLen:2},{name:"sieraleonski leone",code:"SLL",num:"694",deciLen:2},{code:"SGD",num:"702",deciLen:2},{name:"Shilingka Soomaaliya",code:"SOS",num:"706",deciLen:2},{name:"سوڊاني پائونڊ",code:"SDG",num:"938",deciLen:2},{name:"Суринамски долар",code:"SRD",num:"968",deciLen:2},{name:"ruoŧŧa kruvdno",code:"SEK",num:"752",deciLen:2},{name:"บาท",code:"THB",num:"764",deciLen:2},{name:"Paʻanga fakatonga",code:"TOP",num:"776",deciLen:2},{code:"TTD",num:"780",deciLen:2},{name:"Türk Lirası",code:"TRY",num:"949",deciLen:2},{name:"ئۇگاندا شىللىڭى",code:"UGX",num:"800",deciLen:0},{name:"O‘zbekiston so‘mi",code:"UZS",num:"860",deciLen:2},{name:"Unknown Currency",code:"XXX",num:"999",deciLen:null}];function wt(e,t,r){var o=this;this.monval=e,this.value=t,this.currencyCode=r;var i=this.monval.currencyData.filter((function(e){return e.code==o.currencyCode}))[0];this.number=i.num,this.decilen=n.typekit.isNumber(this.monval.config.decilen)?this.monval.config.decilen:i.deciLen,this.nativeName=i.name}function At(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.exchangeRates=null,this.readConfig(e)}wt.prototype.add=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t=n.typekit.isEmpty(t)?this.currencyCode:t;var r=n.typekit.isString(e)&&-1!==e.indexOf("%");if(r){var o=parseFloat(e.replace("%",""));if(n.typekit.isNan(o))throw new Error("Invalid rate.");this.value=this.value+this.value*o/100}else{var i=this.monval.create(e,t);i.currencyCode==this.currencyCode||i.exchange(this.currencyCode),this.value+=i.value}return this},wt.prototype.subtract=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t=n.typekit.isEmpty(t)?this.currencyCode:t;var r=n.typekit.isString(e)&&-1!==e.indexOf("%");if(r){var o=parseFloat(e.replace("%",""));if(n.typekit.isNan(o))throw new Error("Invalid rate.");this.value=this.value-this.value*o/100}else{var i=this.monval.create(e,t);i.currencyCode==this.currencyCode||i.exchange(this.currencyCode),this.value-=i.value}return this},wt.prototype.exchange=function(e){return e=e.toUpperCase(),this.value=this.exchangePure(this.value,e),this.currencyCode=e,this},wt.prototype.exchangePure=function(e,t){if(!n.typekit.isObject(this.monval.exchangeRates))throw new Error("No exchange rate data found.");if(!this.monval.exchangeRates.hasOwnProperty(t))throw new Error('No exchange rate found for "'+t+'"');if(!this.monval.exchangeRates.hasOwnProperty(this.currencyCode))throw new Error('No exchange rate found for "'+this.currencyCode+'"');return e*(this.monval.exchangeRates[t]/this.monval.exchangeRates[this.currencyCode])},wt.prototype.toFixed=function(){return this.monval.round(this.value,this.decilen).toString()},wt.prototype.toFloat=function(){return this.value},wt.prototype.pretty=function(){return(this.monval.currencySymbolUnicodeMap.hasOwnProperty(this.currencyCode)?String.fromCharCode(parseInt(this.monval.currencySymbolUnicodeMap[this.currencyCode],16)):this.currencyCode)+" "+this.toFixed()},wt.prototype.pad=function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0",t=this.toFixed();t.length<e;)t=n+t;return t},At.prototype.currencySymbolUnicodeMap={TRY:"20BA",USD:"0024",EUR:"20ac",GBP:"00A3",JPY:"00A5",AMD:"058F",AFN:"060B",THB:"0E3F",SVC:"20A1",CRC:"20A1",INR:"20B9",BTC:"20BF"},At.prototype.currencyData=Lt,At.prototype.updateExchangeRates=function(e){this.exchangeRates=e},At.prototype.readConfig=function(e){var t=this,r={singleCurrency:!1,decilen:null};if((this.config=n.typekit.isObject(e)?Object.assign({},r,e):r,!1!==this.config.singleCurrency)&&(this.config.singleCurrency=this.config.singleCurrency.toUpperCase(),!this.currencyData.filter((function(e){return e.code==t.config.singleCurrency}))))throw new Error("Invalid singleCurrency. Please provide a valid 3-letter currency code.");if(!n.typekit.isNull(this.config.decilen)&&!n.typekit.isNumber(this.config.decilen))throw new Error("Invalid decilen. Please provide a number.")},At.prototype.create=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(n.typekit.isString(e)&&(e=parseFloat(e)),n.typekit.isNan(e)||!n.typekit.isNumber(e))throw new Error("The value should be a number or float parsable string.");if(!1!==this.config.singleCurrency)t=this.config.singleCurrency;else{var r=this.currencyData.filter((function(e){return e.code==t}));if(!r)throw new Error("Invalid currencyCode. Please provide a valid 3-letter currency code.")}return new wt(this,e,t.toUpperCase())},At.prototype.round=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GAUSSIAN";switch(t){case"GAUSSIAN":var r=e*Math.pow(10,n),o=Math.round(r),i=Math.abs(r)%1==.5?o%2==0?o:o-1:o;return i/Math.pow(10,n);default:throw new Error("Unsupported rounding algorithm.")}},e.Monval=At,Object.defineProperty(e,"__esModule",{value:!0})}));
