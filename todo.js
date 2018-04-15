
// This is toggling the line through and grayed out to-do
// be sure to set it to ul, becuase it already exists, then set to ul, which is what you want to create
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// this is removing the to-do when the X is hit
// be sure to set it to ul, because it already exists, then put span which is what you want to actually want to edit
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(function() {
		$(this).remove();
	});
	// stopPropagation prevents any other listeners from running!
	event.stopPropagation();
});

// this is adding to-do's when you input text and hit "enter"

$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		// grab the text that was input
		var todoText = ($(this).val());
		// get rid of the text so the input is ready to accept another
		$(this).val("");
		// create a new li and add to the ul
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});