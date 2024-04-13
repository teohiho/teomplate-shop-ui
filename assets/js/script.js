var coll = document.getElementsByClassName("t_collapse__btn");
var i;

var collFilter = document.getElementsByClassName("filter-btn");
var iFilter;

var device700 = window.matchMedia("(max-width: 480px)")




document.addEventListener("DOMContentLoaded", (event) => {

  //
  function checkMediaQuery(x) {
    if (x.matches) { // If media query matches
      coll[0].classList.toggle("active");
      coll[0].nextElementSibling.style.display = "block";
    } else {
      
    }
  }

  //------------
  checkMediaQuery(device700);

  for (i = 0; i < coll.length ; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

  for (iFilter = 0; iFilter < collFilter.length ; iFilter++) {
    collFilter[iFilter].addEventListener("click", function() {
      this.classList.toggle("active1");
      
      var contentFilter = document.getElementsByClassName("body__main--filter");
      if (contentFilter[0].style.display === "block") {
        contentFilter[0].style.display = "none";
        contentFilter[1].style.display = "block";
      } else {
        contentFilter[0].style.display = "block";
        contentFilter[1].style.display = "none";
      }
    });
  }


});



