var button = document.querySelector(".show-cat");
// Correct element selected

var cat = document.querySelector(".cat");
//Correct element selected

button.addEventListener("click", function () {
  if (cat.classList.contains("show")) {
    //console.log yes
    cat.classList.remove("show");
    button.innerText = "Wait, come back!";
    button.classList.add("disappear");
  } else {
    //console.log no
    cat.classList.add("show");
    button.innerText = "Shoo, cat!";
    button.classList.remove("disappear");
  }
});
