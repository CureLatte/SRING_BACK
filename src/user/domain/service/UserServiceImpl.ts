import UserService from './UserService';
import { Controller, Inject, Injectable, Logger } from '@nestjs/common';
import UserRepository from '../repository/UserRepository';
import User from '../entity/User';
import UserLoginLogRepository from '../repository/UserLoginLogRepository';
import { Repository } from 'typeorm';
import UserLoginInfoRepository from '../repository/UserLoginInfoRepository';
import LoginPlatformFactory from '../entity/loginPlatform/LoginPlatformFactory';
import { log } from 'testcontainers';

@Injectable()
export default class UserServiceImpl implements UserService {
	userRepository: UserRepository;
	userLoginLogRepository: UserLoginLogRepository;
	userLoginInfoRepository: UserLoginInfoRepository;
	logger = new Logger('UserService');
	constructor(
		@Inject('UserRepository') userRepository: UserRepository,
		@Inject('UserLoginLogRepository')
		userLoginLogRepository: UserLoginLogRepository,
		@Inject('UserLoginInfoRepository')
		userLoginInfoRepository: UserLoginInfoRepository,
	) {
		this.userRepository = userRepository;
		this.userLoginLogRepository = userLoginLogRepository;
		this.userLoginInfoRepository = userLoginInfoRepository;
	}

	async login(user: User): Promise<User> {
		user.login();

		return await this.userRepository.save(user);
	}

	async update(user: User): Promise<User> {
		await this.userRepository.save(user);
		throw new Error('Method not implemented.');
	}

	async signup(userInfo: any): Promise<User> {
		// login platform
		const loginPlatform = LoginPlatformFactory.getLoginPlatform(
			userInfo.platform,
		);

		const userLoginInfo = await loginPlatform.getTokenInfo(userInfo);

		this.logger.log(`${JSON.stringify(userLoginInfo, null, ' ')}`);

		let newUser = await loginPlatform.getUserInfo(userLoginInfo);

		newUser = await this.userRepository.save(newUser);

		userLoginInfo.userId = newUser.id;

		await this.userLoginInfoRepository.save(userLoginInfo);

		newUser.login();

		await this.userRepository.save(newUser);

		return newUser;
	}

	async withdraw(user: User): Promise<void> {
		user.withdraw();

		await this.userRepository.save(user);
	}
}
