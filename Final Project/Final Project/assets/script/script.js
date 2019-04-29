
clicked = true;
    $(document).ready(function(){
        $("button").click(function(){
            if(clicked){
                $("body").css('background-color', '#000080');
                $("body").css('color', '#ffd700')
                $(this).css('background-color', '#ffd700')
                clicked  = false;
            } else {
                $("body").css('background-color', '#5B2333');
                $("body").css('color', '#ffffff');
                $(this).css('background-color', '#ffffff')
                clicked  = true;
            }   
        });
    });
