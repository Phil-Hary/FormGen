const db = require('./database/dbOperations');

const formDetails = () =>{
	
	return new Promise((resolve,reject)=>{
		db.getFormDetails()
			.then((data)=>{
				resolve(data);
			})
			.catch((data)=>{
				reject("No forms available");
			})
	});
}

const createForm = (formName,formDesc) => {
	
	console.log(formDesc);
	return new Promise((resolve,reject)=>{
		db.createNewForm(formName,formDesc)
			.then((data) => {
				resolve(data)
			})
			.catch((data)=>{
				reject("Insert Failed")
			})
	})
	
}

const getSpecificForm = (formName) =>{
	
	return new Promise((resolve,reject)=>{
		db.getSpecificForm(formName)
			.then((data)=>{
				resolve(data);
			})
			.catch((data)=>{
				reject("No forms available");
			})
	});
}

const updateForm = (formName, inputType, placeholder, question, option1, option2, option3, questionNo) => {
	
	return new Promise((resolve,reject)=>{
		db.updateForm(formName, inputType, placeholder, question, option1, option2, option3, questionNo)
			.then((data)=>{
				resolve(data);
			})
			.catch((data)=>{
				reject("Can't update");
			})
	});
}

const getFormName = () =>{
	
	let names=[];
	
	return new Promise((resolve,reject)=>{
		db.getFormName()
			.then((data)=>{
				data.map((name)=>{
					console.log(name._id);
					names.push(name._id);
				});
				
				resolve(names);
			})
			.catch((data)=>{
				reject("Can't retrieve");
			})
	});
}

exports.formDetails = formDetails;
exports.createForm = createForm;
exports.getSpecificForm = getSpecificForm;
exports.updateForm = updateForm;
exports.getFormName = getFormName;