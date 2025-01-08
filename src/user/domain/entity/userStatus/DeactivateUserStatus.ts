import User from '../User';
import UserStatus from './UserStatus';
import BusinessError from '../../../../common/entity/BusinessError';

export default class DeactivateUserStatus implements UserStatus {
	name: string = 'DEACTIVATE';

	login(user: User): void {
		throw new BusinessError(400, '탈퇴한 유저입니다.');
	}
}
