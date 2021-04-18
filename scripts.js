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
$(document).ready(function() {
    $("form#myform").submit(function(event) {
        event.preventDefault();
        var userName = $("#name").val();
        var userEmail = $("#email").val();
        var userMessage = $("#message").val();
        if (userMessage == " ")
            alert(userName + ", Please give us your feedback.");
        else {
            alert(userName + ", we have received your message. Thank you for reaching out to us");
        }
    });
});