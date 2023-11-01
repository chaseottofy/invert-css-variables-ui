(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function c(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=c(t);fetch(t.href,r)}})();var h=Object.defineProperty,s=(o,e)=>h(o,"name",{value:e,configurable:!0}),g={includedRoot:`      
  only pass the variables to this function, not the entire :root block.
  Example:
  invertColorsInRoot(\`
    --accent-1: #111;
    --accent-2: rgb(255,170,204);
    --accent-3: #333;
    --accent-4: #444;\`)`},v=g,d=s(o=>{let e=Number.parseInt(o,10);return Number.isNaN(e)||e<0||e>255?null:255-e},"invertRgb"),$=s(o=>{let e=Number.parseInt(o,10);return Number.isNaN(e)||e<0||e>=360?null:(e+180)%360},"flipHue");function m(o){let e=o.trim();if(/^#([\dA-Fa-f]{3}){1,2}$/.test(e)){let t=e.length===4,r=e.toLowerCase()===e,n=t?e.slice(1).split("").map(a=>a+a).join(""):e.slice(1);if(n.length!==6)return null;let l="";for(let a=0;a<n.length;a+=2){let p=Number.parseInt(n.slice(a,a+2),16);if(Number.isNaN(p))return null;l+=(255-p).toString(16).padStart(2,"0")}return`#${r?l.toLowerCase():l.toUpperCase()}`}let c=e.match(/^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d.]+))?\)$/);if(c){let t=d(c[1]),r=d(c[2]),n=d(c[3]),l=c[5]?Number.parseFloat(c[5]):null;return t===null||r===null||n===null||l!==null&&(Number.isNaN(l)||l<0||l>1)?null:l===null?`rgb(${t},${r},${n})`:`rgba(${t},${r},${n},${l})`}let i=e.match(/^hsla?\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%(,\s*([\d.]+))?\)$/);if(i){let t=$(i[1]),r=Number.parseInt(i[2],10),n=Number.parseInt(i[3],10),l=i[5]?Number.parseFloat(i[5]):null;return t===null||Number.isNaN(r)||r<0||r>100||Number.isNaN(n)||n<0||n>100||l!==null&&(Number.isNaN(l)||l<0||l>1)?null:l===null?`hsl(${t},${r}%,${n}%)`:`hsla(${t},${r}%,${n}%,${l})`}return null}s(m,"invertColor");function b(o){return o.split(`
`).map(e=>e.trimStart()).join(`
`).trim()}s(b,"removePadding");function N(o){let e=b(o);if(e.slice(0,4)==="root")return console.log(v.includedRoot),o;let c=[],i=e.trim().split(`
`);for(let t of i){let[r,n]=t.split(":").map(a=>a.trim());if(!r||!n)return console.log(`Invalid CSS variable declaration: ${t}`),o;let l=m(n.replace(/;$/,""));if(!l)return console.log(`Invalid color value: ${n}`),o;c.push(`  ${r}: ${l};`)}return`
${c.join(`
`).trimEnd()}`}s(N,"invert");const u=document.querySelector(".textinput"),f=document.querySelector(".textoutput"),y=document.querySelector(".float-copy"),S=document.querySelector(".float-reset"),E=document.querySelector(".run-btn"),x=`
  > Invert CSS variables with ease.
  > Just paste variables and run
  > Perfect for creating themes.

  > Try it out with this tool's CSS variables.
  
  --------------------------------------------
  
  > ACCEPTED COLOR FORMATS
  --color-1: #eee;
  --color-2: #EEEEEE;
  --color-3: rgb(0,85,51);
  --color-4: rgba(0,85,51,0.5);
  --color-5: hsl(160,100%,88%);
  --color-4: hsla(160,100%,88%,0.5);
`,C=`
--selection: #f81ce5;
--white1: #f7f5f5;
--white2: #cccbcb;
--white3: #b0aeae;
--black0: #000;
--black1: #0e0e0f;
--black2: #333;
--accent-1: #111;
--accent-3: #333;
--accent-6: #888;
--accent-7: #eaeaea;
--accent-8: #fafafa;
--accent-9: #b6b9c2;
`;u.setAttribute("placeholder",x);u.textContent=C;const L=o=>{navigator.clipboard.writeText(o)},T=()=>{f.innerText="",u.innerText=""},I=()=>{const o=u.value;o&&(f.innerText=N(o))};E.addEventListener("click",I);y.addEventListener("click",()=>{L(f.innerText)});S.addEventListener("click",T);
