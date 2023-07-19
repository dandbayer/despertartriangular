const button = document.querySelector(".btn-fixed");

window.addEventListener("scroll", function (event) {
    if (window.scrollY == 0) {
        button.classList.remove("visible");
    } else {
        button.classList.add("visible");
    }
})

function menuFunction() {
    var x = document.getElementById("menulinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

