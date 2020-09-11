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
    // creare evento keyup su input e far stampare il messaggio


     // crea evento ricerca per lettere
     $("#search_name").keyup(
       function (){
         // creare variabile che prende il valore di search_name
         var input = $("#search_name").val().toLowerCase();
         // creare variabile che richiama i nomi_amici
         // N.B.: facendo così creo l'elenco senza dover creare la variabile con l'array vuoto e poi pusshare gli elementi
         var listaNomi = $(".nomi_amici .contatto");
         // creare ciclo each
         // N.B.: each equivale al ciclo for e while
         listaNomi.each( function(){
         // creare variabile per l'elenco
         var a = $(this).text();
         // creare condizione con includes
         // N.B.: ho dato == true perchè includes da valore true
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
     //N.B.: ho usato $("document") per includere tutti gli .angle_down se no non mi funziona per quelli clonato
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

     // creare evento click su profilo_amici
     $(".profilo_amici").click(function (){
       // aggiungre rimuovere la classe active a tutti gli elementi e aggiungerla dove clicco
       $(".profilo_amici").removeClass("active");
       $(this).addClass("active");
       // quando clicco sun profilo si deve aprire la chat corrispondente
       // estraggo l'attributo data-profilo
       var attributoPro = $(this).attr("data-profilo");
       // elimino le classi active a tutte lechat
       $(".second_box_destra").removeClass("active");
       // associo le chat e il profilo utente con i numeri dell'attributo
       $((".second_box_destra[data-chat=" + attributoPro + "]")).addClass("active");
       // cambiare il profilo nella barra sopra la charset
       // aggiungo a tutti la classe third_box_destra
       $(".first_box_destra").addClass("hide");
       $((".first_box_destra[data-pro-amici=" + attributoPro + "]")).removeClass("hide");


      });
     // fine evento
    });
