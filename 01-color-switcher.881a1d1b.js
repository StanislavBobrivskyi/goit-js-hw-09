const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let o=null;function n(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`}t.addEventListener("click",(function(){t.disabled=!0,t.style.backgroundColor="gray",o=setInterval(n,1e3)})),e.addEventListener("click",(function(){t.disabled=!1,t.style.backgroundColor="",clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.881a1d1b.js.map
