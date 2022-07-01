console.log("website loaded")

function calculateSquareForInput () {
    // read the value of the input
    var inputnumber=document.getElementById ('number-to-square').value;
    // square the number
    var squarenumber=Math.pow (inputnumber,2);
    // write the result in a specific HTML element
    document.getElementById ('square-result').innerText=squarenumber;
}

function alertChange () {
    var inputEl = document.getElementById("execrise-input");
    if (inputEl.value.lenght > 4) {
        window.alert ("ok");
    } else {
      inputEl.value = "";
      window.alert ("name must be at least 4 char long");
}