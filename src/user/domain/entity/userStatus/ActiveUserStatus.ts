import User from '../User';
import UserStatus from './UserStatus';
import UserLoginInfo from '../UserLoginInfo';
import LoginUserStatus from './LoginUserStatus';
import DeactivateUserStatus from './DeactivateUserStatus';
import LogoutUserStatus from './LogoutUserStatus';

export default class ActiveUserStatus implements UserStatus {
	name: string = 'ACTIVATE';

	constructor() {}

	logout(user: User): void {
		user.status = new LogoutUserStatus();
	}
	withdraw(user: User): void {
		user.status = new DeactivateUserStatus();
	}

	login(user: User): void {
		user.status = new LoginUserStatus();

		return;
	}
}
