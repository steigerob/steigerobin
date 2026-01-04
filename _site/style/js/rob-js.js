// Pop up galleries in misc section

    $(document).ready(function(){
      // Clicking the first list item opens the first gallery
      $("#open-chair").on("click", function(e){
        e.preventDefault();
        $("#chair-pics a").first().trigger("click");
      });
      
      // Clicking the second list item opens the second gallery
      $("#open-bakery").on("click", function(e){
        e.preventDefault();
        $("#bakery-pics a").first().trigger("click");
      });
    });

// //   Pop up Window when entering site
//     document.addEventListener('DOMContentLoaded', function() {
//     var modal = document.getElementById("robPopUp");
    
//     // Only show the modal if there's no hash in the URL
//     if (!window.location.hash) {
//       modal.style.display = "block";
//     }

//     // Get the close button
//     var closeButton = document.querySelector(".close");
//     closeButton.addEventListener("click", function() {
//       modal.style.display = "none";
//     });

//     // Close the modal if user clicks outside the modal content
//     window.addEventListener("click", function(event) {
//       if (event.target === modal) {
//         modal.style.display = "none";
//       }
//     });
//   });