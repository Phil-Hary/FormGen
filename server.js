const express = require('express');
const app = express();
const adminRouter = require('./router/adminRoute');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/admin/',adminRouter);

if(process.env.NODE_ENV === "production"){
	//Set static folder
	app.use(express.static('client/build'));
	
	app.get('*',(req,res)=>{
		res.sendFile(path.rsolve(__dirname,'client','build','index.html'));
	});
}

const port = process.env.PORT || 5000;

app.listen(port);

console.log("Server up");
