parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QCba":[function(require,module,exports) {
"use strict";var t=function(){function t(){var t=this;this.charLimit=4500,this.handleInput=function(){var n=document.getElementById("original"),e=document.getElementById("char_limit");if(n&&e){t.charLimit=Math.max(Number(e.value),1e3),e.value=t.charLimit.toString();var r=n.value;if(r){var i=t.processText(r);t.displayConvertedText(i)}}},this.initializeEventListeners()}return t.prototype.initializeEventListeners=function(){var t=this;window.onload=function(){var n=document.getElementById("original"),e=document.getElementById("char_limit");null==n||n.addEventListener("input",t.handleInput),null==e||e.addEventListener("change",t.handleInput)}},t.prototype.processText=function(t){var n=t;[[/-\n/g,""],[/\n/g," "],[/- /g,""],[/Fig\. /g,"Fig."],[/Figs\. /g,"Figs."],[/No\. /g,"No."],[/Prof\. /g,"Prof."],[/Eq\. /g,"Eq."],[/et al\. /g,"et al."],[/Dr\. /g,"Dr."],[/e\.g\. /g,"e.g."],[/i\.e\. /g,"i.e."],[/Sec\. /g,"Sec."],[/Sect\. /g,"Sect."],[/2\.4 GHz/g,"2.4GHz"],[/[IVXLCDM]+\.\s/g,function(t){return t.trim()+". "}],[/\.\d+(?= [A-Z])/g,function(t){return"["+t+"]. "}],[/\.\d+,\d+(?= [A-Z])/g,function(t){return"["+t+"]. "}],[/\.\d+–\d+(?= [A-Z])/g,function(t){return"["+t+"]. "}]].forEach(function(t){var e=t[0],r=t[1];n=n.replace(e,r)});var e=n.split(". ").map(function(t){return"".concat(t,".\n")}),r=this.splitIntoColumns(e);return this.createHtmlForColumns(r)},t.prototype.splitIntoColumns=function(t){var n=this,e=0,r=[],i=[];return t.forEach(function(t){e+t.length>n.charLimit&&(r.push(i),i=[],e=0),i.push(t),e+=t.length}),i.length>0&&r.push(i),r},t.prototype.createHtmlForColumns=function(t){return t.map(function(t,n){return'<li class="list-group-item">\n                <label for="text_area_'.concat(n,'">\n                    No.').concat(n,", Number of characters : ").concat(t.join("").length,'\n                </label>\n                <textarea class="form-control" id="text_area_').concat(n,'">').concat(t.join(""),"</textarea>\n            </li>")}).join("")},t.prototype.displayConvertedText=function(t){var n=document.getElementById("converted");n&&(n.innerHTML=t)},t}();new t;
},{}]},{},["QCba"], null)
//# sourceMappingURL=src.43033155.js.map