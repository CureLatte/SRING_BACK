import { Inject, Injectable } from '@nestjs/common';
import UserService from '../domain/service/UserService';
import User from '../domain/entity/User';

@Injectable()
export default class UserFacade {
	userService: UserService;

	constructor(@Inject('UserService') userService: UserService) {
		this.userService = userService;
	}

	async signup(userInfo: any): Promise<User> {
		return await this.userService.signup(userInfo);
	}

	async login(userId: number): Promise<User> {
		const user = await this.userService.get(userId);

		return await this.userService.login(user);
	}
}
