// from data.js
var tableData = data;

// Select the button
var button = d3.select("#button");

button.on("click", function() {

    var inputDate = d3.select("#datetime");
    
    var inputValue = inputDate.property("value")

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    
    console.log(filteredData.length)
    
    var tbody = d3.select("tbody")
    
    filteredData.forEach(function(loopFilteredData) {
        var row = tbody.append("tr");
        Object.entries(loopFilteredData).forEach(function([key, value]) {
          console.log(key, value);
          // Append a cell to the row for each value
          // in the weather report object
          var cell = row.append("td");
          cell.text(value);
        });
      });
  });
