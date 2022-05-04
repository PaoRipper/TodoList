//Check Off Specific Todo By Clicking
$('ul').on("click", "li" ,function(){
	$(this).toggleClass("completed");
})

//Click on X to Delete Todo
$('ul').on("click", "span", function(event){
	$(this).parent().fadeOut("slow",function(){
		$(this).remove();
	});
	event.stopPropagation();
})

$("input[type = 'text']").keypress(function(event){
	if(event.which === 13 && $(this).val() != ""){
		//grabbing new todo from input
		var todoText = $(this).val();
		$(this).val("");
		//add a new todo to ul 
		$("ul").append("<li><span><i class = 'fa fa-trash'></i></span> " + todoText + "</li>");
	}
})

$(".fa-plus").click(function(){
	$("input[type = 'text']").slideToggle();
})