(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=require("path");var n=e.n(t);const r=require("express");var o=e.n(r),s=o()(),i=__dirname,a=n().join(i,"index.html");s.use(o().static(i)),s.get("*",(function(e,t){t.sendFile(a)}));var c=process.env.PORT||8080;s.listen(c,(function(){console.log("App listening to ".concat(c,"....")),console.log("Press Ctrl+C to quit.")}))})();