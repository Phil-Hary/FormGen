const express = require('express');
const router = express.Router();
const api = require('../middlewares');

//Router
router.get('/dashboard',(req,res)=>{
	api.formDetails()
		.then((data)=>{
			res.send(data);
		})
		.catch((data)=>{
			res.send(data);
		});
});

router.post('/createNewForm',(req,res)=>{

	api.createForm(req.body.formName, req.body.formDesc)
		.then((data)=>{
			res.send(data);
		})
		.catch((data)=>{
			res.send(data);
		});
});

router.post('/getSpecificForm',(req,res)=>{

	api.getSpecificForm(req.body.formName)
		.then((data)=>{
			console.log(data);
			res.send(data);
		})
		.catch((data)=>{
			res.send(data);
		});
});

router.post('/updateForm',(req,res)=>{
	console.log(req.body.inputType);
	const inputType=req.body.inputType;
	const placeholder=req.body.placeholder;
	const question=req.body.question;
	const option1=req.body.option1;
	const option2=req.body.option2;
	const option3=req.body.option3;
	const questionNo=req.body.questionNo;
	const formName=req.body.formName;
	api.updateForm(formName, inputType, placeholder, question, option1, option2, option3, questionNo)
		.then((data)=>{
			console.log(inputType);
			res.send(data);
		})
		.catch((data)=>{
			res.send(data);
		});
});

router.get('/getFormNames',(req,res)=>{
	api.getFormName()
		.then((data)=>{
			console.log(data);
			res.send(data);
		})
		.catch((data)=>{
			res.send(data);
		});
})



module.exports = router;