import { Module } from '@nestjs/common';
import UserController from './interface/UserController';
import UserControllerImpl from './interface/UserControllerImpl';
import UserServiceImpl from './domain/UserServiceImpl';
@Module({
	imports: [],
	controllers: [UserControllerImpl],
	providers: [
		{
			provide: 'UserService',
			useClass: UserServiceImpl,
		},
	],
})
export class UserModule {}
