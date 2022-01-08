// function openPopUp() {
//     console.log("jsfunction")
    // document.getElementById("wholeRow").style.display="none"
    // document.getElementById("myPopup").style.display="block"
    // $(document).ready(funnction(){
    //     $("#openPopUp").click(function(){
    //        $( "popuptext").show();
    //     });
    // });
    $(document).ready(function(){
        
        $('#openPopUp').click(function(){
            $(".hideAll").hide();
            $(".popuptextAbout").show();
            
        });
        $('#openPopUpEdu').click(function(){
            $(".hideAll").hide();
            $(".popuptextEdu").show();
            
        });
        $('#openPopUpExp').click(function(){
            $(".hideAll").hide();
            $(".popuptextExp").show();
            
        });
        $('#openPopUpCont').click(function(){
            $(".hideAll").hide();
            $(".popuptextCont").show();
            
        });
        $('.closeBtn').click(function(){
            $('.popuptext').hide();
            $(".hideAll").show();
        });
        $(document).mouseup(function(e) 
        {
            var container = $(".popuptext");
        
            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0) 
            {
                container.hide();
                $(".hideAll").show();
            }
        });
      });
//  }
 