﻿!function(){"use strict";$((function(){function t(t){var e=document.createElement("canvas");e.width=t.width,e.height=t.height;var l=e.getContext("2d"),a=new Image;a.src=t,l.drawImage(a,0,0);var n=e.toDataURL("image/png");return localStorage.setItem("profImg",n),n}$("#prof").hide();var e,l,a,n,o,c=document.getElementById("prof"),r=c.getContext("2d"),d=$(".BGcolor").val(),s=$(".TEXTcolor").val(),h=document.getElementById("file");function v(){if(localStorage.getItem("profData"))var t=localStorage.getItem("profData");else $(".defaultEnvl").click(),d="#999",$(".BGcolor").val(d),s="#000000",$(".TEXTcolor").val(s);if(localStorage.getItem("profImg")&&(e=localStorage.getItem("profImg")),t){var l=JSON.parse(t),a=new Function("data.title"+i)(),n=new Function("data.value"+i)();new Function("newObj.title"+i)(),new Function("newObj.value"+i)(),$(".editList").empty();for(let t=1;t<=l.length;t++){$(".editList").append('<li class="editText'+t+'"></li>');var o=$(".editText"+t).append('<input type="text" class="title'+t+'"/>');$(".editText"+t).append('<a href="#" class="deleteBtn"><i class="far fa-times-circle"></i></a>');var c=$(".editText"+t).append('<input type="text" class="value'+t+'"/>');o.val(a),c.val(n)}if($(".switch__label").prop("checked")){for(let t=1;t<=l.length;t++)$(".editText"+t)&&($("title"+t).val(),$("value"+t).val());localStorage.setItem("profdata",{})}}}!0!==localStorage.getItem("autosync")&&null!==localStorage.getItem("autosync")||($(".switch__label").prop("checked",!0),localStorage.setItem("autosync",!0)),setTimeout((function(){$("#background-pic").hide(),$("#scanFile").hide(),$(".datas").hide(),$("#data1Btn,.subData1").click((function(){return $(".datas").hide(),$("#data1").fadeIn(),$(".dataBtn").hide(),!1})),$("#data2Btn,.subData2").click((function(){return $(".datas").hide(),$("#data2").fadeIn(),$(".dataBtn").hide(),!1})),$("#data3Btn,.subData3").click((function(){return $(".datas").hide(),$("#data3").fadeIn(),$(".dataBtn").hide(),!1})),$(".back").click((function(){return $(".datas").hide(),$(".dataBtn").show(),!1})),$(".envls").click((function(){var n=$(this+">img"),o=n.attr("width"),c=n.attr("height"),r=n.attr("src");return e=t(r),l=c,a=o,i(),!1})),(new Image).src=""+e;var i=function(){d=$(".BGColor").val(),s=$(".textColor").val(),v(),setTimeout((function(){for(let e=1;e<=$(".editlist li").length;e++)if($("editText"+e))if($(".editlist li").length>5){var t=$(".editlist li").length/2;1===e||e===t?n.concat($(".title"+e).val()+"\t"+$(".value"+e).val()):e<=t&&e===t?o.concat($(".title"+e).val()+"\t"+$(".value"+e).val()):o.concat("\n"+$(".title"+e).val()+"\t"+$(".value"+e).val())}else 1===e?n.concat($(".title"+e).val()+"\t"+$(".value"+e).val()):($(".editlist li").length,n.concat("\n"+$(".title"+e).val()+"\t"+$(".value"+e).val()));r.clearRect(0,0,c.width+100,c.height+100),r.beginPath(),r.fillStyle=""+d,r.fillRect(0,0,c.width+100,c.height+100),r.fillStyle=""+s,r.rect(15,15,c.width-30,c.height-30),r.lineWidth=8,r.strokeStyle=s,r.stroke();var i;r.font="bold 50px boku2";for(var h=0,v=(i=String(n).split("\n")).length;v>h;h++){var g=i[h],u=100;h&&(u+=50*h),r.fillText(g,50,50+u)}for(h=0,v=(i=String(o).split("\n")).length;v>h;h++)g=i[h],u=100,h&&(u+=50*h),r.fillText(g,50,50+u);var f=new Image;f.src=""+e,r.drawImage(f,c.width-150,c.height-150,a,l),document.getElementById("preview").src=c.toDataURL()}),50)};window.i=i,r.fillStyle=""+d,r.fillRect(0,0,450,300),r.fillStyle=""+s,r.rect(15,15,370,170),r.lineWidth=8,r.stroke(),$("#name").val(),$("#id").val(),$("#age").val(),$("#coment").val(),$("#snsText").val(),i(),$(".profelem,#coment").on({keydown:i,chenge:i}),$(document).on({keydown:i,chenge:i},".profelem,#coment"),$(".BGcolorBtn").click((function(){return $(".BGcolor").val($(this).attr("value")),!1})),$(".TextColorBtn").click((function(){return $(".textColor").val($(this).attr("value")),!1})),$(".BGcolor").change((function(){d=$(this).val(),i()})),$(".textColor").change((function(){s=$(this).val(),i()})),i()})),h.addEventListener("change",(function(l){var a=h.target.files[0];if(a.type.match("image.*")){var n=new FileReader;n.onload=function(){e=t(n.result),i()},n.readAsDataURL(a)}else alert("画像を選択してください")})),$("#cookieClear").click((function(){return localStorage.setItem("profdata",null),localStorage.setItem("profImg",null),!1})),$(".addBtn").click((function(){if(10===$(".editlist > li").length)alert("これ以上 行を追加できません");else{var t=$(".editlist > li").length()+1,e='<li class="editText'+t+'"><input type="text" class="title'+t+'" value="名前" /><ahref="#"class="deleteBtn"><input type="text" class="value'+t+'" /><iclass="far fa-times-circle"></i></a></li>';$(".editlist").append(e)}return!1})),$(".deleteBtn").click((function(){if(1!==$(".editlist > li").length){var t=$("this").attr("class");$(this).parent().parent().find("."+t).remove();for(let t=1;t<=$(".editlist > li").length;t++){var e=$(".editlist > li")[t].attr("class");$(".editlist li")[t].removeClass(e),$(".editlist li")[t].addClass("editText"+t)}return!1}alert("行が無くなるため削除できません")}))})),$((function(){$("#download").click((function(){var t=$("#name").val();if($("#name, #id, #age, #coment").on("keyup",(function(){$("#name").val()})),null==t||""==t)alert("名前が抜けています。");else{let t=document.getElementById("prof"),e=document.createElement("a");e.href=t.toDataURL("image/png"),e.download="prof.png",e.click()}return!1})),$("#windl").click((function(){var t=document.createElement("canvas");return t.width=1920,t.height=1080,setTimeout((()=>{var e=$("#id").val(),l=$("#age").val(),a=$("#coment").val(),n=$("#snsText").val(),i=$("#name").val(),o=t,c=o.getContext("2d"),r=document.getElementById("file"),d=$("#colors").val(),s=$("#textColor").val(),h=null==a||void 0===a||""==a,v=null==n||void 0===n||""==n,g=null==l||void 0===l||""==l;r=h&&v&&g?"NAME:\t"+i+"\nID: \t"+e:h&&v?"NAME:\t"+i+"\nID: \t"+e+"\n AGE: \t"+l:g&&v?"NAME:\t"+i+"\nID: \t"+e+"\nCOMMENT: \t"+l:g&&h?"NAME:\t"+i+"\nID: \t"+e+"\nSNS: \t"+n:g?"NAME:\t"+i+"\nID: \t"+e+"\nCOMMENT: \t"+a+"\nSNS: \t"+n:h?"NAME:\t"+i+"\nID: \t"+e+"\n AGE: \t"+l+"\nSNS: \t"+n:v?"NAME:\t"+i+"\nID: \t"+e+"\n AGE: \t"+l+"\nCOMMENT: \t"+a:"NAME:\t"+i+"\nID: \t"+e+"\n AGE: \t"+l+"\nCOMMENT: \t"+a+"\nSNS: \t"+n,c.clearRect(0,0,o.width+100,o.height+100),c.beginPath(),c.fillStyle=""+d,c.fillRect(0,0,o.width+100,o.height+100),c.fillStyle=""+s,c.rect(15,15,o.width-30,o.height-30),c.lineWidth=8,c.stroke(),c.strokeStyle=s,c.font="bold 50px Noto Sans JP";for(var u=r.split("\n"),f=0,m=u.length;m>f;f++){var p=u[f],I=50;f&&(I+=75*f),c.fillText(p,30,30+I);var w=new Image;w.src=""+pic,c.drawImage(w,o.width-50,o.height-50,30,30)}let E=document.createElement("a");E.href=o.toDataURL("image/png"),E.download="prof-window.png",E.click()}),50),!1})),$("#smtdl").click((function(){var t=document.createElement("canvas");return t.width=1080,t.height=1920,setTimeout((()=>{var e=$("#id").val(),l=$("#age").val(),a=$("#coment").val(),n=$("#snsText").val(),i=$("#name").val(),o=t,c=o.getContext("2d"),r=document.getElementById("file"),d=$("#colors").val(),s=$("#textColor").val(),h=null==a||void 0===a||""==a,v=null==n||void 0===n||""==n,g=null==l||void 0===l||""==l;r=h&&v&&g?"NAME:\t"+i+"\nID: \t"+e:h&&v?"NAME:\t"+i+"\nID: \t"+e+"\n AGE: \t"+l:g&&v?"NAME:\t"+i+"\nID: \t"+e+"\nCOMMENT: \t"+l:g&&h?"NAME:\t"+i+"\nID: \t"+e+"\nSNS: \t"+n:g?"NAME:\t"+i+"\nID: \t"+e+"\nCOMMENT: \t"+a+"\nSNS: \t"+n:h?"NAME:\t"+i+"\nID: \t"+e+"\n AGE: \t"+l+"\nSNS: \t"+n:v?"NAME:\t"+i+"\nID: \t"+e+"\n AGE: \t"+l+"\nCOMMENT: \t"+a:"NAME:\t"+i+"\nID: \t"+e+"\n AGE: \t"+l+"\nCOMMENT: \t"+a+"\nSNS: \t"+n,c.clearRect(0,0,o.width+100,o.height+100),c.beginPath(),c.fillStyle=""+d,c.fillRect(0,0,o.width+100,o.height+100),c.fillStyle=""+s,c.rect(15,15,o.width-30,o.height-30),c.lineWidth=8,c.strokeStyle=s,c.stroke(),c.font="bold 45px Noto Sans JP";for(var u=r.split("\n"),f=0,m=u.length;m>f;f++){var p=u[f],I=45;f&&(I+=67.5*f),c.fillText(p,30,30+I);var w=new Image;w.src=""+pic,c.drawImage(w,o.width-50,o.height-50,30,30)}let E=document.createElement("a");E.href=o.toDataURL("image/png"),E.download="prof-smart.png",E.click()}),50),!1}))}))}();