
// Problem: User when clicking on image, goes to a dead end.
// Solution: Create an overlay with the large image - Lightbox.

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

// An Image to overlay
$overlay.append($image);

// A Caption to overlay 
$overlay.append($caption);

// Add overlay
$("body").append($overlay);



// Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  // Preventing the browsers defult behavior of following link
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  // Update overlay with the image linked in the link
  $image.attr("src", imageLocation);

   // Show the overlay
  $overlay.show();

  // Get childs alt attribute and set caption
 var captionText = $(this).children("img").attr("title");
   $caption.text(captionText); 
});
 

// When overlay is clicked
$overlay.click(function(){
  // Hide the overlay 
  $overlay.hide();
});









 