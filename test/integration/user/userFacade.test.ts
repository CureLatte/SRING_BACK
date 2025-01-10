import { getUserModule } from './userModule.test';
import UserFacade from '../../../src/user/application/UserFacade';
import LoginUserStatus from '../../../src/user/domain/entity/userStatus/LoginUserStatus';
import BusinessError from '../../../src/common/entity/BusinessError';
import { BSON } from 'typeorm';

describe('UserFacade.test', () => {
	let userFacade: UserFacade;

	beforeAll(async () => {
		const module = await getUserModule();

		userFacade = module.get('UserFacade');
	});

	describe('로그인 테스트', () => {
		test('신규 회원 로그인', async () => {
			// GIVEN
			const user = await userFacade.signup({
				platform: 'KAKAO',
				payload: {
					code: 'test',
				},
			});

			// WHEN
			const loggedUser = await userFacade.login(user.id);
			console.log('loggedUser =====>', loggedUser);

			// THEN
			const loginStatus = new LoginUserStatus();
			expect(loginStatus.name).toBe(loggedUser.status.name);
		});

		test('이미 로그인 한 유저 로그인', async () => {
			// GIVEN
			const user = await userFacade.signup({
				platform: 'KAKAO',
				payload: {
					code: 'test',
				},
			});

			// WHEN
			await userFacade.login(user.id);

			// THEN
			await expect(async () => {
				await userFacade.login(user.id);
			}).rejects.toBeInstanceOf(BusinessError);
		});
	});
});
