let tableRowSize=0;
$("#businessYear").datepicker({
  format: "yyyy",
  viewMode: "years",
  minViewMode: "years",
  endDate: new Date(),
});

function RemoveMe(object) {
  $(object).parents('tr').remove();
  renumberRows();
}

function addTableRow(object){
  var addRowAppend =
      "<tr><td><input type='button' id='addRow' value='+' onChange='addTableRow(this)'/></td><td></td><td><input type='text' value='' required/></td><td><input type='text' value='' required/></td><td><input type='text' value='' required/></td><td><input type='text' value='N/A' required/></td><td><input type='button' id='deleteRow' value='🗑️' onclick='RemoveMe(this)'/></td></tr>";
    $(object).parents('tr').after(addRowAppend);
  renumberRows();
}

function renumberRows() {
    $('table#form-table tbody tr').each(function(index) {
        $(this).children('td:second').text("Current Year: "+index+1);
    });
}

$(document).ready(function () {
  $("#businessYear, #legalEntity, #itf, #businessYearEnd").on(
    "change",
    function () {
      var legalEntity = $("#legalEntity").val();
      var itf = $("#itf").val();
      var businessYearEnd = $("#businessYearEnd").val();
      var businessYear = $("#businessYear").val();
      var table = $("#form-table tbody");
      var rowNum = $("#businessYear").val();
      const d = new Date();
      let year = d.getFullYear();
      var rowFinalNum = year - rowNum;
      var resultHtml = "";

      if (
        !!businessYear &&
        !!businessYearEnd &&
        !!legalEntity &&
        !!itf &&
        !!rowNum
      ) {
        for (var i = 1; i <= rowFinalNum + 1; i++) {
          var businessYearLoop = year;
          tableRowSize++;
          console.log("tableRowSize: "+tableRowSize);
          console.log(
            businessYearEnd + "/" + businessYear + " " + itf + " " + legalEntity
          );
          resultHtml +=
            "<tr id='table' ><td><input type='button' id='addRow' value='+' onClick='addTableRow(this)'/></td><td></td><td><input type='text' value='"+businessYearEnd+"/"+businessYear+"' required/></td><td><input type='text' value='"+itf+"' required/></td><td><input type='text' value='"+legalEntity+"' required/></td><td><input type='text' value='N/A' required/></td><td><input type='button' id='deleteRow' value='🗑️'onclick='RemoveMe(this)'/></td></tr>"
          year--;
        }
      } else {
        console.log("row num is empty");
      }
      console.log("value of rowFinalNum: " + rowFinalNum);
      console.log("value of rowNum: " + rowNum);
      console.log("value of i: " + i);
      table.html(resultHtml);
      return false;
    }
  );
});


