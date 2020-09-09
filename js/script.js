$(document).ready(function (){
  // creare evento click
  $("#sender").click(
    function(){
      var input = $("#text_send").val();
      console.log(input);
      var a = $(".template p").clone();
      console.log(a);
      a.prepend(input);
      $("#testo_inv").append(a);
      // aggiungo l classe per il background verde
      $(".message_row .messaggio").addClass("green");
      // aggiungo la classe end per farlo apparire a destra
      $(".second_box_destra").children(".message_row ").addClass("end");
      $("#text_send").val("");
     })
    });
