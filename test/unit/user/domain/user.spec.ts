import User from '../../../../src/user/domain/entity/User';
import ActiveUserStatus from '../../../../src/user/domain/entity/userStatus/ActiveUserStatus';

describe('유저 도메인 테스트', () => {
	test('유저 생성 테스트', async () => {
		const userStatus = new ActiveUserStatus();

		userStatus.setStatus();
	});
});
