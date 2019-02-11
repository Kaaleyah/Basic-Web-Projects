function increase() {
  localStorage.death++;
  document.getElementById("DeathCounter").innerHTML = localStorage.death;
}

function done() {
    // var wo = document.getElementById("boss1")
    // wo.id = "done";

    var wo = document.getElementById("boss1");

    wo.id = "done";

    wo = localStorage.getItem("boss1");
}

document.onkeyup = function(e) {
  if (e.which == 57) {
    increase();
  }
}
