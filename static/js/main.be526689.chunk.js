(this["webpackJsonpreact-cryptocurrency-app"]=this["webpackJsonpreact-cryptocurrency-app"]||[]).push([[0],{38:function(e,c,a){},39:function(e,c,a){},40:function(e,c,a){"use strict";a.r(c);var t=a(0),n=a(2),s=a.n(n),r=a(13),i=a.n(r),o=a(4),l=a(14),p=a.n(l),j=(a(38),function(e){var c=e.image,a=e.name,n=e.symbol,s=e.updated,r=e.price,i=e.volume,o=e.priceChange,l=e.marketcap,p="".concat(s),j=new Date(p).toLocaleString();return Object(t.jsx)("div",{className:"coin-container",children:Object(t.jsxs)("div",{className:"wrapper",children:[Object(t.jsxs)("div",{className:"coin",children:[Object(t.jsx)("img",{src:c,alt:"crypto",className:"coin__img"}),Object(t.jsxs)("div",{className:"coin-sign",children:[Object(t.jsx)("h1",{children:a}),Object(t.jsx)("p",{className:"coin-sign__symbol",children:n})]})]}),Object(t.jsxs)("div",{className:"coin-data",children:[Object(t.jsxs)("p",{className:"coin-data__price",children:["Cena: $ ",r.toLocaleString()]}),Object(t.jsxs)("p",{className:"coin-data__volume",children:["Volumen: $ ",i.toLocaleString()]}),Object(t.jsxs)("span",{className:"coin-data__exchange",children:[Object(t.jsx)("p",{children:"Kurs: "}),o<0?Object(t.jsxs)("p",{className:"coin-data__percent red",children:[o.toFixed(2),"% ",Object(t.jsx)("span",{children:"\u2198"})]}):Object(t.jsxs)("p",{className:"coin-data__percent green",children:[o.toFixed(2),"% ",Object(t.jsx)("span",{children:"\u2197"})]})]}),Object(t.jsxs)("p",{className:"coin-data__marketcap",children:["Market Cap: $ ",l.toLocaleString()]}),Object(t.jsxs)("p",{className:"coin-data__updated",children:["Ostatnia aktualizacja: ",j]})]})]})})});a(39);var d=function(){var e=Object(n.useState)([]),c=Object(o.a)(e,2),a=c[0],s=c[1],r=Object(n.useState)(""),i=Object(o.a)(r,2),l=i[0],d=i[1];Object(n.useEffect)((function(){p.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){s(e.data)})).catch((function(e){return console.log(e)}))}),[]);var m=a.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}));return Object(t.jsx)("div",{className:"wrapper",children:Object(t.jsxs)("div",{className:"coin-app",children:[Object(t.jsxs)("div",{className:"coin-app__search",children:[Object(t.jsx)("h1",{className:"coin-app__text",children:"Wyszukaj kryptowalut\u0119"}),Object(t.jsx)("form",{className:"coin-form",children:Object(t.jsx)("input",{type:"text",placeholder:"Szukaj",className:"coin-input",onChange:function(e){d(e.target.value)}})})]}),m.map((function(e){return Object(t.jsx)(j,{name:e.name,image:e.image,symbol:e.symbol,updated:e.last_updated,price:e.current_price,volume:e.market_cap,priceChange:e.price_change_percentage_24h,marketcap:e.total_volume},e.id)}))]})})};i.a.render(Object(t.jsx)(s.a.StrictMode,{children:Object(t.jsx)(d,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.be526689.chunk.js.map