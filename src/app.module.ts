import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { APP_FILTER } from '@nestjs/core';
import BusinessErrorFilter from './common/filter/BusinessErrorFilter';

@Module({
	imports: [UserModule],
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
