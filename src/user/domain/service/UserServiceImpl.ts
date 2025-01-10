import UserService from './UserService';
import { Controller, Inject, Injectable, Logger } from '@nestjs/common';
import UserRepository from '../repository/UserRepository';
import User from '../entity/User';
import UserLoginLogRepository from '../repository/UserLoginLogRepository';
import { Repository } from 'typeorm';
import UserLoginInfoRepository from '../repository/UserLoginInfoRepository';
import { log } from 'testcontainers';
import UserLoginInfo from '../entity/UserLoginInfo';
import UserLoginLog from '../entity/UserLoginLog';
import { RepositoryError } from '../../../common/decorator/RepositoryError';
import LoginPlatformRepository from '../repository/LoginPlatformRepository';
import LoginStatus from '../entity/userLogStatus/LoginStatus';
import BaseTypeOrmRepository from '../../../common/entity/BaseTypeOrmRepository';
import { UserEntity } from '../../infra/typeOrmEntity/User.entity';
import BusinessError from '../../../common/entity/BusinessError';

@Injectable()
export default class UserServiceImpl implements UserService {
	logger = new Logger('UserService');
	constructor(
		@Inject('UserRepository') private userRepository: UserRepository,
		@Inject('UserLoginLogRepository')
		private userLoginLogRepository: UserLoginLogRepository,
		@Inject('UserLoginInfoRepository')
		private userLoginInfoRepository: UserLoginInfoRepository,
		@Inject('LoginPlatformRepository')
		private loginPlatformRepository: LoginPlatformRepository,
	) {}

	async get(userId: number): Promise<User> {
		const user = await this.userRepository.getById(userId);

		if (!user) {
			throw new BusinessError(400, '');
		}

		return user;
	}

	async login(user: User): Promise<User> {
		user.login();

		// login log update
		await this.userLoginLogRepository.save(
			new UserLoginLog({
				userId: user.id,
				status: new LoginStatus(),
			}),
		);

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
		const loginPlatform =
			await this.loginPlatformRepository.getLoginPlatform(
				userInfo.platform,
			);

		// 유저 로그인 정보
		const userToken = await loginPlatform.getTokenInfo(userInfo);

		let userLoginInfo = new UserLoginInfo({
			userId: newUser.id,
			accessToken: userToken.accessToken,
			platform: loginPlatform,
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
