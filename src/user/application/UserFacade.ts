import { Inject, Injectable } from '@nestjs/common';
import UserService from '../domain/service/UserService';

@Injectable()
export default class UserFacade {
	userService: UserService;

	constructor(@Inject('UserService') userService: UserService) {
		this.userService = userService;
	}
}
