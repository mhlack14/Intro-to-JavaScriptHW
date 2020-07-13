// from data.js
// Make the variable that brings in the data array given in the data folder shown in the text editor as data.js .Make that variable tableData
var tableData = data;

// YOUR CODE HERE!

// make the tbody variable, aptly just named tbody, to move the data in to as executed through the various functions and variables done just below 
tbody = d3.select("tbody")

// loop through table using object entries, name the function that moves the data to the aliens webpage displaydata
function displayData(something){ 
    tbody.text("")
    something.forEach(function(et_sighting){
    new_tr = tbody.append("tr")
    Object.entries(et_sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}


//Get the above table to show up on the web browser by running the function we named displaydata above
displayData(tableData)
//Never harms to test to see if code works i.e. no errors displayed to this point by console logging the word test
console.log("test")



// Get the submit button up and running
var submit = d3.select("#submit");

submit.on("click", function() {
    console.log("hello3")
// Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var date = d3.select("#datetime");
  var city = d3.select("#city");
  var state = d3.select("#state");
  var country = d3.select("#country");
  var shape = d3.select("#shape");

  // Get the value property of the input element
  console.log(date.property("value"));
  console.log(city.property("value"));
  console.log(state.property("value"));
  console.log(country.property("value"));
  console.log(shape.property("value"));
  //create a variable which filters the table if a user enters only some information in so that it will still work

 var filtered = tableData.filter(et_sighting =>{
  return (et_sighting.datetime===date.property("value") || !date.property("value") ) && 
            (et_sighting.city===city.property("value") || !city.property("value")) &&
            (et_sighting.state===state.property("value") || !state.property("value")) &&
            (et_sighting.country===country.property("value") || !country.property("value")) &&
            (et_sighting.shape===shape.property("value") || !shape.property("value"))
 })
 //run the filtered entries through the displayData function to update the table
 displayData(filtered);
 
 
 });
 
 var filterInputs = d3.selectAll('.form-control');

// Clears input fields and input object
function clearEntries() {
    filters = {};
	// Sets every input field to empty
    filterInputs._groups[0].forEach(entry => {
        if (entry.value != 0) {
            d3.select('#' + entry.id).node().value = "";
        }
    });
};

var clearButton = d3.select("#clear");
// Clear button on click clears fields
clearButton.on('click', function () {

    // Keeps page from refreshing completely, only want the table to refresh
    d3.event.preventDefault();
    // Clears input fields
    clearEntries()
});

 