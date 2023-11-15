import Domain from "#app/models/domain.js";

try{
	const domain = await Domain.findByPk(1);
	console.log(domain);
}
catch(e){
	console.log(e);
}