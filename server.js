var express = require('express'),
	app		= express(),
	sugarCubed = require('sugar-cubed'); //just testing my npm project

app.use(express.static('./'))

app.listen(process.env.PORT || 3000, function(){
	console.log("express train")
})