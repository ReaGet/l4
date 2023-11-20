import Domain from "#app/models/domain.js";

try{
	const domain = await Domain.create({
		url: 'site.ru',
		title: 'Some site about sites'
	});
	console.log(domain);
}
catch(e){
	console.log(e);
}