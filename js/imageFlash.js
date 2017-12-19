(function($){
    $(function(){
  
     //create array of image ids in div
        var imageArray = [];
        $('.imageFlash').children().each(function () {
            var currentID = $(this).attr('id');
            imageArray.push(currentID);
        });
        
        console.log(imageArray);
    // Fadeout Current ID
    // Fadein New ID
        function swapImage(){
            for (i = 0; i < imageArray.length - 1; i++) { 
                j=i+1;
                $("#"+imageArray[i]).fadeOut(500,function (){
                    console.log("fading out first ID " + imageArray[i]);
                    
                    $("#"+imageArray[j]).fadeIn(500);
                            console.log("fading in Next ID " + imageArray[j]); 
                    
                });
            }
  
        }
    //swap the image of next id at interval
    swapImage();
        
    
    });
    })(jQuery); 