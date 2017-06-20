
function submitPost () {
	var title = document.getElementById("new blog").value;
	var body = document.getElementById("message").value;
	var data = {"title":title,"body":body}
	console.log ("gfsdfdv")

    $.ajax({
    	type:"post",
    	url:'/newpost' ,
    	processData: false,
    	datatype:'json',
    	contentType:"application/json",
    	data:JSON.stringify(data),
    	success:function(res){
    		console.log("success");
    	}




    })
}