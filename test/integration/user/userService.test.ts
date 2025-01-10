import UserService from '../../../src/user/domain/service/UserService';
import { AppModule } from '../../../src/app.module';
import { Test } from '@nestjs/testing';

import TestKaKaoAPI from '../../TestKaKaoAPI';

describe('회원 가입 통합 테스트', () => {
	let userService: UserService;

	beforeAll(async () => {
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
