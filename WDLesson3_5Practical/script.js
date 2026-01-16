/* Challenge 2: Complete the area and perimeter functions below for the rectangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function recArea() {
  let length = parseFloat(document.getElementById("rectLength").value);
  let width = parseFloat(document.getElementById("rectWidth").value);

  let area = length * width;

  document.getElementById("rectOutput").innerHTML = area;
}

function recPerimeter() {
  let length = parseFloat(document.getElementById("rectLength").value);
  let width = parseFloat(document.getElementById("rectWidth").value);

  let perimeter = 2 * (length + width);

  document.getElementById("rectOutput").innerHTML = perimeter;
}

/* Challenge 4: Complete the area and circumference functions below for the circle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 3.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
let pi = 3.1415926;

function cirArea() {
  let radius = parseFloat(document.getElementById("circleRadius").value);

  let area = pi * radius * radius;
  document.getElementById("circleOutput").innerHTML = area;
}

function cirPerimeter() {
  let radius = parseFloat(document.getElementById("circleRadius").value);

  let circumference = 2 * pi * radius;
  document.getElementById("circleOutput").innerHTML = circumference;
}


/* Challenge Bonus: Complete the area and perimeter functions below for the triangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function triArea(){

}

function triPerimeter(){

}