(()=>{var e={106:()=>{document.querySelectorAll(".benefits").forEach((function(e){var t=e.querySelector(".benefits__columns"),i=e.querySelector(".benefits__container");e.querySelectorAll(".benefits__button").forEach((function(e){e.addEventListener("click",(function(e){return function(e,t,i){"2"===e.target.dataset.tab?(i.className="benefits__columns benefits__columns_active",t.className="benefits__container benefits__container_active"):(i.className="benefits__columns benefits__columns",t.className="benefits__container")}(e,i,t)}))}))}))},289:()=>{function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var t=function(){function t(e,i,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.prevCategory=i,this.nextCategory=n,this.slide=e,this.active=0,this.items=e.querySelectorAll(".cards-slider__card-image"),this.thumb=this.slide.querySelector(".slide-thumb"),this.longThumbArr=this.slide.querySelectorAll(".image-thumb"),this.addThumbItems(),this.init(),this.addNavigation(),this.touchTimer=null,this.touchduration=100,this.thumbItems[this.active].querySelector("span").style.animationPlayState="paused",this.longThumbItems[this.active].querySelector("span").style.animationPlayState="paused"}var i,n,a;return i=t,(n=[{key:"Timer",value:function(e,t){var i,n,a=t;this.remove=function(){window.clearTimeout(i)},this.pause=function(){window.clearTimeout(i),i=null,a-=Date.now()-n},this.resume=function(){i||(n=Date.now(),i=window.setTimeout(e,a))},this.resume()}},{key:"autoPlay",value:function(){this.timer&&this.timer.remove(),this.timer=new this.Timer(this.next,5e3)}},{key:"start",value:function(){this.activeSlide(0,!0),this.thumbItems[this.active].querySelector("span").style.animationPlayState="running",this.longThumbItems[this.active].querySelector("span").style.animationPlayState="running"}},{key:"stop",value:function(){this.timer.remove(),this.activeSlide(0)}},{key:"pause",value:function(){this.timer.pause(),console.log("pause"),this.thumbItems[this.active].querySelector("span").style.animationPlayState="paused",this.longThumbItems[this.active].querySelector("span").style.animationPlayState="paused"}},{key:"resume",value:function(){this.timer.resume(),console.log("resume"),this.thumbItems[this.active].querySelector("span").style.animationPlayState="running",this.longThumbItems[this.active].querySelector("span").style.animationPlayState="running"}},{key:"activeSlide",value:function(e,t){var i,n;t&&this.autoPlay(),this.active=e,this.items.forEach((function(e){null==e||e.classList.remove("cards-slider__card-image_prev"),null==e||e.classList.remove("cards-slider__card-image_next"),e.classList.remove("cards-slider__card-image_active")})),this.items[e].classList.add("cards-slider__card-image_active"),null===(i=this.items[e-1])||void 0===i||i.classList.add("cards-slider__card-image_prev"),null===(n=this.items[e+1])||void 0===n||n.classList.add("cards-slider__card-image_next"),this.thumbItems.forEach((function(e){return e.classList.remove("active")})),this.longThumbItems.forEach((function(e){return e.classList.remove("active")})),this.thumbItems[e].classList.add("active"),this.longThumbItems[e].classList.add("active")}},{key:"prev",value:function(){this.active>0?this.activeSlide(this.active-1,!0):(this.stop(),this.prevCategory())}},{key:"next",value:function(){this.active<this.items.length-1?this.activeSlide(this.active+1,!0):(this.nextCategory(),this.stop())}},{key:"select",value:function(e){this.activeSlide(e,!0)}},{key:"touchstart",value:function(){this.touchTimer=setTimeout(this.pause,this.touchduration)}},{key:"touchend",value:function(){this.touchTimer&&(this.resume(),clearTimeout(this.touchTimer))}},{key:"addNavigation",value:function(){var e=this.slide.querySelector(".slide-next"),t=(this.slide.querySelector(".slide-pause"),this.slide.querySelector(".slide-prev"));e.addEventListener("click",this.next),this.slide.addEventListener("touchstart",this.touchstart),this.slide.addEventListener("touchend",this.touchend),t.addEventListener("click",this.prev)}},{key:"addThumbItems",value:function(){var e=this;this.items.forEach((function(){return e.thumb.innerHTML+="<div><span></span></div>"})),this.longThumbArr.forEach((function(e){return e.innerHTML+="<div><span></span></div>"})),this.thumbItems=Array.from(this.thumb.children),this.longThumbItems=Array.from(this.longThumbArr)}},{key:"init",value:function(e){this.next=this.next.bind(this),this.prev=this.prev.bind(this),this.pause=this.pause.bind(this),this.resume=this.resume.bind(this),this.touchend=this.touchend.bind(this),this.touchstart=this.touchstart.bind(this),this.start=this.start.bind(this),this.stop=this.stop.bind(this),this.activeSlide(0,e)}}])&&e(i.prototype,n),a&&e(i,a),Object.defineProperty(i,"prototype",{writable:!1}),t}();!function(){var e="cards-slider__pagination-btn",i="cards-slider__pagination-btn cards-slider__pagination-btn_active",n="cards-slider__card",a="cards-slider__card cards-slider__card_active",s=document.querySelector(".cards-slider"),r=0,c=s.querySelectorAll(".".concat(e)),o=s.querySelectorAll(".".concat(n));c.forEach((function(s,l){var u=function(e){o[e].story.start(),c[e].className=i,o[e].className=a},d=function(t){o[t].story.stop(),o[t].className=n,c[t].className=e};o[l].story=new t(o[l],(function(){var e=0===l?c.length-1:l-1;d(l),r=e,u(e)}),(function(){var e=l===c.length-1?0:l+1;d(l),r=e,u(e)})),o[l].querySelectorAll(".cards-slider__card-image").forEach((function(e,t){var i=!1;e.addEventListener("click",(function(){window.outerWidth>720&&(this.classList.contains("cards-slider__card-image_active")?i?(o[l].story.resume(),i=!1,console.log("resume")):(o[l].story.pause(),i=!0,console.log("pause")):(console.log("select new slide"),o[l].story.select(t)))}))}));s.addEventListener("click",(function(){c[r].className=e,o[r].className=n,d(r),u(l),this.className=i,o[l].className=a,r=l}))}));var l=!1;document.addEventListener("scroll",(function(){var e,t,i;l||(e=s,t=window.innerHeight,(i=e.getBoundingClientRect().top)<0||i>t)||(o[0].story.start(),l=!0)}))}()},726:()=>{var e=document.querySelectorAll(".cost"),t={dollar:.016,byn:.032,rub:1},i={dollar:"$",byn:"BYN",rub:"RUB"},n=function(e,t){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,t||".")},a=function(e,t){var i=0;return i=0==e?0:e>0&&e<=5e3?630*t:e>5e3&&e<=1e4?950*t:e>1e4&&e<=2e4?1340*t:e>2e4&&e<=3e4?1675*t:e>3e4&&e<=4e4?2010*t:e>4e4&&e<=5e4?2345*t:e>5e4&&e<=65e3?2680*t:e>65e3&&e<=8e4?3015*t:e>8e4&&e<=1e5?3350*t:e>1e5&&e<=2e5?3685*t:e>2e5&&e<=3e5?4020*t:e>3e5&&e<=4e5?4355*t:e>4e5&&e<=5e5?4690*t:e>5e5&&e<=6e5?5025*t:e>6e5&&e<=7e5?5360*t:e>7e5&&e<=8e5?5695*t:e>8e5&&e<=9e5?6030*t:e>9e5&&e<=1e6?6365*t:Math.round(6365+(e-1e6)/1e5*67*5)*t,i=Math.round(i)};e.forEach((function(e){var s="dollar",r=e.querySelectorAll(".cost__currency-value"),c=e.querySelector('input[type="range"]'),o=e.querySelector(".cost__subscribers"),l=e.querySelector(".cost__sum"),u=function(){r.forEach((function(e){e.id===s?e.className="cost__currency-value cost__currency-value_active":e.className="cost__currency-value"}))},d=function(e){var t=e.target;s=t.id,h(),u()};r.forEach((function(e){e.addEventListener("click",d)}));var h=function(){var e=c.value;o.value=n(e),l.value="".concat(a(e,t[s])," ").concat(i[s])};u(),h(),o.addEventListener("input",(function(){var e=+this.value.replace(/[^0-9]/g,"");c.value=e||0,o.value=n(e||0),l.value="".concat(a(e,t[s])," ").concat(i[s])})),c.addEventListener("input",h)}))},927:()=>{!function(){var e=document.querySelector(".header"),t=e.querySelector(".menu-btn"),i=e.querySelector(".nav-menu");function n(){t.classList.toggle("is-active"),i.classList.toggle("nav-menu_active")}e.querySelectorAll(".nav-menu__link").forEach((function(e){window.outerWidth<581&&e.addEventListener("click",n)}));document.addEventListener("click",(function(e){!i.classList.contains("nav-menu_active")||e.target.closest(".nav-menu")||e.target.closest(".header")||n()}),!0),t.addEventListener("click",n)}()},661:()=>{var e,t,i,n,a,s,r,c;e=document.querySelector(".video-popup"),t=document.querySelector(".main_movie"),i=document.querySelector("body"),n=e.querySelector(".popup__overlay"),a=document.querySelector(".game__video-btn"),s=document.querySelector(".how-works__video-btn"),r=document.querySelector(".game__main-btn"),c=function(){e.classList.add("popup_active"),i.className="o-hidden",t.src="https://www.youtube.com/embed/ITBMT-sUeH0?&autoplay=1&controls=1"},n.addEventListener("click",(function(){e.classList.remove("popup_active"),i.className="",t.src=""})),a.addEventListener("click",c),r.addEventListener("click",c),s.addEventListener("click",c)},39:()=>{var e,t,i=document.querySelector(".hero__registration"),n=document.querySelector(".registration-popup"),a=document.querySelector("body");e=n.querySelector(".popup__overlay"),t=n.querySelector(".registration__form"),i.addEventListener("click",(function(){n.classList.add("popup_active"),a.className="o-hidden"})),e.addEventListener("click",(function(){n.classList.remove("popup_active"),t.reset(),a.className=""}))},791:()=>{var e={102:"Name validation error",103:"Email validation error",104:"Instagram validation error",105:"Email already used",106:"Instagram validation error"},t=function(e,t){var i=t.querySelector(".registration__error");i.innerHTML=e,i.className="registration__error registration__error_active"};document.querySelectorAll(".registration").forEach((function(i){var n=i.querySelector(".registration__form");n.addEventListener("submit",(function(i){i.preventDefault();var a=new FormData(n);try{!function(i,n){var a=n.querySelector(".registration__submit");a.disabled=!0,fetch("https://igame.by/api/users/quick",{method:"POST",body:i,credentials:"include",redirect:"follow"}).then((function(e){return e.text()})).then((function(e){return JSON.parse(e)})).then((function(i){e[i.result]?t(i.message,n):(document.cookie="token=[".concat(i.token,"]"),document.cookie="account=[".concat(JSON.stringify(i.account),"]"),window.location.href="https://igame.by/panel/")})).catch((function(e){t("Что-то пошло не так",n)})).finally((function(){a.disabled=!1}))}(a,n)}catch(e){console.log(e)}}))}))},304:()=>{var e,t,i,n,a,s,r;e="reputation__pagination-btn",t="reputation__pagination-btn reputation__pagination-btn_active",i=document.querySelector("body"),n="reputation__card",a="reputation__card reputation__card_active",s=document.querySelectorAll(".reputation"),(r=document.querySelectorAll(".comment-popup")).forEach((function(e){var t=e.querySelector(".popup__overlay");e.querySelector(".registration__form"),t.addEventListener("click",(function(){e.classList.remove("popup_active"),i.className=""}))})),s.forEach((function(s){var c=0,o=s.querySelectorAll(".".concat(e)),l=s.querySelectorAll(".".concat(n)),u=function(){if(window.outerWidth<841){var e=this.dataset.comment,t=0;r.forEach((function(i){i.dataset.comment===e&&(t=i)})),t.classList.add("popup_active"),i.className="o-hidden"}};l.forEach((function(e){e.addEventListener("click",u)})),o.forEach((function(i,s){var r=function(e){o[e].className=t,l[e].className=a},u=function(t){l[t].className=n,o[t].className=e};i.addEventListener("click",(function(){o[c].className=e,l[c].className=n,u(c),r(s),this.className=t,l[s].className=a,c=s}))}))}))},350:()=>{function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var t=new(function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=document.querySelector(".main"),this.languageSelect=this.container.querySelector(".language-select"),this.selectedLang=this.languageSelect.querySelector(".language-select__selected-lang"),this.languageSelectElements=this.languageSelect.querySelectorAll("[data-lang]"),this.textFields=this.container.querySelectorAll("[data-t-key]"),this.popups=this.container.querySelectorAll("[data-t-popup-key]"),this.placeholders=this.container.querySelectorAll("[data-t-placeholder-key]"),this.locale=navigator.language.split("-")[0],this.baseLocale="ru",this.dictionaries={}}var i,n,a;return i=t,(n=[{key:"init",value:function(){this.setLanguageSelect(),this.handleTranslate(),this.setInitSelectedLang()}},{key:"handleTranslate",value:function(){this.translateFields(),this.translateHolders(),this.translatePopups()}},{key:"setInitSelectedLang",value:function(){var e=this.languageSelect.querySelector("[data-lang-".concat(this.locale,"]"));this.handleSetSelectedLang(e)}},{key:"handleSetSelectedLang",value:function(e){var t;null===(t=this.selectedLangElement)||void 0===t||t.classList.remove("hidden"),this.selectedLangElement=e,this.selectedLangElement.classList.add("hidden"),this.selectedLang.innerHTML=e.innerHTML}},{key:"setLanguageSelect",value:function(){var e=this;this.languageSelect.addEventListener("click",(function(){e.languageSelect.classList.toggle("open")}),!0),this.languageSelectElements.forEach((function(t){t.addEventListener("click",(function(){e.handleSetSelectedLang(t),e.locale=t.getAttribute("data-lang"),e.handleTranslate()}))}))}},{key:"translateFields",value:function(){var e=this,t=function(t){e.textFields.forEach((function(e){var i=e.getAttribute("data-t-key");t[i]&&(e.textContent=t[i])}))};this.dictionaries[this.locale]?t(this.dictionaries[this.locale]):fetch("assets/locales/".concat(this.locale,".json")).then((function(e){return e.json()})).then((function(i){t(i),e.dictionaries[e.locale]=i}))}},{key:"translateHolders",value:function(){var e=this,t=function(t){e.placeholders.forEach((function(e){var i=e.getAttribute("data-t-placeholder-key");t[i]&&(e.placeholder=t[i])}))};this.dictionaries[this.locale]?t(this.dictionaries[this.locale]):fetch("assets/locales/".concat(this.locale,".json")).then((function(e){return e.json()})).then((function(i){t(i),e.dictionaries[e.locale]=i}))}},{key:"translatePopups",value:function(){var e=this,t=function(t){e.popups.forEach((function(e){var i=e.getAttribute("data-t-popup-key");t[i]&&(e.innerHTML=t[i])}))};this.dictionaries[this.locale]?t(this.dictionaries[this.locale]):fetch("assets/locales/".concat(this.locale,".json")).then((function(e){return e.json()})).then((function(i){t(i),e.dictionaries[e.locale]=i}))}}])&&e(i.prototype,n),a&&e(i,a),Object.defineProperty(i,"prototype",{writable:!1}),t}());document.addEventListener("DOMContentLoaded",(function(){t.init()}))},16:()=>{var e,t;e=document.querySelector("#video-1"),t=document.querySelector("#video-2"),e.play(),t.play()}},t={};function i(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,i),s.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";i(350),i(927),i(726),i(791),i(39),i(106),i(289),i(16),i(304),i(661);var e=document.querySelector("body"),t=document.querySelector("#popup-privacy-policy"),n=t.querySelector("button"),a=document.querySelector("#popup-contract"),s=a.querySelector("button"),r=t.querySelector(".popup__overlay"),c=a.querySelector(".popup__overlay");n.addEventListener("click",(function(){t.classList.remove("popup_active"),a.querySelector("div").scrollBy(0,0),e.classList.remove("o-hidden")})),s.addEventListener("click",(function(){a.classList.remove("popup_active"),a.querySelector("div").scrollBy(0,0),e.classList.remove("o-hidden")})),r.addEventListener("click",(function(){t.classList.remove("popup_active"),a.querySelector("div").scrollBy(0,0),e.classList.remove("o-hidden")})),c.addEventListener("click",(function(){a.classList.remove("popup_active"),a.querySelector("div").scrollBy(0,0),e.classList.remove("o-hidden")}));var o=document.querySelector("#contract-btn");null==o||o.addEventListener("click",(function(){a.classList.toggle("popup_active"),e.classList.toggle("o-hidden")}));var l=document.querySelector("#privacy-btn");null==l||l.addEventListener("click",(function(){t.classList.toggle("popup_active"),e.classList.toggle("o-hidden")}))})()})();