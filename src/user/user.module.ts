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
@Module({
	imports: [
		TypeOrmModule.forFeature([
			UserEntity,
			UserLoginLogEntity,
			UserLoginInfoEntity,
		]),
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
	],
	exports: [TypeOrmModule],
})
export class UserModule {}
