// General Guideline
/*
function name(){
  // Step 1: Create variables for the information from the text inputs and the output element

  // Step 2: Complete the process
  //    a) Perform any calculations necessary
  //    b) Perform necessary decisions

  // Step 3: Display the output

}
*/

/* Challenge 2:  Create the function for Challenge 1 scenario */
function area(){
  let length = document.getElementById("length").value;
  let width = document.getElementById("width").value;
  let output = document.getElementById("output");

  if(length <= 0 || width <= 0){
    output.innerHTML = "Inappropriate measurement";
  } else {
    let area = length * width;
    output.innerHTML = "Area = " + area;
  }
}


/* Challenge 3:  Complete the function for Pets Challenge on pets.html.  
1) Review the HTML for the UI.  Remember dropdown boxes are just input.
2) You will need to write HTML as part of the output.  
   For example, output.innerHTML = `<input src="pic.png">` would place the image in the <div>*/
function pet(){
  // Step 1: Get inputs and output div
  let animal = document.getElementById("animal").value;
  let emotion = document.getElementById("emotion").value;
  let output = document.getElementById("output");

  // Step 2: Decision
  if(animal == "Bear" && emotion == "Funny"){
    output.innerHTML = '<img src="funnyBear.jpg">';
  }
  else if(animal == "Bear" && emotion == "Sad"){
    output.innerHTML = '<img src="sadBear.jpg">';
  }
  else if(animal == "Cat" && emotion == "Funny"){
    output.innerHTML = '<img src="funnyCat.jpg">';
  }
  else if(animal == "Cat" && emotion == "Sad"){
    output.innerHTML = '<img src="sadCat.jpg">';
  }
  else if(animal == "Dog" && emotion == "Funny"){
    output.innerHTML = '<img src="funnyDog.jpg">';
  }
  else if(animal == "Dog" && emotion == "Sad"){
    output.innerHTML = '<img src="sadDog.jpg">';
  }
}