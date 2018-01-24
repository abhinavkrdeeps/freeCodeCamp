var express=require("express");
var app=express();
const PORT=8000;
const IP='127.0.0.1';
var request=require("request");    //;
app.set("view engine", "ejs");

var data;
app.get("/",function(req,res)
{
	console.log("The escape sequence \// inserts a backslash in a string.");

	res.render("show");

});


app.get("/news/:arr",function(req,res){
	console.log(req.body);

});


app.get("/tech",function(req,res){
	request("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=63293719f91c47d9bde648740565c1a9",function(err,response,body){
		if(!err && response.statusCode==200)
		{
			data=JSON.parse(body);
			res.render("main",{data:data});
		}
	});
})

app.get("/cricket",function(req,res){

	request("https://newsapi.org/v2/top-headlines?sources=espn-cric-info&apiKey=63293719f91c47d9bde648740565c1a9",
		function(err,response,body)
		{
			if(!err && response.statusCode==200)
			{
				data=JSON.parse(body);
				console.log(data);
				res.render("main",{data: data});
			}

		});

});




app.get("/buisness",function(req,res)
{

	 request("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=63293719f91c47d9bde648740565c1a9",
	function(error,response,body){
		if(!error && response.statusCode==200)
		{
			 data=JSON.parse(body);
			   res.render("main",{data: data});
			//console.log(data1);
		}
	});
	
	
	//res.render("main",{data:data});
});

app.get("/sport",function(req,res){

	request("https://newsapi.org/v2/top-headlines?sources=talksport&apiKey=63293719f91c47d9bde648740565c1a9",
		function(err,response,body)
		{
			if(!err && response.statusCode==200)
			{
				data=JSON.parse(body);
				console.log(data);
				res.render("main",{data: data});
			}

		});

});


app.get("/world",function(req,res)
{
	request("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=63293719f91c47d9bde648740565c1a9",
		function(err,response,body){
			if(!err && response.statusCode==200)
			{
				data=JSON.parse(body);
				res.render("main",{data,data});
			}

		});
	});


app.get("/entertainment",function(req,res){

	request("https://newsapi.org/v2/top-headlines?sources=entertainment-weekly&apiKey=63293719f91c47d9bde648740565c1a9",function(err,response,body){
		   if(!err && response.statusCode==200)
		   {
		   	  data=JSON.parse(body);
		   	  res.render("main",{data,data});
		   }

	});

});


app.listen(PORT,IP,function()
{
      console.log("Server Connected");
});



// 63293719f91c47d9bde648740565c1a9