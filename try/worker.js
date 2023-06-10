var ne=class{constructor(s){let d=s.v===0?s.U.length:0,p=s.V.getTime(),I=s._.getTime();this.dev=1,this.ino=s.oe,this.mode=s.v===0?32768:16384,this.nlink=1,this.uid=1,this.gid=1,this.rdev=0,this.size=d,this.blksize=4096,this.blocks=d+(4096-1)&4096-1,this.atimeMs=p,this.mtimeMs=p,this.ctimeMs=I,this.birthtimeMs=I,this.atime=s.V,this.mtime=s.V,this.ctime=s._,this.birthtime=s._}isDirectory(){return this.mode===16384}isFile(){return this.mode===32768}},$e=se("EBADF"),Qe=se("EINVAL"),Ce=se("EISDIR"),qe=se("ENOENT"),Me=se("ENOTDIR"),ae=new Map,Ke=new TextEncoder,He=new TextDecoder,fe=Be(),Ve=3,ve=1,le="",he,Ie;function Ge(l,s,F,d,p){if(l<=2)l===2?Ae(s,F,d):he(l,s,F,d,p);else throw Qe}function Xe(l,s,F,d,p,I){if(l<=2)Ie(l,s,F,d,p,I);else{let i=ae.get(l);if(!i)I($e,0,s);else if(i.te.v===1)I(Ce,0,s);else{let f=i.te.U;if(p!==null&&p!==-1){let N=f.slice(p,p+d);s.set(N,F),I(null,N.length,s)}else{let N=f.slice(i.ne,i.ne+d);i.ne+=N.length,s.set(N,F),I(null,N.length,s)}}}}function Ee(l){throw new Error(JSON.stringify(l)+" cannot be both a file and a directory")}function ge(l){fe.A.clear(),le="";for(let s in l){let F=Se(Ue(s)),d=fe;for(let I=0;I+1<F.length;I++){let i=F[I],f=d.A.get(i);f?f.v!==1&&Ee(i):(f=Be(),d.A.set(i,f)),d=f}let p=F[F.length-1];d.A.has(p)&&Ee(p),d.A.set(p,Je(Ke.encode(l[s])))}}globalThis.fs={get writeSync(){return Ge},set writeSync(l){he=l},get read(){return Xe},set read(l){Ie=l},constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},open(l,s,F,d){try{let p=Fe(l),I=Ve++;ae.set(I,{te:p,ne:0}),d(null,I)}catch(p){d(p,null)}},close(l,s){s(ae.delete(l)?null:$e)},write(l,s,F,d,p,I){l<=2?(l===2?Ae(s,F,d):he(l,s,F,d,p),I(null,d,s)):I(Qe,0,s)},readdir(l,s){try{let F=Fe(l);if(F.v!==1)throw Me;s(null,[...F.A.keys()])}catch(F){s(F,null)}},stat(l,s){try{let F=Fe(l);s(null,new ne(F))}catch(F){s(F,null)}},lstat(l,s){try{let F=Fe(l);s(null,new ne(F))}catch(F){s(F,null)}},fstat(l,s){let F=ae.get(l);F?s(null,new ne(F.te)):s($e,null)}};function Je(l){let s=new Date;return{v:0,oe:ve++,_:s,V:s,U:l}}function Be(){let l=new Date;return{v:1,oe:ve++,_:l,V:l,A:new Map}}function Ue(l){l[0]!=="/"&&(l="/"+l);let s=l.split("/");s.shift();let F=0;for(let d=0;d<s.length;d++){let p=s[d];p===".."?F&&F--:p!=="."&&p!==""&&(s[F++]=p)}return s.length=F,"/"+s.join("/")}function Se(l){if(l=Ue(l),l==="/")return[];let s=l.split("/");return s.shift(),s}function Fe(l){let s=Se(l),F=fe;for(let d=0,p=s.length;d<p;d++){let I=F.A.get(s[d]);if(!I)throw qe;if(I.v===0){if(d+1===p)return I;throw Me}F=I}return F}function se(l){let s=new Error(l);return s.code=l,s}function Ae(l,s,F){le+=He.decode(s===0&&F===l.length?l:l.slice(s,s+F))}var Ye=()=>{let l=new ArrayBuffer(8),s=new Float32Array(l),F=new Float64Array(l),d=new Int32Array(l),p=new BigInt64Array(l),I=new BigUint64Array(l);return{la(i,f){return(i<0||i===0&&Object.is(i,-0))!==(f<0||f===0&&Object.is(f,-0))?-i:i},lb(i){return I[0]=i,p[0]},lc(i){return s[0]=i,d[0]},ld(i){return d[0]=i,s[0]},le(i){return F[0]=i,I[0]},lf(i){return I[0]=i,F[0]},lg(i,f){return i<<f|i>>>32-f},lh(i,f){return i>>>f|i<<32-f},li(i,f){return(i<<f|i>>64n-f)&0xFFFFFFFFFFFFFFFFn},lj(i,f){return(i>>f|i<<64n-f)&0xFFFFFFFFFFFFFFFFn},lk(i){return i?Math.clz32(i&-i)^31:32},ll(i){let f=0;for(;i;)f++,i&=i-1;return f},lm(i){let f=Math.clz32(Number(i>>32n&0xFFFFFFFFn));return f===32&&(f+=Math.clz32(Number(i&0xFFFFFFFFn))),BigInt(f)},ln(i){let f=Number(i&0xFFFFFFFFn);return f?BigInt(Math.clz32(f&-f)^31):(f=Number(i>>32n&0xFFFFFFFFn),f?BigInt(32+Math.clz32(f&-f)^31):64n)},lo(i){let f=0n;for(;i;)f++,i&=i-1n;return f},lp(i){return i=Math.trunc(i),i>=2147483647?2147483647:i<=-2147483648?-2147483648:i|0},lq(i){return i=Math.trunc(i),i>=4294967295?-1:i<=0?0:i|0},lr(i){return i=Math.trunc(i),i>=9223372036854776e3?0x7FFFFFFFFFFFFFFFn:i<=-9223372036854776e3?0x8000000000000000n:i===i?BigInt(i)&0xFFFFFFFFFFFFFFFFn:0n},ls(i){return i=Math.trunc(i),i>=18446744073709552e3?0xFFFFFFFFFFFFFFFFn:i>0?BigInt(i):0n},lt(i){return i&0x80n?i|0xFFFFFFFFFFFFFF00n:i&0xFFn},lu(i){return i&0x8000n?i|0xFFFFFFFFFFFF0000n:i&0xFFFFn},lv(i){return i&0x80000000n?i|0xFFFFFFFF00000000n:i&0xFFFFFFFFn}}},De=[{e:[["$",40,41,42,43,44,45,46,47,48,49,50,51,52,53],[106,"x",[65,"Q"]],"P"],t:["$","x",[-2,"P","Q"]]},{e:[["$",54,55,56,57,58,59,60,61,62],[106,"x",[65,"Q"]],"y","P"],t:["$","x","y",[-2,"P","Q"]]},{e:[60,"x","y","P"],i:{y:[{e:[66,"Q"],t:[58,"x",[65,[-1,"Q"]],"P"]},{e:[["$",48,49,50,51,52,53,41],"z","Q"],t:[58,"x",[45,"z","Q"],"P"]},{e:[["@",172,173],"z"],t:[58,"x","z","P"]}]}},{e:[61,"x","y","P"],i:{y:[{e:[66,"Q"],t:[59,"x",[65,[-1,"Q"]],"P"]},{e:[48,"z","Q"],t:[59,"x",[44,"z","Q"],"P"]},{e:[49,"z","Q"],t:[59,"x",[45,"z","Q"],"P"]},{e:[["$",50,51,52,53,41],"z","Q"],t:[59,"x",[47,"z","Q"],"P"]},{e:[["@",172,173],"z"],t:[59,"x","z","P"]}]}},{e:[62,"x","y","P"],i:{y:[{e:[66,"Q"],t:[54,"x",[65,[-1,"Q"]],"P"]},{e:[48,"z","Q"],t:[54,"x",[44,"z","Q"],"P"]},{e:[49,"z","Q"],t:[54,"x",[45,"z","Q"],"P"]},{e:[50,"z","Q"],t:[54,"x",[46,"z","Q"],"P"]},{e:[51,"z","Q"],t:[54,"x",[47,"z","Q"],"P"]},{e:[["$",52,53,41],"z","Q"],t:[54,"x",[40,"z","Q"],"P"]},{e:[["@",172,173],"z"],t:[54,"x","z","P"]}]}},{e:[80,"x"],i:{x:[{e:[["$",48,49],"y","P"],t:[69,[45,"y","P"]]},{e:[["$",50,51],"y","P"],t:[69,[47,"y","P"]]},{e:[["$",52,53],"y","P"],t:[69,[40,"y","P"]]},{e:[["@",172,173],"y"],t:[69,"y"]}]}},{e:[81,[49,"x","P"],[66,"Q"]],t:[70,[45,"x","P"],[65,[-1,"Q"]]],n:["Q","<=",0xFFn]},{e:[82,[49,"x","P"],[66,"Q"]],t:[71,[45,"x","P"],[65,[-1,"Q"]]],n:["Q","<=",0xFFn]},{e:[81,[51,"x","P"],[66,"Q"]],t:[70,[47,"x","P"],[65,[-1,"Q"]]],n:["Q","<=",0xFFFFn]},{e:[82,[51,"x","P"],[66,"Q"]],t:[71,[47,"x","P"],[65,[-1,"Q"]]],n:["Q","<=",0xFFFFn]},{e:[81,[53,"x","P"],[66,"Q"]],t:[70,[40,"x","P"],[65,[-1,"Q"]]],n:["Q","<=",0xFFFFFFFFn]},{e:[82,[53,"x","P"],[66,"Q"]],t:[71,[40,"x","P"],[65,[-1,"Q"]]],n:["Q","<=",0xFFFFFFFFn]},{e:[240,"x"],i:{x:[{e:[242,"y"],t:[240,"y"]},{e:[["@",69,80],"x"],t:[241,"y"]}]}},{e:[241,"x"],i:{x:[{e:[242,"y"],t:[241,"y"]},{e:[["@",69,80],"y"],t:[240,"y"]},{e:[70,"y","z"],t:[240,[71,"y","z"]]},{e:[71,"y","z"],t:[240,[70,"y","z"]]},{e:[72,"y","z"],t:[240,[78,"y","z"]]},{e:[73,"y","z"],t:[240,[79,"y","z"]]},{e:[74,"y","z"],t:[240,[76,"y","z"]]},{e:[75,"y","z"],t:[240,[77,"y","z"]]},{e:[76,"y","z"],t:[240,[74,"y","z"]]},{e:[77,"y","z"],t:[240,[75,"y","z"]]},{e:[78,"y","z"],t:[240,[72,"y","z"]]},{e:[79,"y","z"],t:[240,[73,"y","z"]]},{e:[81,"y","z"],t:[240,[82,"y","z"]]},{e:[82,"y","z"],t:[240,[81,"y","z"]]},{e:[83,"y","z"],t:[240,[89,"y","z"]]},{e:[84,"y","z"],t:[240,[90,"y","z"]]},{e:[85,"y","z"],t:[240,[87,"y","z"]]},{e:[86,"y","z"],t:[240,[88,"y","z"]]},{e:[87,"y","z"],t:[240,[85,"y","z"]]},{e:[88,"y","z"],t:[240,[86,"y","z"]]},{e:[89,"y","z"],t:[240,[83,"y","z"]]},{e:[90,"y","z"],t:[240,[84,"y","z"]]}]}},{e:[243,"x"],i:{x:[{e:[40,"y","P"],t:[245,"y","P"]}]}},{e:[244,"x"],i:{x:[{e:[41,"y","P"],t:[246,"y","P"]},{e:[66,"P"],t:[66,"P"],n:["P","<=",0x7FFFFFFFFFFFFFFFn]},{e:[["$",49,51,53],"y","P"],t:["$","y","P"]}]}},{e:[167,"x"],i:{x:[{e:[66,"P"],t:[65,[-1,"P"]]},{e:[48,"y","P"],t:[44,"y","P"]},{e:[49,"y","P"],t:[45,"y","P"]},{e:[50,"y","P"],t:[46,"y","P"]},{e:[51,"y","P"],t:[47,"y","P"]},{e:[["$",52,53,41],"y","P"],t:[40,"y","P"]},{e:[["@",172,173],"y"],t:"y"},{e:[124,[["@",172,173],"y"],[66,"P"]],t:[106,"y",[65,[-1,"P"]]]}]}},{e:[131,"x",[66,"P"]],i:{x:[{e:[66,"Q"],t:[66,[-3,"P","Q"]]},{e:[131,"y",[66,"Q"]],t:[131,"y",[66,[-3,"P","Q"]]]},{e:[49,"y","Q"],t:[49,"y","Q"],n:[["P","&",0xFFn],"===",0xFFn]},{e:[48,"y","Q"],t:[49,"y","Q"],n:["P","===",0xFFn]},{e:[51,"y","Q"],t:[51,"y","Q"],n:[["P","&",0xFFFFn],"===",0xFFFFn]},{e:[50,"y","Q"],t:[51,"y","Q"],n:["P","===",0xFFFFn]},{e:[53,"y","Q"],t:[53,"y","Q"],n:[["P","&",0xFFFFFFFFn],"===",0xFFFFFFFFn]},{e:[52,"y","Q"],t:[53,"y","Q"],n:["P","===",0xFFFFFFFFn]}]}}],Ze=()=>{let l=0,s=()=>"v"+l++,F=(P,M,D,U,S)=>{if(M<D.length){let r=D[M];if(typeof r=="string")N[r]=`${O}[${P}+${M+1}]`,F(P,M+1,D,U,S);else{let z=s(),o=s();R+=`var ${z}=${O}[${P}+${M+1}],${o}=${O}[${z}]&255;`,d(z,o,r,U,u=>{F(P,M+1,D,u,S)})}}else S(U)},d=(P,M,[D,...U],S,r)=>{let z=[];if(typeof D=="number")z.push(`${M}===${D}`);else{let[o,...u]=D;u.sort((g,$)=>g-$),Q[o]={u:P,x:M,M:u.some(g=>j.has(g))};for(let g=0;g<u.length;g++){let $=1;for(;g+$<u.length&&u[g+$-1]+1===u[g+$];)$++;z.push($>2?`${M}>=${u[g]}&&${M}<=${u[g+=$-1]}`:`${M}===${u[g]}`)}}S=S.concat({u:P,F:U.map(o=>typeof o=="string"?o:null)}),R+=`if(${z.join("||")}){`,F(P,0,U,S,r),R+="}"},p=(P,M,D,U,S,r)=>{for(let{e:z,i:o,t:u,n:g}of D)d(P,M,z,S,$=>{let x=Object.create(r);I(g,x,()=>{if(o){for(let y in o)i(y,x);for(let y in o){let E=x[y],v=s();R+=`var ${v}=${O}[${E}]&255;`,p(E,v,o[y],null,$,x)}}if(u){let y=f(u,x,$.slice(),`|${O}[${B}]&-16777216`);typeof u!="string"&&(typeof u[0]=="string"?Q[u[0]].M:j.has(u[0]))?(B!==y&&(R+=`${B}=${y};`),R+="continue"):R+="return "+y}})})},I=(P,M,D)=>{if(P){let U=S=>typeof S=="string"?`${T}[${M[S]||N[S]}]&0xFFFFFFFFFFFFFFFFn`:typeof S=="bigint"?S+"n":`(${U(S[0])})${S[1]}(${U(S[2])})`;R+=`if(${U(P)}){`,D(),R+="}"}else D()},i=(P,M)=>{if(!(P in M)){let D=s();R+=`var ${D}=${N[P]};`,M[P]=D}},f=(P,M,D,U="")=>{if(typeof P=="string")return M[P]||N[P];if(P[0]===-1){let y=f(P[1],M,D);return`Number(${T}[${y}]&0xFFFFFFFFn)`}if(P[0]===-2){let y=f(P[1],M,D),E=f(P[2],M,D);return`${y}+${E}`}if(P[0]===-3){let y=P[1];typeof y=="string"&&i(y,M);let E=f(y,M,D),v=f(P[2],M,D);return R+=`${T}[${E}]&=${T}[${v}];`,E}let[S,...r]=P,z=r[r.length-1],o=((typeof z=="string"?z==="P"||z==="Q":typeof z[0]!="string"&&z[0]<0)?r.length-1:r.length)<<8,u=-1,g,$,x;for(let y=0;y<D.length;y++){let E=D[y];if(E.F.length===r.length){let v=0;for(let k=0;k<r.length;k++)r[k]===E.F[k]&&v++;v>u&&(u=v,g=y,$=E.u,x=E.F)}}if(!(typeof S=="string"&&Q[S].u===$)){let y=(typeof S=="string"?`${Q[S].x}|${o}`:`${S|o}`)+U;$?(D.splice(g,1),R+=`${O}[${$}]=${y};`):($=s(),R+=`var ${$}=${t}(${y},${P.length});`)}for(let y=0;y<r.length;y++)if(x&&r[y]!==x[y]){let E=f(r[y],M,D);R+=`${O}[${$}+${y+1}]=${E};`}return $},N={},Q={},A=s(),O=s(),T=s(),t=s(),B=s(),c=s(),j=new Set;for(let{e:[P]}of De)if(typeof P=="number")j.add(P);else{let[,...M]=P;for(let D of M)j.add(D)}let R=`for(;;){var ${c}=${O}[${B}]&255;`;return p(B,c,De,null,[],{}),R+=`return ${B}}`,new Function(O,T,t,B,R)},et=l=>{let s=new DataView(l.buffer),F=()=>{let u=0,g=0,$;do $=l[o++],u|=($&127)<<g,g+=7;while($&128);return u>>>0},d=()=>{let u=0,g=0,$;do $=l[o++],u|=($&127)<<g,g+=7;while($&128);return g<32&&$&64?u|-1<<g:u},p=()=>{let u=0n,g=0n,$;do $=l[o++],u|=BigInt($&127)<<g,g+=7n;while($&128);return g<64&&$&64?u|~0n<<g:u},I=()=>{let u=s.getFloat32(o,!0);return o+=4,u},i=()=>{let u=s.getFloat64(o,!0);return o+=8,u},f=(u=F())=>[...l.slice(o,o+=u)],N=(u=F())=>new TextDecoder().decode(l.slice(o,o+=u)),Q=(u=l[o++])=>[F(),u===0?1/0:F()],A=()=>{let u=l[o++],g;if(u===65)g=F();else throw new Error("Unsupported constant instruction: 0x"+u.toString(16));if(l[o++]!==11)throw new Error("Expected end after constant");return g},O=()=>{let u=l[o++],g;if(u===65){let $=d();g=()=>$}else if(u===66){let $=p();g=()=>$}else if(u===67){let $=I();g=()=>$}else if(u===68){let $=i();g=()=>$}else if(u===35){let $=F();g=x=>x[$]}else throw new Error("Unsupported constant instruction: 0x"+u.toString(16));if(l[o++]!==11)throw new Error("Expected end after constant");return g},T=[],t=[],B=[],c=[],j=[],R=[],P=[],M=[],D=[],U=new Map,S=[],r=[],z=-1,o=8;if(l.slice(0,8).join(",")!=="0,97,115,109,1,0,0,0")throw new Error("Invalid file header");for(;o+5<l.length;){let u=l[o++],g=F(),$=o+g;if(u===0){let x=N();if(t.push([x,l.slice(o,$)]),x==="name"){let y=l[o++],E=o+F();if(y===1)for(let v=0,k=d();v<k&&o<E;v++)U.set(F(),N())}}else if(u===1)for(let x=0,y=F();x<y;x++){if(l[o++]!==96)throw new Error("Invalid function type");r.push([f(),f()])}else if(u===2)for(let x=0,y=F();x<y;x++){let E=N(),v=N(),k=l[o++];if(k===0)M.push([E,v,k,F()]);else if(k===1)M.push([E,v,k,l[o++],...Q()]);else if(k===2)M.push([E,v,k,...Q()]);else if(k===3)M.push([E,v,k,l[o++],l[o++]]);else throw new Error("Unsupported import type: "+k)}else if(u===3){let x=F();for(let y=0;y<x;y++)R.push(F())}else if(u===4)for(let x=0,y=F();x<y;x++)S.push([l[o++],...Q()]);else if(u===5)for(let x=0,y=F();x<y;x++)D.push(Q());else if(u===6)for(let x=0,y=F();x<y;x++){let E=l[o++],v=l[o++],k=O();P.push([E,v,k])}else if(u===7)for(let x=0,y=F();x<y;x++){let E=N(),v=l[o++],k=F();j.push([E,v,k])}else if(u===8)z=F();else if(u===9)for(let x=0,y=F();x<y;x++){let E=l[o++];if(E===0){let v=A(),k=[];for(let G=0,X=F();G<X;G++)k.push(F());c.push([v,k])}else throw new Error("Unsupported element kind: "+E)}else if(u===10)for(let x=0,y=F();x<y;x++){let E=F()+o,v=F(),k=[];for(let G=0;G<v;G++)k.push([F(),l[o++]]);T.push([k,o,E]),o=E}else if(u===11)for(let x=0,y=F();x<y;x++){let E=l[o++],v=E&2?F():0,k=E&1?0:A(),G=F();B.push([v,k,l.slice(o,o+=G)])}else throw new Error("Unsupported section type "+u);o=$}return{h:l,p:s,g:T,C:t,y:B,$:c,P:j,d:R,b:P,S:M,O:D,I:U,B:z,T:S,f:r}},ke=new Map,de=class{constructor(l){ke.set(this,et(l instanceof Uint8Array?l:new Uint8Array(l instanceof ArrayBuffer?l:l.buffer)))}},Oe=(l,s)=>{if(s===125||s===124)return+l;if(s===127)return l|0;if(s===126)return BigInt(l)&0xFFFFFFFFFFFFFFFFn;throw new Error("Unsupported cast to type "+s)},ye=(l,s)=>{if(s===125||s===124)return"+"+l;if(s===127)return l+"|0";if(s===126)return`BigInt(${l})&0xFFFFFFFFFFFFFFFFn`;throw new Error("Unsupported cast to type "+s)},me=(l,s)=>{if(s===124||s===127)return l;if(s===125)return`Math.fround(${l})`;if(s===126)return`l.lb(${l})`;throw new Error("Unsupported cast to type "+s)},n=new Uint16Array(256);n[1]=520;n[26]=521;n[32]=28;n[33]=25;n[34]=29;n[35]=28;n[36]=25;n[40]=61;n[41]=61;n[42]=61;n[43]=61;n[44]=61;n[45]=61;n[46]=61;n[47]=61;n[48]=61;n[49]=61;n[50]=61;n[51]=61;n[52]=61;n[53]=61;n[54]=58;n[55]=58;n[56]=58;n[57]=58;n[58]=58;n[59]=58;n[60]=58;n[61]=58;n[62]=58;n[63]=28;n[64]=29;n[69]=13;n[70]=78;n[71]=78;n[72]=78;n[73]=206;n[74]=78;n[75]=206;n[76]=78;n[77]=206;n[78]=78;n[79]=206;n[80]=13;n[81]=78;n[82]=78;n[83]=334;n[84]=78;n[85]=334;n[86]=78;n[87]=334;n[88]=78;n[89]=334;n[90]=78;n[91]=78;n[92]=78;n[93]=78;n[94]=78;n[95]=78;n[96]=78;n[97]=78;n[98]=78;n[99]=78;n[100]=78;n[101]=78;n[102]=78;n[103]=13;n[104]=13;n[105]=13;n[106]=14;n[107]=14;n[108]=14;n[109]=14;n[110]=142;n[111]=14;n[112]=142;n[113]=14;n[114]=14;n[115]=14;n[116]=14;n[117]=14;n[118]=14;n[119]=14;n[120]=14;n[121]=13;n[122]=13;n[123]=13;n[124]=14;n[125]=14;n[126]=14;n[127]=270;n[128]=14;n[129]=270;n[130]=14;n[131]=14;n[132]=14;n[133]=14;n[134]=1038;n[135]=1038;n[136]=1038;n[137]=1038;n[138]=1038;n[139]=13;n[140]=13;n[141]=13;n[142]=13;n[143]=13;n[144]=13;n[145]=13;n[146]=14;n[147]=14;n[148]=14;n[149]=14;n[150]=14;n[151]=14;n[152]=14;n[153]=13;n[154]=13;n[155]=13;n[156]=13;n[157]=13;n[158]=13;n[159]=13;n[160]=14;n[161]=14;n[162]=14;n[163]=14;n[164]=14;n[165]=14;n[166]=14;n[167]=13;n[168]=13;n[169]=13;n[170]=13;n[171]=13;n[172]=13;n[173]=13;n[174]=13;n[175]=13;n[176]=13;n[177]=13;n[178]=525;n[179]=653;n[180]=269;n[181]=13;n[182]=525;n[183]=525;n[184]=653;n[185]=269;n[186]=13;n[187]=525;n[188]=13;n[189]=13;n[190]=13;n[191]=13;n[192]=13;n[193]=13;n[194]=13;n[195]=13;n[196]=13;var tt=new Int32Array(65536),rt=Ze(),nt=(l,s,F,d,p,I,i,f,N)=>{let Q=()=>{let e=0,h=0,a;do a=$[q++],e|=(a&127)<<h,h+=7;while(a&128);return e>>>0},A=()=>{let e=0,h=0,a;do a=$[q++],e|=(a&127)<<h,h+=7;while(a&128);return h<32&&a&64?e|-1<<h:e},O=()=>{let e=0n,h=0n,a;do a=$[q++],e|=BigInt(a&127)<<h,h+=7n;while(a&128);return h<64&&a&64?e|~0n<<h:e},T=()=>{let e=$[q];if(e===64)return q++,[0,0];if(e&64)return q++,[0,1];let h=Q(),[a,m]=k[h];return[a.length,m.length]},t=tt,B=[],c=0,j=[],R=0,P=e=>{for(;R<e;)ie.push("s"+ ++R);return"s"+e},M=(e,h,a)=>`c.${e}[${r(h)}${a?"+"+a:""}]`,D=(e,h,a,m)=>`c.${e}[${r(h)}${a?"+"+a:""}]=${m}`,U=(e,h,a)=>`c.dv.get${e}(${r(h)}${a?"+"+a:""},1)`,S=(e,h,a,m)=>`c.dv.set${e}(${r(h)}${a?"+"+a:""},${m},1)`,r=e=>e<0?P(-e):`(${z(e)})`,z=e=>{let h=t[e];switch(h&255){case 0:return`l.lp(${r(t[e+1])})`;case 1:return`l.lq(${r(t[e+1])})`;case 2:return`l.lp(${r(t[e+1])})`;case 3:return`l.lq(${r(t[e+1])})`;case 4:return`l.lr(${r(t[e+1])})`;case 5:return`l.ls(${r(t[e+1])})`;case 6:return`l.lr(${r(t[e+1])})`;case 7:return`l.ls(${r(t[e+1])})`;case 10:return`c.u8.copyWithin(${r(t[e+1])},T=${r(t[e+2])},T+${r(t[e+3])})`;case 11:return`c.u8.fill(${r(t[e+1])},T=${r(t[e+2])},T+${r(t[e+3])})`;case 16:{let a=h>>8&65535,m=t[e+a+1],[L,C]=s[m],W=[];for(let H=1;H<=a;H++)W.push(r(t[e+H]));let ee=`f[${m}](${W})`;if(C.length<2)return ee;let J=t[e+a+2],te=[];for(let H=0;H<C.length;H++)te.push(P(J+H));return`[${te}]=${ee}`}case 17:{let a=h>>8&65535,m=t[e+a+2],[L,C]=k[m],W=[],ee=r(t[e+1]);for(let V=1;V<=a;V++)W.push(r(t[e+V+1]));let J=`t[${ee}](${W})`;if(C.length<2)return J;let te=t[e+a+3],H=[];for(let V=0;V<C.length;V++)H.push(P(te+V));return`[${H}]=${J}`}case 27:return`${r(t[e+1])}?${r(t[e+2])}:${r(t[e+3])}`;case 32:return re[t[e+1]];case 33:case 34:return`${re[t[e+2]]}=${r(t[e+1])}`;case 35:return`g[${t[e+1]}]`;case 36:return`g[${t[e+2]}]=${r(t[e+1])}`;case 40:return U("Int32",t[e+1],t[e+2]);case 245:return U("Uint32",t[e+1],t[e+2]);case 41:return U("BigUint64",t[e+1],t[e+2]);case 246:return U("BigInt64",t[e+1],t[e+2]);case 42:return U("Float32",t[e+1],t[e+2]);case 43:return U("Float64",t[e+1],t[e+2]);case 44:return M("i8",t[e+1],t[e+2]);case 45:return M("u8",t[e+1],t[e+2]);case 46:return U("Int16",t[e+1],t[e+2]);case 47:return U("Uint16",t[e+1],t[e+2]);case 48:return`BigInt(${M("i8",t[e+1],t[e+2])})&0xFFFFFFFFFFFFFFFFn`;case 49:return`BigInt(${M("u8",t[e+1],t[e+2])})`;case 50:return`BigInt(${U("Int16",t[e+1],t[e+2])})&0xFFFFFFFFFFFFFFFFn`;case 51:return`BigInt(${U("Uint16",t[e+1],t[e+2])})`;case 52:return`BigInt(${U("Int32",t[e+1],t[e+2])})&0xFFFFFFFFFFFFFFFFn`;case 53:return`BigInt(${U("Uint32",t[e+1],t[e+2])})`;case 54:return S("Int32",t[e+1],t[e+3],r(t[e+2]));case 55:return S("BigUint64",t[e+1],t[e+3],r(t[e+2]));case 56:return S("Float32",t[e+1],t[e+3],r(t[e+2]));case 57:return S("Float64",t[e+1],t[e+3],r(t[e+2]));case 58:return D("u8",t[e+1],t[e+3],r(t[e+2]));case 59:return S("Int16",t[e+1],t[e+3],r(t[e+2]));case 60:return D("u8",t[e+1],t[e+3],`Number(${r(t[e+2])}&255n)`);case 61:return S("Int16",t[e+1],t[e+3],`Number(${r(t[e+2])}&65535n)`);case 62:return S("Int32",t[e+1],t[e+3],`Number(${r(t[e+2])}&0xFFFFFFFFn)`);case 63:{if(t[e+1])throw new Error("Unsupported non-zero memory index");return"c.pc"}case 64:{if(t[e+2])throw new Error("Unsupported non-zero memory index");return`c.pg(${r(t[e+1])})`}case 65:return t[e+1]+"";case 66:return(j[t[e+1]]&0xFFFFFFFFFFFFFFFFn)+"n";case 67:return x.getFloat32(t[e+1],!0)+"";case 68:return x.getFloat64(t[e+1],!0)+"";case 240:return r(t[e+1]);case 241:return`!${r(t[e+1])}`;case 242:return`${r(t[e+1])}?1:0`;case 243:return`${r(t[e+1])}>>>0`;case 244:return`l.lb(${r(t[e+1])})`;case 69:case 80:return`${r(t[e+1])}?0:1`;case 70:case 81:case 91:case 97:return`${r(t[e+1])}===${r(t[e+2])}`;case 71:case 82:case 92:case 98:return`${r(t[e+1])}!==${r(t[e+2])}`;case 72:case 73:case 83:case 84:case 93:case 99:return`${r(t[e+1])}<${r(t[e+2])}`;case 74:case 75:case 85:case 86:case 94:case 100:return`${r(t[e+1])}>${r(t[e+2])}`;case 76:case 77:case 87:case 88:case 95:case 101:return`${r(t[e+1])}<=${r(t[e+2])}`;case 78:case 79:case 89:case 90:case 96:case 102:return`${r(t[e+1])}>=${r(t[e+2])}`;case 103:return`Math.clz32(${r(t[e+1])})`;case 104:return`l.lk(${r(t[e+1])})`;case 105:return`l.ll(${r(t[e+1])})`;case 106:return`${r(t[e+1])}+${r(t[e+2])}|0`;case 107:return`${r(t[e+1])}-${r(t[e+2])}|0`;case 108:return`Math.imul(${r(t[e+1])},${r(t[e+2])})`;case 110:case 109:return`${r(t[e+1])}/${r(t[e+2])}|0`;case 112:case 111:return`${r(t[e+1])}%${r(t[e+2])}|0`;case 113:return`${r(t[e+1])}&${r(t[e+2])}`;case 114:return`${r(t[e+1])}|${r(t[e+2])}`;case 115:return`${r(t[e+1])}^${r(t[e+2])}`;case 116:return`${r(t[e+1])}<<${r(t[e+2])}`;case 117:return`${r(t[e+1])}>>${r(t[e+2])}`;case 118:return`${r(t[e+1])}>>>${r(t[e+2])}|0`;case 119:return`l.lg(${r(t[e+1])},${r(t[e+2])})`;case 120:return`l.lh(${r(t[e+1])},${r(t[e+2])})`;case 121:return`l.lm(${r(t[e+1])})`;case 122:return`l.ln(${r(t[e+1])})`;case 123:return`l.lo(${r(t[e+1])})`;case 124:return`(${r(t[e+1])}+${r(t[e+2])})&0xFFFFFFFFFFFFFFFFn`;case 125:return`(${r(t[e+1])}-${r(t[e+2])})&0xFFFFFFFFFFFFFFFFn`;case 126:return`(${r(t[e+1])}*${r(t[e+2])})&0xFFFFFFFFFFFFFFFFn`;case 127:return`${r(t[e+1])}/${r(t[e+2])}&0xFFFFFFFFFFFFFFFFn`;case 128:return`${r(t[e+1])}/${r(t[e+2])}`;case 129:return`${r(t[e+1])}%${r(t[e+2])}&0xFFFFFFFFFFFFFFFFn`;case 130:return`${r(t[e+1])}%${r(t[e+2])}`;case 131:return`${r(t[e+1])}&${r(t[e+2])}`;case 132:return`${r(t[e+1])}|${r(t[e+2])}`;case 133:return`${r(t[e+1])}^${r(t[e+2])}`;case 134:return`${r(t[e+1])}<<${r(t[e+2])}&0xFFFFFFFFFFFFFFFFn`;case 135:return`l.lb(${r(t[e+1])})>>${r(t[e+2])}&0xFFFFFFFFFFFFFFFFn`;case 136:return`${r(t[e+1])}>>${r(t[e+2])}`;case 137:return`l.li(${r(t[e+1])},${r(t[e+2])})`;case 138:return`l.lj(${r(t[e+1])},${r(t[e+2])})`;case 139:case 153:return`Math.abs(${r(t[e+1])})`;case 140:case 154:return`-${r(t[e+1])}`;case 141:case 155:return`Math.ceil(${r(t[e+1])})`;case 142:case 156:return`Math.floor(${r(t[e+1])})`;case 143:case 157:return`Math.trunc(${r(t[e+1])})`;case 144:case 158:return`Math.round(${r(t[e+1])})`;case 145:case 159:return`Math.sqrt(${r(t[e+1])})`;case 146:case 160:return`${r(t[e+1])}+${r(t[e+2])}`;case 147:case 161:return`${r(t[e+1])}-${r(t[e+2])}`;case 148:case 162:return`${r(t[e+1])}*${r(t[e+2])}`;case 149:case 163:return`${r(t[e+1])}/${r(t[e+2])}`;case 150:case 164:return`Math.min(${r(t[e+1])},${r(t[e+2])})`;case 151:case 165:return`Math.max(${r(t[e+1])},${r(t[e+2])})`;case 152:case 166:return`l.la(${r(t[e+1])},${r(t[e+2])})`;case 167:return`Number(${r(t[e+1])}&0xFFFFFFFFn)|0`;case 168:case 169:case 170:case 171:return`Math.trunc(${r(t[e+1])})|0`;case 172:return`BigInt(${r(t[e+1])})`;case 173:return`BigInt(${r(t[e+1])}>>>0)`;case 174:case 175:case 176:case 177:return`BigInt(Math.trunc(${r(t[e+1])}))&0xFFFFFFFFFFFFFFFFn`;case 180:case 181:case 186:case 185:return`Number(${r(t[e+1])})`;case 188:return`l.lc(${r(t[e+1])})`;case 189:return`l.le(${r(t[e+1])})`;case 190:return`l.ld(${r(t[e+1])})`;case 191:return`l.lf(${r(t[e+1])})`;case 192:return`${r(t[e+1])}<<24>>24`;case 193:return`${r(t[e+1])}<<16>>16`;case 194:return`l.lt(${r(t[e+1])})`;case 195:return`l.lu(${r(t[e+1])})`;case 196:return`l.lv(${r(t[e+1])})`;default:throw"Internal error"}},o=(e,h)=>{let a=c;return t[a]=e,c+=h,a},u=(e,h=w)=>{B.push(c),t[c++]=e|256|h<<24,t[c++]=-h},g=(e=!1)=>{let h=[],a=B.length-1,m=W=>{let ee=t[W]>>8&65535;for(let J=ee-1;a>=0&&J>=0;J--){let te=-t[W+J+1],H=!1;for(let V=a;V>=0;V--){let ce=B[V];if(ce===null)continue;let ze=t[ce];if(ze>>>24===te){B[V]=null,H||(a=V-1),t[W+J+1]=m(ce);break}let Pe=ze&255;if(Pe!==243&&Pe!==244)break;H=!0}}return rt(t,j,o,W)},L;for(;a>=0;){let W=a--;(L=B[W])!==null&&(B[W]=m(L))}let C;for(a=B.length-1,e&&(a>=0&&(L=B[a])!==null&&t[L]>>>24===w?(C=z(L),a--):C="s"+w,w--);a>=0;)if((L=B[a--])!==null){let W=t[L]>>>24;h.push(`${W?P(W)+"=":""}${z(L)};`)}return _+=h.reverse().join(""),j.length=0,B.length=0,c=0,C},{h:$,p:x,g:y,d:E,I:v,f:k}=i,[G,X]=k[E[f]],[K,Le,je]=y[f],re=[],we=G.length;for(let e=0;e<we;e++)re.push("a"+e);let ie=["L","T"];for(let[e,h]of K)for(let a=0;a<e;a++){let m="t"+ie.length;re.push(m),ie.push(m+(h===126?"=0n":"=0"))}let Y=256,ue=e=>{let h=b.length<Y;h?_+=`b${b.length}:`:b.length===Y&&(_+=`L=1;b${b.length}:for(;;){switch(L){case 1:`,oe=2);let a=h?-1:oe++,m=h?-1:e!==0?oe++:0,[L,C]=T();return b.push({s:L,a:!1,r:e,c:a,Q:m,o:w-L,l:C}),m},Z=(e=b.length-Q()-1)=>{if(b[b.length-1].a)return;let h=b[e];if(e)if(h.r===1){if(w>h.o+h.s)for(let a=1;a<=h.s;a++)_+=`s${h.o+a}=s${w-h.s+a};`;_+=e<Y?`continue b${e};`:`L=${h.Q};continue;`}else{if(w>h.o+h.l)for(let a=1;a<=h.l;a++)_+=`s${h.o+a}=s${w-h.l+a};`;_+=e<=Y?`break b${e};`:`L=${h.c};continue;`}else if(h.l===1)_+=`return s${w};`;else if(h.l>1){let a=[];for(let m=h.l-1;m>=0;m--)a.push("s"+(w-m));_+=`return[${a}];`}else _+="return;"},b=[{s:0,a:!1,r:0,c:-1,Q:-1,o:0,l:X.length}],w=0,q=Le,oe=0,_="b0:{";for(;q<je;){let e=$[q++],h=n[e];if(h&8)if(b[b.length-1].a)h&32&&q++,h&16&&Q();else{let a=h&3;if(h&1024&&(B.push(c),t[c++]=66|w+1<<24,t[c++]=j.length,j.push(63n),B.push(c),t[c++]=643|w<<24,t[c++]=-w,t[c++]=-(w+1)),w-=a,h&384)for(let m=0;m<a;m++)u(h&128?243:244,w+m+1);if(!(h&512)){h&32&&q++,B.push(c),h&4&&(e|=w+1<<24),t[c++]=e|a<<8;for(let m=1;m<=a;m++)t[c++]=-(w+m);h&16&&(t[c++]=Q())}h&4&&w++,h&64&&u(242)}else switch(e){case 0:{let a=b[b.length-1];g(),a.a||(_+='"unreachable"();',a.a=!0);break}case 2:g(),ue(0)<0&&(_+="{");break;case 3:{g();let a=ue(1);_+=a<0?"for(;;){":`case ${a}:`;break}case 4:{b[b.length-1].a||u(b.length<Y?240:241);let a=g(!0),m=ue(2);_+=m<0?`if(${a}){`:`if(${a}){L=${m};continue}`;break}case 5:{g();let a=b.length-1,m=b[a];Z(a),_+=a<Y?"}else{":`case ${m.Q}:`,m.r=0,w=m.o+m.s,m.a=!1;break}case 11:{g();let a=b.length-1,m=b[a];m.r!==2&&(m.Q=0),m.r=0,Z(a),a<Y?_+="}":(m.Q&&(_+=`case ${m.Q}:`),_+=`case ${m.c}:`,a==Y&&(_+="}break}")),w=m.o+m.l,b.pop();break}case 12:g(),Z(),b[b.length-1].a=!0;break;case 13:{b[b.length-1].a||u(240);let a=g(!0);_+=`if(${a}){`,Z(),_+="}";break}case 14:{let a=g(!0);_+=`switch(${a}){`;for(let m=0,L=Q();m<L;m++)_+=`case ${m}:`,Z();_+="default:",Z(),_+="}",b[b.length-1].a=!0;break}case 15:g(),Z(0),b[b.length-1].a=!0;break;case 16:{let a=Q();if(!b[b.length-1].a){let[m,L]=s[a];w-=m.length,B.push(c),L.length===1&&(e|=w+1<<24),t[c++]=e|m.length<<8;for(let C=1;C<=m.length;C++)t[c++]=-(w+C);t[c++]=a,L.length>1&&(t[c++]=w+1),w+=L.length}break}case 17:{let a=Q(),m=Q();if(m!==0)throw new Error("Unsupported table index: "+m);if(!b[b.length-1].a){let[L,C]=k[a];w-=L.length+1,B.push(c),C.length===1&&(e|=w+1<<24),t[c++]=e|L.length<<8,t[c++]=-(w+L.length+1);for(let W=1;W<=L.length;W++)t[c++]=-(w+W);t[c++]=a,C.length>1&&(t[c++]=w+1),w+=C.length}break}case 27:{b[b.length-1].a||(u(240),w-=2,B.push(c),t[c++]=e|768|w<<24,t[c++]=-(w+2),t[c++]=-w,t[c++]=-(w+1));break}case 65:b[b.length-1].a?A():(B.push(c),t[c++]=e|++w<<24,t[c++]=A());break;case 66:b[b.length-1].a?O():(B.push(c),t[c++]=e|++w<<24,t[c++]=j.length,j.push(O()));break;case 67:b[b.length-1].a||(B.push(c),t[c++]=e|++w<<24,t[c++]=q),q+=4;break;case 68:b[b.length-1].a||(B.push(c),t[c++]=e|++w<<24,t[c++]=q),q+=8;break;case 252:if(e=$[q++],e<=7)b[b.length-1].a||u(e);else if(e===10){if($[q++]||$[q++])throw new Error("Unsupported non-zero memory index");b[b.length-1].a||(w-=2,B.push(c),t[c++]=e|768|w<<24,t[c++]=-w,t[c++]=-(w+1),t[c++]=-(w+2))}else if(e===11){if($[q++])throw new Error("Unsupported non-zero memory index");b[b.length-1].a||(w-=2,B.push(c),t[c++]=e|768|w<<24,t[c++]=-(w+1),t[c++]=-w,t[c++]=-(w+2))}else throw new Error("Unsupported instruction: 0xFC"+e.toString(16).padStart(2,"0"));break;default:throw new Error("Unsupported instruction: 0x"+e.toString(16).padStart(2,"0"))}}if(R>255)throw new Error("Deep stacks are not supported");let be=JSON.stringify("wasm:"+(v.get(N)||`function[${f}]`)),We=`return{${be}(${re.slice(0,we)}){var ${ie};${_}}}[${be}]`;return new Function("f","c","t","g","l",We)(l,I,F,d,p)},Re=class{},Ne=class{},lt=class{},st=class{},Te=(l,s,F=new Uint8Array(s))=>{l.i8=new Int8Array(s),l.u8=F,l.dv=new DataView(s)},it=(l,s)=>{let F=l.pc;if(s>>>=0,F+s>l.m)return-1;if(s){let d=l.w.buffer=new ArrayBuffer((l.pc+=s)<<16),p=new Uint8Array(d);p.set(l.u8),Te(l,d,p)}return F},pe=class{constructor(l,s){let F=ke.get(l),{g:d,y:p,$:I,P:i,d:f,b:N,S:Q,O:A,B:O,T,f:t}=F,B=this.exports={},c=[],j=[],R=[],P=[],M=[],D=Ye(),U=new st,S=U.w=new Ne;if(A.length>1)throw new Error(`Unsupported memory count: ${A.length}`);if(A.length>0){let[z,o]=A[0];U.m=Math.min(o,65535),U.pc=z}else U.m=0,U.pc=0;let r=U.pg=z=>it(U,z);S.grow=z=>{let o=r(z);if(o<0)throw new RangeError("Cannot grow past limit");return o},Te(U,S.buffer=new ArrayBuffer(U.pc<<16));for(let[z,o,u]of p){if(z!==0)throw new Error(`Invalid memory index: ${z}`);U.u8.set(u,o)}for(let z of Q){let[o,u,g,$]=z,x=s[o][u];if(g===0){let y=t[$],[E,v]=y,k=[],G=[];for(let K=0;K<E.length;K++)k.push("a"+K),G.push(me("a"+K,E[K]));let X=`f(${G})`;if(v.length===1)X="return "+ye(X,v[0]);else if(v.length>1){X=`let r=${X};`;for(let K=0;K<v.length;K++)X+=`r[${K}]=${ye(`r[${K}]`,v[K])};`;X+="return r"}c.push(new Function("f","l",`return(${k})=>{${X}}`)(x,D)),j.push(y)}else if(g===3)R.push(Oe(x,$)),P.push($);else throw new Error(`Unsupported import type ${g} for "${o}"."${u}"`)}for(let[z,o,u]of N)R.push(u(R)),P.push(z);for(let z=0;z<d.length;z++){let o=c.length;j.push(t[f[z]]),c.push((...u)=>(c[o]=nt(c,j,M[0],R,D,U,F,z,o))(...u))}for(let[z,o,u]of T){let g=[];for(let $=0;$<o;$++)g.push(null);M.push(g)}for(let[z,o]of I){if(M.length!==1)throw new Error("Multiple tables are unsupported");let u=M[0];for(let g of o)u[z++]=(...$)=>c[g](...$)}for(let[z,o,u]of i)if(o===0){let[g,$]=j[u],x=[],y=[];for(let v=0;v<g.length;v++)x.push("a"+v),y.push(ye("a"+v,g[v]));let E=`f[i](${y})`;if($.length===1)E="return "+me(E,$[0]);else if($.length>1){E=`let r=${E};`;for(let v=0;v<$.length;v++)E+=`r[${v}]=${me(`r[${v}]`,$[v])};`;E+="return r"}B[z]=new Function("f","i","l",`return(${x})=>{${E}}`)(c,u,D)}else if(o===2)B[z]=S;else if(o===3){let g=new Re,$=P[u];Object.defineProperty(g,"value",{get:()=>R[u],set:x=>{R[u]=Oe(x,$)}}),B[z]=g}else throw new Error(`Unsupported export type ${o} for "${z}"`);O>=0&&c[O]()}},Ft=async(l,s)=>{if(l instanceof de)return new pe(l,s);let F=new de(l);return{module:F,instance:new pe(F,s)}},_e={Global:Re,Instance:pe,instantiate:Ft,Memory:Ne,Module:de,Table:lt};(polywasm===1||!globalThis.WebAssembly&&polywasm!==0)&&(globalThis.WebAssembly=_e,postMessage({q:"slow"}));var at=async([l,s])=>{let[F,d,p]=l.split(".").map(f=>+f),I=F===0&&(d===5&&p>=20||d>=6&&d<=7||d===8&&p<=34),i={wasmURL:URL.createObjectURL(new Blob([s],{type:"application/wasm"}))};return I||(i.worker=!1),esbuild.startService?await esbuild.startService(i):(await esbuild.initialize(i),esbuild)},xe=(l,s,F)=>{if(l.formatMessages)return l.formatMessages(s,F);let d=(p,I,i)=>{let f=p==="note"?"   ":"\x1B[1m > ";if(i&&(f+=`${i.file}:${i.line}:${i.column}: `),f+=p==="error"?"\x1B[31merror:\x1B[1m ":p==="warning"?"\x1B[35mwarning:\x1B[1m ":"\x1B[1mnote:\x1B[0m ",f+=I+`\x1B[0m
`,i){let{line:N,column:Q,length:A,lineText:O}=i,T=N.toString().padStart(5);f+=`\x1B[37m${T} \u2502 ${O.slice(0,Q)}\x1B[32m${O.slice(Q,Q+A)}\x1B[37m${O.slice(Q+A)}
${" ".repeat(T.length)} \u2575 \x1B[32m${" ".repeat(Q)}${A>1?"~".repeat(A):"^"}\x1B[0m
`}return f};return Promise.resolve(s.map(p=>{let I=d(F.kind,p.text,p.location);for(let i of p.notes||[])I+=d("note",i.text,i.location);return I+`
`}))};onmessage=l=>{at(l.data).then(s=>{onmessage=F=>{let d=(Q,A)=>{let O=A&&A.errors,T=A&&A.warnings;!O&&!T&&(O=[{text:A+""}]),Promise.all([O?xe(s,O,{kind:"error",color:N}):[],T?xe(s,T,{kind:"warning",color:N}):[]]).then(([t,B])=>{Q({R:[...t,...B].join("")})})},p=(Q,A)=>{for(let O of Q){let T=A.replace(O,"");if(T!==A)A=T;else{let t=O.replace(/\x1B\[[^m]*m/g,"");t!==O&&(A=A.replace(t,""))}}return Q.join("")+A},I=(Q,A)=>{Q.length?xe(s,Q,{kind:"warning",color:N}).then(O=>A(p(O,le))):A(le)},i=F.data,f=postMessage,N=!0;try{i.G==="transform"?(i.H.color===!1&&(N=!1),ge({}),s.transform(i.X,i.H).then(({code:Q,map:A,js:O,jsSourceMap:T,warnings:t,mangleCache:B,legalComments:c})=>I(t,j=>f({ae:Q!=null?Q:O,ce:A!=null?A:T,K:B,ue:c,R:j})),Q=>d(f,Q))):i.G==="build"&&(i.H.color===!1&&(N=!1),ge(i.X),s.build(i.H).then(({warnings:Q,outputFiles:A,metafile:O,mangleCache:T})=>I(Q,t=>f({fe:A.map(({path:B,text:c})=>({path:B,text:c})),de:O,K:T,R:t})),Q=>d(f,Q)))}catch(Q){d(f,Q)}},postMessage({q:"success"})}).catch(s=>{console.error(s),postMessage({q:"failure",me:s+""})})};
