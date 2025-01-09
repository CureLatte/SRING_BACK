import UserService from './UserService';
import { Controller, Inject, Injectable, Logger } from '@nestjs/common';
import UserRepository from '../repository/UserRepository';
import User from '../entity/User';
import UserLoginLogRepository from '../repository/UserLoginLogRepository';
import { Repository } from 'typeorm';
import UserLoginInfoRepository from '../repository/UserLoginInfoRepository';
import LoginPlatformFactory from '../entity/loginPlatform/LoginPlatformFactory';
import { log } from 'testcontainers';
import UserLoginInfo from '../entity/UserLoginInfo';
import UserLoginLog from '../entity/UserLoginLog';

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

	async signup(userInfo: { platform: string; payload: any }): Promise<User> {
		// 유저 생성
		let newUser = await this.userRepository.create();

		// login platform 방식 얻기
		const loginPlatform = LoginPlatformFactory.getLoginPlatform(
			userInfo.platform,
		);

		// 유저 로그인 정보
		const userToken = await loginPlatform.getTokenInfo(userInfo);

		let userLoginInfo = new UserLoginInfo({
			userId: newUser.id,
			accessToken: userToken.accessToken,
			platform: loginPlatform.name,
		});

		// 기본 정보 얻기
		const userDefaultInfo = await loginPlatform.getUserInfo(userToken);

		// 프로필 업데이트
		newUser.profileUpdate(userDefaultInfo);

		newUser = await this.userRepository.save(newUser);
		userLoginInfo = await this.userLoginInfoRepository.save(userLoginInfo);

		return newUser;
	}

	async withdraw(user: User): Promise<void> {
		user.withdraw();

		await this.userRepository.save(user);
	}
}
