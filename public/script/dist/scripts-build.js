﻿(()=>{"use strict";$((function(){$("#prof").hide();var e,t=document.getElementById("prof"),n=document.getElementById("preview"),a=document.getElementById("SMTprof"),i=document.getElementById("SMTpreview"),o=g=$("#id").val(),l=h=$("#age").val(),c=k=$("#coment").val(),r=I=$("#snsText").val(),d=p=$("#name").val(),u="/image/img-1.png",s="#999",f="#000000",m=!1,v=!1;if($.cookie("id")){var g=$.cookie("id");$("#id").val(g)}if($.cookie("id",o),$.cookie("name")){var p=$.cookie("name");$("#name").val(p)}if($.cookie("name",d),$.cookie("age")){var h=$.cookie("age");$("#age").val(h)}if($.cookie("age",l),$.cookie("coment")){var k=$.cookie("coment");$("#coment").val(k)}if($.cookie("coment",c),$.cookie("sns")){var I=$.cookie("sns");$("#sns").val(I)}$.cookie("sns",r),$.cookie("age")&&(h=$.cookie("age"),$("#age").val(h)),$.cookie("age",l),setTimeout((function(){$("#scanFile").hide(),$(".datas").hide(),$("#cropFile1").hide(),$("#colorInputDiv").hide(),$("#textInputDiv").hide(),$(".crop1").hide(),$("#qrValue").hide(),$("#SMTprof").hide(),$("#SMTpreview").hide(),$(".delete1").click((function(){return $("#name").val(""),c(),!1})),$(".delete2").click((function(){return $("#id").val(""),c(),!1})),$(".delete3").click((function(){return $("#coment").val(""),c(),!1})),$("#data1Btn,.subData1").click((function(){return $(".datas").hide(),$("#data1").fadeIn(),$(".dataBtn").hide(),!1})),$("#data2Btn,.subData2").click((function(){return $(".datas").hide(),$("#data2").fadeIn(),$(".dataBtn").hide(),!1})),$("#data3Btn,.subData3").click((function(){return $(".datas").hide(),$("#data3").fadeIn(),$(".dataBtn").hide(),!1})),$("#data4Btn,.subData4").click((function(){return $(".datas").hide(),$("#data4").fadeIn(),$(".dataBtn").hide(),!1})),$(".back").click((function(){return $(".datas").hide(),$(".dataBtn").show(),!1})),$(".envls").click((function(){var e=$(this).find("img").attr("src");return u=e,c(),!1}));var o=document.getElementById("file");function l(e){return e.length>32?e.substr(0,16)+"\n"+e.substr(16,32)+"\n"+e.substr(32,e.length):e.length>=16?e.substr(0,16)+"\n"+e.substr(16,e.length):e}var c=function(){setTimeout((function(){var e=l($("#id").val()),o=l($("#age").val()),c=l($("#coment").val()),r=l($("#snsText").val()),d=l($("#name").val()),m=e,v=o,g=c,p=r,h=d;$.cookie("id",m),$.cookie("name",h),$.cookie("age",v),$.cookie("coment",g),$.cookie("sns",p);var k=null==c||void 0===c||""==c,I=null==r||void 0===r||""==r,w=null==o||void 0===o||""==o;if(k&&I&&w)var E="NAME:\t"+d+"\nID: \t"+e;else E=k&&I?"NAME:\t"+d+"\nID: \t"+e+"\n AGE: \t"+o:w&&I?"NAME:\t"+d+"\nID: \t"+e+"\nCOMMENT: \t"+c:w&&k?"NAME:\t"+d+"\nID: \t"+e+"\nSNS: \t"+r:w?"NAME:\t"+d+"\nID: \t"+e+"\nCOMMENT: \t"+c+"\nSNS: \t"+r:k?"NAME:\t"+d+"\nID: \t"+e+"\n AGE: \t"+o+"\nSNS: \t"+r:I?"NAME:\t"+d+"\nID: \t"+e+"\n AGE: \t"+o+"\nCOMMENT: \t"+c:"NAME:\t"+d+"\nID: \t"+e+"\n AGE: \t"+o+"\nCOMMENT: \t"+c+"\nSNS: \t"+r;function D(e,t){var n=e.height,a=e.width,i=e.getContext("2d");if(i.clearRect(0,0,a+100,n+100),i.beginPath(),i.fillStyle=""+s,i.fillRect(0,0,a+100,n+100),i.fillStyle=""+f,i.rect(15,15,a-30,n-30),i.lineWidth=8,i.strokeStyle=f,i.stroke(),"default"===t)var o="50px",l=100,c=.5;else"smt"===t&&(o="50px",l=100,c=1);i.font="bold "+o+" Boku2";for(var r=E.split("\n"),d=0,$=r.length;$>d;d++){var m=r[d],v=l;d&&(v+=l*c*d),i.fillText(m,50,50+v);var g=new Image;g.src=""+u;var p=g.height,h=g.width}"/image/img-1.png"===u?"default"===t?i.drawImage(g,a-250,n-250,1.5*h,1.5*p):"smt"===t&&i.drawImage(g,a/3,n/2.5,2*h,2*p):"default"===t?i.drawImage(g,a-250,n-250,h/2,p/2):"smt"===t&&i.drawImage(g,a/3,n/2.5,h/2,p/2)}D(t,"default"),D(a,"smt"),n.src=t.toDataURL(),i.src=a.toDataURL()}),50)};$(".EMBreset").click((function(){return u="/image/img-1.png",c(),!1})),$(".EMBhide").click((function(){return u="",c(),!1})),window.i=c,$("#name").val(),$("#id").val(),$("#age").val(),$("#coment").val(),$("#snsText").val(),c(),$(".profelem,#coment").on({keydown:c,chenge:c}),$(document).on({keydown:c,chenge:c},".profelem,#coment"),$("#colors").change((function(){"input"===$(this).val()?($("#colorInputDiv").fadeIn(100),v=!0):"img"===$(this).val()?$("#cropFile1").click():((v=!0)&&($("#colorInputDiv").fadeIn(100),v=!1,$("#colorInput").click()),s=$(this).val()),c()})),$("#textColor").change((function(){"input"===$(this).val()?($("#textInputDiv").fadeIn(100),m=!0,$("#textInput").click()):((m=!0)&&(m=!1),f=$(this).val()),c()})),$("#colorInput").change((function(){!0===v&&(s=$(this).val()),c()})),$("#textInput").change((function(){!0===m&&(f=$(this).val()),c()})),$(".qrBtn").click((function(){var e=$("#qrURL").val();return $("#qrValue").empty(),new QRCode("qrValue",{text:e,width:200,height:200,correctLevel:QRCode.CorrectLevel.H}),$("#qrValue").find("img").on("load",(function(){u=$(this).attr("src"),c()})),!1})),o.addEventListener("change",(function(e){var t=e.target.files[0];if(t.type.match("image.*")){var n=new FileReader;n.onload=function(){u=n.result,c()},n.readAsDataURL(t)}else alert("画像を選択してください")})),$("#viewList").change((function(){"default"===$(this).val()?($("#SMTprof").fadeOut(100),$("#preview").fadeIn(100)):"smart"===$(this).val()&&($("#SMTprof").fadeIn(100),$("#preview").fadeOut(100))})),$("#cropFile1").change((function(t){var n=$(this);if(""!==n){var a=n.prop("files")[0];/\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/.test(a.name)&&/(jpg|jpeg|png|gif)$/.test(a.type)||alert("画像ファイルではありません。再度アップロードしてください。"),$("#textColor").val(s)}else if(window.FileReader){var i=new FileReader;i.onload=function(){$(".crop1").fadeToggle(100);var t=document.getElementById("cropImg1");t.src=a,e=new Cropper(t,{viewMode:3,dragMode:none,minCropBoxWidth:100,minCropBoxHeight:100})},i.readAsDataURL(a)}})),$(".cropBtn1").click((function(){return null!=e&&(img=e.getCroppedCanvas().toDataURL(),$("#image").val("")),!1})),$("#cookieClear").click((function(){return $.removeCookie("name"),$.removeCookie("id"),$.removeCookie("coment"),$.removeCookie("sns"),!1}))}))})),$((function(){var e=$("#snsData");e.html('<div class="input-field col s12"><input type="text" name="formSNS" id="snsText" class="profelem"  maxlength="25" placeholder=""><label for="snsText">SNS情報：</label></div>'),e.hide(),$(".profelem").on({keydown:window.i,chenge:window.i}),$("#snsDataBtn").click((function(){return document.getElementById("snsText")?e.fadeIn:e.fadeOut,i(),!1}))})),$((function(){$("#download").click((function(){var e=$("#name").val();if($("#name, #id, #age, #coment").on("keyup",(function(){$("#name").val()})),null==e||""==e)alert("名前が抜けています。");else{let e=document.getElementById("prof"),t=document.createElement("a");t.href=e.toDataURL("image/png"),t.download="prof.png",t.click()}return!1})),$("#windl").click((function(){var e=$("#name").val();if(null===e||""===e)alert("名前が抜けています。");else{var t=document.createElement("canvas");t.width=1920,t.height=1080,setTimeout((()=>{read(t);let e=document.createElement("a");e.href=prof.toDataURL("image/png"),e.download="prof-window.png",e.click()}),50)}return!1})),$("#smtdl").click((function(){var e=$("#name").val();return null===e||""===e?alert("名前が抜けています。"):(document.getElementById("SMTprof"),setTimeout((()=>{let e=document.createElement("a");e.href=prof.toDataURL("image/png"),e.download="prof-smart.png",e.click()}),50)),!1}))}))})();