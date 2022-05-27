$("#businessYear").datepicker({
  format: "yyyy",
  viewMode: "years",
  minViewMode: "years",
  endDate: new Date(),
});



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
          console.log(
            businessYearEnd + "/" + businessYear + " " + itf + " " + legalEntity
          );
          resultHtml +=
            "<tr><td><input type=button id='addRow' value='Add row'/></td><td>" +
            businessYearEnd +
            "/" +
            businessYearLoop +
            "</td><input type='text' placeholder='"+itf+"'/><td>"
            "</td><td>" +
            legalEntity +
            "</td><td>N/A</td><td><input type=button id='deleteRow' value='Delete Row'/></td></tr>";
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
  
    $("#addRow").click(function () {
    var legalEntity = $("#legalEntity").val();
    var itf = $("#itf").val();
    var businessYearEnd = $("#businessYearEnd").val();
    var businessYear = $("#businessYear").val();
    var addRowInputYear = $("#businessYear").val();
    const d = new Date();
    let year = d.getFullYear();
    var addRowIndex = year - addRowInputYear + 1;
    var businessYearLoop = year;
    var addRowAppend =
      "<tr><td><input type=button id='addRow' value='Add row'/></td><td>" +
      businessYearEnd +
      "/" +
      businessYearLoop +
      "</td><input type='text' placeholder='"+itf+"'/><td>"
      "</td><td>" +
      legalEntity +
      "</td><td>N/A</td><td><input type=button id='deleteRow' value='Delete Row'/></td></tr>";
    $("#form-table").append(addRowAppend);
    console.log("value of input year on addRow: " + addRowInputYear);
    console.log("value of addRowIndex: " + addRowIndex);
  });
  
});


