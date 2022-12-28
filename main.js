function clearr(){
    document.getElementById("nameField").value = "";
    document.getElementById("emailField").value = "";
    document.getElementById("messageField").value = "";
}
    
function changeColor(){
    var element = document.getElementById("photome");
  element.classList.toggle("U-Photo1");
  element.classList.toggle("U-Photo2");
}