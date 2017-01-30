$(document).ready(function(){



    var i = 140;
    //for each keypress decrement the counter
    $("textarea").keypress(function(){

      var tot = $("p").text(i -= 1);
      //console.log();
      if(i < 0){
        $(".counter").css({
          "color":"red",
        });
        //remove the button
        $("a").css({
          "background-color":"gray"
        });
        $("a").off();
      }
    });



    $(".btn").click(function(btn){
      //console.log(i);// button ok
      var txt = $("textarea").val();
      //console.log(txt);//ho il valore
        $("ul").append("<li><img src='account.png' width='30px'>  " + txt + "</li><br />");
        //position
          $(".posts").css({
            "width":"400px",
            "position":"relative",
            "left":"350px",
            "top":"50px",
            "opacity":"0.4",


          });
        $("textarea").val("");
        i = 140;//return val init



    });

});
