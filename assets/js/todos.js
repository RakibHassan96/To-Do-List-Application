// Crossing out completed to-do task
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Deleting to-do by pressing x
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	})
	event.stopPropagation();
});

// Adding to-do
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var newTodo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newTodo + "</li>");
	}
});

// Toggle "Add New To-Do"
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(100);
})