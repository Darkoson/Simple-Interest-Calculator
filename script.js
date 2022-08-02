/**
 * compute : function that will be called when the user clicks
 *            on the button "Compute Interest" button
 *
 * @returns nothing
 */
function compute() {
  // get the current principal value and validating it
  var principal = document.getElementById("principal").value;
  if (principal <= 0) {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
    return;
  }

  // getting of other input values to compute the interest value
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = (principal * years * rate) / 100;

  // calculate the year in which the interest will be collected
  var year = new Date().getFullYear() + parseInt(years);

  // display the result to the user
  document.getElementById("result").innerHTML =
    "<br/>  If you deposit <mark>" +
    principal +
    "</mark>" +
    ", <br/> at an interest rate of <mark>" +
    rate +
    "%. </mark>" +
    "<br/> You will receive an amount of <mark>" +
    interest +
    "</mark>," +
    "<br/> in the year <mark>" +
    year +
    "</mark>";
}

/**
 * updateRate : function that updates the interest rate for
 *  the user to see the corresponding value of the range slider
 *
 * @return nothing
 */
function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval + " %";
}
