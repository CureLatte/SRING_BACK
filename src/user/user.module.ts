import { Module } from '@nestjs/common';
import UserController from './interface/UserController';
import UserControllerImpl from './interface/UserControllerImpl';
import UserServiceImpl from './domain/service/UserServiceImpl';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './infra/typeOrmEntity/User.entity';
import { APP_FILTER } from '@nestjs/core';
import UserTypeOrmRepository from './infra/typeOrmRepository/UserTypeOrmRepository';
import UserFacade from './application/UserFacade';
import UserLoginLogTypeOrmRepository from './infra/typeOrmRepository/UserLoginLogTypeOrmRepository';
import UserLoginLogEntity from './infra/typeOrmEntity/UserLoginLog.entity';
import UserLoginInfoTypeOrmRepository from './infra/typeOrmRepository/UserLoginInfoTypeOrmRepository';
import UserLoginInfoEntity from './infra/typeOrmEntity/UserLoginInfo.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import KaKaoAPIImpl from './infra/api/KaKaoAPIImpl';
import LoginPlatformAPI from './infra/typeOrmRepository/LoginPlatformAPI';

@Module({
	imports: [
		TypeOrmModule.forFeature([
			UserEntity,
			UserLoginLogEntity,
			UserLoginInfoEntity,
		]),

		ServeStaticModule.forRoot({
			rootPath: join(__dirname, '../../', 'public'),
		}),
	],
	controllers: [UserControllerImpl],
	providers: [
		{
			provide: 'UserFacade',
			useClass: UserFacade,
		},
		{
			provide: 'UserService',
			useClass: UserServiceImpl,
		},
		{
			provide: 'UserRepository',
			useClass: UserTypeOrmRepository,
		},
		{
			provide: 'UserLoginLogRepository',
			useClass: UserLoginLogTypeOrmRepository,
		},
		{
			provide: 'UserLoginInfoRepository',
			useClass: UserLoginInfoTypeOrmRepository,
		},
		{
			provide: 'KaKaoAPI',
			useClass: KaKaoAPIImpl,
		},
		{
			provide: 'LoginPlatformRepository',
			useClass: LoginPlatformAPI,
		},
	],
	exports: [TypeOrmModule],
})
export class UserModule {}
