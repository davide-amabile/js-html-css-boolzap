$(document).ready(function (){
  // creare evento click
  $("#sender").click(
    function(){
      var input = $("#text_send").val();
      console.log(input);
      var a = $(".template li ").clone();
      a.prepend(input+" ");
      $(".lista_messaggi").append(a);
      $("#text_send").val("");
    });


    // creare evento keyup dentro l'input
    $("#text_send").keyup(
      function(evento){
        if(evento.which == 13) {
          var input = $("#text_send").val();
          var a = $(".template li").clone();
          a.prepend(input+" ");
          $(".lista_messaggi").append(a);
          $("#text_send").val("");
        }
      });
});
