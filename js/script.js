$(document).ready(function (){
  // creare evento click
  $("#sender").click(
    function(){
      var input = $("#text_send").val();
      console.log(input);
      var a = $(".template p").clone();
      console.log(a);
      a.prepend(input);
      $("#testo").append(a);
      $("#text_send").val("");
     })
    });
