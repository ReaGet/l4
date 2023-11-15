import Domain from "#app/models/domain.js";

try{
	const domain = await Domain.findByPk(1);
	console.log(domain);

	const res = await domain.update({ url: 'other.ru' });
	console.log(res);
}
catch(e){
	console.log(e);
}