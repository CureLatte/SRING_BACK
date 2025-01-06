import UserService from './UserService';
import { Controller, Inject, Injectable } from '@nestjs/common';
import UserRepository from '../repository/UserRepository';
import User from '../entity/User';
import UserLoginLogRepository from '../repository/UserLoginLogRepository';
import { Repository } from 'typeorm';

@Injectable()
export default class UserServiceImpl implements UserService {
	userRepository: UserRepository;
	userLoginLogRepository: UserLoginLogRepository;

	constructor(
		@Inject('UserRepository') userRepository: UserRepository,
		@Inject('UserLoginLogRepository')
		userLoginLogRepository: UserLoginLogRepository,
	) {
		this.userRepository = userRepository;
		this.userLoginLogRepository = userLoginLogRepository;
	}

	async update(user: User): Promise<User> {
		await this.userRepository.save(user);
		throw new Error('Method not implemented.');
	}
	async withdraw(user: User): Promise<void> {
		user.withdraw();

		await this.userRepository.save(user);
	}

	async signup(userInfo: any): Promise<User> {
		const newUser = new User(userInfo);

		return await this.userRepository.save(newUser);
	}

	create(userInfo: any): User {
		const newUser = new User({
			id: 0,
			name: 'new ',
		});

		throw new Error('Method not implemented.');
	}
}
