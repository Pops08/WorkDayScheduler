//Current Date Functionality
var currentDay = $( "#currentDay" );
var currentHour = moment().format("H");
console.log(currentHour)
var todaysDate = moment().format('dddd [,] MMMM Do');
$("#currentDay").append(todaysDate);

var localIndex = 9;

//Color Coded Functionality
    $(".form-control").each ( function() 
    {
        let domElement = $(this)
        
        //if ( Number( $(this).attr("timeSlot") ) < currentHour ) 
        if( Number ( ( domElement ).attr("timeSlot") ) < currentHour )
        {
            //$(this).addClass("past");
            //$(this).prop("disabled", true);
            domElement.addClass("past");
            domElement.prop("disabled", true);

        }
        //else if ( Number( $(this).attr("timeSlot") ) == currentHour ) 
        else if( Number ( ( domElement ).attr("timeSlot") ) == currentHour )
        {
            //$(this).addClass("present");
            domElement.addClass("present");
        }

        //else if ( Number( $(this).attr("timeSlot") ) > currentHour ) 
        else if( Number ( ( domElement ).attr("timeSlot") ) > currentHour )
        {
            //$(this).addClass("future");
            domElement.addClass("future");
        }
        
        let elementVal = localStorage.getItem(localIndex.toString() + "Input") || false;

        if (elementVal) {
            domElement.val(elementVal);
        }
        localIndex++
    }
    )

//Save Input Data Functionality
$(".saveBtn").on("click", function(event){
    event.preventDefault();
   // var currentInput = $(".input-group")
   $(".form-control").each(function(){
       if($(this).val()!=""){

        var time = $(this).attr('id');

        var allInput = $(this)
        .val() 
        .trim();

        localStorage.setItem(time, allInput);
        //$(this).val(allInput)
       }
   });
   
    
});

