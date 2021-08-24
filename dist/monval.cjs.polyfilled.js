"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("basekits"),n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e){var n={exports:{}};return e(n,n.exports),n.exports}var r=function(e){return e&&e.Math==Math&&e},o=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||function(){return this}()||Function("return this")(),i=function(e){try{return!!e()}catch(e){return!0}},c=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a={}.propertyIsEnumerable,u=Object.getOwnPropertyDescriptor,l={f:u&&!a.call({1:2},1)?function(e){var n=u(this,e);return!!n&&n.enumerable}:a},f=function(e,n){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:n}},s={}.toString,d=function(e){return s.call(e).slice(8,-1)},p="".split,h=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==d(e)?p.call(e,""):Object(e)}:Object,g=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},v=function(e){return h(g(e))},m=function(e){return"object"==typeof e?null!==e:"function"==typeof e},y=function(e,n){if(!m(e))return e;var t,r;if(n&&"function"==typeof(t=e.toString)&&!m(r=t.call(e)))return r;if("function"==typeof(t=e.valueOf)&&!m(r=t.call(e)))return r;if(!n&&"function"==typeof(t=e.toString)&&!m(r=t.call(e)))return r;throw TypeError("Can't convert object to primitive value")},b={}.hasOwnProperty,S=function(e,n){return b.call(e,n)},x=o.document,E=m(x)&&m(x.createElement),O=function(e){return E?x.createElement(e):{}},A=!c&&!i((function(){return 7!=Object.defineProperty(O("div"),"a",{get:function(){return 7}}).a})),w=Object.getOwnPropertyDescriptor,L={f:c?w:function(e,n){if(e=v(e),n=y(n,!0),A)try{return w(e,n)}catch(e){}if(S(e,n))return f(!l.f.call(e,n),e[n])}},C=function(e){if(!m(e))throw TypeError(String(e)+" is not an object");return e},N=Object.defineProperty,I={f:c?N:function(e,n,t){if(C(e),n=y(n,!0),C(t),A)try{return N(e,n,t)}catch(e){}if("get"in t||"set"in t)throw TypeError("Accessors not supported");return"value"in t&&(e[n]=t.value),e}},R=c?function(e,n,t){return I.f(e,n,f(1,t))}:function(e,n,t){return e[n]=t,e},j=function(e,n){try{R(o,e,n)}catch(t){o[e]=n}return n},P=o["__core-js_shared__"]||j("__core-js_shared__",{}),F=Function.toString;"function"!=typeof P.inspectSource&&(P.inspectSource=function(e){return F.call(e)});var T,_,k,D=P.inspectSource,M=o.WeakMap,U="function"==typeof M&&/native code/.test(D(M)),B=t((function(e){(e.exports=function(e,n){return P[e]||(P[e]=void 0!==n?n:{})})("versions",[]).push({version:"3.8.1",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),G=0,K=Math.random(),$=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++G+K).toString(36)},X=B("keys"),Y=function(e){return X[e]||(X[e]=$(e))},z={},W=o.WeakMap;if(U){var V=P.state||(P.state=new W),Z=V.get,H=V.has,q=V.set;T=function(e,n){return n.facade=e,q.call(V,e,n),n},_=function(e){return Z.call(V,e)||{}},k=function(e){return H.call(V,e)}}else{var J=Y("state");z[J]=!0,T=function(e,n){return n.facade=e,R(e,J,n),n},_=function(e){return S(e,J)?e[J]:{}},k=function(e){return S(e,J)}}var Q,ee,ne={set:T,get:_,has:k,enforce:function(e){return k(e)?_(e):T(e,{})},getterFor:function(e){return function(n){var t;if(!m(n)||(t=_(n)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return t}}},te=t((function(e){var n=ne.get,t=ne.enforce,r=String(String).split("String");(e.exports=function(e,n,i,c){var a,u=!!c&&!!c.unsafe,l=!!c&&!!c.enumerable,f=!!c&&!!c.noTargetGet;"function"==typeof i&&("string"!=typeof n||S(i,"name")||R(i,"name",n),(a=t(i)).source||(a.source=r.join("string"==typeof n?n:""))),e!==o?(u?!f&&e[n]&&(l=!0):delete e[n],l?e[n]=i:R(e,n,i)):l?e[n]=i:j(n,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&n(this).source||D(this)}))})),re=o,oe=function(e){return"function"==typeof e?e:void 0},ie=function(e,n){return arguments.length<2?oe(re[e])||oe(o[e]):re[e]&&re[e][n]||o[e]&&o[e][n]},ce=Math.ceil,ae=Math.floor,ue=function(e){return isNaN(e=+e)?0:(e>0?ae:ce)(e)},le=Math.min,fe=function(e){return e>0?le(ue(e),9007199254740991):0},se=Math.max,de=Math.min,pe=function(e){return function(n,t,r){var o,i=v(n),c=fe(i.length),a=function(e,n){var t=ue(e);return t<0?se(t+n,0):de(t,n)}(r,c);if(e&&t!=t){for(;c>a;)if((o=i[a++])!=o)return!0}else for(;c>a;a++)if((e||a in i)&&i[a]===t)return e||a||0;return!e&&-1}},he={includes:pe(!0),indexOf:pe(!1)},ge=he.indexOf,ve=function(e,n){var t,r=v(e),o=0,i=[];for(t in r)!S(z,t)&&S(r,t)&&i.push(t);for(;n.length>o;)S(r,t=n[o++])&&(~ge(i,t)||i.push(t));return i},me=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ye=me.concat("length","prototype"),be={f:Object.getOwnPropertyNames||function(e){return ve(e,ye)}},Se={f:Object.getOwnPropertySymbols},xe=ie("Reflect","ownKeys")||function(e){var n=be.f(C(e)),t=Se.f;return t?n.concat(t(e)):n},Ee=function(e,n){for(var t=xe(n),r=I.f,o=L.f,i=0;i<t.length;i++){var c=t[i];S(e,c)||r(e,c,o(n,c))}},Oe=/#|\.prototype\./,Ae=function(e,n){var t=Le[we(e)];return t==Ne||t!=Ce&&("function"==typeof n?i(n):!!n)},we=Ae.normalize=function(e){return String(e).replace(Oe,".").toLowerCase()},Le=Ae.data={},Ce=Ae.NATIVE="N",Ne=Ae.POLYFILL="P",Ie=Ae,Re=L.f,je=function(e,n){var t,r,i,c,a,u=e.target,l=e.global,f=e.stat;if(t=l?o:f?o[u]||j(u,{}):(o[u]||{}).prototype)for(r in n){if(c=n[r],i=e.noTargetGet?(a=Re(t,r))&&a.value:t[r],!Ie(l?r:u+(f?".":"#")+r,e.forced)&&void 0!==i){if(typeof c==typeof i)continue;Ee(c,i)}(e.sham||i&&i.sham)&&R(c,"sham",!0),te(t,r,c,e)}},Pe=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e},Fe=function(e){return Object(g(e))},Te=Array.isArray||function(e){return"Array"==d(e)},_e=!!Object.getOwnPropertySymbols&&!i((function(){return!String(Symbol())})),ke=_e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,De=B("wks"),Me=o.Symbol,Ue=ke?Me:Me&&Me.withoutSetter||$,Be=function(e){return S(De,e)||(_e&&S(Me,e)?De[e]=Me[e]:De[e]=Ue("Symbol."+e)),De[e]},Ge=Be("species"),Ke=function(e,n){var t;return Te(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!Te(t.prototype)?m(t)&&null===(t=t[Ge])&&(t=void 0):t=void 0),new(void 0===t?Array:t)(0===n?0:n)},$e=[].push,Xe=function(e){var n=1==e,t=2==e,r=3==e,o=4==e,i=6==e,c=7==e,a=5==e||i;return function(u,l,f,s){for(var d,p,g=Fe(u),v=h(g),m=function(e,n,t){if(Pe(e),void 0===n)return e;switch(t){case 0:return function(){return e.call(n)};case 1:return function(t){return e.call(n,t)};case 2:return function(t,r){return e.call(n,t,r)};case 3:return function(t,r,o){return e.call(n,t,r,o)}}return function(){return e.apply(n,arguments)}}(l,f,3),y=fe(v.length),b=0,S=s||Ke,x=n?S(u,y):t||c?S(u,0):void 0;y>b;b++)if((a||b in v)&&(p=m(d=v[b],b,g),e))if(n)x[b]=p;else if(p)switch(e){case 3:return!0;case 5:return d;case 6:return b;case 2:$e.call(x,d)}else switch(e){case 4:return!1;case 7:$e.call(x,d)}return i?-1:r||o?o:x}},Ye={forEach:Xe(0),map:Xe(1),filter:Xe(2),some:Xe(3),every:Xe(4),find:Xe(5),findIndex:Xe(6),filterOut:Xe(7)},ze=ie("navigator","userAgent")||"",We=o.process,Ve=We&&We.versions,Ze=Ve&&Ve.v8;Ze?ee=(Q=Ze.split("."))[0]+Q[1]:ze&&(!(Q=ze.match(/Edge\/(\d+)/))||Q[1]>=74)&&(Q=ze.match(/Chrome\/(\d+)/))&&(ee=Q[1]);var He=ee&&+ee,qe=Be("species"),Je=function(e){return He>=51||!i((function(){var n=[];return(n.constructor={})[qe]=function(){return{foo:1}},1!==n[e](Boolean).foo}))},Qe=Object.defineProperty,en={},nn=function(e){throw e},tn=function(e,n){if(S(en,e))return en[e];n||(n={});var t=[][e],r=!!S(n,"ACCESSORS")&&n.ACCESSORS,o=S(n,0)?n[0]:nn,a=S(n,1)?n[1]:void 0;return en[e]=!!t&&!i((function(){if(r&&!c)return!0;var e={length:-1};r?Qe(e,1,{enumerable:!0,get:nn}):e[1]=1,t.call(e,o,a)}))},rn=Ye.filter,on=Je("filter"),cn=tn("filter");je({target:"Array",proto:!0,forced:!on||!cn},{filter:function(e){return rn(this,e,arguments.length>1?arguments[1]:void 0)}});var an=function(e,n){var t=[][e];return!!t&&i((function(){t.call(null,n||function(){throw 1},1)}))},un=he.indexOf,ln=[].indexOf,fn=!!ln&&1/[1].indexOf(1,-0)<0,sn=an("indexOf"),dn=tn("indexOf",{ACCESSORS:!0,1:0});je({target:"Array",proto:!0,forced:fn||!sn||!dn},{indexOf:function(e){return fn?ln.apply(this,arguments)||0:un(this,e,arguments.length>1?arguments[1]:void 0)}});var pn=[].join,hn=h!=Object,gn=an("join",",");je({target:"Array",proto:!0,forced:hn||!gn},{join:function(e){return pn.call(v(this),void 0===e?",":e)}});var vn=Ye.map,mn=Je("map"),yn=tn("map");je({target:"Array",proto:!0,forced:!mn||!yn},{map:function(e){return vn(this,e,arguments.length>1?arguments[1]:void 0)}});var bn=I.f,Sn=Function.prototype,xn=Sn.toString,En=/^\s*function ([^ (]*)/;c&&!("name"in Sn)&&bn(Sn,"name",{configurable:!0,get:function(){try{return xn.call(this).match(En)[1]}catch(e){return""}}});var On,An=Object.setPrototypeOf||("__proto__"in{}?function(){var e,n=!1,t={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(t,[]),n=t instanceof Array}catch(e){}return function(t,r){return C(t),function(e){if(!m(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype")}(r),n?e.call(t,r):t.__proto__=r,t}}():void 0),wn=function(e,n,t){var r,o;return An&&"function"==typeof(r=n.constructor)&&r!==t&&m(o=r.prototype)&&o!==t.prototype&&An(e,o),e},Ln=Object.keys||function(e){return ve(e,me)},Cn=c?Object.defineProperties:function(e,n){C(e);for(var t,r=Ln(n),o=r.length,i=0;o>i;)I.f(e,t=r[i++],n[t]);return e},Nn=ie("document","documentElement"),In=Y("IE_PROTO"),Rn=function(){},jn=function(e){return"<script>"+e+"<\/script>"},Pn=function(){try{On=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e,n;Pn=On?function(e){e.write(jn("")),e.close();var n=e.parentWindow.Object;return e=null,n}(On):((n=O("iframe")).style.display="none",Nn.appendChild(n),n.src=String("javascript:"),(e=n.contentWindow.document).open(),e.write(jn("document.F=Object")),e.close(),e.F);for(var t=me.length;t--;)delete Pn.prototype[me[t]];return Pn()};z[In]=!0;var Fn=Object.create||function(e,n){var t;return null!==e?(Rn.prototype=C(e),t=new Rn,Rn.prototype=null,t[In]=e):t=Pn(),void 0===n?t:Cn(t,n)},Tn="\t\n\v\f\r                　\u2028\u2029\ufeff",_n="["+Tn+"]",kn=RegExp("^"+_n+_n+"*"),Dn=RegExp(_n+_n+"*$"),Mn=function(e){return function(n){var t=String(g(n));return 1&e&&(t=t.replace(kn,"")),2&e&&(t=t.replace(Dn,"")),t}},Un={start:Mn(1),end:Mn(2),trim:Mn(3)},Bn=be.f,Gn=L.f,Kn=I.f,$n=Un.trim,Xn=o.Number,Yn=Xn.prototype,zn="Number"==d(Fn(Yn)),Wn=function(e){var n,t,r,o,i,c,a,u,l=y(e,!1);if("string"==typeof l&&l.length>2)if(43===(n=(l=$n(l)).charCodeAt(0))||45===n){if(88===(t=l.charCodeAt(2))||120===t)return NaN}else if(48===n){switch(l.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+l}for(c=(i=l.slice(2)).length,a=0;a<c;a++)if((u=i.charCodeAt(a))<48||u>o)return NaN;return parseInt(i,r)}return+l};if(Ie("Number",!Xn(" 0o1")||!Xn("0b1")||Xn("+0x1"))){for(var Vn,Zn=function(e){var n=arguments.length<1?0:e,t=this;return t instanceof Zn&&(zn?i((function(){Yn.valueOf.call(t)})):"Number"!=d(t))?wn(new Xn(Wn(n)),t,Zn):Wn(n)},Hn=c?Bn(Xn):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),qn=0;Hn.length>qn;qn++)S(Xn,Vn=Hn[qn])&&!S(Zn,Vn)&&Kn(Zn,Vn,Gn(Xn,Vn));Zn.prototype=Yn,Yn.constructor=Zn,te(o,"Number",Zn)}var Jn=Math.floor;je({target:"Number",stat:!0},{isInteger:function(e){return!m(e)&&isFinite(e)&&Jn(e)===e}});var Qn="".repeat||function(e){var n=String(g(this)),t="",r=ue(e);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(n+=n))1&r&&(t+=n);return t},et=1..toFixed,nt=Math.floor,tt=function(e,n,t){return 0===n?t:n%2==1?tt(e,n-1,t*e):tt(e*e,n/2,t)};je({target:"Number",proto:!0,forced:et&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!i((function(){et.call({})}))},{toFixed:function(e){var n,t,r,o,i=function(e){if("number"!=typeof e&&"Number"!=d(e))throw TypeError("Incorrect invocation");return+e}(this),c=ue(e),a=[0,0,0,0,0,0],u="",l="0",f=function(e,n){for(var t=-1,r=n;++t<6;)r+=e*a[t],a[t]=r%1e7,r=nt(r/1e7)},s=function(e){for(var n=6,t=0;--n>=0;)t+=a[n],a[n]=nt(t/e),t=t%e*1e7},p=function(){for(var e=6,n="";--e>=0;)if(""!==n||0===e||0!==a[e]){var t=String(a[e]);n=""===n?t:n+Qn.call("0",7-t.length)+t}return n};if(c<0||c>20)throw RangeError("Incorrect fraction digits");if(i!=i)return"NaN";if(i<=-1e21||i>=1e21)return String(i);if(i<0&&(u="-",i=-i),i>1e-21)if(t=(n=function(e){for(var n=0,t=e;t>=4096;)n+=12,t/=4096;for(;t>=2;)n+=1,t/=2;return n}(i*tt(2,69,1))-69)<0?i*tt(2,-n,1):i/tt(2,n,1),t*=4503599627370496,(n=52-n)>0){for(f(0,t),r=c;r>=7;)f(1e7,0),r-=7;for(f(tt(10,r,1),0),r=n-1;r>=23;)s(1<<23),r-=23;s(1<<r),f(1,1),s(2),l=p()}else f(0,t),f(1<<-n,0),l=p()+Qn.call("0",c);return l=c>0?u+((o=l.length)<=c?"0."+Qn.call("0",c-o)+l:l.slice(0,o-c)+"."+l.slice(o-c)):u+l}});var rt=Object.assign,ot=Object.defineProperty,it=!rt||i((function(){if(c&&1!==rt({b:1},rt(ot({},"a",{enumerable:!0,get:function(){ot(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},n={},t=Symbol(),r="abcdefghijklmnopqrst";return e[t]=7,r.split("").forEach((function(e){n[e]=e})),7!=rt({},e)[t]||Ln(rt({},n)).join("")!=r}))?function(e,n){for(var t=Fe(e),r=arguments.length,o=1,i=Se.f,a=l.f;r>o;)for(var u,f=h(arguments[o++]),s=i?Ln(f).concat(i(f)):Ln(f),d=s.length,p=0;d>p;)u=s[p++],c&&!a.call(f,u)||(t[u]=f[u]);return t}:rt;je({target:"Object",stat:!0,forced:Object.assign!==it},{assign:it});var ct={};ct[Be("toStringTag")]="z";var at="[object z]"===String(ct),ut=Be("toStringTag"),lt="Arguments"==d(function(){return arguments}()),ft=at?d:function(e){var n,t,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(t=function(e,n){try{return e[n]}catch(e){}}(n=Object(e),ut))?t:lt?d(n):"Object"==(r=d(n))&&"function"==typeof n.callee?"Arguments":r},st=at?{}.toString:function(){return"[object "+ft(this)+"]"};at||te(Object.prototype,"toString",st,{unsafe:!0});var dt=Un.trim,pt=o.parseFloat,ht=1/pt(Tn+"-0")!=-1/0?function(e){var n=dt(String(e)),t=pt(n);return 0===t&&"-"==n.charAt(0)?-0:t}:pt;je({global:!0,forced:parseFloat!=ht},{parseFloat:ht});var gt=Un.trim,vt=o.parseInt,mt=/^[+-]?0[Xx]/,yt=8!==vt(Tn+"08")||22!==vt(Tn+"0x16")?function(e,n){var t=gt(String(e));return vt(t,n>>>0||(mt.test(t)?16:10))}:vt;je({global:!0,forced:parseInt!=yt},{parseInt:yt});var bt=function(){var e=C(this),n="";return e.global&&(n+="g"),e.ignoreCase&&(n+="i"),e.multiline&&(n+="m"),e.dotAll&&(n+="s"),e.unicode&&(n+="u"),e.sticky&&(n+="y"),n};function St(e,n){return RegExp(e,n)}var xt,Et,Ot={UNSUPPORTED_Y:i((function(){var e=St("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),BROKEN_CARET:i((function(){var e=St("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},At=RegExp.prototype.exec,wt=String.prototype.replace,Lt=At,Ct=(xt=/a/,Et=/b*/g,At.call(xt,"a"),At.call(Et,"a"),0!==xt.lastIndex||0!==Et.lastIndex),Nt=Ot.UNSUPPORTED_Y||Ot.BROKEN_CARET,It=void 0!==/()??/.exec("")[1];(Ct||It||Nt)&&(Lt=function(e){var n,t,r,o,i=this,c=Nt&&i.sticky,a=bt.call(i),u=i.source,l=0,f=e;return c&&(-1===(a=a.replace("y","")).indexOf("g")&&(a+="g"),f=String(e).slice(i.lastIndex),i.lastIndex>0&&(!i.multiline||i.multiline&&"\n"!==e[i.lastIndex-1])&&(u="(?: "+u+")",f=" "+f,l++),t=new RegExp("^(?:"+u+")",a)),It&&(t=new RegExp("^"+u+"$(?!\\s)",a)),Ct&&(n=i.lastIndex),r=At.call(c?t:i,f),c?r?(r.input=r.input.slice(l),r[0]=r[0].slice(l),r.index=i.lastIndex,i.lastIndex+=r[0].length):i.lastIndex=0:Ct&&r&&(i.lastIndex=i.global?r.index+r[0].length:n),It&&r&&r.length>1&&wt.call(r[0],t,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r});var Rt=Lt;je({target:"RegExp",proto:!0,forced:/./.exec!==Rt},{exec:Rt});var jt=RegExp.prototype,Pt=jt.toString,Ft=i((function(){return"/a/b"!=Pt.call({source:"a",flags:"b"})})),Tt="toString"!=Pt.name;(Ft||Tt)&&te(RegExp.prototype,"toString",(function(){var e=C(this),n=String(e.source),t=e.flags;return"/"+n+"/"+String(void 0===t&&e instanceof RegExp&&!("flags"in jt)?bt.call(e):t)}),{unsafe:!0});var _t=Be("species"),kt=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),Dt="$0"==="a".replace(/./,"$0"),Mt=Be("replace"),Ut=!!/./[Mt]&&""===/./[Mt]("a","$0"),Bt=!i((function(){var e=/(?:)/,n=e.exec;e.exec=function(){return n.apply(this,arguments)};var t="ab".split(e);return 2!==t.length||"a"!==t[0]||"b"!==t[1]})),Gt=function(e,n,t,r){var o=Be(e),c=!i((function(){var n={};return n[o]=function(){return 7},7!=""[e](n)})),a=c&&!i((function(){var n=!1,t=/a/;return"split"===e&&((t={}).constructor={},t.constructor[_t]=function(){return t},t.flags="",t[o]=/./[o]),t.exec=function(){return n=!0,null},t[o](""),!n}));if(!c||!a||"replace"===e&&(!kt||!Dt||Ut)||"split"===e&&!Bt){var u=/./[o],l=t(o,""[e],(function(e,n,t,r,o){return n.exec===Rt?c&&!o?{done:!0,value:u.call(n,t,r)}:{done:!0,value:e.call(t,n,r)}:{done:!1}}),{REPLACE_KEEPS_$0:Dt,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:Ut}),f=l[0],s=l[1];te(String.prototype,e,f),te(RegExp.prototype,o,2==n?function(e,n){return s.call(e,this,n)}:function(e){return s.call(e,this)})}r&&R(RegExp.prototype[o],"sham",!0)},Kt=function(e){return function(n,t){var r,o,i=String(g(n)),c=ue(t),a=i.length;return c<0||c>=a?e?"":void 0:(r=i.charCodeAt(c))<55296||r>56319||c+1===a||(o=i.charCodeAt(c+1))<56320||o>57343?e?i.charAt(c):r:e?i.slice(c,c+2):o-56320+(r-55296<<10)+65536}},$t={codeAt:Kt(!1),charAt:Kt(!0)}.charAt,Xt=function(e,n,t){return n+(t?$t(e,n).length:1)},Yt=function(e,n){var t=e.exec;if("function"==typeof t){var r=t.call(e,n);if("object"!=typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==d(e))throw TypeError("RegExp#exec called on incompatible receiver");return Rt.call(e,n)},zt=Math.max,Wt=Math.min,Vt=Math.floor,Zt=/\$([$&'`]|\d\d?|<[^>]*>)/g,Ht=/\$([$&'`]|\d\d?)/g;Gt("replace",2,(function(e,n,t,r){var o=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,i=r.REPLACE_KEEPS_$0,c=o?"$":"$0";return[function(t,r){var o=g(this),i=null==t?void 0:t[e];return void 0!==i?i.call(t,o,r):n.call(String(o),t,r)},function(e,r){if(!o&&i||"string"==typeof r&&-1===r.indexOf(c)){var u=t(n,e,this,r);if(u.done)return u.value}var l=C(e),f=String(this),s="function"==typeof r;s||(r=String(r));var d=l.global;if(d){var p=l.unicode;l.lastIndex=0}for(var h=[];;){var g=Yt(l,f);if(null===g)break;if(h.push(g),!d)break;""===String(g[0])&&(l.lastIndex=Xt(f,fe(l.lastIndex),p))}for(var v,m="",y=0,b=0;b<h.length;b++){g=h[b];for(var S=String(g[0]),x=zt(Wt(ue(g.index),f.length),0),E=[],O=1;O<g.length;O++)E.push(void 0===(v=g[O])?v:String(v));var A=g.groups;if(s){var w=[S].concat(E,x,f);void 0!==A&&w.push(A);var L=String(r.apply(void 0,w))}else L=a(S,f,x,E,A,r);x>=y&&(m+=f.slice(y,x)+L,y=x+S.length)}return m+f.slice(y)}];function a(e,t,r,o,i,c){var a=r+e.length,u=o.length,l=Ht;return void 0!==i&&(i=Fe(i),l=Zt),n.call(c,l,(function(n,c){var l;switch(c.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(a);case"<":l=i[c.slice(1,-1)];break;default:var f=+c;if(0===f)return n;if(f>u){var s=Vt(f/10);return 0===s?n:s<=u?void 0===o[s-1]?c.charAt(1):o[s-1]+c.charAt(1):n}l=o[f-1]}return void 0===l?"":l}))}}));var qt=Be("match"),Jt=Be("species"),Qt=[].push,er=Math.min,nr=!i((function(){return!RegExp(4294967295,"y")}));Gt("split",2,(function(e,n,t){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,t){var r,o,i=String(g(this)),c=void 0===t?4294967295:t>>>0;if(0===c)return[];if(void 0===e)return[i];if(!m(r=e)||!(void 0!==(o=r[qt])?o:"RegExp"==d(r)))return n.call(i,e,c);for(var a,u,l,f=[],s=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,h=new RegExp(e.source,s+"g");(a=Rt.call(h,i))&&!((u=h.lastIndex)>p&&(f.push(i.slice(p,a.index)),a.length>1&&a.index<i.length&&Qt.apply(f,a.slice(1)),l=a[0].length,p=u,f.length>=c));)h.lastIndex===a.index&&h.lastIndex++;return p===i.length?!l&&h.test("")||f.push(""):f.push(i.slice(p)),f.length>c?f.slice(0,c):f}:"0".split(void 0,0).length?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,t){var o=g(this),i=null==n?void 0:n[e];return void 0!==i?i.call(n,o,t):r.call(String(o),n,t)},function(e,o){var i=t(r,e,this,o,r!==n);if(i.done)return i.value;var c=C(e),a=String(this),u=function(e,n){var t,r=C(e).constructor;return void 0===r||null==(t=C(r)[Jt])?n:Pe(t)}(c,RegExp),l=c.unicode,f=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(nr?"y":"g"),s=new u(nr?c:"^(?:"+c.source+")",f),d=void 0===o?4294967295:o>>>0;if(0===d)return[];if(0===a.length)return null===Yt(s,a)?[a]:[];for(var p=0,h=0,g=[];h<a.length;){s.lastIndex=nr?h:0;var v,m=Yt(s,nr?a:a.slice(h));if(null===m||(v=er(fe(s.lastIndex+(nr?0:h)),a.length))===p)h=Xt(a,h,l);else{if(g.push(a.slice(p,h)),g.length===d)return g;for(var y=1;y<=m.length-1;y++)if(g.push(m[y]),g.length===d)return g;h=p=v}}return g.push(a.slice(p)),g}]}),!nr);var tr=[{name:"Afgaanse afgani",code:"AFN",num:"971",deciLen:2},{name:"የአርመን ድራም",code:"AMD",num:"051",deciLen:2},{name:"Netherlands Antillean Guilder",code:"ANG",num:"532",deciLen:2},{name:"بيزو أرجنتيني",code:"ARS",num:"032",deciLen:2},{name:"Australian Dollar",code:"AUD",num:"036",deciLen:2},{name:"Azərbaycan Manatı",code:"AZN",num:"944",deciLen:2},{name:"Български лев",code:"BGN",num:"975",deciLen:2},{code:"BMD",num:"060",deciLen:2},{name:"ব্রুনেই ডলার",code:"BND",num:"096",deciLen:2},{code:"BOB",num:"068",deciLen:2},{name:"real Brazil",code:"BRL",num:"986",deciLen:2},{name:"Bahamski dolar",code:"BSD",num:"044",deciLen:2},{name:"dòlar canadenc",code:"CAD",num:"124",deciLen:2},{name:"Swiss Franc",code:"CHF",num:"756",deciLen:2},{name:"Danish Krone",code:"DKK",num:"208",deciLen:2},{name:"ཨཱལ་ཇི་རི་ཡ་གི་དངུལ་ ཌའི་ནར",code:"DZD",num:"012",deciLen:2},{name:"Etioopia birr",code:"ETB",num:"230",deciLen:2},{name:"Euro",code:"EUR",num:"978",deciLen:2},{name:"British Pound",code:"GBP",num:"826",deciLen:2},{name:"hrvatska kuna",code:"HRK",num:"191",deciLen:2},{name:"magyar forint",code:"HUF",num:"348",deciLen:2},{name:"Rupiah Indonesia",code:"IDR",num:"360",deciLen:2},{name:"Israeli New Shekel",code:"ILS",num:"376",deciLen:2},{name:"íslensk króna",code:"ISK",num:"352",deciLen:0},{name:"ហ្វ្រង់​កូម័រ",code:"KMF",num:"174",deciLen:0},{code:"KWD",num:"414",deciLen:3},{name:"кайман доллары",code:"KYD",num:"136",deciLen:2},{name:"Libanesescht Pond",code:"LBP",num:"422",deciLen:2},{name:"Moroccan Dirham",code:"MAD",num:"504",deciLen:2},{name:"Ariary",code:"MGA",num:"969",deciLen:2},{name:"Македонски денар",code:"MKD",num:"807",deciLen:2},{name:"Монгол төгрөг",code:"MNT",num:"496",deciLen:2},{name:"मॉरिटानियन ओगिया",code:"MRU",num:"929",deciLen:2},{name:"မလေးရှား ရင်းဂစ်",code:"MYR",num:"458",deciLen:2},{name:"Norwegian Krone",code:"NOK",num:"578",deciLen:2},{name:"New Zealand Dollar",code:"NZD",num:"554",deciLen:2},{code:"OMR",num:"512",deciLen:3},{name:"ਪਨਾਮੇਨੀਅਨ ਬਾਲਬੋਆ",code:"PAB",num:"590",deciLen:2},{name:"złoty polski",code:"PLN",num:"985",deciLen:2},{name:"leu românesc",code:"RON",num:"946",deciLen:2},{name:"российский рубль",code:"RUB",num:"643",deciLen:2},{name:null,code:"RWF",num:"646",deciLen:0},{code:"SAR",num:"682",deciLen:2},{name:"سوڊاني پائونڊ",code:"SDG",num:"938",deciLen:2},{name:"ruoŧŧa kruvdno",code:"SEK",num:"752",deciLen:2},{code:"SGD",num:"702",deciLen:2},{name:"sieraleonski leone",code:"SLL",num:"694",deciLen:2},{name:"Shilingka Soomaaliya",code:"SOS",num:"706",deciLen:2},{name:"Суринамски долар",code:"SRD",num:"968",deciLen:2},{name:"บาท",code:"THB",num:"764",deciLen:2},{name:"Paʻanga fakatonga",code:"TOP",num:"776",deciLen:2},{name:"Türk Lirası",code:"TRY",num:"949",deciLen:2},{code:"TTD",num:"780",deciLen:2},{name:"ئۇگاندا شىللىڭى",code:"UGX",num:"800",deciLen:0},{name:"US Dollar",code:"USD",num:"840",deciLen:2},{name:"O‘zbekiston so‘mi",code:"UZS",num:"860",deciLen:2},{name:"Central African CFA Franc",code:"XAF",num:"950",deciLen:0},{name:"East Caribbean Dollar",code:"XCD",num:"951",deciLen:2},{name:"West African CFA Franc",code:"XOF",num:"952",deciLen:0},{name:"CFP Franc",code:"XPF",num:"953",deciLen:0},{name:"Unknown Currency",code:"XXX",num:"999",deciLen:null},{name:"South African Rand",code:"ZAR",num:"710",deciLen:2}];function rr(n,t,r){var o=this;this.monval=n,this.value=t,this.currencyCode=r;var i=this.monval.currencyData.filter((function(e){return e.code==o.currencyCode}))[0];this.number=i.num,this.decilen=e.typekit.isNumber(this.monval.config.decilen)?this.monval.config.decilen:parseFloat(i.deciLen),this.nativeName=i.name}function or(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.exchangeRates=null,this.readConfig(e)}rr.prototype.add=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t=e.typekit.isEmpty(t)?this.currencyCode:t;var r=e.typekit.isString(n)&&-1!==n.indexOf("%");if(r){var o=parseFloat(n.replace("%",""));if(e.typekit.isNan(o))throw new Error("Invalid rate.");this.value=this.value+this.value*o/100}else{var i=this.monval.create(n,t);i.currencyCode==this.currencyCode||i.exchange(this.currencyCode),this.value+=i.value}return this},rr.prototype.subtract=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t=e.typekit.isEmpty(t)?this.currencyCode:t;var r=e.typekit.isString(n)&&-1!==n.indexOf("%");if(r){var o=parseFloat(n.replace("%",""));if(e.typekit.isNan(o))throw new Error("Invalid rate.");this.value=this.value-this.value*o/100}else{var i=this.monval.create(n,t);i.currencyCode==this.currencyCode||i.exchange(this.currencyCode),this.value-=i.value}return this},rr.prototype.exchange=function(e){return e=e.toUpperCase(),this.value=this.exchangePure(this.value,e),this.currencyCode=e,this},rr.prototype.exchangePure=function(n,t){if(!e.typekit.isObject(this.monval.exchangeRates))throw new Error("No exchange rate data found.");if(!this.monval.exchangeRates.hasOwnProperty(t))throw new Error('No exchange rate found for "'+t+'"');if(!this.monval.exchangeRates.hasOwnProperty(this.currencyCode))throw new Error('No exchange rate found for "'+this.currencyCode+'"');return n*(this.monval.exchangeRates[t]/this.monval.exchangeRates[this.currencyCode])},rr.prototype.toFixed=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=Number.isInteger(e)?e:this.decilen,t=this.monval.round(this.value,n).toString();if(n>0){if(-1===t.indexOf("."))return t+"."+Array.apply(null,Array(n)).map(Number.prototype.valueOf,0).join("");var r=t.split(".")[1].length;if(n>r)return t+Array.apply(null,Array(n-r)).map(Number.prototype.valueOf,0).join("")}return t},rr.prototype.toFloat=function(){return this.value},rr.prototype.toObject=function(){return{float:this.toFloat(),currency:this.currencyCode}},rr.prototype.pretty=function(){return(this.monval.currencySymbolUnicodeMap.hasOwnProperty(this.currencyCode)?String.fromCharCode(parseInt(this.monval.currencySymbolUnicodeMap[this.currencyCode],16)):this.currencyCode)+" "+this.toFixed()},rr.prototype.pad=function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0",t=this.toFixed();t.length<e;)t=n+t;return t},or.prototype.currencySymbolUnicodeMap={TRY:"20BA",USD:"0024",EUR:"20ac",GBP:"00A3",JPY:"00A5",AMD:"058F",AFN:"060B",THB:"0E3F",SVC:"20A1",CRC:"20A1",INR:"20B9",BTC:"20BF"},or.prototype.currencyData=tr,or.prototype.updateExchangeRates=function(e){this.exchangeRates=e},or.prototype.readConfig=function(n){var t=this,r={singleCurrency:!1,decilen:null};if((this.config=e.typekit.isObject(n)?Object.assign({},r,n):r,!1!==this.config.singleCurrency)&&(this.config.singleCurrency=this.config.singleCurrency.toUpperCase(),!this.currencyData.filter((function(e){return e.code==t.config.singleCurrency}))))throw new Error("Invalid singleCurrency. Please provide a valid 3-letter currency code.");if(!e.typekit.isNull(this.config.decilen)&&!e.typekit.isNumber(this.config.decilen))throw new Error("Invalid decilen. Please provide a number.")},or.prototype.create=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(e.typekit.isString(n)&&(n=parseFloat(n)),e.typekit.isNan(n)||!e.typekit.isNumber(n))throw new Error("The value should be a number or float parsable string.");if(!1!==this.config.singleCurrency)t=this.config.singleCurrency;else{var r=this.currencyData.filter((function(e){return e.code==t}));if(!r)throw new Error("Invalid currencyCode. Please provide a valid 3-letter currency code.")}return new rr(this,n,t.toUpperCase())},or.prototype.round=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GAUSSIAN";switch(t){case"GAUSSIAN":var r=e*Math.pow(10,n),o=Math.round(r),i=Math.abs(r)%1==.5?o%2==0?o:o-1:o;return i/Math.pow(10,n);default:throw new Error("Unsupported rounding algorithm.")}},exports.Monval=or;
