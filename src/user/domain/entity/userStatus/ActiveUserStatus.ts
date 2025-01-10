import User from '../User';
import UserStatus from './UserStatus';
import UserLoginInfo from '../UserLoginInfo';
import LoginUserStatus from './LoginUserStatus';

export default class ActiveUserStatus implements UserStatus {
	name: string = 'Active';

	constructor() {}

	login(user: User): void {
		user.status = new LoginUserStatus();

		return;
	}
}
