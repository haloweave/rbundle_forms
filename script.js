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
      var table = $("#form-table");
      var rowNum = $("#businessYear").val();
      const d = new Date();
      let year = d.getFullYear();
      var rowFinalNum = year - rowNum;
      var resultHtml = "";

      if (!!businessYear && !!businessYearEnd && !!legalEntity && !!itf && !!rowNum) {
        for (var i = 1; i <= rowFinalNum + 1; i++) {
          var businessYearLoop = year;
          console.log(
            businessYearEnd + "/" + businessYear + " " + itf + " " + legalEntity
          );
          resultHtml += 
            "<thead>"
              "<tr>"
                "<th>&nbsp;</th>"
                "<th>Tax Years</th>"
                "<th>Fedral Income Tax Form</th>"
                "<th>Legal Entity</th>"
                "<th>Subject to BBA</th>"
                "<th>&nbsp;</th>"
              "</tr>"
            "</thead>"
              "<td></td>"
              "<td>"+businessYearLoop+"</td>"
              "<td></td>"
              "<td></td>"
              "<td></td>"
              "<td></td>"
              "<td></td>"
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
