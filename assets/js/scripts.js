// Check Off Completed Tasks
$("ul").on("click", "li", function() { //When "li" is clicked inside the selected "ul", run the code

    $(this).toggleClass("completed");
   
});

// Delete Clicked Task
$("ul").on("click", "span", function(e) {
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation(); // To Stop Bubbling
});

// Take Input and Add New ToDo
$("input").keypress(function(e) {
    
    if (e.which === 13) {
        var newTodo = $(this).val();
        $(this).val("");

        // Create New li
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + newTodo + "</li>");
    }

});

// Toggle Input
$(".plus").on("click", function() {
    $("input[type='text']").fadeToggle();
});