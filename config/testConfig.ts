export default () => ({
	database: {
		type: 'mysql',
		host: process.env.MYSQL_DEV_HOST,
		port: Number(process.env.MYSQL_DEV_PORT),
		username: process.env.MYSQL_DEV_USERNAME,
		password: process.env.MYSQL_DEV_PASSWORD,
		database: process.env.MYSQL_DEV_DATABASE,
		entities: [],
		synchronize: true,
		autoLoadEntities: true,
	},
});
