$("#businessYear").datepicker({
    format: "yyyy",
    viewMode: "years", 
    minViewMode: "years"
});

 $("#businessYear").change(function() {  
        var businessYear = $( "#businessYear" ).val();
        console.log(businessYear)
    }); 