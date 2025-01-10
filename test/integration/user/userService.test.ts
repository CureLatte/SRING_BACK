import UserService from '../../../src/user/domain/service/UserService';
import { AppModule } from '../../../src/app.module';
import { Test } from '@nestjs/testing';

import TestKaKaoAPI from '../../TestKaKaoAPI';
import User from '../../../src/user/domain/entity/User';
import UserLoginLogRepository from '../../../src/user/domain/repository/UserLoginLogRepository';
import UserLoginLogEntity from '../../../src/user/infra/typeOrmEntity/UserLoginLog.entity';
import BaseTypeOrmRepository from '../../../src/common/entity/BaseTypeOrmRepository';

describe('회원 가입 통합 테스트', () => {
	let userService: UserService;
	let userLoginLogRepository: UserLoginLogRepository &
		BaseTypeOrmRepository<UserLoginLogEntity>;

	beforeAll(async () => {
		const module = await Test.createTestingModule({
			imports: [AppModule],
		})
			.overrideProvider('KaKaoAPI')
			.useClass(TestKaKaoAPI)

			.compile();

		userService = module.get<UserService>('UserService');
		userLoginLogRepository = module.get('UserLoginLogRepository');
	});

	beforeEach(() => {});

	describe('회원 가입', () => {
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

	describe('로그인', () => {
		test('로그인 로그 생성', async () => {
			// GIVEN
			const user = new User({
				id: 1,
			});

			// WHEN
			await userService.login(user);

			// THEN
			const test = await userLoginLogRepository.repository.find({
				where: {
					userId: user.id,
				},
			});

			console.log(test);
		});
	});
});
