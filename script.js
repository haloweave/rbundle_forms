$("#businessYear").datepicker({
  format: "yyyy",
  viewMode: "years",
  minViewMode: "years",
  endDate: new Date(),
});


$(document).ready(function () {
  $("#businessYear, #legalEntity, #itf, #businessYearEnd").on('change', function () {
    var legalEntity = $("#legalEntity").val();
    var itf = $("#itf").val();
    var businessYearEnd = $("#businessYearEnd").val();
    var businessYear = $("#businessYear").val();
    var table = $("#form-table");
    var rowNum = $("#businessYear").val();
    const d = new Date();
    let year = d.getFullYear();
    var rowFinalNum = year - rowNum;
    var resultHtml = "";

    if (!!rowNum) {
      for (var i = 1; i <= rowFinalNum + 1; i++) {
        var loopYear = year;
        resultHtml +=
          "<tr>"
          "<td><input type='button' class='add' value='Addrow'></td>"
          "<td><input type='name' placeholder='"+businessYearEnd+"/"+businessYear+"' value=''>"
          "<td><input type='name' placeholder='"+itf+"' value=''>"
          "<td><input type='name' placeholder='"+legalEntity+"' value=''>"
          "<td><input type='name' placeholder='N/A' value=''>"
          "<td><input type='button' class='' value='Deleterow'></td>"
          "</tr>";
        year--;
      }
    } else {
      console.log("row num is empty");
    }
    console.log()
    console.log("value of rowFinalNum: " + rowFinalNum);
    console.log("value of rowNum: " + rowNum);
    console.log("value of i: " + i);
    table.html(resultHtml);
    return false;
  });
});
