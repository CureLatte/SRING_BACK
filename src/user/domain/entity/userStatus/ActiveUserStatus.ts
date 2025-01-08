import User from '../User';
import UserStatus from './UserStatus';
import UserLoginInfo from '../UserLoginInfo';

export default class ActiveUserStatus implements UserStatus {
	name: string = 'Active';

	constructor() {}

	login(user: User): void {
		return;
	}
	setStatus(user: User): void {}
}
