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
            $('.popuptextAbout').fadeIn(1500);
            
        });
        $('#openPopUpEdu').click(function(){
            $(".hideAll").hide();
            $('.popuptextEdu').fadeIn(1500);
            
        });
        $('#openPopUpExp').click(function(){
            $(".hideAll").hide();
            $('.popuptextExp').fadeIn(1500);
            
        });
        $('#openPopUpCont').click(function(){
            $(".hideAll").hide();
            $('.popuptextCont').fadeIn(1500);
            
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
 