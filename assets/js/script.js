var i;
var iFilter;

var coll = document.getElementsByClassName("t_collapse__btn");
var collFilter = document.getElementsByClassName("filter-btn");
var contentFilter = document.getElementsByClassName("body__main--filter");

var device700 = window.matchMedia("(max-width: 480px)")

var listCard = document.getElementsByClassName("body__main--list")[0];
// Get the button that opens the modal
var btnLogin = document.getElementsByClassName("header__top--login");
var modelLogin = document.getElementsByClassName("t_login");

var btnCloseLogin = document.getElementsByClassName("t_login__form--close");

document.addEventListener("DOMContentLoaded", (event) => {
  // Login Button
  console.log(btnLogin)
  btnLogin[0].addEventListener("click", function() {
    console.log("login")
    modelLogin[0].style.display = "block";
  });

  // Function Check device - phone
  function checkMediaQuery(x) {
    if (x.matches) { // If media query matches
      coll[0].classList.toggle("active");
      coll[0].nextElementSibling.style.display = "block";
      collFilter[1].style.display = "block";

      contentFilter[0].style.display = "none";
    } else {
      collFilter[1].style.display = "none";
    }
  }

  // Call function with phone
  checkMediaQuery(device700);



  // Toggle 
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

  // Toggle filter
  for (iFilter = 0; iFilter < collFilter.length ; iFilter++) {
    collFilter[iFilter].addEventListener("click", function() {
      this.classList.toggle("active1");
      
      if (contentFilter[0].style.display === "block") {
        contentFilter[0].style.display = "none";
        console.log("sdhaksd")
        console.log(listCard)
        for (i = 0; i < listCard.length; i++) {
          console.log("for")
          console.log(listCard[i])
          listCard[i].style.flex = "1";
        }
    
      } else {
        contentFilter[0].style.display = "block";
      }
    });
  }

  
  btnCloseLogin[0].addEventListener("click", function() {
    modelLogin[0].style.display = "none";
  });

});



