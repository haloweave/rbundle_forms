$("#businessYear").datepicker({
    format: "yyyy",
    viewMode: "years", 
    minViewMode: "years",
    endDate: new Date(),
});

 $("#businessYear").change(function() {  
        var businessYear = $( "#businessYear" ).val();
        console.log(businessYear)
    }); 