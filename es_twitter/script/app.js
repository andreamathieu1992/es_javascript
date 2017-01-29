$(document).ready(function(){
    
    
    //ad ogni tasto che premo della testarea
    i = 140;
    $("textarea").keypress(function(){
        //dig += 0;
        dig = $("p").text(i -= 1);
        
        
        
       
       if(dig >= 140){
       
		    	$("a").click(function(){
					
					$("textarea").text();//valore textarea       
		    		//console.log(txt);
		    		/*$("ul").append(txt);
		    		txt = "";*/
				});
		};
	});  
});
    
    

