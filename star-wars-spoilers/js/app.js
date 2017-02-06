//  PREVENT SPOILERPHOBES FROM SEEING SPOILERS
// SOLUTION: TO HIDE SPOILERS AND REVEAL THEM THROUGH USER INTERACTION

// 1. Hide Spoiler
$(".spoiler span").hide();
// 2. Add a button
$(".spoiler").append("<button>Reveal Spoiler!</button>")
// 3. When button pressed
$(".spoiler button").click(function(){
  // 3.1 Show spoiler next to the button clicked
  $(this).prev().show();
  // 3.2 Get rid of button
  $(this).remove();
});
  