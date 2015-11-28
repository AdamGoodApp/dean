$( document ).ready(function() {

    $( "#submit" ).on( "click", function() {
      var result = 21828;
      var answer =  parseInt($("#answer").val());
      if(answer == result) {
        
        $('#code').css( "display","block" );
      }
    });


});