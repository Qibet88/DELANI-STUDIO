$(document).ready(function() {
    $(".d-image").click(function() {
        $(".d-image").hide();
        $(".design").toggle();

    });

    $(".design").click(function() {
        $(".design").hide();
        $(".d-image").toggle();

    });

    $(".dev-image").click(function() {
        $(".dev-image").hide();
        $(".development").toggle();
    });

    $(".development").click(function() {
        $(".development").hide();
        $(".dev-image").toggle();
    });

    $(".p-image").click(function() {
        $(".p-image").hide();
        $(".product").toggle();
    });

    $(".product").click(function() {
        $(".product").hide();
        $(".p-image").toggle();
    });

});