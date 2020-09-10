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
      // fine evento


     })


     // crea evento ricerca per lettere
     $("#search_name").keyup(
       function (){
         // creare variabile che prende il valore di search_name
         var input = $("#search_name").val().toLowerCase();
         // creare variabile che richiama i nomi_amici
         var listaNomi = $(".nomi_amici .contatto");
         // creare ciclo each
         listaNomi.each( function(){
         // creare variabile per l'elenco
         var a = $(this).text();
         // creare condizione con includes
         if ( a.includes(input) == true ) {
           // se le lettere ci far apparire il div
          $(this).parents(".profilo_amici").show();
        } else {
          // se non ci sono far sparire il div
          $(this).parents(".profilo_amici").hide();
        }

         });
       }
       // fine funzione
     );
     // fine evento

     // creare evento click peer far apparire il menu_delete
     $(document).on("click", ".angle_down",
       function(){
        $(this).siblings(".menu_delete").toggleClass("hide");
       }
     );
     // fine evento

     // creare evento click per far eliminare il messaggio
     $(document).on("click", ".delete_button",
       function(){
        $(this).parents(".message_row").remove();
       }
     );
     // fine evento
    });
