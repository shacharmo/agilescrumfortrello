var AST=AST||{};!function(r){"use strict";$(r).ready(function(){(AST=function(r){var t=/\([0-9\.]{1,6}\/[0-9\.]{1,6}\)/,n=/\([0-9\.]{1,6}\//,a=/\/[0-9\.]{1,6}\)/,s=/\([0-9\.]{1,5}\)/,c=/[0-9\.]+/,e=/\[([\u3400-\uFAFF\u3040-\u30ff\uff65-\uffdca-zA-ZáãàâäéèẽêëíìĩîïóòõôöúùũûüçÁÃÀÂÄÉÈẼÊËÍÌĨÎÏÓÒÕÔÖÚÙŨÛÜÇ0-9 \_\-\.\#]*)\]/g,i=/>\*{3} .+ \*{3}$/i,l=/c\/([^/]+)\/.+/g,o=!1,d=0,u="",f=0,m=!1,p=0,h=0,g=!1,b=0,v=0,T=!1,w=0,M=0,A=!1,L=!1;r.init=function(){console.info("Agile SCRUM for Trello boards v1.4.3 started"),y(),F()};var y=function(){var r=null;F(),$(".window-wrapper").bind("DOMSubtreeModified",function(){window.location.href.match(l)&&!r?(l.exec(window.location.href)[1],l.lastIndex=0,r=!0):!window.location.href.match(l)&&r&&(r=!1,F())}),setInterval(function(){C()},5e3)},C=function(){var r=$("#board").html().length;f!==r&&(f=r,F())},F=function(){o=$("#classic-body").css("background-color")&&!$("#classic-body").hasClass("body-custom-board-background")?$("#classic-body").css("background-color"):"rgb(55, 158, 90)",H(),$("#board").find(".list-cards").each(function(){(m=$(this)).find(".list-card").each(function(){if(T=$(this),k(T))return-2;$(T).find(".list-card-title").html().match(/<small /g)?(A=T.data("original"),$(T).find(".list-card-title").html(A)):(A=$(T).find(".list-card-title").html(),T.data("original",A)),x(A)?(v>0&&S(),(g=T)[0].innerHTML=g[0].innerHTML.replace(/( ?\*\*\* ?)/g,""),g.addClass("scrum-card-header")):A.match(t)?(L=A.match(t)[0],w=U(L.match(n)[0]),M=U(L.match(a)[0])):A.match(s)&&(M=U(A.match(s)[0])),u=w==M?" perfect":w>M?" overrun":"",T[0].innerHTML=T[0].innerHTML.replace(s,j),T[0].innerHTML=T[0].innerHTML.replace(t,j),T[0].innerHTML=T[0].innerHTML.replace(e,_),M>0&&(d=w/M*100,T.prepend('<div class="scrum-card-progress'+u+'" style="background-color:'+o+";width:"+(d<=100?d:100)+'%"></div>'),$(T[0]).css("font-size",(M<8?90+5*M:130)+"%").css("line-height","1.2em")),p+=w,h+=M,g&&(b+=w,v+=M),T=!1,A=L="",M=w=0}),v>0&&S(),m.parent().prepend('<small class="scrum-list-total'+u+'"><span class="scrum-light">'+p.toFixed(1)+"/</span>"+h.toFixed(1)+"</small>"),h>0&&(d=p/h*100,m.parent(".list").prepend('<div class="scrum-list-progress"  style="background-color:'+o+";width:"+(d<=100?d:100)+'%"></div>')),m=!1,p=h=0})},H=function(){$(".scrum-list-total,.scrum-list-progress,.scrum-card-progress").remove()},k=function(){return T.hasClass("js-composer")},x=function(r){return r.match(i)},S=function(){$(g.find(".list-card-title")[0]).prepend('<small class="scrum-card-points'+(b>v?" overrun":"")+'"><span class="scrum-light">'+b.toFixed(1)+"/</span>"+v.toFixed(1)+"</small>"),b=v=0},U=function(r){return parseFloat(r.match(c)[0])},_=function(r){var t=r.split("__"),n=z(t[0]);return void 0!==t[1]&&(n=t[1]),'<small class="scrum-card-project" style="background:'+n.replace(/\[|\]/g,"")+'">'+t[0].replace(/\[|\]/g,"").toUpperCase()+"</small>"},j=function(r){return'<small class="scrum-card-points'+u+'">'+r.replace(/\(|\)/g,"").toUpperCase()+"</small>"},z=function(r){var t=0,n=0,a=r.length;for(r=r.toLowerCase();n<a;n++)t+=900*r.charAt(n).charCodeAt();return"hsla("+t%256+",50%,40%,1)"};return r}(AST||{})).init()})}(document);