const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");let a=null;function d(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`}e.addEventListener("click",(function(){e.disabled=!0,e.classList.add("disabled"),t.disabled=!1,t.classList.remove("disabled"),t.classList.add("active"),a=setInterval(d,1e3)})),t.addEventListener("click",(function(){e.disabled=!1,e.classList.remove("disabled"),t.disabled=!0,t.classList.remove("active"),t.classList.add("disabled"),clearInterval(a)}));
//# sourceMappingURL=01-color-switcher.791b58ae.js.map
