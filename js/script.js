$(document).ready(function (){
  // creare evento click
  $("#sender").click(
    function(){
      // prendere ilvalore
      var input = $("#text_send").val();
      if ( input != "") {

      // clonare il template
      var templateClonato = $(".template .message_row").clone();
      // inserire il valore nel template
      templateClonato.find(".testo_inv1").text(input);
      templateClonato.find(".orologio1").text("21.00");

      // aggiungere la classe right per stamparlo a destra e con il background verde
      templateClonato.addClass("right");
      // $(".second_row").removeClass("right");
      // $(".second_row").hide();

      // aggiungere il template nel box_destra_up
      $(".second_box_destra").append(templateClonato);
      // svuotare il value uma volta cliccato
      $("#text_send").val("");

      // creare funzione asincrona per far apparire la risposta
      setTimeout(function(){
        // riclonare il template come risposta
        var templateRisp = $(".template .message_row").clone();
        // aggiungere il testo ok
        templateRisp.find(".testo_inv1").text("ok");
        templateRisp.find(".orologio1").text("21.00");
        // appedo sempre al box chat
        $(".second_box_destra").append(templateRisp);
      },1000);

      }
     })
     // crea evento ricerca per lettere

    });
