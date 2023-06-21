function D(e,r,n){let t=e.trimStart(),a=/^{|^\/[*/]/.test(t),s;if(!t)return n&&(n.innerHTML=""),{};if(a)s=Ae(e);else{let o=l=>{if(s[l]!==void 0)try{s[l]=new RegExp(s[l]+"")}catch(p){throw l=l.replace(/[A-Z]/g,d=>"-"+d.toLowerCase()),new Error(`Invalid regular expression for "--${l}=": ${p.message}`)}},f=l=>{if(s[l]!==void 0)try{s[l]=+s[l]}catch(p){throw l=l.replace(/[A-Z]/g,d=>"-"+d.toLowerCase()),new Error(`Invalid number for "--${l}=": ${p.message}`)}},c=l=>{s[l]!==void 0&&(s[l]=(s[l]+"").split(","))};s=Ie(e,r),f("logLimit"),f("lineLimit"),o("mangleProps"),o("reserveProps"),c("resolveExtensions"),c("mainFields"),c("conditions"),c("target");let i=s.supported;if(typeof i=="object"&&i!==null)for(let l in i)i[l]==="true"?i[l]=!0:i[l]==="false"&&(i[l]=!1);if(s.tsconfigRaw!==void 0)try{s.tsconfigRaw=JSON.parse(s.tsconfigRaw)}catch{}}if(n){let o,f=document.createElement("a");if(f.href="javascript:void 0",n.innerHTML="",a)try{o=He(s),f.textContent="Switch to CLI syntax"}catch{}else o=Ne(s),f.textContent="Switch to JS syntax";o!==void 0&&(f.onclick=()=>{let c=n.parentElement.querySelector("textarea");n.innerHTML="",c.value=o,c.dispatchEvent(new Event("input"))},n.append(f))}return s}function Ie(e,r){let n=[],t=e.length,a=0,s=0,o=0;for(;o<t;){let l=o,p=a,d=o-s,m="",u=e[o];if(u===" "||u==="	"||u===`
`){o++,u===`
`&&(a++,s=o);continue}for(;o<t&&(u=e[o],!(u===" "||u==="	"||u===`
`));)if(o++,u==="\\"&&o<t)u=e[o++],u===`
`?(a++,s=o):m+=u;else if(u==="'"){let g=a,S=o-s-1;for(;o===t&&se(e,"'",g,S,a,o-s),u=e[o++],u!=="'";){if(u==="\\"&&o<t&&e[o]!=="'"&&(u=e[o++],u===`
`)){a++,s=o;continue}u===`
`&&(a++,s=o),m+=u}}else if(u==='"'){let g=a,S=o-s-1;for(;o===t&&se(e,'"',g,S,a,o-s),u=e[o++],u!=='"';){if(u==="\\"&&o<t&&(u=e[o++],u===`
`)){a++,s=o;continue}u===`
`&&(a++,s=o),m+=u}}else m+=u;n.push({L:m,E:p,k:d,W:o-l})}let f=[],c=Object.create(null),i=(l,p)=>(l!==l.toLowerCase()&&v(e,"Invalid CLI-style flag: "+JSON.stringify("--"+l),p.E,p.k,l.length+2),l.replace(/-(\w)/g,(d,m)=>m.toUpperCase()));for(let{L:l,...p}of n){let d=l.indexOf("=");if(l.startsWith("--")){let m=l.indexOf(":");if(m>=0&&d<0){let u=i(l.slice(2,m),p),g=l.slice(m+1);(!(u in c)||!Array.isArray(c[u]))&&(c[u]=[]),c[u].push(g)}else if(m>=0&&m<d){let u=i(l.slice(2,m),p),g=l.slice(m+1,d),S=l.slice(d+1);(!(u in c)||typeof c[u]!="object"||Array.isArray(c[u]))&&(c[u]=Object.create(null)),c[u][g]=S}else if(d>=0){let u=l.slice(d+1);c[i(l.slice(2,d),p)]=u==="true"?!0:u==="false"?!1:u}else c[i(l.slice(2),p)]=!0}else l.startsWith("-")||r===0?v(e,'All CLI-style flags must start with "--"',p.E,p.k,p.W):(c.entryPoints=f,f.push(d<0?l:{in:l.slice(d+1),out:l.slice(0,d)}))}return f.length&&(c.entryPoints=f),c}function Ae(e){let r=()=>{let d=l.v===10?"string":(l.v===8?"identifier ":"")+JSON.stringify(l.L);return v(e,`Unexpected ${d} in ${s}`,l.E,l.k,l.L.length)},n=(d,m,u)=>v(e,`Expected "${m}" after ${u} in ${s}`,d.E,d.k+d.L.length,0,"",0,0,0,m),t=(d=!1)=>{for(;i<o;){let m=f,u=i-c,g=e[i];if(g===`
`){f++,c=++i;continue}if(g===" "||g==="	"){i++;continue}if(g==="/"){let M=i++;if(i<o&&e[i]==="/"){for(i++;i<o&&e[i]!==`
`;)i++;continue}if(i<o&&e[i]==="*"){for(i++;;)if(i===o&&v(e,'Expected "*/" to terminate multi-line comment',f,i-c,0,"The multi-line comment starts here:",m,u,2,"*/"),g=e[i++],g===`
`)f++,c=i;else if(g==="*"&&i<o&&e[i]==="/"){i++;break}continue}let h=0;for(;(i===o||e[i]===`
`)&&(h?v(e,'Expected "]" to terminate character class',f,i-c,0,"The character class starts here:",f,h-c,1,"]"):v(e,'Expected "/" to terminate regular expression',f,i-c,0,"The regular expression starts here:",m,u,1,"/")),g=e[i++],!(g==="/"&&!h);)g==="]"&&h?h=0:g==="["?h=i-1:g==="\\"&&i<o&&e[i]!==`
`&&i++;for(;i<o&&/\w/.test(e[i]);)i++;let E=e.slice(M,i),x;try{x=(0,eval)(E)}catch{v(e,`Invalid regular expression in ${s}`,m,u,i-M)}l={E:m,k:u,v:9,L:E,R:x};return}d&&v(e,`Expected end of file after ${s}`,f,i-c,0);let S="-,:[]{}+".indexOf(g);if(S>=0){i++,l={E:m,k:u,v:S,L:g,R:g};return}if(g==="."||g>="0"&&g<="9"){let M=/^[\.\w]$/,h=i++;for(;i<o&&M.test(e[i]);)i++;let E=e.slice(h,i);if(!/\d/.test(E))i=h;else{let x=+E;x!==x&&v(e,`Invalid number "${E}" in ${s}`,m,u,i-h),l={E:m,k:u,v:9,L:E,R:x};return}}let ve=/^[\w\$]$/;if(ve.test(g)){let M=i++;for(;i<o&&ve.test(e[i]);)i++;let h=e.slice(M,i),E=9,x=h;h==="null"?x=null:h==="true"?x=!0:h==="false"?x=!1:h==="undefined"?x=void 0:h==="Infinity"?x=1/0:h==="NaN"?x=NaN:E=8,l={E:m,k:u,v:E,L:h,R:x};return}if(g==='"'||g==="'"){let M=i++;for(;;)if((i===o||e[i]===`
`)&&se(e,g,m,u,f,i-c),e[i]==="\\"&&i+1<o)i+=2,e[i-1]===`
`&&(f++,c=i);else if(e[i++]===g)break;let h=e.slice(M,i),E;try{E=(0,eval)(h)}catch{v(e,`Invalid string in ${s}`,m,u,i-M)}l={E:m,k:u,v:10,L:h,R:E};return}v(e,`Unexpected ${JSON.stringify(g)} in ${s}`,f,i-c,1)}d||v(e,`Unexpected end of file in ${s}`,f,i-c,0)},a=()=>{if(l.v===5){let d=Object.create(null),m=Object.create(null);for(;t(),l.v!==6;){l.v!==10&&l.v!==8&&r();let u=m[l.R];u&&v(e,`Duplicate key ${JSON.stringify(l.R)} in object literal`,l.E,l.k,l.L.length,`The original key ${JSON.stringify(l.R)} is here:`,u.E,u.k,u.L.length);let g=l;t(),l.v!==2&&n(g,":","property "+JSON.stringify(g.R)),t(),d[g.R]=a(),m[g.R]=g;let S=l;if(t(),l.v===6)break;l.v!==1&&n(S,",","property "+JSON.stringify(g.R))}return d}if(l.v===3){let d=[],m=0;for(;t(),l.v!==4;)if(l.v!==1){d[m++]=a();let u=l;if(t(),l.v===4)break;l.v!==1&&n(u,",","array element")}else d.length=++m;return d}return l.v===9||l.v===10?l.R:l.v===7?(t(),+a()):l.v===0?(t(),-a()):r()},s="JSON5 value",o=e.length,f=0,c=0,i=0,l;t();let p=a();return t(!0),p}function v(e,r,n,t,a,s="",o=0,f=0,c=0,i){let l=e.split(`
`),p=new Error(r);throw p.J={re:"<options>",E:n+1,k:t,W:a,se:l[n],ie:i},s&&(p.le=[{L:s,J:{re:"<options>",E:o+1,k:f,W:c,se:l[o]}}]),p}function se(e,r,n,t,a,s){let o=r==='"'?"double":"single";v(e,`Failed to find the closing ${o} quote`,a,s,0,`The opening ${o} quote is here:`,n,t,1,r)}function He(e){let r=a=>/[ \t\n\\'"]/.test(a)?'"'+a.replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"':a,n=a=>a.replace(/[A-Z]/g,s=>"-"+s.toLowerCase()),t=[];for(let a in e){let s=n(a),o=e[a],f=typeof o;if(f==="string"||f==="boolean"||f==="number"||o===null)t.push(o===!0?"--"+s:`--${s}=${o}`);else if(Array.isArray(o))if(a==="resolveExtensions"||a==="mainFields"||a==="conditions"||a==="target")t.push(`--${s}=${o}`);else for(let c of o)t.push(a==="entryPoints"?typeof c=="object"&&c!==null&&typeof c.in=="string"&&typeof c.out=="string"?`${c.out}=${c.in}`:c:`--${s}:${c}`);else if(o instanceof RegExp)t.push(`--${s}=${o.source}`);else if(a==="tsconfigRaw")t.push(`--${s}=${JSON.stringify(o)}`);else if(f==="object"&&a!=="mangleCache"&&a!=="stdin")for(let c in o)t.push(`--${s}:${c}=${o[c]}`);else throw new Error("Not representable")}return t.map(r).join(" ")}function Ne(e){let r=(n,t,a=!0)=>{let s=typeof n;if(s==="string"){let c=n.replace(/\\/g,"\\\\").replace(/\n/g,"\\n"),i=c.split("'"),l=c.split('"');return l.length<i.length?'"'+l.join('\\"')+'"':"'"+i.join("\\'")+"'"}if(s==="boolean"||s==="number"||n instanceof RegExp)return n+"";let o=t+"  ";if(Array.isArray(n)){let c=n.every(l=>typeof l=="string"),i="[";for(let l of n)i+=i==="["?c?"":`
`+o:c?", ":o,i+=r(l,o,!1),c||(i+=`,
`);return i!=="["&&!c&&(i+=t),i+"]"}let f="{";for(let c in n){let i=n[c];f+=f==="{"?a?`
`+o:" ":a?o:", ",f+=`${/^[A-Za-z$_][A-Za-z0-9$_]*$/.test(c)?c:r(c,"")}: ${r(i,o)}`,a&&(f+=`,
`)}return f!=="{"&&(f+=a?t:" "),f+"}"};return r(e,"")}function P(e){let r=document.createElement("a");return r.className="underLink",r.href="javascript:void 0",r.target="_blank",r.textContent="Visualize this source map",r.onclick=()=>{let[n,t]=e(),a=`${n.length}\0${n}${t.length}\0${t}`;r.href="https://evanw.github.io/source-map-visualization/#"+btoa(a),setTimeout(()=>r.href="javascript:void 0")},r}function je(e){let r=/\/(\/)[#@] *sourceMappingURL=([^\s]+)/.exec(e);return r||(r=/\/(\*)[#@] *sourceMappingURL=((?:[^\s*]|\*[^/])+)(?:[^*]|\*[^/])*\*\//.exec(e)),r&&r[2]}function C(e,r,n){let t=je(r);if(n&&n.remove(),t&&t.startsWith("data:application/json;base64,")){let a;try{a=JSON.parse(atob(t.slice(29)))}catch{}a&&typeof a=="object"&&(n=P(()=>[r,JSON.stringify(a)]),e.append(n))}return n}var L=document.getElementById("outputResult"),z=document.createElement("textarea"),le=document.createElement("textarea"),Z=document.createElement("textarea"),ce=document.createElement("textarea"),K=document.createElement("textarea"),ie=[],I,ae=!1;$(z,!0);$(le,!0);$(Z,!0);$(ce,!0);$(K,!0);function y(e){document.body.style.paddingBottom=e.clientHeight+"px",e.style.height="0",e.style.height=e.scrollHeight+1+"px",document.body.style.paddingBottom="0"}function $(e,r=!1){e.readOnly=r,e.spellcheck=!1,e.autocapitalize="off",e.autocomplete="off"}function G(e){let r=`\x1B[31m\u2718 \x1B[41;31m[\x1B[41;97mERROR\x1B[41;31m]\x1B[0m \x1B[1m${e&&e.message||e}\x1B[0m`,n=e&&e.J,t=e&&e.le;if(n&&(r+=xe(n)),t)for(let a of t)r+=`
  ${a.L}`,a.J&&(r+=xe(a.J));return r}function xe({re:e,E:r,k:n,W:t,se:a,ie:s}){let f=a.length,c=t<2?"^":"~".repeat(t),i=`

    ${e}:${r}:${n}:
`;if(f>80){let l=Math.max(0,Math.min(n*2+t-80>>1,n-16,f-80)),p=a.slice(l,l+80);n=Math.max(0,n-l),t=Math.min(t,p.length-n),p.length>3&&l>0&&(p="..."+p.slice(3),n=Math.max(n,3)),p.length>3&&l+80<f&&(p=p.slice(0,p.length-3)+"...",t=Math.max(0,Math.min(t,p.length-3-n))),a=p}return i+=`\x1B[37m${r.toString().padStart(7)} \u2502 ${a.slice(0,n)}\x1B[32m${a.slice(n,n+t)}\x1B[37m${a.slice(n+t)}
`,s&&(i+=`        \u2502 ${" ".repeat(n)}\x1B[32m${c}\x1B[37m
`,c=s),i+=`        \u2575 ${" ".repeat(n)}\x1B[32m${c}\x1B[0m
`,i}function A(e,r,n){if(n!==void 0){let t=document.createElement("div");return e.textContent=n.replace(/\n$/,""),t.id=r,t.className="hasLabel",t.append(e),L.append(t),y(e),t}}function ue({ae:e,ce:r,K:n,ue:t,z:a}){if(L.innerHTML="",A(z,"transformOutput",e),r?(A(K,"sourceMap",r),I&&I.remove(),I=P(()=>[e||"",JSON.stringify(JSON.parse(r))]),K.parentElement.append(I)):I=C(z.parentElement,e||"",I),n&&A(Z,"transformMangleCache",JSON.stringify(n,null,2)),A(le,"legalComments",t),a){let s=document.createElement("div");s.id="stderrLog",s.innerHTML=Ee(a),L.append(s)}if(e===void 0&&!a){let s=document.createElement("div");s.id="outputStatus",s.textContent="(no output)",L.append(s)}}function fe({fe:e,de:r,K:n,z:t},a){if(L.innerHTML="",ie.length=0,e){e.sort((s,o)=>+(s.path>o.path)-+(s.path<o.path));for(let s of e){let o=document.createElement("div"),f=document.createElement("div"),c=document.createElement("textarea");if(f.className="outputPath",f.textContent=s.path.replace(/^\//,""),c.readOnly=!0,c.value=s.text.replace(/\n$/,""),$(c),o.className="buildOutput hasLabel",o.append(c),s.path.endsWith(".map")){for(let i of e)if(s.path===i.path+".map"){o.append(P(()=>[i.text,JSON.stringify(JSON.parse(s.text))]));break}}else C(o,s.text,void 0);L.append(f,o),ie.push(c),y(c)}}if(t){let s=document.createElement("div");s.id="stderrLog",s.innerHTML=Ee(t),L.append(s)}if((!e||!e.length)&&!t){let s=document.createElement("div");s.id="outputStatus",s.textContent=a?"(no output)":"(no entry points)",L.append(s)}if(n&&A(Z,"mangleCache",JSON.stringify(n,null,2)),r){let s=A(ce,"metafile",JSON.stringify(r,null,2)),o=document.createElement("a");o.className="underLink",o.href="javascript:void 0",o.target="_blank",o.textContent="Analyze this metafile",o.onclick=()=>{o.href="/analyze/#"+btoa(JSON.stringify(r)),setTimeout(()=>o.href="javascript:void 0")},s.append(o)}}function J(e){e&&(ae=!1),!ae&&(L.innerHTML=`<span id="outputStatus">Loading${e?" version "+e:""}...</span>`)}function be(e){ae=!0,L.innerHTML="";let r=document.createElement("div");r.className="problem",r.innerHTML=`\u274C Failed to load esbuild: ${e}`,L.append(r)}function Ee(e){return"<span>"+e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\033\[([^m]*)m/g,(r,n)=>{switch(n){case"1":return'</span><span class="color-bold">';case"31":return'</span><span class="color-red">';case"32":return'</span><span class="color-green">';case"33":return'</span><span class="color-yellow">';case"35":return'</span><span class="color-magenta">';case"37":return'</span><span class="color-dim">';case"41;31":return'</span><span class="bg-red color-red">';case"41;97":return'</span><span class="bg-red color-white">';case"43;33":return'</span><span class="bg-yellow color-yellow">';case"43;30":return'</span><span class="bg-yellow color-black">';case"0":return"</span><span>"}throw new Error(`Unknown escape sequence: ${n}`)})+"</span>"}addEventListener("resize",()=>{if(k===0)y(z),y(K),y(le);else{for(let e of ie)y(e);y(ce)}y(Z)});var R=document.querySelector("#transformOptions textarea"),Je=document.querySelector("#transformOptions .underLink"),O=document.querySelector("#transformInput textarea"),Te;function Le(){return[R.value,O.value]}function ke(e,r){(R.value!==e||O.value!==r)&&(R.value=e,O.value=r,q()),W()}function W(){y(R),y(O)}function q(){let e=O.value;Q(),Te=C(O.parentElement,e,Te);try{X({G:"transform",Z:e,H:D(R.value,0,Je)}).then(r=>{ue(r)},()=>{})}catch(r){ue({z:G(r)})}}R.oninput=()=>{y(R),q()};O.oninput=()=>{y(O),q()};addEventListener("resize",W);W();var Se=We(),b=document.querySelector("#versionPicker select"),Y=document.createElement("option"),_;Y.textContent="Loading...";b.append(Y);b.disabled=!0;Se.then(e=>{let r=e.filter(n=>!/^0\.[0-4]\.|^0\.5\.0/.test(n));b.disabled=!1,Y.remove();for(let n of r){let t=document.createElement("option");t.textContent=n,b.append(t)}b.onchange=()=>_(b.value),b.selectedIndex=-1},()=>{Y.textContent="\u274C Loading failed!"});function we(){return b.disabled?null:b.selectedIndex<0?"pkgurl":b.value}function de(e){_=e}async function U(e){if(e==="pkgurl")b.selectedIndex!==-1&&(b.selectedIndex=-1,await _("pkgurl"));else{let r=await Se,n=e==="latest"?r.length?0:-1:r.indexOf(e);n>=0&&b.selectedIndex!==n&&(b.selectedIndex=n,await _(r[n]))}}async function We(){let e=new AbortController,r=setTimeout(()=>e.abort("Timeout"),5e3);try{let n="https://data.jsdelivr.com/v1/package/npm/esbuild-wasm",t=await fetch(n,{signal:e.signal});if(t&&t.ok){clearTimeout(r);let a=(await t.json()).versions;if(a&&a.length)return console.log(`Loaded ${a.length} versions from ${n}`),a}}catch(n){console.error(n)}try{let n="https://registry.npmjs.org/esbuild-wasm",t=(await fetch(n).then(a=>a.json())).versions;if(t&&(t=Object.keys(t).reverse(),t.length))return console.log(`Loaded ${t.length} versions from ${n}`),t}catch(n){console.error(n)}throw new Error}function Me(){let e=location.hash,r=atob(e.slice(1)).split("\0");if(r[0]==="t"&&r.length===4)return V(0),ke(r[2],r[3]),U(r[1]),!0;if(r[0]==="b"&&r.length%3===0){let n=[];for(let t=3;t<r.length;t+=3)n.push({X:r[t]==="e",Y:r[t+1],N:r[t+2]});return V(1),$e(r[2],n),U(r[1]),!0}if(location.hash!=="")try{history.replaceState({},"",location.pathname+location.search)}catch{}return!1}function Q(){let e=we();if(!e)return;let r;if(k===0){let[t,a]=Le();(t||a)&&(r=["t",e,t,a])}else{let[t,a]=pe();r=["b",e,t];for(let s of a)r.push(s.X?"e":"",s.Y,s.N)}let n=location.pathname+location.search;try{let t=r?"#"+btoa(r.join("\0")).replace(/=+$/,""):"";location.hash!==t&&history.replaceState({},"",t||n)}catch{if(location.hash!=="")try{history.replaceState({},"",n)}catch{}}}var N=document.querySelector("#buildOptions textarea"),qe=document.querySelector("#buildOptions .underLink"),me=document.getElementById("addInput"),Ue=document.getElementById("buildInputs"),T=[];function pe(){return[N.value,T.map(e=>({X:e.j.classList.contains("entryPoint"),Y:e.U.value.trim(),N:e.D.value}))]}function $e(e,r){if(JSON.stringify([e,r])!==JSON.stringify(pe())){for(let n of T)n.j.remove();T.length=0,N.value=e;for(let n of r)he(n.X,n.Y,n.N);H(),w()}ee()}function Be(){T.length||he(!0,ge())}function ee(){y(N);for(let e of T)y(e.D)}function w(){Q();try{let e=D(N.value,1,qe),r=Array.isArray(e.entryPoints)?e.entryPoints:e.entryPoints=[],n=Object.create(null),t=Object.create(null),a;for(let s of T){let o=s.U.value.trim();if((t[o]||(t[o]=[])).push(s),o)n[o]=s.D.value,s.j.classList.contains("entryPoint")&&!r.includes(o)&&r.push(o);else{let c=e.stdin&&typeof e.stdin=="object"?e.stdin:e.stdin={};c.contents=s.D.value,"resolveDir"in c||(c.resolveDir="/")}}for(let s in t){let o=t[s];if(o.length>1){for(let f of o)f.j.classList.add("duplicate");a||(a=new Error("Duplicate input file: "+(s?JSON.stringify(s):"<stdin>")))}else o[0].j.classList.remove("duplicate")}if(a)throw a;X({G:"build",Z:n,H:e}).then(s=>{fe(s,r.length)},()=>{})}catch(e){fe({z:G(e)},-1)}}function ge(){if(!T.length)return"entry.js";let e=1,r="file.js";for(;T.some(n=>n.U.value.trim()===r);)r=`file${++e}.js`;return r}function H(){me.textContent="+ "+ge()}function he(e=!1,r="",n=""){let t=()=>{let d=f.value;if(d.endsWith(".map")){let m;try{m=JSON.parse(i.value)}catch{}if(m&&typeof m=="object"){p=P(()=>{let u="";for(let g of T)if(d===g.U.value+".map"){u=g.D.value;break}return[u,JSON.stringify(m)]}),a.append(p);return}}p=C(a,i.value,p)},a=document.createElement("div"),s=document.createElement("a"),o=document.createElement("a"),f=document.createElement("input"),c=document.createElement("div"),i=document.createElement("textarea"),l={j:a,U:f,D:i},p;return $(f),$(i),f.placeholder="<stdin>",f.value=r,s.className="entryToggle",s.textContent="",s.href="javascript:void 0",o.className="remove",o.textContent="\xD7",o.href="javascript:void 0",i.placeholder="(enter your code here)",i.value=n,a.className="buildInput",e&&a.classList.add("entryPoint"),c.className="hasLabel",c.append(i),a.append(s,f,o,c),Ue.insertBefore(a,me),f.oninput=()=>{t(),H(),w()},f.onblur=()=>{let d=f.value.trim();f.value!==d&&(f.value=d,H(),w())},i.oninput=()=>{t(),y(i),w()},s.onclick=()=>{a.classList.toggle("entryPoint"),w()},o.onclick=()=>{let d=T.indexOf(l);d<0||(T.splice(d,1),a.remove(),H(),w())},T.push(l),t(),H(),y(i),l}N.oninput=()=>{y(N),w()};me.onclick=()=>{let e=he(!T.length,ge());e.U.focus(),e.U.select(),w()};addEventListener("resize",ee);H();var k=0,Oe=[document.getElementById("transformPanel"),document.getElementById("buildPanel")],Ve=document.getElementById("modeSwitcher"),te=Ve.querySelectorAll("a");te[0].onclick=()=>{V(0)&&(J(null),ne())};te[1].onclick=()=>{Be(),V(1)&&(J(null),ne())};function V(e){return k===e?!1:(te[k].classList.remove("active"),Oe[k].style.display="none",k=e,te[k].classList.add("active"),Oe[k].style.display="block",!0)}function ne(){k===0?(W(),q()):(ee(),w())}var Pe=new URLSearchParams(location.search),ye=Pe.get("polywasm"),oe=Pe.get("pkgurl"),De=fetch("worker.js").then(e=>e.text()),j=null,B=null,re=new Promise((e,r)=>{de(n=>{let t=Re(n);return t.then(e,r),de(a=>(re.then(s=>s.terminate()),re=Re(a),re)),t})});async function Ce(e){let r=new AbortController,n=setTimeout(()=>r.abort("Timeout"),5e3);try{let t=await fetch(`https://cdn.jsdelivr.net/npm/${e}`,{signal:r.signal});if(t.ok)return clearTimeout(n),t}catch(t){console.error(t)}return fetch(`https://unpkg.com/${e}`)}async function Re(e){let r,n,t;J(e==="pkgurl"?null:e);try{if(j&&j.ee(),B&&B.ee(),j=null,B=null,e==="pkgurl")n=fetch(new URL("lib/browser.min.js",oe)),t=fetch(new URL("esbuild.wasm",oe));else{let[p,d,m]=e.split(".").map(g=>+g),u=p===0&&(d<8||d===8&&m<33)?"":".min";n=Ce(`esbuild-wasm@${e}/lib/browser${u}.js`),t=Ce(`esbuild-wasm@${e}/esbuild.wasm`)}let a=p=>p.then(d=>{if(!d.ok)throw`${d.status} ${d.statusText}: ${d.url}`;return d}),s=ye==="0"||ye==="1"?ye:null,[o,f,c]=await Promise.all([De,a(n).then(p=>p.text()),a(t).then(p=>p.arrayBuffer())]),i=[f,`
var polywasm=${s};`,o],l=URL.createObjectURL(new Blob(i,{type:"application/javascript"}));return await new Promise((p,d)=>{let m=new Worker(l);m.onmessage=u=>{if(u.data.q==="slow"){let g=document.getElementById("slowWarning");g.innerHTML="<span>\u26A0\uFE0F Processing is slow because </span><span>WebAssembly is disabled \u26A0\uFE0F</span>",g.style.display="flex";return}m.onmessage=null,u.data.q==="success"?(p(m),ne()):(d(new Error("Failed to create worker")),r=u.data.me),URL.revokeObjectURL(l)},m.postMessage([e,c],[c])})}catch(a){throw be(r||a+""),a}}function X(e){function r(n,t){j?(B&&B.ee(),B=t):(j=t,n.onmessage=a=>{n.onmessage=null,t.pe(a.data),j=null,B&&(r(n,B),B=null)},n.postMessage(t.Fe))}return new Promise((n,t)=>{re.then(a=>r(a,{Fe:e,pe:n,ee:()=>t(new Error("Task aborted"))}),t)})}Me()||U(oe?"pkgurl":"latest");
