$(document).ready(function (){
  // creare evento click
  $("#sender").click(
    function(){
      var input = $("#text_send").val();
      console.log(input);
      var a = $(".template").clone();
      console.log(a);
      a.prepend(input);
      $(".message_row p").append(a);
      $("#text_send").val("");
     })
    });
