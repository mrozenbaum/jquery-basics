Preparation:

// Problem: User when clicking on image, goes to a dead end.
// Solution: Create an overlay with the large image = Lightbox

Plan:

How we're going to solve the problem by writing some pseudo-code.

// 1. Capture the click event on a link to an image
  // 1.1 Show the overlay
  // 1.2 Update overlay with the image linked in the link
  // 1.3 Get childs alt attribute and set caption
// 2. Add overlay
  // 2.1 An Image 
  // 2.2 A Caption  
// 3. When overlay is clicked
  // 3.1 Hide the overlay 

  jQuery Methods Used:

append()
children()
attr()
text()