import { Module } from '@nestjs/common';
import UserController from './interface/UserController';
import UserControllerImpl from './interface/UserControllerImpl';
import UserServiceImpl from './domain/service/UserServiceImpl';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './infra/user.entity';
import { APP_FILTER } from '@nestjs/core';
import UserTypeOrmRepository from './infra/UserTypeOrmRepository';
import UserFacade from './application/UserFacade';
import UserLoginLogTypeOrmRepository from './infra/UserLoginLogTypeOrmRepository';
@Module({
	imports: [TypeOrmModule.forFeature([UserEntity])],
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
	],
	exports: [TypeOrmModule],
})
export class UserModule {}
