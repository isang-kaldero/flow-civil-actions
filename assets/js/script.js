$(function() {

    var data = [];    
    $.ajax({

        type: "GET",
        url: "https://isang-kaldero.github.io/flow-civil-actions/assets/steps.xml",
        dataType: "xml",
        success: function(xml){


            xml = $(xml).children();
            var step_id = "";
            var first_id = "";

            $(xml).children().each(function (index) {
                
                //save data in an array                    
                step_id = $(this).find("id").text();
                data[step_id] = [];

                first_id = (index == 0) ? step_id : first_id;

                data[step_id]["title"] = $(this).find("title").text();
                data[step_id]["content"] = $(this).find("content").text();
                data[step_id]["yes"] = $(this).find("yes").text();
                data[step_id]["no"] = $(this).find("no").text();                
            });                                    

            $(".loader").toggle("fade", 500, function() {
                populateUI(first_id, ".current", "right");
            });
                        
        }
    });
    

    $(".next").on("click", function(){
        
        id = $(this).attr("data-actionid");

        if(id !== "") {
            populateUI(id, ".standby", "right");
        }

    });

    $(".back").on("click", function(){
        
        id = $(this).attr("data-actionid");

        if(id !== "") {
            populateUI(id, ".standby", "down");
        }

    });    



    /**
     * 
     * @param {string} id the index from data
     * @param {string} container_class the class of the div that would be populated
     * @param {string} direction the slide direction
     */
    function populateUI(id, container_class, direction="right") {

        $(container_class + " h1").text(data[id]["title"]);
        $(container_class + " .step-content").text(data[id]["content"]);
        
        $(container_class + " .next").attr("data-actionid", data[id]["yes"]);        
        $(container_class + " .next").text('Next');

        if(data[id]["no"] == "") {
            $(container_class + " .back").hide();
        }        
        $(container_class + " .back").attr("data-actionid", data[id]["no"]);            


        $(container_class).toggle("slide", { direction: direction }, 700, function() {

            if(container_class == ".standby") {
                $(".main").find(".current").removeClass("current").addClass("standby").hide().css('z-index', 10);

                $(this).removeClass("standby").addClass("current").css('z-index', 1);
            }
            
        });
        
    }
    
  });