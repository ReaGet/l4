import Domain from "#app/models/domain.js";

try{
	const domains = await Domain.findAll({
		/* where: {cls
			id: 1
		} */
		order: [
			[ 'createdAt', 'ASC' ]
		]
	});
	console.log(domains);
}
catch(e){
	console.log(e);
}