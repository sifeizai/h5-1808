(function(window){var svgSprite='<svg><symbol id="icon-sousuo" viewBox="0 0 1024 1024"><path d="M688.565345 653.900847c0 0-11.672854 15.440667-27.297716 30.575366l179.917696 176.300308 29.860075-27.91784L688.565345 653.900847 688.565345 653.900847zM752.457514 462.786135c0 175.017082-134.816498 306.400389-301.919331 306.400389C276.296767 766.655887 149.950174 629.448946 149.950174 463.021495c0-160.758334 135.995347-296.318776 300.588009-296.318776C617.641015 166.70272 752.457514 304.025295 752.457514 462.786135L752.457514 462.786135zM449.439152 206.867488c-143.231145 0-259.32421 116.181069-259.32421 261.075087 0 144.898111 116.093065 261.882476 259.32421 261.882476 143.250588 0 262.8495-116.984365 262.8495-261.882476C712.288652 323.048557 592.68974 206.867488 449.439152 206.867488L449.439152 206.867488zM449.439152 206.867488"  ></path></symbol><symbol id="icon-zelvxuanzefeiyongdaosanjiaoxingfandui" viewBox="0 0 1024 1024"><path d="M1024 255.996 511.971 767.909 0 255.996 1024 255.996z"  ></path></symbol><symbol id="icon-tel" viewBox="0 0 1024 1024"><path d="M776.676 1010.080h-479.92c-28.332 0-51.33-22.999-51.33-51.33v-891.12c0-28.332 22.999-51.33 51.33-51.33h479.92c28.332 0 51.33 22.999 51.33 51.33v891.12c0 28.332-22.999 51.33-51.33 51.33v0zM536.576 958.751c19.073 0 34.221-15.426 34.221-34.221s-15.426-34.221-34.221-34.221-34.221 15.426-34.221 34.221 15.426 34.221 34.221 34.221v0zM776.676 118.96h-479.92v719.742h479.641v-719.742h0.279z"  ></path></symbol><symbol id="icon-dagou" viewBox="0 0 1024 1024"><path d="M887.904 298.208c-12.864-12.064-33.152-11.488-45.216 1.408L415.936 753.984l-233.12-229.696c-12.608-12.416-32.864-12.288-45.28 0.32-12.416 12.576-12.256 32.864 0.352 45.248l256.48 252.672c0.096 0.096 0.224 0.128 0.32 0.224s0.128 0.224 0.224 0.32c2.016 1.92 4.448 3.008 6.784 4.288 1.152 0.672 2.144 1.664 3.36 2.144 3.776 1.472 7.776 2.24 11.744 2.24 4.192 0 8.384-0.832 12.288-2.496 1.312-0.544 2.336-1.664 3.552-2.368 2.4-1.408 4.896-2.592 6.944-4.672 0.096-0.096 0.128-0.256 0.224-0.352 0.064-0.096 0.192-0.128 0.288-0.224L889.28 343.424c12.16-12.832 11.488-33.088-1.376-45.216z" fill="" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)