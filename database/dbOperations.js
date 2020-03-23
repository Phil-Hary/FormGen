const config = require('./connection');
const db = config.db;

//Gets form Details from Db
const getFormDetails = () => {
	const db = config.db;
	const collection = db.collection('forms');
	
	return new Promise((resolve,reject)=>{
		collection.find({type:"form"}).toArray((err,data)=>{
			if(data.length>0){
				console.log(data);
				resolve(data);
			}
			else{
				reject(data);
			}
		});
	});
}


//Inserts new From data into Db
const createNewForm = (formName,formDesc) => {
	const db = config.db;
	const collection = db.collection('forms');
	console.log(formDesc);
	
	console.log(formName);
	
	return new Promise((resolve,reject)=>{
			collection.insertOne( 
			{ 
				formName: formName, 
				desc: formDesc,
				type:"form", 
				formData:[{
					questionNo:1,
					question:"Enter Name",
					inputType:"text",
					placeholder:"Enter Name"
				},
				{
					questionNo:2,
					question:"Enter emailId",
					inputType:"email",
					placeholder:"Enter Email",
					emailId:"Enter EmailId"
				}], 
				resCount:0, 
				responses:[] 
			})
			.then((data)=>{
				//console.log(data)
				resolve(data);
			})
			.catch((data)=>{
				reject(data);
			})
		});
}

//gets a particular form data
const getSpecificForm = (formName) => {
	const db = config.db;
	const collection = db.collection('forms');
	console.log(formName);
	
	return new Promise((resolve,reject)=>{
		collection.find({formName:formName})
		.toArray((err,data)=>{
			if(data.length>=1){
				console.log(data);
				resolve(data);
			}
			else{
				reject(data);
			}
		});
	});
}

//updates the form data
const updateForm = ((formName, inputType, placeholder, question, option1, option2, option3, questionNo) => {
	const db = config.db;
	const collection = db.collection('forms');
	console.log(formName);
	
	return new Promise((resolve,reject)=>{
		collection
			.updateOne(
				{ formName: formName },
			    {
				 $push: { formData: 
					 {
								"questionNo" : questionNo,
								"inputType" : inputType,
								"question" : question,
								"placeholder" : placeholder,
								"option1":option1,
								"option2":option2,
								"option3":option3
						}
				  }
			    })
			.then((data)=>{
				resolve(data);
			})
			.catch((data)=>{
				reject(data);
			})

	});
})

//gets form names
const getFormName = () => {
	const db = config.db;
	const collection = db.collection('forms');
	
	const names = [];
	
	console.log("Here");
	
	return new Promise((resolve,reject)=>{
		collection
			.aggregate([
                     { $match: { type: "form" } },
                     { $group: { _id: "$formName"} }
                   ]).toArray((err,data)=>{
			if(data.length>=1){
				console.log(data);
				resolve(data);
			}
			else{
				reject(data);
			}
		});
			
	});
}

exports.getFormDetails = getFormDetails;
exports.createNewForm = createNewForm;
exports.getSpecificForm = getSpecificForm;
exports.updateForm = updateForm;
exports.getFormName = getFormName;
