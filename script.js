$("#businessYear").datepicker({
    format: "yyyy",
    viewMode: "years", 
    minViewMode: "years",
    endDate: new Date(),
});

 $("#businessYear, #itf", #businessYearEnd, #legalEn).change(function() {  
        var businessYear = $( "#businessYear" ).val();
        var itf = $("#itf").val()
        console.log(businessYear +" "+itf)
    }); 