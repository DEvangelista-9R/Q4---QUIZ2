function Average() {
  var Sub1 = Number(document.getElementById("Sub1").value); 
  var Sub2 = Number(document.getElementById("Sub2").value); 
  var Sub3 = Number(document.getElementById("Sub3").value); 

  var Ans = (Sub1 + Sub2 + Sub3) / 3;

  var rating = "";
  if (Ans >= 94) {
    rating = "Excellent";
  } else if (Ans >= 87) {
    rating = "Above Satisfactory";
  } else if (Ans >= 80) {
    rating = "Satisfactory";
  } else if (Ans >= 75) {
    rating = "Needs Improvement";
  } else if (Ans >= 70) {
    rating = "Poor";
  }

 window.alert("Avg: " + Ans.toFixed(2) + " | " + rating);
}