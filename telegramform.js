!function(t){t(".contact-form").submit((function(e){e.preventDefault();let o=t("#"+t(this).attr("id"))[0],r=t(this).find(".contact-form__message"),s=new FormData(o);t.ajax({url:"telegram.php",type:"POST",data:s,processData:!1,contentType:!1,success:function(e){let o=t.parseJSON(e);o.err?(r.html(o.err).css("color","#d42121"),setTimeout((()=>{r.text("")}),3e3)):o.okSend?(r.html(o.okSend).css("color","#21d4bb"),setTimeout((()=>{r.text("")}),3e3)):alert("Необработанная ошибка. Проверьте консоль и устраните.")}})}))}(jQuery);