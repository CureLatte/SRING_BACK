import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { APP_FILTER } from '@nestjs/core';
import BusinessErrorFilter from './common/filter/BusinessErrorFilter';
// mysql
import { TypeOrmModule } from '@nestjs/typeorm';
import UserService from './user/domain/service/UserService';
import { DataSource } from 'typeorm';

@Module({
	imports: [
		UserModule,
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: process.env.MYSQL_DEV_HOST,
			port: Number(process.env.MYSQL_DEV_PORT),
			username: process.env.MYSQL_DEV_USERNAME,
			password: process.env.MYSQL_DEV_PASSWORD,
			database: process.env.MYSQL_DEV_DATABASE,
			entities: [],
			synchronize: true,
			autoLoadEntities: true,
		}),
	],
	controllers: [AppController],
	providers: [
		AppService,
		{
			provide: APP_FILTER,
			useClass: BusinessErrorFilter,
		},
	],
})
export class AppModule {
	constructor(private dataSource: DataSource) {}
}
