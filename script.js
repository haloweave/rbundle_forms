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
          "<thead>
            <tr>
              <th>&nbsp;</th>
              <th>Tax Years</th>
              <th>Fedral Income Tax Form</th>
              <th>Legal Entity</th>
              <th>Subject to BBA</th>
              <th>&nbsp;</th>
            </tr>
          </thead>"
          "<tr>"
          "<td><input type='button' class='add' value='Addrow'></td>"
          "<td><input type='name' placeholder='"+businessYearEnd+"/"+businessYear+"' value='1'>"
          "<td><input type='name' placeholder='"+itf+"' value='2'>"
          "<td><input type='name' placeholder='"+legalEntity+"' value='3'>"
          "<td><input type='name' placeholder='N/A' value='4'>"
          "<td><input type='button' class='' value='Deleterow'></td>"
          "</tr>";
        year--;
      }
    } else {
      console.log("row num is empty");
    }
    console.log(businessYearEnd +"/"+businessYear +" "+ itf +" "+  legalEntity);
    console.log("value of rowFinalNum: " + rowFinalNum);
    console.log("value of rowNum: " + rowNum);
    console.log("value of i: " + i);
    table.html(resultHtml);
    return false;
  });
});
