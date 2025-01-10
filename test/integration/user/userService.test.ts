import UserServiceImpl from '../../../src/user/domain/service/UserServiceImpl';
import UserService from '../../../src/user/domain/service/UserService';
import UserTypeOrmRepository from '../../../src/user/infra/typeOrmRepository/UserTypeOrmRepository';

import { AppModule } from '../../../src/app.module';
import UserController from '../../../src/user/interface/UserController';
import { Test } from '@nestjs/testing';
import { UserModule } from '../../../src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import testConfig from '../../../config/testConfig';
import { config } from 'dotenv';
import { join } from 'path';
import KakaoAPI from '../../../src/user/domain/repository/KakaoAPI';
import TestKaKaoAPI from '../../TestKaKaoAPI';

describe('회원 가입 통합 테스트', () => {
	let userService: UserService;

	beforeAll(async () => {
		const KaKaoAPI: KakaoAPI = {
			getAccessToken: jest.fn(),
			getUserInfo: jest.fn(),
		};

		const module = await Test.createTestingModule({
			imports: [AppModule],
		})
			.overrideProvider('KaKaoAPI')
			.useClass(TestKaKaoAPI)

			.compile();

		userService = module.get<UserService>('UserService');
	});

	beforeEach(() => {});

	test('카카오톡 테스트', async () => {
		const test = await userService.signup({
			platform: 'KAKAO',
			payload: {
				code: '',
			},
		});

		console.log(test);
	});
});
