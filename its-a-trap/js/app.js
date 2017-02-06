console.log("Its a Trap!");
// HIDE THE WARNING
// SHOW THE WARNING SLOWLY
// $(".warning").hide().show("slow");// METHOD CHAINNING
// $(".warning").show("slow");

// first way to do this function //

// function myCode() {
//  $(".warning").hide().show("slow");
// }

// second way to do this function //

// var myCode = function() {
//   $(".warning").hide().show("slow");
// }

// myCode();
// $(document).ready(myCode);// selecting (document).ready means the function will load when the DOM is fully loaded
// third way to do this function //

// $(document).ready(function(){
//   $(".warning").hide().show("slow");
// });

//fourth way to do this function //

// $(function(){
//   $(".warning").hide().show("slow");
// });

// fifth way to do this function //

// because <script> is on the bottom, and DOM has already loaded, we dont have to include everything we included earlier.

$(".warning").hide().show("slow");