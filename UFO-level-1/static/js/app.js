var tableData = data;

var tableBody = d3.select('tbody');



tableData.forEach(function(displayData) {
    var row = tableBody.append("tr");
    Object.entries(displayData).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  });
});

var dateInputText = d3.select('#datetime');
var button = d3.select('#filter-btn');

function dataDisplayed(filterTable) {
    filterTable.forEach(function(filterTable){
    var row = tableBody.append("tr");
    Object.entries(filterTable).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  })})};

function clickButton(){
    d3.event.preventDefault();
    var filterTable = tableData.filter(filteredData => filteredData.datetime === dateInputText.property('value'));
    console.log(filterTable);
    d3.select("tbody").selectAll("tr").remove();
    dataDisplayed(filterTable);
    d3.select("#datetime").node().value = "";
}

button.on('click', clickButton);