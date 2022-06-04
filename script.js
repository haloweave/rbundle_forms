// $('#myform').submit(function() {
//   $('#form-table').show();
//   // $("#downloadButton").show();
//   // var lengthOfEmptyCells = $("#form-table td:empty").length
//   //  if( lengthOfEmptyCells != 0) {
//   //   console.log("condition applied")
//   //   $("#downloadButton").css("display", "none")
//   // }
//   // else {
//   //   $("#downloadButton").css("display", "inline")
//   //   console.log("condition not applied")
//   // }
//   emptyCells();
//   return false;
// });

let tableRowSize = 0;
$("#businessYear").datepicker({
  format: "yyyy",
  viewMode: "years",
  minViewMode: "years",
  endDate: new Date(),
});

function emptyCells() {
  var lengthOfEmptyCells = $("#form-table td:empty").length;
  console.log("length of empty cells: " + lengthOfEmptyCells);
  if (lengthOfEmptyCells != 0) {
    console.log("condition applied");
    $("#downloadButton").css("display", "none");
  } else {
    $("#downloadButton").css("display", "inline");
    console.log("condition not applied");
  }
}

function ExportToExcel(type, fn, dl) {
  var elt = document.getElementById("form-table");
  var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
  return dl
    ? XLSX.write(wb, { bookType: type, bookSST: true, type: "base64" })
    : XLSX.writeFile(wb, fn || "MySheetName." + (type || "xlsx"));
}

function saveFormAsTextFile() {
  console.log("i've been clicked")
  
      var fieldsToSave =
        $("#itf").val() +
        "\n" +
        $("#businessYearEnd").val() +
        "\n" +
        $("#businessYear").val() +
        "\n" +
        $("#legalEntity").val();
      console.log("i've LOGGED values: "+fieldsToSave)
      var fieldsToSaveAsBlob = new Blob([fieldsToSave], {
        type: "text/plain",
      });
      var fieldsToSaveAsURL = window.URL.createObjectURL(fieldsToSaveAsBlob);
      var fileNameToSaveAs = "Form progress";
      var downloadLink = document.createElement("a");
      downloadLink.download = fileNameToSaveAs;
      downloadLink.innerHTML = "Download File";
      downloadLink.href = fieldsToSaveAsURL;
      downloadLink.onclick = destroyClickedElement;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
      
      downloadLink.click();
    }
  


function destroyClickedElement(event) {
  document.body.removeChild(event.target);
}

(function() {
  var input = document.getElementById("fileinput");
  input.addEventListener("change", loadFile, false);

  function loadFile() {
    var file, fr;

    if (typeof window.FileReader !== 'function') {
      alert("The file API isn't supported on this browser yet.");
      return;
    }

    if (!input.files) {
      alert("This browser doesn't seem to support the `files` property of file inputs.");
    } else if (!input.files[0]) {
      alert("Please select a file before clicking 'Load'");
    } else {
      file = input.files[0];
      fr = new FileReader();
      fr.onload = receivedText;
      fr.readAsText(file);
    }

    function receivedText() {
      var data = fr.result.split('\n');
      document.getElementById("itf").value = data[0];
      document.getElementById("businessYearEnd").value = data[1];
      document.getElementById("businessYear").value = data[2];
      document.getElementById("legalEntity").value = data[3];
      console.log("length of the data variable is: "+data.length)
//       if (){
        
//       } else {
        
//       }
    }
  }
})();


function RemoveMe(object) {
  $(object).parents("tr").remove();
  renumberRows();
  tableRowSize--;
  console.log("tableRowSize on delete: " + tableRowSize);
  emptyCells();
}

function addTableRow(object) {
  var addRowAppend =
    "<tr><td><input type='button' id='addRow' value='+' onClick='addTableRow(this)'/></td><td id='currentYear'></td>Current year: <td contenteditable onkeyup='tdCheck(this)'></td><td contenteditable onkeyup='tdCheck(this)'></td><td contenteditable onkeyup='tdCheck(this)'></td><td contenteditable onkeyup='tdCheck(this)'>N/A</td><td><input type='button' id='deleteRow' value='🗑️' onclick='RemoveMe(this)'/></td></tr>";
  $(object).parents("tr").after(addRowAppend);
  tableRowSize++;
  console.log("add row function is running");
  console.log("tableRowSize on add: " + tableRowSize);
  renumberRows();
  emptyCells();
}

function renumberRows() {
  $("table#form-table tbody tr").each(function (index) {
    $(this)
      .children("#currentYear")
      .text("Current Year: " + (index + 1));
    console.log("renumber is running!");
  });
}

function tdCheck(check) {
  var tdData = check.innerHTML;
  console.log("value of num is: " + tdData);
  console.log("length of td: " + tdData.length);
  if (tdData.length > 0) {
    console.log("td is not empty");
    emptyCells();
  } else {
    console.log("td is empty");
  }
}

$(document).ready(function () {
  console.log("document ready log");
  $("#downloadButton").css("display", "none");
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

      if (
        !!businessYear &&
        !!businessYearEnd &&
        !!legalEntity &&
        !!itf &&
        !!rowNum &&
        (rowNum <= year && rowNum >= 1990)
      ) {
        $("#form-table").css("display", "block");
        for (var i = 1; i <= rowFinalNum + 1; i++) {
          var businessYearLoop = year;
          tableRowSize++;
          console.log("tableRowSize: " + tableRowSize);
          console.log(
            businessYearEnd + "/" + businessYear + " " + itf + " " + legalEntity
          );
          resultHtml +=
            "<tr id='table' ><td><input type='button' id='addRow' value='+' onClick='addTableRow(this)'/></td><td id='currentYear'>Current year: " +
            (i - 1) +
            "</td><td contenteditable onkeyup='tdCheck(this)'>" +
            businessYearEnd +
            "/" +
            year +
            "</td><td contenteditable onkeyup='tdCheck(this)'>" +
            itf +
            "</td><td contenteditable onkeyup='tdCheck(this)'>" +
            legalEntity +
            "</td><td contenteditable onkeyup='tdCheck(this)'>N/A</td><td><input type='button' id='deleteRow' value='🗑️'onclick='RemoveMe(this)'/></td></tr>";
          year--;
          console.log("inside table building loop");
          emptyCells();
        }
      } else {
        console.log("skipped table building loop");
      }
      table.html(resultHtml);
      return true;
    }
  );
});
