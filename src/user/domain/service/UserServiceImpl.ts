import UserService from './UserService';
import { Controller, Inject, Injectable } from '@nestjs/common';
import UserRepository from '../repository/UserRepository';
import User from '../entity/User';

@Injectable()
export default class UserServiceImpl implements UserService {
	userRepository: UserRepository;

	constructor(@Inject('UserRepository') userRepository: UserRepository) {
		this.userRepository = userRepository;
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
