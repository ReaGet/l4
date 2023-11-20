import { Sequelize } from "sequelize";

const sequelize = new Sequelize("blog", 'root', "example", {
	host: "localhost",
	port: 3306,
	dialect: 'mariadb',
	dialectOptions: {
		
	},
	logging: (msg) => {
		// console.log('my', msg)
	}
});

try {
	await sequelize.authenticate();
	console.log('Connection has been established successfully.');
} catch (error) {
	console.error('Unable to connect to the database:', error);
}

export default sequelize;