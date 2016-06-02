$(document).ready(function() {
  var inches = parseInt(prompt("How tall are you, really? (enter inches)"));
  if (inches >= 48) {
    $("#adultstuff").show();
} else {
    $("#kidstuff").show();
  }
});
