// Bad practice to run jQuery before page fully loaded. Use ready function. 
$(document).ready(function() {
    $("h2").css("text-decoration", "underline"); // Underlines all <h2> elements
    $("ul").css("border", "solid 1px #ccc"); // Adds a border to all lists
});