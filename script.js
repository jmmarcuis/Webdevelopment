  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function showDropdown() {
    var dropdownContainer = document.querySelector(".dropdown-container");
    dropdownContainer.classList.toggle("show");
  }

    /* I have no idea why it doesn't work so heres the same function but for overlay */


  function toggleDropdown() {
    var dropdownContainer = document.querySelector(".overlay-dropdown-container");
    dropdownContainer.classList.toggle("show");
  }

  /* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";


    
  }

  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("open-modal-button");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  
  
