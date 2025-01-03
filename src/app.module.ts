import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { APP_FILTER } from '@nestjs/core';
import BusinessErrorFilter from './common/filter/BusinessErrorFilter';
// mysql
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [
		UserModule,
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'localhost',
			port: 3306,
			username: 'root',
			password: 'root',
			database: 'test',
			entities: [],
			synchronize: true,
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
export class AppModule {}
