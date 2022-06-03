$('#myform').submit(function() {
  $('#form-table').show();
  return false;
});

let tableRowSize=0;
$("#businessYear").datepicker({
  format: "yyyy",
  viewMode: "years",
  minViewMode: "years",
  endDate: new Date(),
})

if($('#form-table').css('display') == 'none')
{
  console.log("table has loaded");
}
else {
  console.log("table has not loaded")
}

function showEmptyCell() {
    $("#form-table td:empty").text("empty").css("background-color", "green");
}


function showDownloadButton() {
  $("#downloadButton").show();
}

function ExportToExcel(type, fn, dl) {
       var elt = document.getElementById('form-table');
       var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
       return dl ?
         XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
         XLSX.writeFile(wb, fn || ('MySheetName.' + (type || 'xlsx')));
    }

function RemoveMe(object) {
  $(object).parents('tr').remove();
  renumberRows();
    tableRowSize--;
    console.log("tableRowSize on delete: "+tableRowSize);
}

function addTableRow(object){
  var addRowAppend =
      "<tr><td><input type='button' id='addRow' value='+' onClick='addTableRow(this)'/></td><td id='currentYear'></td>Current year: <td contenteditable></td><td contenteditable></td><td contenteditable></td><td>N/A</td><td><input type='button' id='deleteRow' value='🗑️' onclick='RemoveMe(this)'/></td></tr>";
    $(object).parents('tr').after(addRowAppend);
  tableRowSize++;
  console.log("add row function is running");
  console.log("tableRowSize on add: "+tableRowSize);
  renumberRows();
}

function renumberRows() {
    $('table#form-table tbody tr').each(function(index) {
        $(this).children('#currentYear').text("Current Year: "+ (index+1) );
        console.log("renumber is running!");
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
      var downloadButton = $("#downloadButton");
      var rowNum = $("#businessYear").val();
      const d = new Date();
      let year = d.getFullYear();
      var rowFinalNum = year - rowNum;
      var resultHtml = "";
      var showDownloadButton = "";

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
            "<tr id='table' ><td><input type='button' id='addRow' value='+' onClick='addTableRow(this)'/></td><td id='currentYear'>Current year: "+(i-1)+"</td><td contenteditable>"+businessYearEnd+"/"+year+"</td><td contenteditable>"+itf+"</td><td contenteditable>"+legalEntity+"</td><td contenteditable>N/A</td><td><input type='button' id='deleteRow' value='🗑️'onclick='RemoveMe(this)'/></td></tr>"
          year--;
          console.log("inside table building loop");
        }
      } else {
        console.log("skipped table building loop");
      }
      console.log("value of rowFinalNum: " + rowFinalNum);
      console.log("value of rowNum: " + rowNum);
      console.log("value of i: " + i);
      table.html(resultHtml);
      return true;
    }
  );
});

