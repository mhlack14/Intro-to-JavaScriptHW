// from data.js
// Make the variable that brings in the data array given in the data folder shown in the text editor as data.js .Make that variable tableData
var tableData = data;

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


// Select the button
var submit = d3.select("#filter-btn");
submit.on("click", function() {
	console.log("Hello")

// Prevent the page from refreshing
  d3.event.preventDefault();
  
 // Select the input element and get the raw HTML node, get the value property
  var date = d3.select("#datetime").property("value");

  
 // Print the value to the console
  console.log(date);


//create a variable which filters the table if a user enters only some information in so that it will still work
 var filtered = tableData.filter(et_sighting =>{
  return (et_sighting.datetime===date || !date ) 

})
displayData(filtered)

})

