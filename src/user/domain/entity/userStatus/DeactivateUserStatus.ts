import User from '../User';
import UserStatus from './UserStatus';
import BusinessError from '../../../../common/entity/BusinessError';

export default class DeactivateUserStatus implements UserStatus {
	name: string = 'DEACTIVATE';

	logout(user: User): void {
		throw new BusinessError(400, '이미 탈퇴한 회원입니다.');
	}
	withdraw(user: User): void {
		throw new BusinessError(400, '이미 탈퇴한 회원입니다.');
	}

	login(user: User): void {
		throw new BusinessError(400, '이미 탈퇴한 회원입니다.');
	}
}
