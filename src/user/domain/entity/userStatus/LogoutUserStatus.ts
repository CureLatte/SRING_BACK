import User from '../User';
import UserStatus from './UserStatus';
import LoginUserStatus from './LoginUserStatus';
import BusinessError from '../../../../common/entity/BusinessError';
import DeactivateUserStatus from './DeactivateUserStatus';

export default class LogoutUserStatus implements UserStatus {
	name: string = 'LOG-OUT';
	login(user: User): void {
		user.status = new LoginUserStatus();
	}
	logout(user: User): void {
		throw new BusinessError(400, '이미 로그아웃 되었습니다.');
	}
	withdraw(user: User): void {
		user.status = new DeactivateUserStatus();
	}
}
