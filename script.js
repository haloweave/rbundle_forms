$("#businessYear").datepicker({
    format: "yyyy",
    viewMode: "years", 
    minViewMode: "years",
    endDate: new Date(),
});

 $("#businessYear, #itf, #businessYearEnd, #legalEntity").change(function() {  
        var businessYear = $( "#businessYear" ).val();
        var itf = $("#itf").val()
        var businessYearEnd = $("#businessYearEnd").val()
        var legalEntity = $("#legalEntity").val()
        console.log(businessYear +" "+ itf +" "+ businessYearEnd +" "+ legalEntity)
    });

$(document).ready(function () {
    $('#form-table').DataTable();
});