// Check off specific items on click
$("ul").on("click", "li", function() {
    $(this).toggleClass("done");
});

// Fade and remove items on click
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(1000, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type=text]").keypress(function(event) {
    if (event.which === 13) {
        // grab new todo text from input
        var todoText = $(this).val();
        // clear input form
        $(this).val("");
        // create a new li and add it to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});