$(function() {

    $(document).ready(function () {
        $.ajax({
          type: "GET",
          url: "./flow-civil-actions/assets/steps.xml",
          dataType: "xml",
          success: xmlParser
        });
      });

      function xmlParser(xml) {

        console.log("xml loaded");
        //$('#load').fadeOut();
       
        /*$(xml).find("Book").each(function () {
          $(".main").append('<div class="book"><div class="title">' + $(this).find("Title").text() + '</div><div class="description">' + $(this).find("Description").text() + '</div><div class="date">Published ' + $(this).find("Date").text() + '</div></div>');
          $(".book").fadeIn(1000);
        });*/
      }      
  });