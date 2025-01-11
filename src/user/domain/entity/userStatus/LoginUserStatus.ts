import User from '../User';
import UserStatus from './UserStatus';
import BusinessError from '../../../../common/entity/BusinessError';
import LogoutUserStatus from './LogoutUserStatus';
import DeactivateUserStatus from './DeactivateUserStatus';

export default class LoginUserStatus implements UserStatus {
	logout(user: User): void {
		user.status = new LogoutUserStatus();
	}
	withdraw(user: User): void {
		user.status = new DeactivateUserStatus();
	}
	name: string = 'LOG-IN';
	login(user: User): void {
		throw new BusinessError(400, '이미 로그인 되었습니다!');
	}
}
