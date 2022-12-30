
function calculateTip() {
  var totalnota = document.getElementById("totalnota").value;
  var servire = document.getElementById("servire").value;
  var numarpers = document.getElementById("numarpersoane").value;
  


  if (totalnota === "" || servire == 0) {
    alert("Va rugam introduceti o valoare");
    return;
  }
  
  if (numarpers === "" || numarpers <= 1) {
    numarpers = 1;
    document.getElementById("fiecare").style.display = "none";
  } else {
    document.getElementById("fiecare").style.display = "block";
  }

  var total = (totalnota * servire) / numarpers;
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  //Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}
function submit() {
  /*Put all the data posting code here*/
 document.getElementById("myForm").reset();
}
document.getElementById("totalTip").style.display = "none";
document.getElementById("fiecare").style.display = "none";

var calculeaza = document.getElementById("calculeaza").value;
document.getElementById("calculeaza").onclick = function() {
  calculateTip();

};

